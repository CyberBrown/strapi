// test-connection.js
require('dotenv').config(); // Load variables from .env file
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

console.log('--- Node.js PG Driver Test ---');
console.log('Attempting to connect to host:', process.env.DATABASE_HOST);

// Read the certificate file
const caCert = fs.readFileSync(path.join(process.cwd(), 'ssl', 'server-ca.pem')).toString();

const sslEnabled = /^true$/i.test(String(process.env.DATABASE_SSL || 'false'));

const client = new Client({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: sslEnabled
    ? {
        ca: caCert,
        rejectUnauthorized: true,
        // Optional servername to satisfy TLS SAN when connecting via IP
        servername: process.env.DATABASE_SSL_SERVERNAME || undefined,
      }
    : false,
});

client.connect()
  .then(() => {
    console.log('\n✅ SUCCESS: Connection to PostgreSQL via Node.js pg driver was successful!');
    return client.query('SELECT NOW();');
  })
  .then(res => {
    console.log('🕒 Server time is:', res.rows[0].now);
    return client.end();
  })
  .catch(err => {
    console.error('\n❌ ERROR: Connection failed. Details below:');
    console.error(err);
    process.exit(1);
  });

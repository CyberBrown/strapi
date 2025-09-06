// test-config-load.js

console.log('--- RUNNING CONFIG TEST ---');

try {
  // Test 1: Load dotenv
  console.log('Loading dotenv...');
  require('dotenv').config();
  console.log('✅ dotenv loaded.');

  // Test 2: Print environment variables
  console.log('\n--- Checking Environment Variables ---');
  console.log(`DATABASE_HOST:     `, process.env.DATABASE_HOST);
  console.log(`DATABASE_PORT:     `, process.env.DATABASE_PORT);
  console.log(`DATABASE_USER:     `, process.env.DATABASE_USERNAME);
  console.log(`DATABASE_NAME:     `, process.env.DATABASE_NAME);
  console.log(`DATABASE_SSL:      `, process.env.DATABASE_SSL);
  
  if (!process.env.DATABASE_HOST) {
    console.error('\n❌ ERROR: DATABASE_HOST is undefined. Check your .env file.');
    process.exit(1);
  }
  console.log('✅ Environment variables seem present.');

  // Test 3: Check certificate file path
  console.log('\n--- Checking Certificate File ---');
  const fs = require('fs');
  const path = require('path');
  
  const certPath = path.join(process.cwd(), 'ssl', 'server-ca.pem');
  console.log(`Looking for cert at: ${certPath}`);
  
  if (fs.existsSync(certPath)) {
    console.log('✅ SUCCESS: Certificate file was found.');
  } else {
    console.error(`\n❌ ERROR: Certificate file NOT FOUND at that path.`);
    process.exit(1);
  }

  console.log('\n--- CONFIG TEST COMPLETE ---');

} catch (e) {
  console.error('\n--- SCRIPT FAILED WITH AN ERROR ---');
  console.error(e);
}
// path: ./config/database.ts
console.log("!!! LOADING POSTG-RESQL CONFIG FILE - If you see this, the file is being read. !!!");

import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false) ? {
        ca: env('DATABASE_CA'),
        key: env('DATABASE_KEY'),
        cert: env('DATABASE_CERT'),
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        servername: env('DATABASE_SSL_SERVERNAME', ''),
      } : false,
    },
    debug: false,
  },
});

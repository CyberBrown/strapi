// ./config/middlewares.ts
export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:', 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            // Add your R2 URLs here
            'https://52b1c60ff2a24fb21c1ef9a429e63261.r2.cloudflarestorage.com'
            // Example: 'pub-your-id.r2.dev'
            ,
            // Example: 'pub-your-id.r2.dev'
            'https://media.solampio.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            // Add your R2 URLs here
            'https://52b1c60ff2a24fb21c1ef9a429e63261.r2.cloudflarestorage.com'
            // Example: 'pub-your-id.r2.dev'
            ,
            // Example: 'pub-your-id.r2.dev'
            'https://media.solampio.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

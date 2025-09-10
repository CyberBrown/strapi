// ./config/plugins.ts

export default ({ env }) => ({
graphql: {
enabled: true,
      config: {
      //  optional settings
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
}},

  upload: {
    config: {
      provider: 'strapi-provider-cloudflare-r2',
      providerOptions: {
        accessKeyId: env('CF_ACCESS_KEY_ID'),
        secretAccessKey: env('CF_ACCESS_SECRET'),
        endpoint: env('CF_ENDPOINT'), // e.g. https://<ACCOUNT_ID>.r2.cloudflarestorage.com
        params: {
          Bucket: env('CF_BUCKET'),
        },
        cloudflarePublicAccessUrl: env('CF_PUBLIC_ACCESS_URL'), // e.g. https://pub-<YOUR_PUBLIC_BUCKET_ID>.r2.dev
      },
    },
  },
});
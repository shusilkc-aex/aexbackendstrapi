export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        account: env('BLOB_ACCOUNT_NAME'),
        accountKey: env('BLOB_ACCOUNT_KEY'),
        container: env('BLOB_CONTAINER_NAME'),
        endpoint: env('BLOB_STORAGE_URL'),
      },
    },
  },
});
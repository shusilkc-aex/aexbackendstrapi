export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        account: env('AZURE_STORAGE_ACCOUNT'),
        accountKey: env('AZURE_STORAGE_ACCOUNT_KEY'),
        container: env('AZURE_STORAGE_CONTAINER'),
        endpoint: env('AZURE_STORAGE_ENDPOINT'),
      },
    },
  },
});
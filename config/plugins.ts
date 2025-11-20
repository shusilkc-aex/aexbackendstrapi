module.exports = ({ env }) => ({
  upload: {
    config: {
      sizeLimit: 500 * 1024 * 1024, // 500 MB
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        account: env('STORAGE_ACCOUNT_NAME'),              
        accountKey: env('STORAGE_ACCOUNT_KEY'), 
        containerName: env('BLOB_CONTAINER_NAME'),
      },
    },
  },
});
module.exports = ({ env }) => ({
  upload: {
    config: {
      sizeLimit: 524288000, // 500 MB
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        account: env('STORAGE_ACCOUNT_NAME'),              
        containerName: env('BLOB_CONTAINER_NAME'),
        authType: env('STORAGE_AUTH_TYPE'),
        defaultPath: 'uploads',
      },
    },
  },
});
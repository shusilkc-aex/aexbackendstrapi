module.exports = ({ env }) => ({
  upload: {
    config: {
      sizeLimit: env.int('UPLOAD_SIZE_LIMIT', 500 * 1024 * 1024), // 500 MB default
      provider: env('UPLOAD_PROVIDER', 'strapi-provider-upload-azure-storage'),
      providerOptions: {
        account: env('STORAGE_ACCOUNT_NAME'),              
        accountKey: env('STORAGE_ACCOUNT_KEY'), 
        containerName: env('BLOB_CONTAINER_NAME'),
        authType: env('STORAGE_AUTH_TYPE', 'msi'),
        defaultPath: 'uploads',
      },
    },
  },
});
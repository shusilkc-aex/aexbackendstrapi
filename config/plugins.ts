module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        account: env("BLOB_ACCOUNT_NAME"),              
        accountKey: env("BLOB_ACCOUNT_KEY"), 
        containerName: env("BLOB_CONTAINER_NAME")
      },
    },
  },
});

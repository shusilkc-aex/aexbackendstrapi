export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '500mb',       // increase JSON limit
      formLimit: '500mb',       // increase form data limit
      textLimit: '500mb',       // increase text limit
      formidable: {
        maxFileSize: 500 * 1024 * 1024, // 500 MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

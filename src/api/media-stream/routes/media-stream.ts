export default {
  routes: [
    {
      method: "GET",
      path: "/media-stream",
      handler: "media-stream.stream",
      config: {
        auth: false,   // Allow public access
      },
    },
  ],
};

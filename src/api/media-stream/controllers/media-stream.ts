import axios from "axios";

export default {
  async stream(ctx) {
    try {
      const id = ctx.query.id;

      if (!id) {
        return ctx.badRequest({
          message: "Please provide a file ID: /api/media-stream?id=FILE_ID",
        });
      }

      // Fetch file info from Strapi Upload plugin
      const file = await strapi.plugins["upload"].services.upload.findOne({ id });

      if (!file) {
        return ctx.notFound(`File not found`);
      }

      if (!file.url) {
        return ctx.internalServerError("This file has no URL");
      }

      // file.url is ALWAYS Blob storage URL in Azure Managed Strapi:
      // https://<account>.blob.core.windows.net/container/filename.mp4

      const response = await axios({
        url: file.url,
        method: "GET",
        responseType: "stream",
      });

      ctx.set("Content-Type", file.mime || "application/octet-stream");
      ctx.set("Content-Length", response.headers["content-length"] || "");
      ctx.set("Accept-Ranges", "bytes");

      ctx.body = response.data;

    } catch (error) {
      console.error("Stream error:", error);
      return ctx.internalServerError("Error streaming video");
    }
  },
};

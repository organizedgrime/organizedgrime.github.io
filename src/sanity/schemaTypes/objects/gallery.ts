import { defineType } from "sanity";

export default defineType({
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: "images",
      type: "array",
      of: [{ type: "captionedImage" }, { type: "bunnyVideo" }],
      options: {
        layout: "grid",
      },
    },
  ],
});

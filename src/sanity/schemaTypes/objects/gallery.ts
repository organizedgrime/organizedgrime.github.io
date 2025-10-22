import { defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "array",
  of: [{ type: "captionedImage" }, { type: "bunnyVideo" }],
  options: {
    layout: "grid",
  },
});

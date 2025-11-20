import { defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "array",
  of: [{ type: "captionedImage" }, { type: "bunnyVideo" }],
  options: {
    layout: "grid",
  },
  validation: (Rule) =>
    Rule.custom((items) => {
      if (!items) return true;

      const previewItems = items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          "preview" in item &&
          item.preview === true,
      );

      if (previewItems.length > 1) {
        return "Only one item can be marked as preview";
      }

      return true;
    }),
});

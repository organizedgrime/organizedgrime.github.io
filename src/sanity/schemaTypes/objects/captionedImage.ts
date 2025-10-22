import { defineField, defineType } from "sanity";

export default defineType({
  title: "Captioned Image",
  name: "captionedImage",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
});

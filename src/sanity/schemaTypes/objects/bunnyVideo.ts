import { defineField, defineType } from "sanity";
import { BunnyVideoInput } from "@/sanity/components/bunnyVideo";

const cdnHostname = import.meta.env.PUBLIC_BUNNY_CDN_HOSTNAME;

export default defineType({
  title: "Bunny Video",
  name: "bunnyVideo",
  type: "object",
  components: {
    input: BunnyVideoInput,
  },
  fields: [
    defineField({
      name: "videoId",
      title: "Identifier",
      type: "string",
      validation: (rule) => rule.required(),
    }),
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
    defineField({
      name: "thumbnailFileName",
      title: "Thumbnail File Name",
      type: "string",
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
    }),
    defineField({
      name: "captions",
      title: "Captions",
      type: "array",
      of: [
        {
          type: "object",
          name: "caption",
          title: "Caption",
          fields: [
            { name: "srclang", type: "string", title: "Language" },
            { name: "label", type: "string", title: "Label" },
            { name: "version", type: "number", title: "Version" },
          ],
        },
      ],
    }),
    defineField({
      name: "width",
      title: "Width",
      type: "number",
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "number",
    }),
  ],
  preview: {
    select: {
      videoId: "videoId",
      title: "title",
      description: "description",
      thumbnailFileName: "thumbnailFileName",
    },
    prepare({ videoId, title, description, thumbnailFileName }) {
      return {
        title,
        description,
        imageUrl:
          videoId && thumbnailFileName
            ? `https://${cdnHostname}/${videoId}/${thumbnailFileName}`
            : undefined,
      };
    },
  },
});

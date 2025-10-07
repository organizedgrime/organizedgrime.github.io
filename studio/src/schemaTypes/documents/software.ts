import { defineType } from "sanity";
import { common } from "../fields";

export default defineType({
  name: "software",
  title: "Software",
  type: "document",
  fields: [
    common.title,
    common.slug,
    // common.gallery,
    common.body,
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

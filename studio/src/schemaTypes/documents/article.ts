import { defineType } from "sanity";
import { common } from "../fields";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    common.title,
    common.slug,
    common.category,
    common.buttons,
    common.icon,
    common.date,
    common.photo,
    common.gallery,
    common.body,
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

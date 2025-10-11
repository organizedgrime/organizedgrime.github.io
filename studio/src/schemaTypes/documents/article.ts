import { defineType } from "sanity";
import { common } from "../fields";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [common.title, common.slug, common.gallery, common.body],
  preview: {
    select: {
      title: "title",
    },
  },
});

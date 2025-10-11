import { defineType } from "sanity";
import { common } from "../fields";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [common.title, common.slug],
  preview: {
    select: {
      title: "title",
    },
  },
});

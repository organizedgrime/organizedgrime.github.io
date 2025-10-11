import { defineType } from "sanity";
import { common } from "../fields";

export default defineType({
  name: "origami",
  title: "Origami",
  type: "document",
  fields: [common.title, common.slug, common.gallery, common.body],
  preview: {
    select: {
      title: "title",
    },
  },
});

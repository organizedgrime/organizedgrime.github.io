import { defineType } from "sanity";
import { common } from "../fields";

/**
 * Post schema.  Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: "poem",
  title: "Poem",
  type: "document",
  fields: [common.title, common.date, common.slug, common.photo, common.body],
  preview: {
    select: {
      title: "title",
      media: "photo",
    },
  },
});

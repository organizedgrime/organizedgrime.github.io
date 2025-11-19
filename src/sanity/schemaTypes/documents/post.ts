import { defineType } from "sanity";
import { common } from "../fields";

/**
 * Post schema.  Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

// everything should be a post
export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    common.title,
    common.slug,
    common.tags,
    common.content,
    common.buttons,
    common.icon,
    common.date,
    // deprecated
    common.gallery,
    common.body,
    common.category,
  ],
  preview: {
    select: {
      title: "title",
      // media: "photo",
    },
  },
});

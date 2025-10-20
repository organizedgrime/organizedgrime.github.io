import { defineField, defineType } from "sanity";
// import { preview } from "sanity-plugin-icon-picker";
import { Common, mapDefinition } from "../fields";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    Common.title,
    Common.slug,
    Common.icon,
    defineField({
      title: "Is this art?",
      name: "art",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
  ].map(mapDefinition),
  /* preview: {
    select: {
      title: "title",
      name: "icon.name",
      provider: "icon.provider",
    },
    prepare(icon) {
      return {
        title: icon.title,
        subtitle: icon.name,
        media: preview({ ...icon }),
      };
    },
  }, */
});

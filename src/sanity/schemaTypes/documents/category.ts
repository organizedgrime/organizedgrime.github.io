import { defineField, defineType } from "sanity";
import { mediaPreview } from "sanity-plugin-icon-manager";
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
  preview: {
    select: {
      title: "title",
      icon: "icon",
    },
    prepare({ icon, title }) {
      return {
        title: title,
        subtitle: icon.name,
        media: mediaPreview(icon),
      };
    },
  },
});

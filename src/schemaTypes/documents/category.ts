import { defineType } from "sanity";
import { preview } from "sanity-plugin-icon-picker";
import { common } from "../fields";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    common.title,
    common.slug,
    common.icon,
    {
      title: "Is this art?",
      name: "art",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
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
  },
});

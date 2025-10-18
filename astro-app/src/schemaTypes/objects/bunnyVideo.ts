import { defineField, defineType } from "sanity";

export default defineType({
  title: "Bunny Video",
  name: "bunnyVideo",
  type: "object",
  fields: [
    defineField({
      name: "id",
      title: "Identifier",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "vertical",
      title: "Vertical?",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
  ],
});

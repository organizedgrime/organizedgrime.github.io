import { defineField, defineType } from "sanity";
// import { preview } from "sanity-plugin-icon-picker";

export default defineType({
  title: "Icon Button",
  name: "iconButton",
  type: "object",
  fields: [
    // defineField({
    //   title: "Icon",
    //   name: "icon",
    //   type: "iconPicker",
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Label",
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  // preview: {
  //   select: {
  //     title: "label",
  //     name: "icon.name",
  //     provider: "icon.provider",
  //   },
  //   prepare(icon) {
  //     return {
  //       title: icon.title,
  //       subtitle: icon.name,
  //       media: preview({ ...icon }),
  //     };
  //   },
  // },
});

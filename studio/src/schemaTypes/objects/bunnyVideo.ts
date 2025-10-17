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
    }),
  ],
});

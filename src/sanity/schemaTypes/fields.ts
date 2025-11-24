import { defineField, type FieldDefinition } from "sanity";

export enum Common {
  title = "title",
  date = "date",
  slug = "slug",
  photo = "photo",
  gallery = "gallery",
  icon = "icon",
  links = "links",
  nsfw = "nsfw",
  body = "body",
  preview = "preview",
  tags = "tags",
}

export const common: Record<Common, FieldDefinition> = {
  title: defineField({
    name: "title",
    title: "Title",
    type: "string",
  }),
  date: defineField({
    name: "date",
    title: "Date",
    type: "date",
    validation: (rule) => rule.required(),
  }),
  slug: defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    validation: (rule) => rule.required(),
    options: {
      source: "title",
      maxLength: 96,
    },
  }),
  nsfw: defineField({
    name: "nsfw",
    title: "NSFW",
    type: "boolean",
    options: { layout: "checkbox" },
    validation: (rule) => rule.required(),
  }),
  photo: defineField({
    name: "photo",
    title: "Photo",
    type: "captionedImage",
  }),
  gallery: defineField({
    name: "gallery",
    title: "Gallery",
    type: "gallery",
  }),
  icon: defineField({
    type: "icon.manager",
    name: "icon",
    title: "Icon",
  }),
  links: defineField({
    name: "links",
    title: "Links",
    type: "array",
    of: [{ type: "url" }],
  }),
  body: defineField({
    name: "body",
    title: "Body",
    type: "markdown",
  }),
  preview: defineField({
    name: "preview",
    title: "Preview",
    type: "reference",
    validation: (rule) => rule.required(),
    to: [{ type: "captionedImage" }],
  }),
  tags: defineField({
    name: "tags",
    title: "Tags",
    type: "array",
    of: [
      {
        type: "reference",
        to: [{ type: "category" }],
      },
    ],
    validation: (rule) => rule.required(),
  }),
};

export function mapDefinition(
  value: Common | FieldDefinition,
): FieldDefinition {
  return typeof value === "string" ? common[value] : value;
}

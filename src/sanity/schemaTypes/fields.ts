import { defineField, type FieldDefinition } from "sanity";

export enum Common {
  title = "title",
  date = "date",
  published = "published",
  slug = "slug",
  photo = "photo",
  gallery = "gallery",
  icon = "icon",
  buttons = "buttons",
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
  published: defineField({
    name: "published",
    title: "Published",
    type: "boolean",
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
  buttons: defineField({
    name: "buttons",
    title: "Buttons",
    type: "array",
    of: [{ type: "iconButton" }],
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

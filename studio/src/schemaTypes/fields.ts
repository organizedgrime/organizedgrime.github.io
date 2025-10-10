import { defineField, type FieldDefinition } from "sanity";

export const common: Record<string, FieldDefinition> = {
	title: defineField({
		name: "title",
		title: "Title",
		type: "string",
	}),
	date: defineField({
		name: "date",
		title: "Date",
		type: "date",
	}),
	slug: defineField({
		name: "slug",
		title: "Slug",
		type: "slug",
		validation: (Rule) => Rule.required(),
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
		type: "array",
		of: [{ type: "captionedImage" }],
	}),
	body: defineField({
		name: "body",
		title: "Body",
		type: "markdown",
	}),
};

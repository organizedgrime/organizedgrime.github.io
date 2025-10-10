import { defineField, defineType } from "sanity";

export default defineType({
	title: "Captioned Image",
	name: "captionedImage",
	type: "image",
	options: {
		hotspot: true,
	},
	fields: [
		defineField({
			name: "alt",
			title: "Alternative text",
			type: "string",
		}),
	],
});

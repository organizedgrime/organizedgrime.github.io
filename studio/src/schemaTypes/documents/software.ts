import { defineType } from "sanity";
import { common } from "../fields";

export default defineType({
	name: "software",
	title: "Software",
	type: "document",
	fields: [
		common.title,
		common.slug,
		{
			title: "Demo URL",
			name: "demoUrl",
			type: "url",
		},
		{
			title: "Repo URL",
			name: "repoUrl",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					scheme: [".git"],
				}),
		},
		common.photo,
		common.gallery,
		common.body,
	],
	preview: {
		select: {
			title: "title",
		},
	},
});

import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
	NAME: "vera.lgbt",
	EMAIL: "me@vera.lgbt",
	NUM_POSTS_ON_HOMEPAGE: 3,
	NUM_WORKS_ON_HOMEPAGE: 2,
	NUM_CREATIONS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
	TITLE: "Veraverse",
	DESCRIPTION: "I'm Vera; this website showcases me and my work.",
};

export const WORK: Metadata = {
	TITLE: "Work",
	DESCRIPTION: "Where I have worked and what I have done.",
};

export const CREATIONS: Metadata = {
	TITLE: "Creations",
	DESCRIPTION: "A collection of my creations, with links to repositories and demos.",
};

export const SOFTWARE: Metadata = {
	TITLE: "Software",
	DESCRIPTION: "Dirty talking with silicon.",
};

export const LINGUISTICS: Metadata = {
	TITLE: "Linguistics",
	DESCRIPTION: "Collection of language study.",
};

export const MATHS: Metadata = {
	TITLE: "Math & Science",
	DESCRIPTION: "Sometimes I think really hard.",
}

export const POEMS: Metadata = {
	TITLE: "Poem",
	DESCRIPTION: "At some point I started writing poetry.<br/> I even like some of it.",
};


export const SOCIALS: Socials = [
	{
		NAME: "github",
		HREF: "https://github.com/organizedgrime"
	},
	{
		NAME: "linkedin",
		HREF: "https://www.linkedin.com/in/vera-gonzalez",
	}
];

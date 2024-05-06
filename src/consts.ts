import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
    NAME: "vera.lgbt",
    EMAIL: "me@vera.lgbt",
    NUM_POSTS_ON_HOMEPAGE: 3,
    NUM_WORKS_ON_HOMEPAGE: 2,
    NUM_CREATIONS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
    TITLE: "Home",
    DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
    TITLE: "Blog",
    DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
    TITLE: "Work",
    DESCRIPTION: "Where I have worked and what I have done.",
};

export const CREATIONS: Metadata = {
    TITLE: "Creations",
    DESCRIPTION: "A collection of my creations, with links to repositories and demos.",
};

export const LINGUISTICS: Metadata = {
    TITLE: "Linguistics",
    DESCRIPTION: "Collection of language study.",
};

export const MATHS: Metadata = {
    TITLE: "Math",
    DESCRIPTION: "A collection of my poems, with links to repositories and demos.",
};


export const POEMS: Metadata = {
    TITLE: "Poem",
    DESCRIPTION: "A collection of my poems, with links to repositories and demos.",
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

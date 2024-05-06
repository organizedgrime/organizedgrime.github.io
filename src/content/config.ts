import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional()
    }),
});

const work = defineCollection({
    type: "content",
    schema: z.object({
        company: z.string(),
        role: z.string(),
        dateStart: z.coerce.date(),
        dateEnd: z.union([z.coerce.date(), z.string()]),
    }),
});

const creations = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional(),
        demoURL: z.string().optional(),
        repoURL: z.string().optional()
    }),
});

const linguistics = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional(),
    }),
});


const poems = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional(),
    }),
});

export const collections = { blog, work, creations, poems, linguistics };

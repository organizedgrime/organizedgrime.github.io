// sanity.config.ts
import { defineConfig, defineType } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
  plugins: [structureTool()],
  schema: {
    types: [
      defineType({
        name: "poem",
        title: "Poem",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "date",
            title: "Date",
            type: "date",
          },
          {
            name: "photo",
            title: "Photo",
            type: "image",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
        ],
      }),
    ],
  },
});

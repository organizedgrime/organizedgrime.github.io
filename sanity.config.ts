import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { IconManager } from "sanity-plugin-icon-manager";
import { markdownSchema } from "sanity-plugin-markdown";
import { resolve } from "./src/sanity/resolve";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "recursivepaws",
  title: "Vera Gonzalez",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool(),
    visionTool(),
    markdownSchema(),
    IconManager({
      inlineSvg: true,
    }),
    presentationTool({
      resolve,
      previewUrl: location.origin,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});

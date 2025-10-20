import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
// import { iconPicker } from "sanity-plugin-icon-picker";
import { markdownSchema } from "sanity-plugin-markdown";
import { resolve } from "./src/resolve";
import { schemaTypes } from "./src/schemaTypes";

export default defineConfig({
  name: "recursivepaws",
  title: "Vera Gonzalez",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool(),
    visionTool(),
    markdownSchema(),
    // iconPicker(),
    presentationTool({
      resolve,
      previewUrl: location.origin,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});

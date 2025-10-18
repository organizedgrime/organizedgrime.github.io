import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { iconPicker } from "sanity-plugin-icon-picker";
import { markdownSchema } from "sanity-plugin-markdown";
import { schemaTypes } from "./src/schemaTypes";

// Environment variables for project configuration
const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET;

export default defineConfig({
  name: "recursivepaws",
  title: "Vera Gonzalez",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool(), markdownSchema(), iconPicker()],
  schema: {
    types: schemaTypes,
  },
});

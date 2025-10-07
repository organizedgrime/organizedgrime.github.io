import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/schemaTypes";

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "vhh501ab";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "recursivepaws",
  title: "Vera Gonzalez",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

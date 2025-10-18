// Loading environment variables from .env files
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { loadEnv } from "vite";

const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");

import { defineConfig } from "astro/config";

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn: false,
      apiVersion: "2025-10-05", // Set to date of setup to use the latest API version
      studioBasePath: "/admin",
    }),
    react(), // Required for Sanity Studio
  ],
  adapter: vercel({
    runtime: "nodejs20.x",
  }),
});

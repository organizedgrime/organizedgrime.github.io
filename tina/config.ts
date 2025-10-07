import { defineConfig, type TinaField } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const COMMON_FIELDS: Record<string, TinaField> = {
  title: {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  date: {
    type: "datetime",
    name: "date",
    label: "Date",
    required: true,
  },
  body: {
    type: "rich-text",
    name: "body",
    label: "Body",
    isBody: true,
  },
  gallery: {
    label: "Gallery",
    name: "gallery",
    type: "object",
    list: true,
    fields: [
      {
        label: "Alt",
        name: "alt",
        type: "string",
      },
      {
        label: "Image",
        name: "image",
        type: "image",
      },
    ],
  },
};

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "poem",
        label: "Poems",
        path: "src/content/poems",
        fields: [
          COMMON_FIELDS.title,
          COMMON_FIELDS.date,
          COMMON_FIELDS.body,
          {
            type: "image",
            name: "photo",
            label: "Photo",
            required: false,
          },
        ],
      },
      {
        name: "software",
        label: "Software",
        path: "src/content/software",
        fields: [
          COMMON_FIELDS.title,
          COMMON_FIELDS.date,
          COMMON_FIELDS.body,
          COMMON_FIELDS.gallery,
          {
            type: "string",
            name: "repoURL",
            label: "Repo URL",
          },
          {
            type: "string",
            name: "demoURL",
            label: "Demo URL",
          },
        ],
      },
      {
        name: "work",
        label: "Work",
        path: "src/content/work",
        fields: [
          {
            type: "string",
            name: "company",
            label: "Company",
          },
          {
            type: "string",
            name: "role",
            label: "Role",
          },
          {
            type: "datetime",
            name: "dateStart",
            label: "Start Date",
          },
          {
            type: "datetime",
            name: "dateEnd",
            label: "End Date",
          },
          COMMON_FIELDS.body,
        ],
      },
    ],
  },
});

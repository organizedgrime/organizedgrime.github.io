import { at, defineMigration, setIfMissing } from "sanity/migrate";

export default defineMigration({
  title: "Default `nsfw` to `false`",
  documentTypes: ["post"],
  filter: "!defined(nsfw)",
  migrate: {
    async document() {
      return at("nsfw", setIfMissing(false));
    },
  },
});

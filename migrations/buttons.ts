import { at, defineMigration, setIfMissing, unset } from "sanity/migrate";
export default defineMigration({
  title: "Remove `buttons` in favor of `links`",
  documentTypes: ["post"],
  filter: "defined(buttons) || !defined(links)",
  migrate: {
    document() {
      return [at("links", setIfMissing([])), at("buttons", unset())];
    },
  },
});

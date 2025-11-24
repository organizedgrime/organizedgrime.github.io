import { at, defineMigration, set } from "sanity/migrate";
export default defineMigration({
  title: "Default `preview` to `false` for all gallery items",
  documentTypes: ["post"],
  filter:
    "defined(gallery) && count(gallery[]._ref) != count(gallery[].preview != undefined)",
  migrate: {
    document(post) {
      const gallery = Array.isArray(post.gallery) ? post.gallery : [];
      const newGallery = gallery.map((item) => ({ preview: false, ...item }));
      return at("gallery", set(newGallery));
    },
  },
});

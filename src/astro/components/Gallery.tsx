import type { Gallery as SanityGallery } from "../utils/sanity";
import { GalleryItem } from "./GalleryItem";

export function Gallery({ gallery }: { gallery: SanityGallery }) {
  return (
    <section className="flex flex-col gap-6">
      {gallery.map((item, index) => (
        <GalleryItem key={String(index)} item={item} />
      ))}
    </section>
  );
}

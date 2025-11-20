import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { urlFor } from "../utils/image";
import type { Photo as SanityPhoto } from "../utils/sanity";

export function Photo({ photo }: { photo: SanityPhoto }) {
  return (
    <ImageZoom>
      <img src={urlFor(photo).url()} alt={photo.description || ""} />
    </ImageZoom>
  );
}

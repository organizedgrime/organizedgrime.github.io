import type {
  Photo as SanityPhoto,
  Video as SanityVideo,
} from "../utils/sanity";
import { Photo } from "./Photo.tsx";
import { Video } from "./Video";

export function GalleryItem({ item }: { item: SanityPhoto | SanityVideo }) {
  const videoMode = item._type === "bunnyVideo";
  const photoMode = item._type === "captionedImage";
  return (
    <div>
      {videoMode && <Video video={item} />}
      {photoMode && <Photo photo={item} />}
    </div>
  );
}

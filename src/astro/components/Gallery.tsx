import type { Gallery as SanityGallery } from "../utils/sanity";
import { GalleryItem } from "./GalleryItem";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function Gallery({ gallery }: { gallery: SanityGallery }) {
  return (
    <Carousel className="w-full max-w-m">
      <CarouselContent>
        {gallery.map((item, index) => (
          <CarouselItem key={String(index)}>
            <div className="p-1">
              <Card style={{ position: "relative" }} className="w-full">
                <CardContent>
                  <GalleryItem key={String(index)} item={item} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

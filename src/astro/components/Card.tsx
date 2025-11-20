import { useEffect, useState } from "react";
import { formatDate } from "../utils";
import { type Category, getReference, type Post } from "../utils/sanity";
import { GalleryItem } from "./GalleryItem";
import { Icon } from "./Icon";
import { Badge } from "./ui/badge";
import {
  CardAction,
  Card as CardComponent,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function Card({ post }: { post: Post }) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function getCategories() {
      const categories = await Promise.all(
        post.tags.map((tag) =>
          getReference<Category>({
            type: "category",
            ref: tag._ref,
          }),
        ),
      );
      setCategories(categories);
    }

    if (!categories.length) {
      getCategories();
    }
  }, [post.tags, categories.length]);

  return (
    <CardComponent className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          <a href={`post/${post.slug.current}`}>{post.title}</a>
        </CardTitle>
        <CardAction className="flex gap-2">
          {categories.map((tag) => (
            <Badge key={tag._id} className="gap-2">
              {tag.title}
              <Icon icon={tag.icon} />
            </Badge>
          ))}
        </CardAction>
        <CardDescription>{formatDate(post.date)}</CardDescription>
      </CardHeader>
      <CardContent style={{ position: "relative" }} className="w-full">
        {post.gallery?.length ? (
          <GalleryItem
            item={
              post.gallery.find((item) => item.preview === true) ||
              post.gallery[0]
            }
          />
        ) : (
          <div className="card__cover--none" />
        )}
      </CardContent>
    </CardComponent>
  );
}

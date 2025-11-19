import { formatDate } from "../utils";
import { Badge } from "./ui/badge";
import {
  Card as CardComponent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardAction,
  CardContent,
} from "./ui/card";
import { type Post, type Category, getReference } from "../utils/sanity";
import { GalleryItem } from "./GalleryItem";
import { Icon } from "./Icon";
import { useEffect } from "react";

export function Card({ post }: { post: Post }) {
  // useEffect(() => {
  //
  // })
  // const category: Category = await getReference<Category>({
  //   type: "category",
  //   ref: post.category._ref,
  // });
  return (
    <CardComponent className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <a href={`post/${post.slug.current}`}>{post.title}</a>
        </CardTitle>
        <CardAction>
          {/* <Badge className="gap-2"> */}
          {/*   {category.title} */}
          {/*   <Icon icon={category.icon} /> */}
          {/* </Badge> */}
        </CardAction>
        <CardDescription>{formatDate(post.date)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {post.gallery?.length ? (
            <GalleryItem item={post.gallery[0]} />
          ) : (
            <div className="card__cover--none" />
          )}
        </div>
      </CardContent>
    </CardComponent>
  );
}

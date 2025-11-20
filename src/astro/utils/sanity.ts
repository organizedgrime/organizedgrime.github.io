import type { Asset, Reference, Slug } from "@sanity/types";
import { loadQuery } from "./load-query";

export async function getPosts(): Promise<Post[]> {
  const { data: posts } = await loadQuery<Array<Post>>({
    query: `*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`,
  });
  return posts;
}

export async function getPost(slug: string): Promise<Post> {
  const { data: post } = await loadQuery<Post>({
    query: `*[_type == "post" && defined(slug.current) && slug.current == $slug][0]`,
    params: {
      slug,
    },
  });

  if (!post) {
    throw new Error(`Document not found: \`post\` with slug ${slug}`);
  }

  return post;
}

export async function getCategories(): Promise<Category[]> {
  const { data: categories } = await loadQuery<Category[]>({
    query: `*[_type == "category" && defined(slug.current)] | order(slug.current desc)`,
  });
  return categories;
}

export async function getReference<T>({
  type,
  ref,
}: {
  type: string;
  ref: string;
}): Promise<T> {
  const { data } = await loadQuery<T | null>({
    query: `*[_type == $type && _id == $ref][0]`,
    params: { type, ref },
  });

  if (!data) {
    throw new Error(`Document not found: ${type} with id ${ref}`);
  }

  return data;
}

export async function getPostsWithTag<T>({
  tag,
}: {
  tag: string;
  // refs: string[];
}): Promise<T[]> {
  const { data } = await loadQuery<T[] | null>({
    query: `*[_type == "post" && references($tag) in tags[]._ref ]`,
    params: { tag },
  });

  if (!data) {
    throw new Error(`Document not found: posts with tag ${tag}`);
  }

  return data;
}

export type Category = {
  _id: string;
  title: string;
  slug: Slug;
  icon: Icon;
  art: boolean;
};

export interface Photo extends Asset {
  _type: "captionedImage";
  title?: string;
  description?: string;
  preview?: boolean;
}

export interface Icon {
  _type: "icon.manager";
  icon: string;
  metadata: {
    inlineSvg: string;
  };
}

export interface Video {
  _type: "bunnyVideo";
  videoId: string;
  title: string;
  description: string;
  width: number;
  height: number;
  preview?: boolean;
}

export type Gallery = Array<Photo | Video>;

export interface Post {
  _id: string;
  _type: "post";
  _createdAt: string;
  tags: Reference[];
  icon?: Icon;
  gallery?: Gallery;
  date: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  body?: string;
}

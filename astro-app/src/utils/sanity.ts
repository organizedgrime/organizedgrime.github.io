import { sanityClient } from "sanity:client";
import type { ImageAsset, Reference, Slug } from "@sanity/types";
import groq from "groq";

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`,
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current) && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}

export async function getCategories(): Promise<Category[]> {
  return await sanityClient.fetch(
    groq`*[_type == "category" && defined(slug.current)] | order(slug.current desc)`,
  );
}

export async function getReference<T>({
  type,
  ref,
}: {
  type: string;
  ref: string;
}): Promise<T> {
  const result = await sanityClient.fetch<T | null>(
    groq`*[_type == $type && _id == $ref][0]`,
    { type, ref },
  );

  if (!result) {
    throw new Error(`Document not found: ${type} with id ${ref}`);
  }

  return result;
}

export type Category = {
  title: string;
  icon: Icon;
  art: boolean;
};

export type Photo = ImageAsset & {
  _type: "sanity.imageAsset";
  alt?: string;
};

export interface Icon {
  svg: string;
  name: string;
}

export interface Video {
  _type: "bunnyVideo";
  id: string;
  vertical: boolean;
}

export type Gallery = Array<Photo | Video>;

export interface Post {
  _type: "post";
  _createdAt: string;
  category: Reference;
  icon?: Icon;
  gallery?: Gallery;
  date: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  body?: string;
}

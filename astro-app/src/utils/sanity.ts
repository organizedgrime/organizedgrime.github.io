import { sanityClient } from "sanity:client";
import type { ImageAsset, Slug } from "@sanity/types";
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

export type Category = {
  title?: string;
  icon?: Icon;
  art: boolean;
};

export type Photo = ImageAsset & {
  _type: "sanity.imageAsset";
  alt?: string;
};

export interface Icon {
  svg: string;
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
  category?: Category;
  icon?: Icon;
  gallery?: Gallery;
  date: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  photo?: Photo;
  body?: string;
}

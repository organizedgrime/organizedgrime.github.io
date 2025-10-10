import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

type DocumentType = "post" | "origami" | "article" | "poem";

export async function getPosts<T>(type?: DocumentType): Promise<T[]> {
	if (type) {
		return await sanityClient.fetch(
			groq`*[_type == "${type}" && defined(slug.current)] | order(_createdAt desc)`,
		);
	} else {
		return await sanityClient.fetch(
			groq`*[defined(slug.current)] | order(_createdAt desc)`,
		);
	}
}

export async function getPost<T>(
	slug: string,
	type?: DocumentType,
): Promise<T> {
	if (type) {
		return await sanityClient.fetch(
			groq`*[_type == "${type}" && slug.current == ${slug}][0]`,
		);
	} else {
		return await sanityClient.fetch(groq`*[slug.current == ${slug}][0]`);
	}
}

export type Photo = ImageAsset & { alt?: string };

export interface Post {
	_type: "post";
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	photo?: Photo;
	body: PortableTextBlock[];
}

export interface Origami {
	_type: "post";
	_createdAt: string;
	title?: string;
	slug: Slug;
	date?: Date;
	gallery?: Photo[];
	body: PortableTextBlock[];
}

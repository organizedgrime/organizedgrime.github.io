import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
	site: string
}


export async function GET(context: Context) {
	function draft(item) {
		return !item.data.draft;
	}

	function entry(item) {
		return {
			title: item.data.title,
			description: item.data.description,
			pubDate: item.data.date,
			link: `/${item.collection}/${item.slug}/`,
		};
	}

	const creations = (await getCollection("creations"))
		.filter(draft)
		.map(entry);

	const poems = (await getCollection("poems"))
		.filter(draft)
		.map(entry);

	const math = (await getCollection("math"))
		.filter(draft)
		.map(entry);

	const linguistics = (await getCollection("linguistics"))
		.filter(draft)
		.map(entry);

	const software = (await getCollection("software"))
		.filter(draft)
		.map(entry);

	const items = [creations, poems, math, linguistics, software]
		.flat()
		.sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf());

	return rss({
		title: HOME.TITLE,
		description: HOME.DESCRIPTION,
		site: context.site,
		items: items,
	});
}

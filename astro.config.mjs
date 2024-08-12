import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { KatexOptions } from 'katex';

// https://astro.build/config
export default defineConfig({
	site: "https://vera.lgbt",
	integrations: [mdx(), sitemap(), tailwind()],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			[rehypeKatex, {
				macros: {
					"\\RR": "\\mathbb{R}",
					"\\ZZ": "\\mathbb{Z}",
					"\\CC": "\\mathbb{C}",
					"\\QQ": "\\mathbb{Q}",
					"\\NN": "\\mathbb{N}",
					"\\FF": "\\mathbb{F}",
					"\\FF": "\\mathbb{F}",
					"\\B": "\\boldsymbol{#1}",
					"\\b": "\\mathbf{#1}",
					"\\id": "\\htmlId{eq:#1}{#2}",
					"\\t": "\\htmlId{eq:#1}{#2} \\tag{#1}",
					"\\while": "\\rm{\\bold{while}} \\space #1 \\space \\rm{\\bold{do}}",
					"\\algorithm": "\\hline \\rm{\\bold{Algorithm\\>#1}\\>#2}\\\\ \\hline "
				},
				trust: true,
				leqno: true,
			}]
		]
	}
});

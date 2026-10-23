import type { APIRoute } from "astro";
import { getEmDashCollection } from "emdash";
import { contentPillars } from "../lib/site-content";
import { works } from "../lib/works";

// EmDash標準のsitemapは記事だけなので、固定ページとカテゴリも含めて自前で出す
export const GET: APIRoute = async ({ site, url }) => {
	const origin = site?.origin ?? url.origin;
	const staticPaths = [
		"/",
		"/blog",
		"/about",
		"/contact",
		"/works",
		...works.map((work) => `/works/${work.slug}`),
		...contentPillars.map((pillar) => `/category/${pillar.slug}`),
	];

	const posts = [];
	let cursor: string | undefined;
	do {
		const result = await getEmDashCollection("posts", { status: "published", orderBy: { published_at: "desc" }, limit: 100, cursor });
		posts.push(...result.entries);
		cursor = result.nextCursor;
	} while (cursor);

	const urls = [
		...staticPaths.map((path) => `  <url><loc>${origin}${path}</loc></url>`),
		...posts.map(
			(post) => `  <url><loc>${origin}/blog/${encodeURIComponent(post.id)}</loc><lastmod>${post.data.updatedAt.toISOString()}</lastmod></url>`,
		),
	].join("\n");

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
		{ headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } },
	);
};

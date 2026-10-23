import type { APIRoute } from "astro";
import { getEmDashCollection } from "emdash";
import { siteDescription, siteName } from "../lib/site-content";

export const GET: APIRoute = async ({ site, url }) => {
	const origin = site?.origin ?? url.origin;
	const { entries: posts } = await getEmDashCollection("posts", {
		status: "published",
		orderBy: { published_at: "desc" },
		limit: 20,
	});

	const items = posts
		.filter((post) => post.data.publishedAt)
		.map((post) => {
			const link = `${origin}/blog/${post.id}`;
			return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${post.data.publishedAt!.toUTCString()}</pubDate>
      <description>${escapeXml(post.data.excerpt ?? "")}</description>
    </item>`;
		})
		.join("\n");

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)}</title>
    <link>${origin}</link>
    <description>${escapeXml(siteDescription)}</description>
    <atom:link href="${origin}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`,
		{ headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } },
	);
};

function escapeXml(value: string): string {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

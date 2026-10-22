import type { APIRoute } from "astro";

// 旧サイトと同じくAI学習用クローラーを拒否し、管理画面を除外する
export const GET: APIRoute = ({ site, url }) => {
	const origin = site?.origin ?? url.origin;
	const body = [
		"User-agent: *",
		"Allow: /",
		"Disallow: /_emdash/",
		"",
		...["GPTBot", "Google-Extended", "CCBot", "ClaudeBot", "Applebot-Extended", "Bytespider", "meta-externalagent"].flatMap((agent) => [
			`User-agent: ${agent}`,
			"Disallow: /",
			"",
		]),
		`Sitemap: ${origin}/sitemap.xml`,
		"",
	].join("\n");
	return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};

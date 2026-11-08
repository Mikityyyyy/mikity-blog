import { defineMiddleware } from "astro:middleware";

// 旧vercel.json / next.config.mjsのセキュリティヘッダーを引き継ぐ。
const securityHeaders: Record<string, string> = {
	"X-Content-Type-Options": "nosniff",
	"X-Frame-Options": "SAMEORIGIN",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"Permissions-Policy": "camera=(), microphone=(), geolocation=()",
	"Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

// 公開ページ用のCSP。管理画面（/_emdash）はEmDashが独自のCSPを付けるので対象外。
const publicCsp = [
	"default-src 'self'",
	"script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: blob: https:",
	"font-src 'self'",
	"connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
	"frame-src 'self'",
	"frame-ancestors 'self'",
	"object-src 'none'",
	"base-uri 'self'",
	"form-action 'self'",
	"upgrade-insecure-requests",
].join("; ");

export const onRequest = defineMiddleware(async (context, next) => {
	// http・www付きのアクセスと末尾スラッシュ付きURLは、1回の転送で正規URLへ揃える（EmDashとAstroの内部パスは対象外）
	const isWww = context.url.hostname === "www.mikitylife.com";
	const isHttp = context.url.protocol === "http:" && !import.meta.env.DEV;
	const { pathname, search } = context.url;
	const hasTrailingSlash = pathname.length > 1 && pathname.endsWith("/") && !pathname.startsWith("/_");
	if (isWww || isHttp || hasTrailingSlash) {
		const host = isWww ? "mikitylife.com" : context.url.host;
		const normalizedPath = hasTrailingSlash ? pathname.replace(/\/+$/, "") : pathname;
		return context.redirect(`https://${host}${normalizedPath}${search}`, 301);
	}
	const response = await next();
	for (const [key, value] of Object.entries(securityHeaders)) {
		if (!response.headers.has(key)) response.headers.set(key, value);
	}
	// 管理画面用の workers.dev ドメインが検索結果に載らないようにする
	if (context.url.hostname.endsWith(".workers.dev") && !response.headers.has("X-Robots-Tag")) {
		response.headers.set("X-Robots-Tag", "noindex, nofollow");
	}
	const isAdmin = context.url.pathname.startsWith("/_emdash");
	const isHtml = response.headers.get("Content-Type")?.includes("text/html");
	if (!isAdmin && !import.meta.env.DEV) {
		// EmDashのミドルウェアは order: "pre" で外側にあり、この後で Server-Timing を付け直すため、ここで消しても本番には残る（中身は処理時間のみ）。EmDash側の順番が変わったときに効くよう残しておく。
		response.headers.delete("Server-Timing");
		if (isHtml && !response.headers.has("Content-Security-Policy")) {
			response.headers.set("Content-Security-Policy", publicCsp);
		}
	}
	return response;
});

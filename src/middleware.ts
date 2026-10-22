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
	// http・www付きのアクセスは https の正規ドメインへ転送する
	const isWww = context.url.hostname === "www.mikitylife.com";
	if (isWww || (context.url.protocol === "http:" && !import.meta.env.DEV)) {
		const host = isWww ? "mikitylife.com" : context.url.host;
		return context.redirect(`https://${host}${context.url.pathname}${context.url.search}`, 301);
	}
	const response = await next();
	for (const [key, value] of Object.entries(securityHeaders)) {
		if (!response.headers.has(key)) response.headers.set(key, value);
	}
	const isAdmin = context.url.pathname.startsWith("/_emdash");
	const isHtml = response.headers.get("Content-Type")?.includes("text/html");
	if (!isAdmin && isHtml && !import.meta.env.DEV && !response.headers.has("Content-Security-Policy")) {
		response.headers.set("Content-Security-Policy", publicCsp);
	}
	return response;
});

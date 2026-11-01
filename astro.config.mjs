import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	site: "https://mikitylife.com",
	output: "server",
	// 従量課金のCloudflare Imagesを使わないよう、画像は変換せずそのまま配信する
	adapter: cloudflare({ imageService: "passthrough" }),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	// 旧Next.js版から引き継いだリダイレクト
	redirects: {
		"/stories": { status: 301, destination: "/blog" },
		"/work": { status: 301, destination: "/blog" },
		// WORKとSTUDYはCAREERに統合した
		"/category/work": { status: 301, destination: "/category/career" },
		"/category/study": { status: 301, destination: "/category/career" },
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto", coalesce: true }),
			storage: r2({ binding: "MEDIA" }),
			// 本番のDB更新はデプロイ前に `emdash migrate` で行う（無料プランのCPU制限で途中停止するため）
			migrations: { runtime: "check", dev: "auto" },
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Noto Sans JP",
			cssVariable: "--font-sans",
			weights: [300, 400, 500],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Jost",
			cssVariable: "--font-latin",
			weights: [300, 400, 500],
			fallbacks: ["sans-serif"],
		},
	],
	devToolbar: { enabled: false },
});

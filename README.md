# mikitylife

Mikityの公式ブログメディアです。

- Website: https://mikitylife.com
- Repository: https://github.com/Mikityyyyy/mikity-blog
- Hosting: Vercel

## About

仕事、競技、学びを同時に進める会社員の実体験と思考を記録します。

記事はSanity CMSで管理し、公開済みの実データだけをサイトへ表示します。主なテーマは `WORK`、`TRAIN`、`STUDY`、`LIFE` です。

トップページは、最新7件のうち画像付きの記事1件を表紙に、残りを最大6件の画像カードで表示します。画像付きの記事がない間はブログ紹介を表示し、記事0件と取得エラーは別のメッセージで案内します。

ブログ紹介には `public/sample-strength.webp` のジム・バーベルのAI生成イメージを使用し、筋トレが活動の中心であることを伝えます。Mikity本人の所有物や実際の体験を撮影した写真ではありません。記事写真が利用できる場合はそちらを優先します。

開発環境とVercel Previewでは、公開記事が0件のときだけ3本の記事サンプルを表示します。`SAMPLE` と確認用の注記を表示し、架空の公開日や記事リンクは付けません。Sanityには保存せず、Vercel Productionと通常の本番ビルドでは表示しません。CMS取得エラー時もサンプルで隠しません。

記事サンプルは筋トレ・仕事とAI・暮らしの順に表示します。画像は既存の内蔵ImageGen生成素材を再利用しています。`sample-strength.webp` はバーベルとタオル、`journal-cover.webp` は机・ノート・PC、`sample-running.webp` は散歩の記事に使う川沿いの道です。共通の生成指示は、自然光、青灰色と生成り、人物・文字・ロゴなし。

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Sanity
- Vercel

## Local development

### Requirements

- Node.js 20.9以上
- npm

### Setup

```bash
git clone https://github.com/Mikityyyyy/mikity-blog.git
cd mikity-blog
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000 after the development server starts.

### Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | For CMS | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | For CMS | Sanity dataset |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 measurement ID |

Never commit `.env.local` or production credentials.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run start
```

## Repository workflow

1. Create an `agent/*` or `feature/*` branch from `main`.
2. Make and validate changes on that branch.
3. Open a pull request into `main`.
4. Review the Vercel preview before merging.
5. Merging into `main` deploys the production site automatically.

## Project structure

```text
src/
├── app/          # App Router pages and metadata routes
├── components/   # Shared UI components
└── lib/          # Sanity, analytics, queries, and types
public/           # Static assets
```

## License

This is a personal project. All rights reserved.

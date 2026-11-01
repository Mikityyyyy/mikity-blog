# mikitylife

Mikityの公式ブログメディアです。

- Website: https://mikitylife.com
- Repository: https://github.com/Mikityyyyy/mikity-blog
- CMS: [EmDash](https://github.com/emdash-cms/emdash)（Astro製。管理画面は `/_emdash/admin`）
- Hosting: Cloudflare Workers（D1 / R2）

## About

仕事、競技、学びを同時に進める会社員の実体験と思考を記録します。

記事はEmDashで管理し、公開済みの記事だけをサイトへ表示します。カテゴリは `TRAIN`、`CAREER`、`LIFE` です（slugは `train` / `career` / `life`）。記事ごとに1つだけ選び、練習・大会・身体の話はTRAIN、仕事・AI・英語の話はCAREER、それ以外はLIFEにします。HYROXやマラソンなどの細かい話題はタグにします。

デザインは白地・大きな写真・細身のゴシック体を基調にしたミニマルな構成です。トップページは、画像付きの最新記事を全幅のヒーローに、残りを最大6件のカードで表示します。画像付きの記事がない間はブログ紹介を表示し、記事0件と取得エラーは別のメッセージで案内します。

ブログ紹介には `public/sample-strength.webp` のジム・バーベルのAI生成イメージを使用します。Mikity本人の所有物や実際の体験を撮影した写真ではありません。記事写真がある場合はそちらを優先します。

開発サーバー（`npm run dev`）では、公開記事が0件の欄にだけ3本の記事サンプルを表示します。`SAMPLE` と確認用の注記を表示し、架空の公開日や記事リンクは付けません。EmDashには保存せず、本番ビルドでは表示しません。CMS取得エラー時もサンプルで隠しません。

記事サンプルは筋トレ・仕事とAI・暮らしの順に表示します。`sample-strength.webp` はバーベルとタオル、`journal-cover.webp` は机・ノート・PC、`sample-running.webp` は散歩の記事に使う川沿いの道です。共通の生成指示は、自然光、青灰色と生成り、人物・文字・ロゴなし。

## Tech stack

- EmDash 1.3（Astro 7）
- Cloudflare Workers / D1（データベース）/ R2（画像）
- TypeScript
- Google Analytics 4（本番ビルドのみ）

## Local development

### Requirements

- Node.js 22.22以上（Astro 7の要件）
- npm

### Setup

```bash
git clone https://github.com/Mikityyyyy/mikity-blog.git
cd mikity-blog
npm ci
cp .env.example .env
npx emdash secrets generate   # 出力された値を .env の EMDASH_ENCRYPTION_KEY に設定
npm run dev
```

Open http://localhost:4321 after the development server starts. 初回アクセス時に `seed/seed.json` の記事タイプ・カテゴリが自動で作成されます。管理画面は http://localhost:4321/_emdash/admin です。

Never commit `.env` or production credentials.

## Commands

```bash
npm run dev        # 開発サーバー
npm run build      # 本番ビルド
npm run typecheck  # 型チェック
npm run deploy     # ビルドしてCloudflareへデプロイ
```

## Deploy (Cloudflare)

本番: https://mikitylife.com（www は apex へ301）。Worker名 `mikitylife`、D1 `mikitylife-db`、R2 `mikitylife-media`。管理画面はパスキーの都合で https://mikitylife.mikity-blog.workers.dev/_emdash/admin から使う。

```bash
npx wrangler login     # 初回のみ
npm run deploy         # ビルドしてデプロイ
```

- Workerは無料プランのまま運用する（上限を超えると止まるだけで課金されない）。画像はCloudflare Imagesを使わず `imageService: "passthrough"` で配信する。
- 請求額が1ドルを超えたらメールが届く通知（Billing Budget Alert）を設定済み。
- **DBのマイグレーション**: 本番Workerでは `migrations.runtime: "check"` にしており、Worker内では実行しない（無料プランのCPU制限で途中停止し、ロックが残るため）。EmDashを更新して新しいマイグレーションが増えたときは、デプロイ前に `CLOUDFLARE_API_TOKEN`（D1 Edit権限）を設定して `npx emdash migrate --status` → `npx emdash migrate` を実行する。
- 暗号化キー `EMDASH_ENCRYPTION_KEY` はWorkerのシークレットに登録済み。ローカルの `.env` とは別の値。

## Repository workflow

1. Create an `agent/*` or `feature/*` branch from `main`.
2. Make and validate changes on that branch.
3. Open a pull request into `main`.
4. Review the preview before merging.

## Project structure

```text
src/
├── pages/        # ルート（トップ、/blog、/blog/[slug]、/category/[slug]、about、contact、RSS、sitemap、robots）
├── layouts/      # 共通レイアウト（SEO・GA・EmDashのhead/body出力）
├── components/   # ヘッダー、フッター、記事カード
├── lib/          # サイト文言、記事まわりのヘルパー
├── styles/       # global.css（全体）、prose.css（記事本文）
├── middleware.ts # セキュリティヘッダー
├── live.config.ts
└── worker.ts     # Cloudflare Workerの入口（予約公開のcronを含む）
seed/seed.json    # EmDashの記事タイプ・カテゴリ定義
public/           # 静的ファイル
```

## License

This is a personal project. All rights reserved.

## フォルダの使い分け

[フォルダ案内](docs/STRUCTURE.md)を参照。旧パスの互換リンクを残し、既存参照を維持している。

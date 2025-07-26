# Mikity Blog - 公式サイト & ブログ

Mikityの公式サイト兼ブログです。Next.js、TypeScript、Tailwind CSS、Sanity CMSを使用して構築されています。

## 🚀 技術スタック

- **フロントエンド**: Next.js 15 + React 19 + TypeScript
- **スタイリング**: Tailwind CSS
- **CMS**: Sanity
- **ホスティング**: Vercel
- **ドメイン**: mikityyyyy.com

## 📁 プロジェクト構造

```
src/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx        # 個別記事ページ
│   │   ├── category/
│   │   │   └── [category]/
│   │   │       └── page.tsx    # カテゴリーページ
│   │   ├── tag/
│   │   │   └── [tag]/
│   │   │       └── page.tsx    # タグページ
│   │   └── page.tsx            # ブログ一覧ページ
│   ├── globals.css
│   ├── layout.tsx              # ルートレイアウト
│   └── page.tsx                # トップページ
├── components/
│   ├── AboutSection.tsx        # 自己紹介セクション
│   ├── Footer.tsx              # フッターコンポーネント
│   ├── Header.tsx              # ヘッダーコンポーネント
│   ├── HeroSection.tsx         # ヒーローセクション
│   └── LatestBlogSection.tsx   # 最新ブログセクション
└── lib/
    ├── sanity.ts               # Sanity設定
    └── types.ts                # TypeScript型定義
```

## 🛠️ 開発環境のセットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local.example`を`.env.local`にコピーして、必要な環境変数を設定してください。

```bash
cp .env.local.example .env.local
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

## 📝 主な機能

### ✅ 完成済み
- レスポンシブ対応のモダンなデザイン
- トップページ（ヒーロー、自己紹介、実績セクション）
- ブログ一覧ページ（カテゴリフィルター付き）
- 個別記事ページ（関連記事、シェアボタン付き）
- SEO最適化（メタタグ、OGP対応）

### 🔄 開発中
- Sanity CMS統合
- 検索機能
- カテゴリー・タグページ
- Google Analytics 4統合

## 🚀 デプロイ

### Vercelでのデプロイ

1. Vercelアカウントにログイン
2. プロジェクトをGitHubにプッシュ
3. Vercelでプロジェクトを選択してデプロイ
4. カスタムドメイン（mikityyyyy.com）を設定

### 環境変数の設定

Vercelの環境変数設定で以下を追加：

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_SITE_URL`

## 📊 パフォーマンス目標

- Lighthouse スコア: 90+
- ページ読み込み速度: 3秒以内
- Core Web Vitals: すべて Good

## 🤝 コントリビューション

バグ報告や機能要望がありましたら、Issueを作成してください。

## 📄 ライセンス

MIT License

---

© 2024 Mikity. All rights reserved.

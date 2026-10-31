export const siteName = "mikitylife";
export const siteUrl = "https://mikitylife.com";
export const siteTagline = "仕事、身体、学び、暮らしの記録。";
export const gaTrackingId = "G-PEJLDFPW4N";
export const defaultOgImage = "/og-editorial-v3.png";

export const siteDescription =
  "仕事、身体、学び、暮らしの記録。IT企業で働くMikityが、筋トレを中心に、HYROXやマラソン、英語、AIなどの実体験を綴るブログです。";

export const socialLinks = [
  { label: "Instagram", handle: "@mikity__97", href: "https://www.instagram.com/mikity__97/", primary: true },
  { label: "YouTube", handle: "@mikityvlog", href: "https://www.youtube.com/@mikityvlog", primary: true },
  { label: "TikTok", handle: "@mikity__97", href: "https://www.tiktok.com/@mikity__97", primary: true },
  { label: "Threads", handle: "@mikity__97", href: "https://www.threads.com/@mikity__97", primary: true },
  { label: "X", handle: "@mikity__97", href: "https://x.com/mikity__97", primary: false },
  { label: "note", handle: "@mikityyyyy", href: "https://note.com/mikityyyyy", primary: false },
] as const;

// slugはEmDashのカテゴリ（seed/seed.json）と一致させる
export const contentPillars = [
  {
    number: "01",
    slug: "train",
    title: "TRAIN",
    label: "トレーニング",
    description: "筋トレを軸に、HYROXやマラソンにも挑戦。日々の練習と大会の記録。",
  },
  {
    number: "02",
    slug: "career",
    title: "CAREER",
    label: "仕事と学び",
    description: "BizDevとマーケティング、AI、英語。仕事で試したことと、学んで使ってみたこと。",
  },
  {
    number: "03",
    slug: "life",
    title: "LIFE",
    label: "暮らし",
    description: "日々の選択や小さな発見。仕事と運動の合間に思うこと。",
  },
] as const;

export const currentGoals = [
  { label: "BIG 3", current: "505", unit: "kg", target: "520 kg" },
  { label: "HYROX", current: "1:19:43", unit: "", target: "SUB 75" },
  { label: "MARATHON", current: "3:51:18", unit: "", target: "SUB 3.5" },
] as const;

// レイアウト確認用の記事サンプル。EmDashには保存せず、開発サーバーでのみ表示する。
export const showSampleStories = import.meta.env.DEV;

export const sampleStories = [
  {
    id: "strength",
    category: "TRAIN",
    title: "仕事のある日も、筋トレを続けるために。",
    excerpt: "鍛える日と休む日。仕事と両立する、1週間の組み立て方。",
    image: "/sample-strength.webp",
    alt: "ジムのバーベルとタオルを配したトレーニングのイメージ画像",
  },
  {
    id: "work",
    category: "CAREER",
    title: "仕事でAIを使う前に、整理しておきたいこと。",
    excerpt: "任せたい作業と、自分で考えること。身近な業務から見直す。",
    image: "/journal-cover.webp",
    alt: "ノートとパソコンのある机を配した仕事と学びのイメージ画像",
  },
  {
    id: "life",
    category: "LIFE",
    title: "仕事と筋トレの合間に、ひと息つく。",
    excerpt: "予定を詰め込まない休日。外を歩きながら、日々を振り返る。",
    image: "/sample-running.webp",
    alt: "木々と川沿いの遊歩道を描いた、休日の散歩のイメージ画像",
  },
] as const;

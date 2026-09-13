// Layout examples only: never written to Sanity or enabled in production.
export const showSampleStories =
  process.env.VERCEL_ENV === "preview" ||
  (process.env.NODE_ENV === "development" && process.env.VERCEL_ENV !== "production");

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
    category: "WORK",
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

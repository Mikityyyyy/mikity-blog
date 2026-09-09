// Layout examples only: never written to Sanity or enabled in production.
export const showSampleStories =
  process.env.VERCEL_ENV === "preview" ||
  (process.env.NODE_ENV === "development" && process.env.VERCEL_ENV !== "production");

export const sampleStories = [
  {
    id: "running",
    category: "TRAIN",
    title: "平日の朝、走る時間をつくる。",
    excerpt: "仕事のある日のランニングを、時間と距離から考える。",
    image: "/sample-running.webp",
    alt: "朝の川沿いのランニングコースを描いたイメージ画像",
  },
  {
    id: "strength",
    category: "TRAIN",
    title: "筋トレとランニング、1週間の組み立て方。",
    excerpt: "走る日、鍛える日、休む日。両方を続けるための練習計画。",
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
] as const;

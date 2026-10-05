export interface Work {
  slug: string;
  title: string;
  /** One-line summary used on cards and in metadata. */
  tagline: string;
  category: string;
  year: string;
  role: string;
  /** Public URL of the live product, if any. */
  url?: string;
  video?: {
    src: string;
    poster: string;
    width: number;
    height: number;
  };
  ogImage: string;
  /** Paragraphs for the overview section. */
  overview: string[];
  features: { title: string; description: string }[];
}

export const works: Work[] = [
  {
    slug: "futari",
    title: "Futari",
    tagline: "ふたりのお金を、記録するだけ。",
    category: "Web App",
    year: "2026",
    role: "企画・デザイン・開発",
    url: "https://futari.mikitylife.com",
    video: {
      src: "/works/futari/demo.mp4",
      poster: "/works/futari/poster.jpg",
      width: 1920,
      height: 1080,
    },
    ogImage: "/works/futari/og.jpg",
    overview: [
      "ふたりで暮らすときの支出を記録して、月ごとに「どちらがいくら払えばいいか」を出すための家計アプリです。",
      "家計簿のように細かく分類するのではなく、金額と払った人だけを入れれば使えることを大事にしました。スマホのホーム画面に追加して、アプリのように使えます。",
    ],
    features: [
      {
        title: "金額を入れて、保存するだけ",
        description: "払ったのは自分か相手かを選ぶだけ。内容やカテゴリは、必要なときだけ入れられます。",
      },
      {
        title: "精算額を自動で計算",
        description: "ふたりの支出を月ごとに合算して、どちらがいくら払えばいいかをひと目で表示します。",
      },
      {
        title: "ホーム画面から記録",
        description: "iPhoneのショートカットと連携して、アプリを開かずに金額だけ送れます。記録後10秒間は取り消しもできます。",
      },
      {
        title: "招待コードでふたりの家に",
        description: "相手は招待コードを入れるだけで参加できます。負担の割合は「半分」「割合」「片方が定額」から選べます。",
      },
    ],
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

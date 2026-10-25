// 制作物の紹介。一般公開していないアプリもあるため、アプリ本体のURLは載せない。
export interface Work {
  slug: string;
  title: string;
  /** カードやメタデータに使う一行の説明 */
  tagline: string;
  category: string;
  year: string;
  role: string;
  video?: {
    src: string;
    poster: string;
    width: number;
    height: number;
  };
  ogImage: string;
  overview: string[];
  features: { title: string; description: string }[];
  /** 最後に機能を更新した日（表示用、例 "2026.10.19"） */
  updatedAt?: string;
  /** 機能改善の履歴。新しい順に並べる */
  changelog?: { date: string; text: string }[];
}

export const works: Work[] = [
  {
    slug: "futari",
    title: "Futari",
    tagline: "ふたりのお金を、記録するだけ。",
    category: "Web App",
    year: "2026",
    role: "企画・デザイン・開発",
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
      "いまは自分たちの暮らしのために使っている、個人的なプロジェクトです。",
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
        title: "分け方は、ふたりで決める",
        description: "負担の割合は「半分」「割合」「片方が定額」から選べます。支出ごとに「これは半分ずつ」にすることもできます。",
      },
      {
        title: "ホーム画面から記録",
        description: "iPhoneのショートカットと連携して、アプリを開かずに金額だけ送れます。記録後10秒間は取り消しもできます。",
      },
      {
        title: "記録をファイルで残せる",
        description: "月ごと・期間を指定・すべての中から選んで、CSV（Excel向け）かMarkdown（メモアプリ向け）で保存できます。",
      },
      {
        title: "ほかの端末でも、同じ記録",
        description: "別のブラウザやスマホからも、同じ記録を見られます。ホーム画面に追加したときは、画面を下に引っぱると最新の状態に更新できます。",
      },
    ],
    updatedAt: "2026.10.19",
    changelog: [
      { date: "2026.10.19", text: "記録のダウンロードで、期間（開始日〜終了日）を指定できるようにしました。" },
      { date: "2026.10.15", text: "記録をCSV・Markdownでダウンロードできるようにしました。" },
      { date: "2026.10.07", text: "支出ごとに分け方（いつもの割合／半分ずつ）を選べるようにしました。履歴に分け方のラベルを表示します。" },
      { date: "2026.09.23", text: "保存ボタンを「くわしく」の下へ移動しました。ホーム画面に追加したとき、画面を下に引っぱって更新できるようにしました。" },
      { date: "2026.09.21", text: "アプリの中に使い方ガイドを追加しました。iPhoneで入力欄の見た目がそろうように直し、セキュリティを強化しました。" },
      { date: "2026.09.19", text: "ふたりで使い始めました。別のブラウザやスマホからも、同じ記録を見られるようにしました。" },
      { date: "2026.09.14", text: "制作をはじめました。" },
    ],
  },
];

export function getWork(slug: string | undefined): Work | undefined {
  return works.find((work) => work.slug === slug);
}

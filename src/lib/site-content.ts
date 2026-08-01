export const siteUrl = "https://mikitylife.com";

export const siteDescription =
  "走る、挙げる、働く、学ぶ。どれも諦めたくない会社員・Mikityの試行錯誤を残すブログメディア。";

export const socialLinks = [
  { label: "Instagram", handle: "@mikity__97", href: "https://www.instagram.com/mikity__97/", primary: true },
  { label: "YouTube", handle: "@mikityyyyy", href: "https://www.youtube.com/@mikityyyyy", primary: true },
  { label: "TikTok", handle: "@mikity__97", href: "https://www.tiktok.com/@mikity__97", primary: true },
  { label: "Threads", handle: "@mikity__97", href: "https://www.threads.com/@mikity__97", primary: true },
  { label: "X", handle: "@mikity__97", href: "https://x.com/mikity__97", primary: false },
  { label: "note", handle: "@mikityyyyy", href: "https://note.com/mikityyyyy", primary: false },
] as const;

export const contentPillars = [
  {
    number: "01",
    title: "WORK",
    jaTitle: "働く",
    description: "会社員として、事業とマーケティングに向き合う。考えたこと、試したこと、まだ答えのないこと。",
  },
  {
    number: "02",
    title: "WORKOUT",
    jaTitle: "鍛える",
    description: "HYROX、ランニング、筋力トレーニング。結果だけではなく、そこへ向かう日々の記録。",
  },
  {
    number: "03",
    title: "STUDY",
    jaTitle: "学ぶ",
    description: "英語とAIを、仕事の右腕にする。わかったふりをせず、学ぶ途中をそのまま残す。",
  },
  {
    number: "04",
    title: "JOURNAL",
    jaTitle: "暮らす",
    description: "全部やろうとして、普通に崩れる日もある。数字には収まらない、生活と感情の記録。",
  },
] as const;

export const currentGoals = [
  { label: "HYROX", current: "1:19:43", target: "SUB 75" },
  { label: "MARATHON", current: "3:51:18", target: "SUB 3.5" },
  { label: "BIG 3", current: "505 kg", target: "520 kg" },
] as const;

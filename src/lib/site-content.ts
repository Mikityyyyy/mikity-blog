export const siteUrl = "https://mikitylife.com";

export const siteDescription =
  "仕事、身体、学び、暮らしの記録。IT企業で働くMikityが、HYROXやマラソン、英語、AIなどの実体験を綴るブログです。";

export const socialLinks = [
  { label: "Instagram", handle: "@mikity__97", href: "https://www.instagram.com/mikity__97/", primary: true },
  { label: "YouTube", handle: "@mikityvlog", href: "https://www.youtube.com/@mikityvlog", primary: true },
  { label: "TikTok", handle: "@mikity__97", href: "https://www.tiktok.com/@mikity__97", primary: true },
  { label: "Threads", handle: "@mikity__97", href: "https://www.threads.com/@mikity__97", primary: true },
  { label: "X", handle: "@mikity__97", href: "https://x.com/mikity__97", primary: false },
  { label: "note", handle: "@mikityyyyy", href: "https://note.com/mikityyyyy", primary: false },
] as const;

export const contentPillars = [
  {
    number: "01",
    title: "WORK",
    label: "仕事",
    description: "BizDevとマーケティング。仕事で試したこと、考えたこと。",
  },
  {
    number: "02",
    title: "TRAIN",
    label: "トレーニング",
    description: "HYROX、マラソン、筋トレ。日々の練習と大会の記録。",
  },
  {
    number: "03",
    title: "STUDY",
    label: "学び",
    description: "英語とAI。学んだことを、仕事や日常で使ってみる。",
  },
  {
    number: "04",
    title: "LIFE",
    label: "暮らし",
    description: "日々の選択や小さな発見。仕事と運動の合間に思うこと。",
  },
] as const;

export const currentGoals = [
  { label: "HYROX", current: "1:19:43", target: "SUB 75" },
  { label: "MARATHON", current: "3:51:18", target: "SUB 3.5" },
  { label: "BIG 3", current: "505 kg", target: "520 kg" },
] as const;

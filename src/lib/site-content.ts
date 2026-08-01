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
    description: "Building, marketing and making decisions inside a company.",
  },
  {
    number: "02",
    title: "TRAIN",
    description: "HYROX, running and strength — without picking just one.",
  },
  {
    number: "03",
    title: "STUDY",
    description: "English, AI and the skills that change how I work.",
  },
  {
    number: "04",
    title: "LIFE",
    description: "The ordinary days behind every number and every goal.",
  },
] as const;

export const currentGoals = [
  { label: "HYROX", current: "1:19:43", target: "SUB 75" },
  { label: "MARATHON", current: "3:51:18", target: "SUB 3.5" },
  { label: "BIG 3", current: "505 kg", target: "520 kg" },
] as const;

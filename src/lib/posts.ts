import { getTermsForEntries, type ContentEntry, type InferCollectionData, type PortableTextBlock } from "emdash";

export type PostEntry = ContentEntry<InferCollectionData<"posts">>;
export type Category = { slug: string; label: string };
export type PostWithCategory = { post: PostEntry; category?: Category };

// 一覧取得ではタクソノミーが付かないので、カテゴリを1回のクエリでまとめて付ける
export async function withCategories(posts: PostEntry[]): Promise<PostWithCategory[]> {
  if (posts.length === 0) return [];
  const terms = await getTermsForEntries("posts", posts.map((post) => post.data.id), "category");
  return posts.map((post) => {
    const term = terms.get(post.data.id)?.[0];
    return { post, category: term ? { slug: term.slug, label: term.label } : undefined };
  });
}

export function formatDate(date: Date | null | undefined): string {
  if (!date) return "";
  return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit", timeZone: "Asia/Tokyo" })
    .format(date)
    .replaceAll("/", ".");
}

// 日本語は1分あたり約500文字で計算する
export function readingMinutes(blocks: PortableTextBlock[] | undefined): number {
  if (!blocks?.length) return 0;
  const chars = blocks.reduce((sum, block) => {
    const children = (block as { children?: { text?: string }[] }).children ?? [];
    return sum + children.reduce((n, child) => n + (child.text?.length ?? 0), 0);
  }, 0);
  return Math.max(1, Math.round(chars / 500));
}

export function primaryCategory(terms: Record<string, { slug: string; label: string }[]> | undefined) {
  return terms?.category?.[0];
}

export function issueLabel(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", timeZone: "Asia/Tokyo" }).formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  return `No. ${year}.${month}`;
}

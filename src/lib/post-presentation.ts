import type { BlogPost } from "./types";

export function postImage(post: BlogPost): string | null {
  const asset = post.mainImage?.asset;
  return asset && "url" in asset ? asset.url : null;
}

export function postDate(date: string) {
  const value = new Date(date);
  return Number.isNaN(value.getTime()) ? "" : new Intl.DateTimeFormat("ja-JP").format(value);
}

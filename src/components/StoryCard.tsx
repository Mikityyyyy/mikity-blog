import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { postDate, postImage } from "@/lib/post-presentation";

export default function StoryCard({ post }: { post: BlogPost }) {
  const image = postImage(post);
  return <article className="story-card"><Link href={`/blog/${post.slug.current}`}>
    <div className="story-image">{image ? <Image src={image} alt={post.mainImage?.alt || post.title} fill sizes="(max-width: 639px) 100vw, (max-width: 900px) 50vw, 33vw" /> : <div className="story-no-image" aria-hidden="true">mikitylife.</div>}</div>
    <div className="story-meta"><span>{post.categories?.[0]?.title || "Journal"}</span><time dateTime={post.publishedAt}>{postDate(post.publishedAt)}</time></div>
    <h3>{post.title}</h3>
  </Link></article>;
}

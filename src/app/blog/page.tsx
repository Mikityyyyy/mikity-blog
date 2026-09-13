import type { Metadata } from "next";
import Link from "next/link";
import StoryCard from "@/components/StoryCard";
import SampleStories from "@/components/SampleStories";
import { showSampleStories } from "@/lib/sample-stories";
import { getPosts } from "@/lib/sanity-queries";

export const metadata: Metadata = {
  title: "Journal",
  description: "仕事、トレーニング、学び、暮らし。Mikityの記事一覧。",
  alternates: { canonical: "/blog" },
};
export const revalidate = 3600;

export default async function BlogPage() {
  const { posts, unavailable } = await getPosts()
    .then((posts) => ({ posts, unavailable: false }))
    .catch(() => ({ posts: [], unavailable: true }));
  return <div className="site-shell pb-24">
    <header className="archive-title"><h1>Journal</h1><p>仕事、身体、学び、暮らし。その時々の記録。</p></header>
    {posts.length > 0 ? <section aria-label="記事一覧" className="story-grid">{posts.map((post) => <StoryCard key={post._id} post={post} />)}</section> : showSampleStories && !unavailable ? <SampleStories /> : <div className="journal-empty"><p>{unavailable ? "記事を読み込めませんでした。時間をおいて、もう一度お試しください。" : "最初の記事を準備しています。"}</p><Link className="text-link" href="/">トップへ戻る<span aria-hidden="true">→</span></Link></div>}
  </div>;
}

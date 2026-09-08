import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import StoryCard from "@/components/StoryCard";
import { getLatestPosts } from "@/lib/sanity-queries";
import { contentPillars, siteDescription, siteUrl } from "@/lib/site-content";
import { postImage } from "@/lib/post-presentation";

export const revalidate = 3600;

export default async function Home() {
  const { posts, unavailable } = await getLatestPosts(7)
    .then((posts) => ({ posts, unavailable: false }))
    .catch(() => ({ posts: [], unavailable: true }));
  const featured = posts.find((post) => postImage(post));
  const latest = posts.filter((post) => post._id !== featured?._id).slice(0, 6);
  const topicNames = ["仕事", "トレーニング", "学び", "暮らし"];

  return (
    <>
      <StructuredData type="website" data={{ name: "mikitylife", url: siteUrl, description: siteDescription }} />
      <div className="site-shell">
        <div className="journal-intro">
          <h1>mikitylife — 仕事、身体、学び、暮らしの記録。</h1>
          <p>PERSONAL JOURNAL</p>
        </div>
        <section className="cover" aria-labelledby="cover-title">
          <div className="cover-photo">
            <Image src={featured ? postImage(featured)! : "/journal-cover.webp"} alt={featured ? featured.mainImage?.alt || featured.title : "ノートとランニングシューズを配した、仕事と運動のある暮らしのイメージ"} fill priority sizes="(max-width: 640px) 100vw, 65vw" />
          </div>
          <div className="cover-copy">
            <p className="eyebrow text-[var(--accent-dark)]">{featured ? "Featured story" : "About this journal"}</p>
            <h2 id="cover-title">{featured ? featured.title : <>仕事のこと。<br />走ること。日々のこと。</>}</h2>
            <p>{featured ? featured.excerpt : "HYROXやマラソン、仕事と学び。会社員・Mikityが試したこと、考えたことを書き留めるブログです。"}</p>
            <Link className="text-link" href={featured ? `/blog/${featured.slug.current}` : "/about"}>{featured ? "記事を読む" : "このブログについて"}<span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="journal-section" aria-labelledby="latest-title">
          <div className="section-heading">
            <h2 id="latest-title">Journal<span>新着記事</span></h2>
            <Link href="/blog">記事一覧 <span aria-hidden="true">↗</span></Link>
          </div>
          {latest.length > 0 ? <div className="story-grid">{latest.map((post) => <StoryCard key={post._id} post={post} />)}</div> : (
            <div className="journal-empty"><p>{unavailable ? "記事を読み込めませんでした。時間をおいて、もう一度お試しください。" : featured ? "次の記事を準備しています。" : "記事はただいま準備中です。日々の記録はSNSでも発信しています。"}</p><Link className="text-link" href="/about">Mikityについて<span aria-hidden="true">→</span></Link></div>
          )}
        </section>
      </div>

      <section className="topic-band">
        <div className="site-shell journal-section">
          <div className="section-heading"><h2>Topics<span>書いていること</span></h2></div>
          <div className="topic-grid">{contentPillars.map((topic, i) => <div key={topic.title}><h3 className="text-[var(--accent-dark)]">{topic.title}<span className="text-[var(--foreground)]">{topicNames[i]}</span></h3><p>{topic.description}</p></div>)}</div>
        </div>
      </section>

      <section className="site-shell journal-section about-strip">
        <div><p className="eyebrow text-[var(--accent-dark)]">The person behind the journal</p><h2 className="mt-4">Hello, I’m Mikity.</h2></div>
        <div><p>IT企業でBizDevとマーケティングを担当。仕事の合間に走り、鍛え、英語やAIを学んでいます。このブログには、その日々の実体験を残していきます。</p><Link className="text-link" href="/about">プロフィールを読む<span aria-hidden="true">→</span></Link></div>
      </section>
    </>
  );
}

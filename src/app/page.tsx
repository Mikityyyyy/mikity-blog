import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import StoryCard from "@/components/StoryCard";
import SampleStories from "@/components/SampleStories";
import { showSampleStories } from "@/lib/sample-stories";
import { getLatestPosts } from "@/lib/sanity-queries";
import { contentPillars, siteDescription, siteUrl, socialLinks } from "@/lib/site-content";
import { postImage } from "@/lib/post-presentation";

export const revalidate = 3600;

export default async function Home() {
  const { posts, unavailable } = await getLatestPosts(7)
    .then((posts) => ({ posts, unavailable: false }))
    .catch(() => ({ posts: [], unavailable: true }));
  const featured = posts.find((post) => postImage(post));
  const latest = posts.filter((post) => post._id !== featured?._id).slice(0, 6);
  const samples = showSampleStories && !unavailable && posts.length === 0;
  const instagram = socialLinks.find((social) => social.label === "Instagram");

  return (
    <>
      <StructuredData type="website" data={{ name: "mikitylife", url: siteUrl, description: siteDescription }} />
      <div className="site-shell">
        <div className="journal-intro">
          <h1>仕事、身体、学び、暮らしの記録。</h1>
          <p>PERSONAL JOURNAL</p>
        </div>
        <section className="cover" aria-labelledby="cover-title">
          <div className="cover-photo">
            <Image src={featured ? postImage(featured)! : "/journal-cover-training.webp"} alt={featured ? featured.mainImage?.alt || featured.title : "ランニングシューズ、スポーツバッグとノートを配した、運動と学びのイメージ画像"} fill priority sizes="(max-width: 900px) 100vw, 65vw" />
          </div>
          <div className="cover-copy">
            <p className="eyebrow text-[var(--accent-dark)]">{featured ? "Featured story" : "About this journal"}</p>
            <h2 id="cover-title">{featured ? featured.title : <><span className="cover-phrase">仕事のこと。</span><br /><span className="cover-phrase">走ること。</span><span className="cover-phrase">日々のこと。</span></>}</h2>
            {(featured?.excerpt || !featured) && <p>{featured ? featured.excerpt : "HYROXやマラソンに取り組みながら、IT企業で働く毎日。試してわかったこと、続けて気づいたことを綴ります。"}</p>}
            <Link className="text-link" href={featured ? `/blog/${featured.slug.current}` : "/about"}>{featured ? "記事を読む" : "このブログについて"}<span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className={`journal-section${latest.length === 0 && !samples ? " journal-section-empty" : ""}`} aria-labelledby="latest-title">
          <div className="section-heading">
            <h2 id="latest-title">Journal<span>新着記事</span></h2>
            <Link href="/blog">記事一覧 <span aria-hidden="true">→</span></Link>
          </div>
          {latest.length > 0 ? <div className="story-grid">{latest.map((post) => <StoryCard key={post._id} post={post} />)}</div> : samples ? <SampleStories /> : (
            <div className="journal-empty">
              <p>{unavailable ? "記事を読み込めませんでした。時間をおいて、もう一度お試しください。" : featured ? "次の記事を準備しています。" : "最初の記事を準備しています。日々の記録はInstagramへ。"}</p>
              {unavailable || featured ? <Link className="text-link" href="/blog">記事一覧へ<span aria-hidden="true">→</span></Link> : instagram && <a className="text-link" href={instagram.href} target="_blank" rel="noreferrer">Instagram<span aria-hidden="true">↗</span></a>}
            </div>
          )}
        </section>
      </div>

      <section className="topic-band">
        <div className="site-shell journal-section">
          <div className="section-heading"><h2>Topics<span>書いていること</span></h2></div>
          <div className="topic-grid">{contentPillars.map((topic) => <div key={topic.title}><h3 className="text-[var(--accent-dark)]">{topic.title}<span className="text-[var(--foreground)]">{topic.label}</span></h3><p>{topic.description}</p></div>)}</div>
        </div>
      </section>

      <section className="site-shell journal-section about-strip">
        <div><p className="eyebrow text-[var(--accent-dark)]">About</p><h2 className="mt-4">Hello, I’m Mikity.</h2></div>
        <div><p>29歳の会社員。IT企業でBizDevとマーケティングを担当しています。HYROX、マラソン、筋力トレーニングが好きで、英語とAIも勉強中です。</p><Link className="text-link" href="/about">プロフィールを読む<span aria-hidden="true">→</span></Link></div>
      </section>
    </>
  );
}

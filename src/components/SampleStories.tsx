import Image from "next/image";
import { sampleStories } from "@/lib/sample-stories";

export default function SampleStories() {
  return (
    <>
      <p className="sample-notice">レイアウト確認用の記事サンプルです。タイトル・画像は仮の内容です。</p>
      <div className="story-grid">
        {sampleStories.map((story) => (
          <article className="story-card sample-story" key={story.id}>
            <div className="story-image">
              <Image src={story.image} alt={story.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 900px) 50vw, 33vw" />
              <span className="sample-label">SAMPLE</span>
            </div>
            <div className="story-meta"><span>{story.category}</span><span>記事イメージ</span></div>
            <h3>{story.title}</h3>
            <p className="story-excerpt">{story.excerpt}</p>
          </article>
        ))}
      </div>
    </>
  );
}

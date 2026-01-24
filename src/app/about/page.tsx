import { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Mikity",
  description: "テクノロジーとスポーツを愛するクリエイター、Mikityについて。",
};

export default function AboutPage() {
  return (
    <>
      <FadeIn>
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="mb-20 pt-10 text-center md:text-left">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 mb-10">
              <div className="absolute inset-0 rounded-full border border-gray-200/60 scale-110"></div>
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 relative">
                <Image
                  src="/profile.jpg"
                  alt="Mikity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
              About Mikity
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-gray-800 leading-relaxed">
              &quot;Exploring the intersection of technology, sports, and
              well-being.&quot;
            </p>
          </div>

          {/* Intro Text */}
          <div className="prose prose-neutral prose-lg mb-24 cursor-text">
            <p className="text-gray-600 leading-loose">
              デジタルプロダクトのデザインと開発を通じて、ユーザーにとって意味のある体験を創造することに情熱を注いでいます。
              楽天モバイルの技術動向から阪神タイガースの試合分析まで、幅広い分野で好奇心を持って学び続けています。
            </p>
            <p className="text-gray-600 leading-loose mt-8">
              このサイトでは、日々の発見や洞察、技術実験の記録、そして日々の暮らしを整えるための思考を共有していきます。
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Focus Areas */}
      <FadeIn delay={0.2}>
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl font-serif text-gray-900 mb-10 border-b border-gray-200 pb-4 inline-block pr-12">
            Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">
                Tech
              </span>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Mobile & Web
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Next.js, React,
                TailwindCSSなどのモダンなWeb技術と、モバイル向けサービスの開発・改善。
              </p>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">
                Data
              </span>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Sports Analysis
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                野球（特に阪神タイガース）のデータ分析と視覚化。セイバーメトリクスの探求。
              </p>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">
                Design
              </span>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                UI/UX Design
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                ミニマルで機能的、そして心に響くデザインの追求。
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Values */}
      <FadeIn delay={0.3}>
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl font-serif text-gray-900 mb-10 border-b border-gray-200 pb-4 inline-block pr-12">
            Values
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-baseline">
              <span className="text-sm text-gray-300 font-serif italic">
                01
              </span>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Curiosity
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  新しい技術やトレンドに対する尽きない好奇心。
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-baseline">
              <span className="text-sm text-gray-300 font-serif italic">
                02
              </span>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Quality
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  細部にこだわり、価値ある体験を創造する。
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-baseline">
              <span className="text-sm text-gray-300 font-serif italic">
                03
              </span>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Connection
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  知識と経験を共有し、コミュニティに貢献する。
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Back Link */}
      <FadeIn delay={0.4}>
        <div className="max-w-3xl mx-auto pb-12">
          <Link
            href="/"
            className="link-minimal text-sm text-gray-400 hover:text-gray-900"
          >
            ← Back to Home
          </Link>
        </div>
      </FadeIn>
    </>
  );
}

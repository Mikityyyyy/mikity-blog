import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeaturedMedia from '@/components/FeaturedMedia'
import StructuredData from '@/components/StructuredData'
import FadeIn from '@/components/FadeIn'

export default function Home() {
  return (
    <>
      <StructuredData
        type="website"
        data={{
          name: "Mikity",
          url: "https://mikityyyyy.com",
          description: "日常を整える記録と、心と身体のメンテナンス。"
        }}
      />
      
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. What this site is */}
      <FadeIn>
        <section className="py-24 text-center px-6">
          <div className="max-w-xl mx-auto space-y-4">
            <p className="text-xl font-light text-gray-900 leading-relaxed">
              This is a personal record of rebuilding everyday life.
            </p>
            <p className="text-sm text-gray-500 text-jp-body leading-loose">
              無理なく、心と生活を整えていくための記録です。
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 3. Featured Media */}
      <FadeIn delay={0.2}>
        <FeaturedMedia />
      </FadeIn>

      {/* 4. About (Short) */}
      <FadeIn>
        <section className="py-32 bg-gray-50/50 rounded-2xl mx-auto max-w-5xl px-8 flex flex-col md:flex-row items-center justify-center gap-16 text-center md:text-left my-24 border border-gray-100/50">
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
            <div className="absolute inset-0 rounded-full border border-gray-200/60 scale-110"></div>
            {/* Using a placeholder div if image fails, but assume profile.jpg exists */}
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                <img 
                  src="/profile.png" 
                  alt="Mikity" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100"
                />
            </div>
          </div>
          
          <div className="max-w-lg space-y-8">
             <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800 font-serif italic">
              &quot;A company employee rebuilding life through routine, movement, and reflection.&quot;
            </p>
            <div>
              <Link href="/about" className="link-minimal text-xs text-gray-400 tracking-[0.2em] uppercase hover:text-black">
                More about me
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 5. Quiet CTA */}
      <FadeIn>
        <section className="py-40 text-center px-6">
          <p className="text-gray-400 text-sm mb-10 tracking-widest uppercase">
            If something resonated
          </p>
          <Link 
            href="/contact" 
            className="inline-block border border-gray-200 text-gray-600 px-10 py-4 rounded-full text-sm hover:border-gray-900 hover:text-black transition-all duration-500 hover:scale-105 bg-white hover:shadow-lg hover:shadow-gray-200/50"
          >
            Contact
          </Link>
        </section>
      </FadeIn>
    </>
  )
}

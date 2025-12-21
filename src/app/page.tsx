import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeaturedMedia from '@/components/FeaturedMedia'
import StructuredData from '@/components/StructuredData'

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
      <section className="py-16 text-center px-6">
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-xl font-light text-gray-900 leading-relaxed">
            This is a personal record of rebuilding everyday life.
          </p>
          <p className="text-sm text-gray-500 text-jp-body leading-loose">
            無理なく、心と生活を整えていくための記録です。
          </p>
        </div>
      </section>

      {/* 3. Featured Media */}
      <FeaturedMedia />

      {/* 4. About (Short) */}
      <section className="py-24 bg-gray-50 rounded-lg mx-auto max-w-4xl px-8 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
          <div className="absolute inset-0 rounded-full border border-gray-200"></div>
          {/* Using a placeholder div if image fails, but assume profile.jpg exists */}
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 relative">
             <img 
               src="/profile.jpg" 
               alt="Mikity" 
               className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
             />
          </div>
        </div>
        
        <div className="max-w-lg space-y-6">
           <p className="text-lg md:text-xl font-light leading-relaxed text-gray-800 font-serif italic">
            "A company employee rebuilding life through routine, movement, and reflection."
          </p>
          <div>
            <Link href="/about" className="link-minimal text-sm text-gray-500 tracking-widest uppercase hover:text-black">
              More about me
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Quiet CTA */}
      <section className="py-32 text-center px-6">
        <p className="text-gray-400 text-sm mb-8 tracking-wide">
          If something resonated, feel free to reach out.
        </p>
        <Link 
          href="/contact" 
          className="inline-block border border-gray-200 text-gray-600 px-8 py-3 rounded-full text-sm hover:border-gray-900 hover:text-black transition-all duration-300"
        >
          Contact
        </Link>
      </section>
    </>
  )
}

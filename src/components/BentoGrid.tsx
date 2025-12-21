import Link from 'next/link'
import Image from 'next/image'

interface BentoItemProps {
  className?: string
  title: string
  subtitle?: string
  href: string
  children?: React.ReactNode
  visual?: React.ReactNode
}

const BentoItem = ({ className, title, subtitle, href, children, visual }: BentoItemProps) => (
  <Link 
    href={href}
    className={`bento-card group flex flex-col justify-between p-6 ${className}`}
  >
    <div className="z-10 relative">
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm text-white/50">{subtitle}</p>
      )}
      <div className="mt-4 text-white/80 text-sm leading-relaxed whitespace-pre-line">
        {children}
      </div>
    </div>
    
    {visual && (
      <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
        {visual}
      </div>
    )}

    {/* Hover Arrow */}
    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-blue-400">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </Link>
)

export default function BentoGrid() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
        
        {/* Available for Work Status - Small */}
        <div className="bento-card md:col-span-1 p-6 flex flex-col justify-center items-center text-center bg-green-500/10 border-green-500/20">
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse absolute -top-1 -right-1"></div>
            <div className="bg-white/10 p-3 rounded-full mb-3">
              <span className="text-2xl">⚡️</span>
            </div>
          </div>
          <h3 className="text-white font-bold mb-1">Available</h3>
          <p className="text-xs text-green-400">お仕事募集中</p>
        </div>

        {/* Profile - Large */}
        <Link href="/about" className="bento-card md:col-span-2 md:row-span-2 group relative overflow-hidden">
          <Image
            src="/profile.jpg" 
            alt="Mikity Profile"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="text-3xl font-bold text-white mb-2">About Me</h3>
            <p className="text-white/70 max-w-sm">
              東京を拠点に活動するデザイナー・開発者。
              デザインとエンジニアリングの境界を越えて、
              価値ある体験を作り出します。
            </p>
          </div>
        </Link>

        {/* Latest Story - Medium */}
        <BentoItem
          href="/blog"
          title="Latest Stories"
          subtitle="最新記事"
          className="md:col-span-1 md:row-span-1 bg-blue-500/5 group"
          visual={
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
          }
        >
          Tech, Design, Baseball.
          <br/>
          日々の学びや思考のアウトプット。
        </BentoItem>

        {/* Featured Work - Expanded for Portfolio Feel */}
        <BentoItem
          href="/work"
          title="Recent Work"
          subtitle="制作実績"
          className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-purple-500/10 to-indigo-500/10"
          visual={
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400 via-transparent to-transparent"></div>
          }
        >
          <div className="flex gap-4 mt-2">
            <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-full h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded mb-2"></div>
              <p className="text-xs text-white/60">Corporate Site</p>
              <p className="font-bold text-sm">FinTech Co.</p>
            </div>
            <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-full h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded mb-2"></div>
              <p className="text-xs text-white/60">Mobile App</p>
              <p className="font-bold text-sm">Task Master</p>
            </div>
          </div>
        </BentoItem>

         {/* Social: Twitter */}
         <Link 
            href="https://twitter.com/mikity" 
            target="_blank"
            className="bento-card flex items-center justify-center bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border-[#1DA1F2]/20"
         >
            <svg className="w-8 h-8 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
         </Link>


         {/* Social: YouTube */}
         <Link 
            href="https://youtube.com/@mikity"
            target="_blank"
            className="bento-card flex items-center justify-center bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border-[#FF0000]/20"
         >
            <svg className="w-8 h-8 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
         </Link>

         {/* Tech Stack */}
         <div className="bento-card md:col-span-2 flex flex-col justify-center p-6">
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Tech Stack</h3>
            <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
               {/* Just placeholders for tech icons using text for now to keep it simple/fast */}
               <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono border border-white/10">Next.js</span>
               <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono border border-white/10">TypeScript</span>
               <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono border border-white/10">Tailwind</span>
               <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono border border-white/10">Figma</span>
            </div>
         </div>

      </div>
    </section>
  )
}

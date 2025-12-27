import { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Contact - Mikity',
  description: 'お仕事のご依頼、コラボレーション、その他お問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Hero Section */}
        <FadeIn>
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 font-serif italic tracking-tight">
              Let&apos;s Connect
            </h1>
            <p className="text-sm md:text-base text-gray-500 leading-loose font-sans tracking-wide uppercase">
              COLLABORATION / WORK / CHAT
            </p>
          </div>
        </FadeIn>

        {/* Contact Options - Minimal */}
        <FadeIn delay={0.2}>
          <div className="max-w-md mx-auto text-center space-y-12">
            <div>
              <p className="text-gray-900 text-lg mb-2 font-serif">Social Media</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-jp">
                DMにてお気軽にご連絡ください。<br/>
                お仕事のご依頼もこちらから受け付けております。
              </p>
              
              <div className="flex justify-center items-center space-x-12">
                <a 
                  href="https://x.com/mikitydaze1997" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-3"
                  aria-label="X (Twitter)"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-50 transition-all duration-500">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-300 tracking-widest group-hover:text-gray-500 transition-colors duration-500">X</span>
                </a>

                <a 
                  href="https://instagram.com/mikity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-3"
                  aria-label="Instagram"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-50 transition-all duration-500">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-300 tracking-widest group-hover:text-gray-500 transition-colors duration-500">INSTAGRAM</span>
                </a>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100">
               <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-gray-50/50">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400 tracking-wider">RESPONSE IN 24H</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
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
                  href="https://x.com/mikity__97" 
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
                  href="https://www.instagram.com/mikity__97/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-3"
                  aria-label="Instagram"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-50 transition-all duration-500">
                    <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-500" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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
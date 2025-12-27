import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Mikity',
  description: 'お仕事のご依頼、コラボレーション、その他お問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            お仕事のご相談、コラボレーション、
            <br />
            その他お気軽にお問い合わせください。
          </p>
        </div>

        {/* Contact Options */}
        <div className="max-w-xl mx-auto mb-16">
          {/* Social Only */}
          <div className="bg-gray-50 rounded-3xl p-10 hover:bg-gray-100 transition-colors duration-300 text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">👋</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media</h3>
            <p className="text-gray-600 mb-8 leading-loose">
              DMにてお気軽にご連絡ください。<br/>
              お仕事のご依頼もこちらから受け付けております。
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://x.com/mikitydaze1997" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-gray-600 hover:text-black hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/mikity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-gray-600 hover:text-pink-500 hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.759 3.708 13.608 3.708 12.311c0-1.297.49-2.448 1.42-3.321c.871-.832 2.024-1.297 3.321-1.297c1.297 0 2.448.465 3.321 1.297c.832.873 1.297 2.024 1.297 3.321c0 1.297-.465 2.448-1.297 3.321c-.873.807-2.024 1.297-3.321 1.297zm7.83-6.677c-.297 0-.554-.257-.554-.554c0-.297.257-.554.554-.554c.297 0 .554.257.554.554c0 .297-.257.554-.554.554zm2.448-2.448c0-1.297-.49-2.448-1.297-3.321c-.832-.832-2.024-1.297-3.321-1.297H8.449c-1.297 0-2.448.465-3.321 1.297c-.832.873-1.297 2.024-1.297 3.321v7.83c0 1.297.465 2.448 1.297 3.321c.873.832 2.024 1.297 3.321 1.297h7.83c1.297 0 2.448-.465 3.321-1.297c.832-.873 1.297-2.024 1.297-3.321V8.863z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">通常24時間以内にご返信いたします</span>
          </div>
        </div>


      </div>
    </div>
  )
}
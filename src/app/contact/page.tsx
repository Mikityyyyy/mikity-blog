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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email */}
          <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
            <p className="text-gray-600 mb-4">
              お仕事のご依頼やご質問は
              メールでお気軽にどうぞ
            </p>
            <a 
              href="mailto:contact@mikityyyyy.com" 
              className="inline-flex items-center text-gray-900 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              contact@mikityyyyy.com
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Social */}
          <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media</h3>
            <p className="text-gray-600 mb-4">
              SNSでも気軽に
              お声がけください
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/mikity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/mikity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
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

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            こんなご相談をお待ちしています
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">💼</span>
              </div>
              <p className="text-sm text-gray-600">お仕事のご依頼</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">🤝</span>
              </div>
              <p className="text-sm text-gray-600">コラボレーション</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">💡</span>
              </div>
              <p className="text-sm text-gray-600">技術相談</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">📝</span>
              </div>
              <p className="text-sm text-gray-600">記事へのご質問</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
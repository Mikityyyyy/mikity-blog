import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/profile.jpg"
                  alt="Mikity Profile"
                  width={420}
                  height={420}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Modern decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl opacity-90 animate-pulse rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl opacity-80 animate-pulse delay-1000 -rotate-12"></div>
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-red-600 rounded-full opacity-70 animate-bounce delay-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-red-200 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-gray-700">2025年、新しい挑戦を始めます</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 mb-2">こんにちは、</span>
                <span className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <div className="relative">
                        <span className="text-white font-black text-3xl md:text-4xl tracking-tight">M</span>
                        <div className="absolute -top-1 -right-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl blur-xl opacity-30 -z-10"></div>
                  </div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-red-500 font-black tracking-tight">
                    Mikity
                  </span>
                </span>
                <span className="block text-gray-900 text-4xl md:text-5xl">です</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                楽天モバイルと阪神タイガースを愛する
                <br className="hidden md:block" />
                <span className="font-semibold text-gray-800">テクノロジー＆スポーツブロガー</span>
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                最新のモバイル技術情報から熱い野球観戦レポートまで、
                <br className="hidden md:block" />
                情熱を込めて発信しています。
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">50+</div>
                  <div className="text-sm text-gray-600">記事数</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">2</div>
                  <div className="text-sm text-gray-600">専門分野</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">365</div>
                  <div className="text-sm text-gray-600">日/年</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Link
                href="/blog"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-2xl hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                最新記事を読む
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-red-200 text-gray-800 font-semibold rounded-2xl hover:bg-red-50 hover:border-red-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                プロフィール
              </Link>
            </div>

            {/* Social Links & Tags */}
            <div className="space-y-6 pt-8">
              {/* Topic Tags */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium border border-red-200">
                  📱 楽天モバイル
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium border border-orange-200">
                  ⚾ 阪神タイガース
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                  💻 テクノロジー
                </span>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://twitter.com/mikity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
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
                  className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 hover:text-pink-500 hover:border-pink-200 hover:bg-pink-50 transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.759 3.708 13.608 3.708 12.311c0-1.297.49-2.448 1.42-3.321c.871-.832 2.024-1.297 3.321-1.297c1.297 0 2.448.465 3.321 1.297c.832.873 1.297 2.024 1.297 3.321c0 1.297-.465 2.448-1.297 3.321c-.873.807-2.024 1.297-3.321 1.297zm7.83-6.677c-.297 0-.554-.257-.554-.554c0-.297.257-.554.554-.554c.297 0 .554.257.554.554c0 .297-.257.554-.554.554zm2.448-2.448c0-1.297-.49-2.448-1.297-3.321c-.832-.832-2.024-1.297-3.321-1.297H8.449c-1.297 0-2.448.465-3.321 1.297c-.832.873-1.297 2.024-1.297 3.321v7.83c0 1.297.465 2.448 1.297 3.321c.873.832 2.024 1.297 3.321 1.297h7.83c1.297 0 2.448-.465 3.321-1.297c.832-.873 1.297-2.024 1.297-3.321V8.863z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@mikity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <span className="text-sm font-medium">もっと見る</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full relative">
              <div className="w-1 h-3 bg-gradient-to-b from-red-500 to-orange-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
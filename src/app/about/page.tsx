import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Mikity',
  description: 'テクノロジーとスポーツを愛するクリエイター、Mikityについて。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-8 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Mikity"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            About Mikity
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            テクノロジーとスポーツの交差点で
            <br />
            新しい視点を探求し続けています。
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Background
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  デジタルプロダクトのデザインと開発を通じて、
                  ユーザーにとって意味のある体験を創造することに情熱を注いでいます。
                </p>
                <p>
                  楽天モバイルの技術動向から阪神タイガースの試合分析まで、
                  幅広い分野で好奇心を持って学び続けています。
                </p>
                <p>
                  このサイトでは、日々の発見や洞察、
                  技術実験の記録を共有していきます。
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Focus Areas</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span>📱</span>
                    <span>Mobile Technology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>💻</span>
                    <span>Web Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⚾</span>
                    <span>Sports Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🎨</span>
                    <span>UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Curiosity</h3>
                <p className="text-gray-600">
                  新しい技術やトレンドに対する
                  尽きない好奇心
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Quality</h3>
                <p className="text-gray-600">
                  細部にこだわり、
                  価値ある体験を創造
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Connection</h3>
                <p className="text-gray-600">
                  知識と経験を共有し、
                  コミュニティに貢献
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
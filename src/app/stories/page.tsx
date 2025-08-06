import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stories - Mikity',
  description: '私が体験し、学んだすべての物語。技術トレンド、モバイル業界、スポーツの世界について。',
}

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            日々の発見、学び、体験を通じて得た洞察を
            <br />
            ストーリーとして共有しています。
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-3xl">📝</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ストーリーを準備中
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            近日中に、技術体験やモバイル業界の洞察、
            スポーツ観戦記などの記事を公開予定です。
          </p>
          
          {/* Newsletter signup placeholder */}
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">準備中</span>
          </div>
        </div>
      </div>
    </div>
  )
}
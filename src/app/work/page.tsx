import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work - Mikity',
  description: 'プロジェクト、ガジェットレビュー、技術実験など、私の作品と取り組みをご覧ください。',
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            プロジェクト、ガジェットレビュー、技術実験など
            <br />
            私の作品と取り組みをご紹介します。
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
              <span className="text-xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Tech</h3>
            <p className="text-gray-600">
              楽天モバイルをはじめとする
              モバイル技術の最新トレンド
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
              <span className="text-xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Development</h3>
            <p className="text-gray-600">
              ウェブ開発、アプリ開発、
              技術実験の記録
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
              <span className="text-xl">⚾</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sports Analysis</h3>
            <p className="text-gray-600">
              阪神タイガースを中心とした
              スポーツ観戦と分析
            </p>
          </div>
        </div>

        {/* Coming Soon Content */}
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            プロジェクトを準備中
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            新しいプロジェクトや詳細なガジェットレビュー、
            技術解説記事を準備中です。
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">開発中</span>
          </div>
        </div>
      </div>
    </div>
  )
}
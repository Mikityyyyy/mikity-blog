import Link from 'next/link'
import Image from 'next/image'

// モックデータ（後でSanityから取得）
const mockPosts = [
  {
    _id: '1',
    title: 'Next.js 15の新機能とパフォーマンス改善について',
    slug: { current: 'nextjs-15-new-features' },
    excerpt: 'Next.js 15がリリースされ、多くの新機能とパフォーマンス改善が導入されました。主要な変更点を詳しく解説します。',
    publishedAt: '2024-01-15',
    mainImage: {
      asset: { _ref: 'mock-image-1' },
      alt: 'Next.js 15'
    },
    categories: [{ title: 'Tech', slug: { current: 'tech' } }],
    readTime: 5
  },
  {
    _id: '2',
    title: 'TypeScriptを使ったクリーンアーキテクチャの実装',
    slug: { current: 'typescript-clean-architecture' },
    excerpt: 'TypeScriptでクリーンアーキテクチャを実装する際のベストプラクティスとパターンについて解説します。',
    publishedAt: '2024-01-10',
    mainImage: {
      asset: { _ref: 'mock-image-2' },
      alt: 'TypeScript Clean Architecture'
    },
    categories: [{ title: 'Architecture', slug: { current: 'architecture' } }],
    readTime: 8
  },
  {
    _id: '3',
    title: 'AIを活用したWebアプリケーション開発の最新トレンド',
    slug: { current: 'ai-web-development-trends' },
    excerpt: 'AI技術をWebアプリケーションに統合する際の手法と、最新のツールやライブラリについてまとめました。',
    publishedAt: '2024-01-05',
    mainImage: {
      asset: { _ref: 'mock-image-3' },
      alt: 'AI Web Development'
    },
    categories: [{ title: 'AI', slug: { current: 'ai' } }],
    readTime: 6
  }
]

export default function LatestBlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            最新の技術トレンドや実践的なノウハウを定期的に発信しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockPosts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug.current}`}>
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {post.mainImage.alt}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {post.categories[0].title}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {post.readTime}分で読める
                  </span>
                </div>

                <Link href={`/blog/${post.slug.current}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    続きを読む
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            すべての記事を見る
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
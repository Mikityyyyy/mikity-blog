import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'ブログ | Mikity',
  description: '最新の技術トレンドや実践的なノウハウを発信するMikityのブログです。',
}

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
    tags: ['Next.js', 'React', 'Performance'],
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
    tags: ['TypeScript', 'Architecture', 'Clean Code'],
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
    tags: ['AI', 'Machine Learning', 'Web Development'],
    readTime: 6
  },
  {
    _id: '4',
    title: 'React 19の新機能「React Compiler」を試してみた',
    slug: { current: 'react-19-compiler' },
    excerpt: 'React 19で導入される新機能「React Compiler」について、実際に試してみた結果と感想をまとめました。',
    publishedAt: '2024-01-01',
    mainImage: {
      asset: { _ref: 'mock-image-4' },
      alt: 'React 19 Compiler'
    },
    categories: [{ title: 'Tech', slug: { current: 'tech' } }],
    tags: ['React', 'JavaScript', 'Performance'],
    readTime: 7
  },
  {
    _id: '5',
    title: 'Tailwind CSSでコンポーネント設計を効率化する方法',
    slug: { current: 'tailwind-component-design' },
    excerpt: 'Tailwind CSSを使って効率的なコンポーネント設計を行う手法と、メンテナンス性を向上させるテクニックを紹介します。',
    publishedAt: '2023-12-28',
    mainImage: {
      asset: { _ref: 'mock-image-5' },
      alt: 'Tailwind CSS Component Design'
    },
    categories: [{ title: 'Design', slug: { current: 'design' } }],
    tags: ['Tailwind CSS', 'CSS', 'Design System'],
    readTime: 4
  },
  {
    _id: '6',
    title: 'Sanity CMSとNext.jsで構築する高速ブログシステム',
    slug: { current: 'sanity-nextjs-blog-system' },
    excerpt: 'Sanity CMSとNext.jsを組み合わせて、高速でSEOに強いブログシステムを構築する方法を詳しく説明します。',
    publishedAt: '2023-12-25',
    mainImage: {
      asset: { _ref: 'mock-image-6' },
      alt: 'Sanity CMS + Next.js'
    },
    categories: [{ title: 'Tech', slug: { current: 'tech' } }],
    tags: ['Sanity', 'Next.js', 'CMS'],
    readTime: 9
  }
]

const categories = [
  { title: 'すべて', slug: { current: 'all' }, count: 6 },
  { title: 'Tech', slug: { current: 'tech' }, count: 3 },
  { title: 'Architecture', slug: { current: 'architecture' }, count: 1 },
  { title: 'AI', slug: { current: 'ai' }, count: 1 },
  { title: 'Design', slug: { current: 'design' }, count: 1 }
]

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          最新の技術トレンドや実践的なノウハウを定期的に発信しています
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="記事を検索..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.slug.current}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category.slug.current === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.title} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockPosts.map((post) => (
          <article
            key={post._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                <Link href={`/blog/category/${post.categories[0].slug.current}`}>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                    {post.categories[0].title}
                  </span>
                </Link>
                <span className="text-gray-500 text-sm">
                  {post.readTime}分で読める
                </span>
              </div>

              <Link href={`/blog/${post.slug.current}`}>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="text-xs text-gray-500 hover:text-blue-600 transition-colors">
                      #{tag}
                    </span>
                  </Link>
                ))}
              </div>

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

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-colors">
          さらに記事を読み込む
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
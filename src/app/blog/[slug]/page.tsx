import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// モックデータ（後でSanityから取得）
const mockPost = {
  _id: '1',
  title: 'Next.js 15の新機能とパフォーマンス改善について',
  slug: { current: 'nextjs-15-new-features' },
  excerpt: 'Next.js 15がリリースされ、多くの新機能とパフォーマンス改善が導入されました。主要な変更点を詳しく解説します。',
  content: `
    <h2>Next.js 15の主要な新機能</h2>
    <p>Next.js 15では、パフォーマンスの大幅な改善と開発者体験の向上が図られています。</p>
    
    <h3>1. React 19のサポート</h3>
    <p>React 19の新機能を活用できるようになり、より効率的なコンポーネント開発が可能になりました。</p>
    
    <h3>2. Turbopackの安定化</h3>
    <p>Turbopackがより安定し、ビルド時間が大幅に短縮されました。</p>
    
    <h3>3. 新しいCaching戦略</h3>
    <p>より柔軟なキャッシング戦略により、パフォーマンスが向上しています。</p>
    
    <h2>パフォーマンス改善</h2>
    <p>具体的な数値として、以下のような改善が見られます：</p>
    <ul>
      <li>ビルド時間: 最大30%短縮</li>
      <li>初回ページロード: 平均15%高速化</li>
      <li>ホットリロード: 50%高速化</li>
    </ul>
    
    <h2>まとめ</h2>
    <p>Next.js 15は、これまでで最も大きなパフォーマンス改善を実現しています。新しいプロジェクトでは積極的に採用を検討することをお勧めします。</p>
  `,
  publishedAt: '2024-01-15',
  updatedAt: '2024-01-16',
  mainImage: {
    asset: { _ref: 'mock-image-1' },
    alt: 'Next.js 15'
  },
  categories: [{ title: 'Tech', slug: { current: 'tech' } }],
  tags: ['Next.js', 'React', 'Performance'],
  author: {
    name: 'Mikity',
    slug: { current: 'mikity' },
    bio: 'フルスタック開発者・テクニカルライター',
    image: { asset: { _ref: 'author-image' } }
  },
  readTime: 5,
  seo: {
    metaTitle: 'Next.js 15の新機能とパフォーマンス改善について | Mikity',
    metaDescription: 'Next.js 15がリリースされ、多くの新機能とパフォーマンス改善が導入されました。主要な変更点を詳しく解説します。',
    keywords: ['Next.js', 'React', 'Web開発', 'パフォーマンス']
  }
}

const relatedPosts = [
  {
    _id: '2',
    title: 'React 19の新機能「React Compiler」を試してみた',
    slug: { current: 'react-19-compiler' },
    mainImage: { asset: { _ref: 'mock-image-2' }, alt: 'React 19' },
    publishedAt: '2024-01-01'
  },
  {
    _id: '3',
    title: 'TypeScriptを使ったクリーンアーキテクチャの実装',
    slug: { current: 'typescript-clean-architecture' },
    mainImage: { asset: { _ref: 'mock-image-3' }, alt: 'TypeScript' },
    publishedAt: '2024-01-10'
  }
]

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  // 実際の実装では、Sanityからデータを取得
  if (slug !== 'nextjs-15-new-features') {
    return {
      title: '記事が見つかりません | Mikity',
    }
  }

  return {
    title: mockPost.seo.metaTitle,
    description: mockPost.seo.metaDescription,
    keywords: mockPost.seo.keywords,
    openGraph: {
      title: mockPost.seo.metaTitle,
      description: mockPost.seo.metaDescription,
      type: 'article',
      publishedTime: mockPost.publishedAt,
      modifiedTime: mockPost.updatedAt,
      authors: [mockPost.author.name],
      tags: mockPost.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: mockPost.seo.metaTitle,
      description: mockPost.seo.metaDescription,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  // 実際の実装では、Sanityからデータを取得
  if (slug !== 'nextjs-15-new-features') {
    notFound()
  }

  const post = mockPost

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ホーム
            </Link>
          </li>
          <li>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              ブログ
            </Link>
          </li>
          <li>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </li>
          <li className="text-gray-900 truncate">{post.title}</li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-6">
          <Link href={`/blog/category/${post.categories[0].slug.current}`}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              {post.categories[0].title}
            </span>
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold mr-3">
              M
            </div>
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm">{post.author.bio}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{post.readTime}分で読める</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-8">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white font-semibold text-2xl">
              {post.mainImage.alt}
            </span>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-gray-600 font-medium">シェア:</span>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.429 0h17.143C22.286 0 24 1.714 24 3.429v17.143C24 22.286 22.286 24 20.571 24H3.429C1.714 24 0 22.286 0 20.571V3.429C0 1.714 1.714 0 3.429 0z"/>
            </svg>
            はてブ
          </button>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Tags */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">タグ</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            M
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author.name}</h3>
            <p className="text-gray-600 mb-4">{post.author.bio}</p>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">関連記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost._id}
              href={`/blog/${relatedPost.slug.current}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {relatedPost.mainImage.alt}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {relatedPost.title}
                </h3>
                <time className="text-sm text-gray-500 mt-2 block">
                  {new Date(relatedPost.publishedAt).toLocaleDateString('ja-JP')}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          ブログ一覧に戻る
        </Link>
      </div>
    </article>
  )
}
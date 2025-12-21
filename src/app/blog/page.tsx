import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Mikity',
  description: '日々の中で感じたことやノウハウを発信しています',
}

// モックデータ（新カテゴリに合わせて修正）
const mockPosts = [
  {
    _id: '1',
    title: '朝の時間を最適化する3つの習慣',
    slug: { current: 'morning-routine-habit' },
    excerpt: '静かな朝の時間が、1日の質を決めます。私が実践している朝のルーティンを紹介します。',
    publishedAt: '2024-03-15',
    category: { title: 'Routine', slug: { current: 'routine' } },
    readTime: 5
  },
  {
    _id: '2',
    title: 'ハイブリッド・アスリートとしてのトレーニング計画',
    slug: { current: 'hybrid-athlete-training' },
    excerpt: 'ランニングと筋力トレーニングを両立させるための、週間のスケジュール管理について。',
    publishedAt: '2024-03-10',
    category: { title: 'Training', slug: { current: 'training' } },
    readTime: 8
  },
  {
    _id: '3',
    title: 'デジタルデトックスと週末の過ごし方',
    slug: { current: 'digital-detox-weekend' },
    excerpt: '情報の洪水から距離を置き、自分自身を取り戻すための週末のリバランス方法。',
    publishedAt: '2024-03-05',
    category: { title: 'Rebalance', slug: { current: 'rebalance' } },
    readTime: 6
  },
    {
    _id: '4',
    title: '仕事と生活の境界線を再定義する',
    slug: { current: 'redefining-work-life' },
    excerpt: 'リモートワーク時代における、スイッチの切り替えとメンタルヘルスについて。',
    publishedAt: '2024-02-28',
    category: { title: 'Rebalance', slug: { current: 'rebalance' } },
    readTime: 7
  },
]

const categories = [
  { title: 'All', slug: { current: 'all' } },
  { title: 'Rebalance', slug: { current: 'rebalance' } },
  { title: 'Routine', slug: { current: 'routine' } },
  { title: 'Training', slug: { current: 'training' } }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">Blog</h1>
          <p className="text-gray-500 text-sm tracking-widest font-sans uppercase">
            Thoughts & Know-how
          </p>
        </div>

        {/* Categories (Minimal Tab style) */}
        <div className="mb-24 flex justify-center">
          <div className="flex gap-8 border-b border-gray-100 pb-4 px-4">
            {categories.map((category) => (
              <button
                key={category.slug.current}
                className={`text-xs uppercase tracking-widest transition-all duration-300 relative py-2 ${
                  category.slug.current === 'all'
                    ? 'text-gray-900'
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {category.title}
                {category.slug.current === 'all' && (
                  <span className="absolute bottom-[-17px] left-0 w-full h-[1px] bg-gray-900"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid - Minimal Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post, index) => (
            <article 
              key={post._id} 
              className="group flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-500"
            >
              <Link href={`/blog/${post.slug.current}`} className="flex flex-col h-full">
                
                {/* Card Image */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-50 relative">
                   <img 
                      src={`/blog_image_${(index % 4) + 1}.webp`} 
                      alt={post.title}
                      className="object-cover w-full h-full grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                    {/* Category Overlay (Minimal) */}
                    <span className="absolute top-4 left-4 text-[10px] font-bold text-gray-800 bg-white/90 backdrop-blur-sm px-2 py-1 uppercase tracking-widest">
                      {post.category.title}
                    </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta: Date & Read Time */}
                  <div className="flex items-center justify-between text-xs text-gray-400 font-sans mb-3">
                    <time>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>{post.readTime} min read</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-gray-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 font-jp flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Footer: Read More & Tags */}
                  <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                     <span className="text-xs text-gray-900 border-b border-transparent group-hover:border-gray-900 transition-all duration-300 pb-0.5">
                       Read Story
                     </span>
                     {/* Optional: Show first tag if available (mock data doesn't have tags in this simple version, but layout handles it) */}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Load More (Quiet) */}
        <div className="mt-24 text-center">
            <span className="text-xs text-gray-300 uppercase tracking-widest cursor-not-allowed">
              End of list
            </span>
        </div>
      </div>
    </div>
  )
}
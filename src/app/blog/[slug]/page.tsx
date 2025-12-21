import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// モックデータ（後でSanityから取得）
const mockPost = {
  _id: '1',
  title: '朝の時間を最適化する3つの習慣',
  slug: { current: 'morning-routine-habit' },
  excerpt: '静かな朝の時間が、1日の質を決めます。私が実践している朝のルーティンを紹介します。',
  content: `
    <p>なぜ、朝なのか。</p>
    <p>それは、誰にも邪魔されない唯一の時間だからです。メールも、通知も鳴らない静寂の中で、自分自身と向き合うことができる。</p>
    
    <h3>1. コップ一杯の白湯を飲む</h3>
    <p>寝ている間に失われた水分を補給し、内臓をゆっくりと目覚めさせます。この「熱すぎず、冷たすぎない」温度が、心身のバランスを整えるスイッチになります。</p>
    
    <h3>2. 10分間の瞑想</h3>
    <p>思考を空っぽにするのではなく、ただ流れてくる感情を観察する。今日のタスクを考えるのではなく、「今、ここにいる」感覚を味わう時間。</p>
    
    <h3>3. ジャーナリング</h3>
    <p>頭に浮かんだことを書き出す。不安も、期待も、アイデアも。書くことで思考は客観化され、驚くほど頭がクリアになります。</p>
    
    <p>これらの習慣は、劇的な変化をもたらすものではありません。しかし、毎日の積み重ねが、揺るがない自分を作るのです。</p>
  `,
  publishedAt: '2024-03-15',
  category: { title: 'Routine', slug: { current: 'routine' } },
  readTime: 5
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  // Mock check
  // if (slug !== 'morning-routine-habit') ... 

  return {
    title: `${mockPost.title} | Mikity`,
    description: mockPost.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  // Mock data usage
  if (slug !== 'morning-routine-habit' && slug !== 'nextjs-15-new-features') {
     // For demo purposes, we show the mock post for any slug, or strictly 404
     // notFound()
  }
  
  // Always use mockPost for layout verification
  const post = mockPost

  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        
        {/* Header */}
        <header className="mb-16 text-center">
            <div className="mb-6">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-full">
                    {post.category.title}
                </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif italic text-gray-900 mb-6 leading-tight tracking-tight">
                {post.title}
            </h1>

            <time className="text-sm text-gray-400 tracking-wider font-sans uppercase">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </time>
        </header>

        {/* Main Image */}
        <div className="mb-16 aspect-[16/9] w-full bg-gray-100 overflow-hidden rounded-sm relative">
            <img 
               src="/blog_image_1.webp" 
               alt={post.title} 
               className="object-cover w-full h-full grayscale-[20%]"
            />
        </div>

        {/* Content */}
        <div className="prose prose-gray prose-lg mx-auto prose-headings:font-medium prose-p:text-gray-600 prose-p:leading-8 prose-li:text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer / Navigation */}
        <div className="mt-24 pt-12 border-t border-gray-100 flex justify-between items-center text-sm">
            <Link href="/blog" className="text-gray-400 hover:text-black transition-colors tracking-wide">
                ← Back to Blog
            </Link>
            
            {/* Share could go here */}
        </div>
      </div>
    </article>
  )
}
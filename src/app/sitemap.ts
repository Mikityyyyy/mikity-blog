import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/sanity-queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mikitylife.com'
  
  // 静的ページ
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  try {
    // ブログ記事
    const posts = await getPosts()
    const blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

    return [...staticPages, ...blogPages]
  } catch (error) {
    console.error('Sitemap Sanity error:', error)
    return staticPages
  }
}

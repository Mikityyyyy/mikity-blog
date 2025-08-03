import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import LatestBlogSection from '@/components/LatestBlogSection'
import { getLatestPosts } from '@/lib/sanity-queries'

export default async function Home() {
  const posts = await getLatestPosts(3)

  return (
    <>
      <HeroSection />
      <AboutSection />
      <LatestBlogSection posts={posts} />
    </>
  )
}

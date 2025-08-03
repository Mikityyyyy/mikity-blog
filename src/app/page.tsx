import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import LatestBlogSection from '@/components/LatestBlogSection'

export default async function Home() {
  // 一時的にSanity接続を無効化
  const posts: any[] = []

  return (
    <>
      <HeroSection />
      <AboutSection />
      <LatestBlogSection posts={posts} />
    </>
  )
}

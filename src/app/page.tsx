import HeroSection from '@/components/HeroSection'
import StructuredData from '@/components/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData
        type="website"
        data={{
          name: "Mikity",
          url: "https://mikityyyyy.com",
          description: "テクノロジーとデザインの交差点で、意味のある体験を創造するクリエイター。"
        }}
      />
      <StructuredData
        type="person"
        data={{
          name: "Mikity",
          url: "https://mikityyyyy.com",
          description: "Creative Designer & Developer specializing in technology and sports content.",
          socialLinks: [
            "https://twitter.com/mikity",
            "https://instagram.com/mikity",
            "https://youtube.com/@mikity"
          ]
        }}
      />
      <HeroSection />
    </>
  )
}

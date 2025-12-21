
import Link from 'next/link'

interface MediaItemProps {
  title: string
  description: string
  buttonText: string
  href?: string
}

const MediaItem = ({ title, description, buttonText, href }: MediaItemProps) => {
  const Content = () => (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-100 group">
      <div className="mb-4 md:mb-0">
        <h3 className="text-2xl font-normal text-gray-900 mb-2 group-hover:pl-2 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-jp-body text-sm tracking-widest">{description}</p>
      </div>
      <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-black transition-colors uppercase tracking-widest">
        {buttonText} 
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" className="block">
        <Content />
      </Link>
    )
  }

  return (
    <div className="cursor-default opacity-60">
      <Content />
    </div>
  )
}

export default function FeaturedMedia() {
  return (
    <section className="py-24">
      <div className="max-w-2xl mx-auto">
        <MediaItem 
          title="YouTube"
          description="生き方を整える日常Vlog"
          buttonText="Watch"
          href="https://www.youtube.com/@mikityvlog"
        />
        <MediaItem 
          title="Podcast"
          description="すり減らない、心とからだの整え方"
          buttonText="Listen"
        />
        <MediaItem 
          title="Note"
          description="思考と習慣の記録"
          buttonText="Read"
          href="https://note.com/mikity__97"
        />
      </div>
    </section>
  )
}

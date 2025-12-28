
import Link from 'next/link'
import Image from 'next/image'

interface MediaItemProps {
  title: string
  description: string
  buttonText: string
  href?: string
  icon?: React.ReactNode
}

const MediaItem = ({ title, description, buttonText, href, icon }: MediaItemProps) => {
  const Content = () => (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-100 group">
      <div className="flex items-start md:items-center mb-4 md:mb-0">
        {/* Icon */}
        <div className="mr-6 text-gray-300 group-hover:text-black transition-colors duration-300 mt-1 md:mt-0">
          {icon}
        </div>
        
        <div>
          <h3 className="text-2xl font-normal text-gray-900 mb-2 group-hover:pl-2 transition-all duration-300 font-serif italic">
            {title}
          </h3>
          <p className="text-gray-500 text-jp-body text-sm tracking-widest">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-black transition-colors uppercase tracking-widest pl-[3.5rem] md:pl-0">
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
      <div className="max-w-2xl mx-auto px-6">
        {/* YouTube */}
        <MediaItem 
          title="YouTube"
          description="生き方を整える日常Vlog"
          buttonText="Watch"
          href="https://www.youtube.com/@mikityvlog"
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          }
        />
        
        {/* Instagram */}
        <MediaItem 
          title="Instagram"
          description="会社員の暮らしと心身を整える日常の記録"
          buttonText="View"
          href="https://www.instagram.com/mikity__97/"
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          }
        />
        
        {/* Podcast (Spotify) */}
        <MediaItem 
          title="Podcast"
          description="すり減らない、心とからだの整え方"
          buttonText="Listen"
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.019.6-1.141 4.38-1.379 9.899-.719 13.56 1.56.36.24.539.78.18 1.26zm.12-3.36C15.222 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.722 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.56.24z"/>
            </svg>
          }
        />
        
        {/* Note */}
        <MediaItem 
          title="Note"
          description="思考と習慣の記録"
          buttonText="Read"
          href="https://note.com/mikity__97"
          icon={
             <div className="w-8 h-8 relative opacity-60 group-hover:opacity-100 transition-opacity">
               <Image
                 src="/note-logo.png"
                 alt="Note"
                 fill
                 className="object-contain"
               />
             </div>
          }
        />
      </div>
    </section>
  )
}

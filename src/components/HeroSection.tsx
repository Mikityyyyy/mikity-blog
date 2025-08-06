import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Large Background Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <h1 className="text-[20rem] md:text-[30rem] font-black text-gray-50 whitespace-nowrap opacity-30">
            MIKITY
          </h1>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gray-100 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gray-200 rotate-45 opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Available for projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Creative
                <br />
                <span className="text-gray-400">Designer</span>
                <br />
                & Developer
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                テクノロジーとデザインの交差点で、
                <br />
                意味のある体験を創造しています。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/stories"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-red-600 transition-all duration-300 font-medium"
              >
                View Stories
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium"
              >
                See Work
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">📱</span>
                </div>
                <span>Mobile Tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">⚾</span>
                </div>
                <span>Sports</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">💻</span>
                </div>
                <span>Tech</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                <Image
                  src="/profile.jpg"
                  alt="Mikity"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                <span className="text-2xl">✨</span>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed">
                <span className="text-white font-bold text-lg">M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-xs font-medium tracking-wide">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
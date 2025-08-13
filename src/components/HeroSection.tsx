import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden noise-overlay" 
             style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f23 100%)' }}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-sm animate-float"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-500/20 rotate-45 blur-sm animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-lg animate-rotate-slow"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/80">Available for projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Creative
                <br />
                <span className="gradient-text">Designer</span>
                <br />
                & Developer
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
                テクノロジーとデザインの交差点で、
                <br />
                意味のある体験を創造しています。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/blog"
                className="group inline-flex items-center justify-center px-8 py-4 gradient-bg text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 font-medium"
              >
                View Stories
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 glass text-white rounded-full hover:bg-white/20 transition-all duration-300 font-medium"
              >
                See Work
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8 text-sm text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">📱</span>
                </div>
                <span>Mobile Tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">⚾</span>
                </div>
                <span>Sports</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">💻</span>
                </div>
                <span>Tech</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              {/* Main Image Container with Glass Effect */}
              <div className="w-80 h-96 md:w-96 md:h-[500px] glass rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-indigo-500/25 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 group-hover:from-indigo-500/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
                <Image
                  src="/profile.jpg"
                  alt="Mikity"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-10"
                  priority
                />
              </div>
              
              {/* Floating Elements with Glow */}
              <div className="absolute -top-6 -left-6 w-16 h-16 glass rounded-2xl shadow-lg flex items-center justify-center animate-float">
                <span className="text-2xl">✨</span>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-20 h-20 gradient-bg rounded-2xl shadow-lg shadow-indigo-500/25 flex items-center justify-center animate-float-delayed">
                <span className="text-white font-bold text-lg">M</span>
              </div>

              {/* Tech Skills Floating Cards */}
              <div className="absolute top-10 -right-12 glass rounded-xl px-3 py-2 animate-float" style={{animationDelay: '0.5s'}}>
                <span className="text-sm text-white/80 font-medium">React</span>
              </div>
              
              <div className="absolute bottom-20 -left-8 glass rounded-xl px-3 py-2 animate-float-delayed" style={{animationDelay: '1.5s'}}>
                <span className="text-sm text-white/80 font-medium">Next.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs font-medium tracking-wide">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
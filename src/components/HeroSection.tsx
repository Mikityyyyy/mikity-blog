
export default function HeroSection() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center items-center text-center px-4 relative">
       {/* Background Accent (Optional: Very loose gradient blur to break the white) */}
       <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
       </div>

       <div className="max-w-2xl mx-auto space-y-8 animate-in">
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-[1.1] font-serif italic">
          Rebalance <br/>
          <span className="not-italic">Your Everyday.</span>
        </h1>
        <p className="text-xs md:text-sm text-gray-500 tracking-[0.25em] font-sans uppercase">
          Routine / Hybrid Athlete / Quiet Vlogs
        </p>
      </div>
    </section>
  )
}
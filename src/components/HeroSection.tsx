"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gradient-to-b from-gray-50/80 to-white/0">
       {/* Background Accent (Subtle) */}
       <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-white rounded-full blur-[120px] mix-blend-overlay opacity-60 animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-gray-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
       </div>

       <div className="max-w-3xl mx-auto space-y-12 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-6xl md:text-8xl font-light text-gray-900 leading-[1.05] font-serif italic tracking-tight"
        >
          Rebalance <br/>
          <span className="not-italic text-gray-800">Your Everyday.</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          <div className="h-[1px] w-12 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xs md:text-sm text-gray-500 tracking-[0.3em] font-sans uppercase">
            Routine / Hybrid Athlete / Quiet Vlogs
          </p>
        </motion.div>
      </div>
    </section>
  )
}
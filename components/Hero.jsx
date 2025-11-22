"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center bg-[#050505] overflow-hidden text-white">
      
      {/* --- LAYER 1: CINEMATIC BACKGROUND --- */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="relative w-full h-full"
        >
             {/* Replace with your image path */}
             <div className="absolute inset-0 bg-[url('/dark-floor-texture.jpg')] bg-cover bg-center opacity-40 grayscale" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        </motion.div>
      </motion.div>


      {/* --- LAYER 2: THE CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-16 md:mt-0">
        
        {/* Headline */}
        <div className="overflow-hidden">
            <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            // RESPONSIVE FONT SIZES HERE:
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.95] md:leading-[0.9]"
            >
            FLOORING <br />
            <span className="text-white/30">PERFECTED</span>
            <span className="text-[#FFD60A]">.</span>
            </motion.h1>
        </div>


        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 md:mt-8 text-base md:text-xl text-gray-400 max-w-xs md:max-w-xl font-light leading-relaxed"
        >
            We engineer surfaces that define spaces. <br className="hidden md:block" />
            Seamless. Industrial. Unapologetically durable.
        </motion.p>


        {/* Glass Button */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 md:mt-12"
        >
            <a 
                href="#quote"
                className="group relative inline-flex items-center justify-between gap-2 p-2 pr-2 pl-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-full hover:bg-white/10 transition-all duration-500 active:scale-95 cursor-pointer"
            >
                <span className="text-sm font-semibold tracking-wide text-white mr-4">
                    Get Your Quote
                </span>
                <div className="w-10 h-10 bg-[#FFD60A] rounded-full flex items-center justify-center text-black group-hover:rotate-[-45deg] transition-transform duration-500">
                    <ArrowRight size={18} strokeWidth={2.5} />
                </div>
            </a>
        </motion.div>

      </div>


      {/* --- LAYER 3: FOOTER SPECS --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 w-full border-t border-white/10 bg-[#050505]/80 backdrop-blur-sm py-4 md:py-6"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-[10px] md:text-sm text-gray-500 font-mono uppercase tracking-wider gap-2">
            
            <div className="flex gap-6 md:gap-8">
                <span className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#FFD60A]" /> 24h Turnaround
                </span>
                <span className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#FFD60A]" /> 20y Warranty
                </span>
            </div>

            <div className="hidden md:block opacity-50">
                SCROLL TO EXPLORE
            </div>
        </div>
      </motion.div>

    </section>
  );
}
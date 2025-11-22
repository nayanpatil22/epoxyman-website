"use client";

import { motion } from "framer-motion";
import { Hammer, Layers, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    // Reduced vertical padding on mobile (py-16) vs desktop (md:py-32)
    <section
      id="about"
      className="w-full py-16 md:py-32 bg-[#050505] text-white border-t border-white/10"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* --- 1. THE MANIFESTO (Centered) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
            {/* Label */}
            <span className="uppercase text-xs font-bold tracking-[0.3em] text-[#FFD60A] mb-4 md:mb-6 block">
                The Philosophy
            </span>

            {/* Big Headline - Scaled for Mobile */}
            <h2 className="text-3xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 md:mb-8">
                We don't just pour floors. <br />
                <span className="text-gray-600">We engineer surfaces.</span>
            </h2>

            {/* Narrative */}
            <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto px-4">
                Most contractors rush the prep work. We obsess over it. 
                Our process is scientific, methodical, and designed for one thing: 
                <span className="text-white font-semibold"> Uncompromising Longevity.</span>
            </p>
        </motion.div>


        {/* --- 2. THE PROCESS GRID --- */}
        {/* STACKING FIX: grid-cols-1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-16 md:mb-20">
            
            <ProcessCard 
                icon={<Hammer />} 
                step="01"
                title="Diamond Grinding"
                desc="We strip the concrete using industrial diamonds to create the perfect mechanical bond."
            />
            
            <ProcessCard 
                icon={<Layers />} 
                step="02"
                title="Epoxy Bonding"
                desc="A thick, industrial-grade base coat is applied to fuse with the substrate."
            />
            
            <ProcessCard 
                icon={<ShieldCheck />} 
                step="03"
                title="Polyaspartic Seal"
                desc="A UV-stable topcoat that resists hot tires, chemical spills, and fading."
            />

        </div>


        {/* --- 3. THE STATS BAR --- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            // WRAPPING FIX: flex-wrap allows items to drop to next line on small screens
            className="w-full max-w-5xl border-t border-white/10 pt-10 flex flex-wrap justify-center md:justify-between gap-8 md:gap-12 text-center md:text-left"
        >
            <Stat number="500+" label="Projects Completed" />
            <Stat number="100%" label="Satisfaction Rate" />
            <Stat number="10y" label="Experience" />
            <Stat number="1 Day" label="Install Time" />
        </motion.div>

      </div>
    </section>
  );
}


/* --- SUB-COMPONENTS --- */

function ProcessCard({ icon, step, title, desc }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group p-8 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-[#FFD60A]/30 transition-all duration-300 rounded-sm relative overflow-hidden"
        >
            <span className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 group-hover:text-[#FFD60A]/10 transition-colors select-none">
                {step}
            </span>

            <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-black border border-white/10 text-[#FFD60A] mb-6 rounded-sm">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {desc}
                </p>
            </div>
        </motion.div>
    )
}

function Stat({ number, label }) {
  return (
    <div className="min-w-[120px]">
        <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            {number}
        </h3>
        <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-mono">
            {label}
        </p>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const cities = [
  "Vancouver", "Burnaby", "Richmond", 
  "Surrey", "Coquitlam", "Delta", 
  "Langley", "White Rock", "Abbotsford", 
];

export default function ServiceArea() {
  return (
    <section className="w-full min-h-[80vh] bg-[#050505] text-white flex items-center justify-center py-16 md:py-24 relative overflow-hidden border-t border-white/10">
      
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        
        {/* --- LEFT: CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-12"
        >
          <div>
            <span className="uppercase text-xs font-bold tracking-[0.3em] text-[#FFD60A] mb-4 block">
              Region 02 • British Columbia
            </span>
            <h2 className="text-3xl md:text-6xl font-medium tracking-tighter leading-[1.1]">
              Serving the <br />
              <span className="text-gray-600">Lower Mainland.</span>
            </h2>
            <p className="text-gray-400 mt-6 text-base md:text-lg max-w-md leading-relaxed">
               From the heart of Vancouver to the Fraser Valley. We bring industrial-grade precision to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
            {cities.map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FFD60A] transition-colors" />
                <span className="text-gray-400 font-medium group-hover:text-white transition-colors">
                  {city}
                </span>
              </motion.div>
            ))}
          </div>

          <div>
            <a href="#quote" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#FFD60A] hover:text-white transition-colors">
               Check Availability <MapPin size={16} />
            </a>
          </div>

        </motion.div>

        {/* --- RIGHT: MAP --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          // FIX: h-[300px] for mobile
          className="relative w-full h-[300px] md:h-[500px] rounded-sm bg-[#0A0A0A] border border-white/5 overflow-hidden group/map"
        >
          <Image
            src="/service-area-map.jpg" 
            alt="Service Area Map"
            fill
            className="object-cover opacity-40 grayscale group-hover/map:opacity-60 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] opacity-80" />
          <div className="absolute inset-0 border-t border-white/5 top-1/2 animate-pulse opacity-20" />
        </motion.div>

      </div>
    </section>
  );
}
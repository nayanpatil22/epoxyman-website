"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: "01",
    name: "Emily Fraser",
    role: "Residential Project",
    location: "Vancouver, BC",
    text: "Outstanding work. The epoxy finish transformed my garage into a luxury showroom. It honestly feels cleaner than my living room now."
  },
  {
    id: "02",
    name: "Mark Jefferson",
    role: "Commercial Warehouse",
    location: "Burnaby, BC",
    text: "Super professional team. No dust, no mess. We needed the floor back in operation within 24 hours, and they delivered exactly as promised."
  },
  {
    id: "03",
    name: "Olivia Bennett",
    role: "Basement Renovation",
    location: "Richmond, BC",
    text: "I didn’t expect the floor to look THIS good. The shine is unbelievable, and it completely stopped the dusting issue we had with the raw concrete."
  },
  {
    id: "04",
    name: "Ryan Cooper",
    role: "Garage Flake System",
    location: "Surrey, BC",
    text: "Transparent pricing and perfect finishing. I quoted three other companies, and EpoxyMan was the only one who actually explained the chemistry to me."
  },
  {
    id: "05",
    name: "Sophia Turner",
    role: "Retail Showroom",
    location: "West Vancouver, BC",
    text: "Best contractor experience we’ve had. The team arrived on time, worked efficiently, and the 'Black Marble' finish gets compliments from every customer."
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section 
      id="testimonials" 
      className="relative w-full min-h-[80vh] bg-[#050505] text-white flex items-center justify-center border-t border-white/10 overflow-hidden py-16 md:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Quote size={600} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
           <div className="flex gap-1 text-[#FFD60A] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
           </div>
           <span className="uppercase text-xs font-bold tracking-[0.3em] text-gray-500">
              Client Stories
           </span>
        </div>

        {/* DYNAMIC CONTENT */}
        <div className="min-h-[300px] flex flex-col justify-between cursor-default">
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center"
                >
                    {/* The Quote - FIX: text-2xl for mobile, 4xl/5xl for desktop */}
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-white mb-8 md:mb-10">
                        &ldquo;{testimonials[active].text}&rdquo;
                    </h3>

                    {/* The Author */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-[1px] bg-[#FFD60A] mb-2" />
                        <h4 className="text-base md:text-lg font-bold text-white tracking-wide">
                            {testimonials[active].name}
                        </h4>
                        <div className="text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider">
                            {testimonials[active].role} • {testimonials[active].location}
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-between mt-12 md:mt-16 border-t border-white/10 pt-8">
            
            <div className="text-sm font-mono text-gray-500">
                <span className="text-white">0{active + 1}</span> / 0{testimonials.length}
            </div>

            <div className="flex gap-4">
                <button 
                    onClick={handlePrev}
                    className="p-3 md:p-4 rounded-full border border-white/10 hover:border-[#FFD60A] hover:bg-[#FFD60A]/10 text-white hover:text-[#FFD60A] transition-all duration-300 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                    onClick={handleNext}
                    className="p-3 md:p-4 rounded-full border border-white/10 hover:border-[#FFD60A] hover:bg-[#FFD60A]/10 text-white hover:text-[#FFD60A] transition-all duration-300 group"
                >
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

        </div>

      </div>
    </section>
  );
}
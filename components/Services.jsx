"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Garage Finishes",
    description: "Heavy-duty flake systems resistant to hot tires, oil, and salt.",
    image: "/service-garage.png", 
  },
  {
    id: "02",
    title: "Metallic & Marble",
    description: "Artistic, flowing designs that mimic liquid metal or high-end stone.",
    image: "/service-metallic.png", 
  },
  {
    id: "03",
    title: "Commercial Spaces",
    description: "USDA-approved, slip-resistant coatings for kitchens and warehouses.",
    image: "/service-commercial.png", 
  },
  {
    id: "04",
    title: "Basement Sealing",
    description: "Moisture-vapor barriers that turn damp basements into livable space.",
    image: "/service-basement.png", 
  },
  {
    id: "05",
    title: "Outdoor Resurfacing",
    description: "UV-stable polyaspartic coatings for patios, driveways, and pool decks.",
    image: "/service-outdoor.png", 
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    // NOTE: Ensure NO overflow-hidden is on this section class
    <section id="services" className="w-full bg-[#050505] text-white py-16 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* FIX: Using FLEXBOX ensures both columns are exactly the same height */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* --- LEFT: SCROLLABLE LIST (flex-1) --- */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="mb-12 md:mb-16">
               <span className="uppercase text-xs font-bold tracking-[0.3em] text-[#FFD60A] mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight">
                Surfaces for every <br />
                <span className="text-gray-600">environment.</span>
              </h2>
            </div>

            <div className="flex flex-col">
              {services.map((service, index) => (
                <ServiceItem 
                  key={service.id} 
                  service={service} 
                  isActive={activeService === index}
                  onActivate={() => setActiveService(index)}
                />
              ))}
            </div>
          </div>

          {/* --- RIGHT: STICKY IMAGE (flex-1) --- */}
          {/* Because of 'items-stretch' on parent, this div is now huge (tall). */}
          <div className="hidden lg:block flex-1 relative min-h-full"> 
             
             {/* Sticky Wrapper */}
             <div className="sticky top-24 h-[600px] w-full rounded-sm overflow-hidden bg-gray-900 border border-white/10">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      fill
                      className="object-cover opacity-80"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-8 left-8 z-10">
                       <p className="text-sm font-mono text-[#FFD60A] uppercase tracking-widest">
                          Figure {services[activeService].id}
                       </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ServiceItem({ service, isActive, onActivate }) {
  return (
    <div 
      onMouseEnter={onActivate}
      onClick={onActivate}
      className={`
        group relative py-6 md:py-8 border-t border-white/10 cursor-pointer transition-all duration-500
        ${isActive ? "border-white/30" : "hover:border-white/30"}
      `}
    >
      <div className="flex items-baseline justify-between">
        <div className="flex items-center gap-4 md:gap-6">
            <span className={`
                font-mono text-sm transition-colors duration-300
                ${isActive ? "text-[#FFD60A]" : "text-gray-600"}
            `}>
                {service.id}
            </span>
            <h3 className={`
                text-xl md:text-3xl font-medium tracking-tight transition-all duration-300
                ${isActive ? "text-white translate-x-2" : "text-gray-400 group-hover:text-white"}
            `}>
                {service.title}
            </h3>
        </div>
        <ArrowUpRight 
            className={`
                transition-all duration-300
                ${isActive ? "opacity-100 text-[#FFD60A] rotate-45" : "opacity-0 -translate-x-4"}
            `} 
        />
      </div>
      <div className={`
          overflow-hidden transition-all duration-500 ease-out
          ${isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
      `}>
          <p className="text-gray-500 text-sm md:text-base pl-10 md:pl-12 max-w-md leading-relaxed">
            {service.description}
          </p>
      </div>
    </div>
  );
}
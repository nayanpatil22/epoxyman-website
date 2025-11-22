"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleMove = (event) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setPos(percent);
  };

  useEffect(() => {
    const stopResize = () => setIsResizing(false);
    if (isResizing) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("mouseup", stopResize);
      window.addEventListener("touchend", stopResize);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", stopResize);
      window.removeEventListener("touchend", stopResize);
    };
  }, [isResizing]);

  return (
    <section className="w-full py-16 md:py-32 bg-[#050505] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* --- LEFT: THE NARRATIVE --- */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="mb-8">
            <span className="uppercase text-xs font-bold tracking-[0.3em] text-[#FFD60A] mb-4 block">
              The Transformation
            </span>
            <h2 className="text-3xl md:text-6xl font-medium tracking-tighter leading-[1.1]">
              The difference is <br />
              <span className="text-gray-600">night and day.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg">
            See how we turn damaged, dusty concrete into a showroom-quality surface. 
            Our industrial coatings don't just cover imperfections—they permanently 
            seal and strengthen the slab.
          </p>

          <div className="space-y-4 md:space-y-6 border-l border-white/10 pl-6">
            <Feature title="Surface Prep" desc="Diamond grinding opens the pores." />
            <Feature title="Crack Repair" desc="mender putty fills all divots." />
            <Feature title="Final Coat" desc="Polyaspartic shield for UV protection." />
          </div>
        </div>

        {/* --- RIGHT: THE SLIDER --- */}
        <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
          <div
            ref={containerRef}
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
            // Fixed: Single line className
            className="relative w-full max-w-[600px] h-[300px] md:h-[500px] rounded-sm overflow-hidden cursor-ew-resize border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group select-none touch-none"
          >
            
            {/* 1. AFTER IMAGE */}
            <div className="absolute inset-0 w-full h-full bg-gray-900">
               <Image
                src="/after.jpeg"
                fill
                alt="After Epoxy"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="object-cover pointer-events-none select-none"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 border border-white/10 select-none">
                 <span className="text-[10px] font-bold tracking-widest text-[#FFD60A] uppercase">
                    Finished
                 </span>
              </div>
            </div>

            {/* 2. BEFORE IMAGE */}
            <div
              className="absolute inset-0 w-full h-full bg-gray-800 select-none"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src="/before.jpeg"
                fill
                alt="Before Concrete"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="object-cover pointer-events-none grayscale brightness-75 select-none"
              />
               <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 border border-white/10 select-none">
                 <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">
                    Concrete
                 </span>
              </div>
            </div>

            {/* 3. HANDLE */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white z-30 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"
              style={{ left: `${pos}%` }}
            >
               {/* Invisible wider touch area for thumbs */}
               <div className="absolute inset-y-0 -left-6 w-12 bg-transparent pointer-events-auto" />
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <div className="w-10 h-10 bg-[#FFD60A] rounded-full flex items-center justify-center shadow-lg text-black">
                    <MoveHorizontal size={18} strokeWidth={2.5} />
                 </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function Feature({ title, desc }) {
    return (
        <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wide">{title}</h4>
            <p className="text-gray-500 text-sm">{desc}</p>
        </div>
    )
}
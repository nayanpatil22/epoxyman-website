"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Search, FileText, Hammer } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    desc: "Reach out via our form. We discuss your needs, timeline, and the specific requirements of your slab.",
    icon: <MessageSquare strokeWidth={1} size={48} />,
  },
  {
    id: 2,
    title: "Site Inspection",
    desc: "We measure moisture levels, check for cracks, and determine the exact diamond-grinding grit needed.",
    icon: <Search strokeWidth={1} size={48} />,
  },
  {
    id: 3,
    title: "Transparent Quote",
    desc: "You receive a detailed PDF estimate. No hidden fees. Just a clear breakdown of materials and labor.",
    icon: <FileText strokeWidth={1} size={48} />,
  },
  {
    id: 4,
    title: "Precision Install",
    desc: "Our crew arrives on time. We grind, patch, coat, and seal. Most residential projects are done in 1 day.",
    icon: <Hammer strokeWidth={1} size={48} />,
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="relative w-full bg-[#050505] text-white py-16 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-12 md:mb-20">
            <span className="uppercase text-xs font-bold tracking-[0.3em] text-[#FFD60A] mb-4 block">
                The Process
            </span>
            <h2 className="text-3xl md:text-6xl font-medium tracking-tighter leading-[1]">
                From concrete <br />
                <span className="text-gray-600">to masterpiece.</span>
            </h2>
        </div>

        {/* FIX: FLEXBOX LAYOUT */}
        {/* lg:flex-row ensures side-by-side. items-stretch ensures equal height. */}
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* --- LEFT: STICKY DASHBOARD (flex-1) --- */}
          <div className="hidden lg:block flex-1 relative min-h-full">
            
            {/* STICKY ELEMENT */}
            <div className="sticky top-32 h-[400px] w-full bg-[#0A0A0A] border border-white/5 rounded-sm flex flex-col items-center justify-center overflow-hidden">
                
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <div className="relative z-10 text-center">
                    {steps.map((step) => (
                        activeStep === step.id && (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, type: "spring", bounce: 0 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-[#FFD60A]/10 flex items-center justify-center text-[#FFD60A] mb-6 shadow-[0_0_30px_rgba(255,214,10,0.2)]">
                                    {step.icon}
                                </div>
                                <span className="text-8xl font-medium tracking-tighter text-white">
                                    0{step.id}
                                </span>
                                <span className="text-sm uppercase tracking-widest text-gray-500 mt-2">
                                    Step
                                </span>
                            </motion.div>
                        )
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 h-1 bg-[#FFD60A] transition-all duration-500" 
                     style={{ width: `${(activeStep / steps.length) * 100}%` }} 
                />
            </div>
          </div>

          {/* --- RIGHT: SCROLLABLE STEPS (flex-1) --- */}
          <div className="flex-1 flex flex-col gap-16 md:gap-24 py-4 md:py-10 min-w-0">
            {steps.map((step) => (
              <StepCard 
                key={step.id} 
                step={step} 
                onActive={() => setActiveStep(step.id)} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function StepCard({ step, onActive }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    if (isInView) {
        onActive();
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
            className={`
                group relative pl-6 md:pl-8 border-l-2 transition-colors duration-500
                ${isInView ? "border-[#FFD60A]" : "border-white/10"}
            `}
        >
            <span className="lg:hidden block text-2xl font-bold text-[#FFD60A] mb-2">
                0{step.id}
            </span>
            <h3 className={`
                text-2xl md:text-4xl font-medium tracking-tight mb-3 md:mb-4 transition-colors duration-300
                ${isInView ? "text-white" : "text-gray-600"}
            `}>
                {step.title}
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
                {step.desc}
            </p>
        </motion.div>
    );
}
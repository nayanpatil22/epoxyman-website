"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        // Fixed: Single line string for template literal
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 transition-all duration-300 border-b ${isScrolled ? "bg-[#050505]/80 backdrop-blur-md py-4 border-white/10 shadow-lg" : "bg-transparent py-6 border-transparent"}`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          
          {/* BRANDING */}
          <a href="#home" className="group relative z-50">
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tighter uppercase">
              EpoxyMan<span className="text-[#FFD60A]">.</span>
            </h1>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#about" label="About" />
            <NavLink href="#services" label="Services" />
            <NavLink href="#process" label="Process" />
            
            {/* Fixed: Single line className */}
            <a 
              href="#quote" 
              className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-[#FFD60A] border border-white/10 hover:border-[#FFD60A] rounded-full transition-all duration-300"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-white group-hover:text-black transition-colors">
                Get Quote
              </span>
              <ArrowRight size={14} className="text-white group-hover:text-black transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden relative z-50 text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <MobileNavLink href="#home" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="#about" label="About" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="#services" label="Services" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="#process" label="Process" onClick={() => setIsMobileMenuOpen(false)} />
            
            <div className="mt-8">
                <a 
                    href="#quote" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-8 py-4 bg-[#FFD60A] text-black font-bold uppercase tracking-wide rounded-full text-xl"
                >
                    Get Free Quote
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label }) {
  return (
    <a href={href} className="relative group py-2">
      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
        {label}
      </span>
      <span className="absolute -bottom-0 left-1/2 w-1 h-1 bg-[#FFD60A] rounded-full opacity-0 -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
    </a>
  );
}

function MobileNavLink({ href, label, onClick }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-4xl font-bold text-white hover:text-[#FFD60A] transition-colors tracking-tighter"
    >
      {label}
    </a>
  );
}
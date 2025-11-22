"use client";

import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter 
} from "lucide-react";

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050505] text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- TOP SECTION: BRAND & ACTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter uppercase">
              EpoxyMan<span className="text-[#FFD60A]">.</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-xs text-sm leading-relaxed">
              Engineering premium surfaces for residential and commercial spaces. 
              Built for durability. Designed for impact.
            </p>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-[#FFD60A] transition-colors"
          >
            Back to Top
            <div className="p-3 rounded-full border border-white/20 group-hover:border-[#FFD60A] group-hover:bg-[#FFD60A] group-hover:text-black transition-all duration-300">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>

        {/* --- MIDDLE SECTION: LINKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-white/10 pt-16 pb-16">
          
          {/* Column 1: Explore */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#FFD60A] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Explore
            </h4>
            <FooterLink href="#home" label="Home" />
            <FooterLink href="#about" label="About Us" />
            <FooterLink href="#process" label="Our Process" />
            <FooterLink href="#testimonials" label="Reviews" />
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#FFD60A] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Services
            </h4>
            <FooterLink href="#services" label="Garage Epoxy" />
            <FooterLink href="#services" label="Commercial Flooring" />
            <FooterLink href="#services" label="Basement Sealing" />
            <FooterLink href="#services" label="Outdoor Resurfacing" />
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[#FFD60A] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Contact
            </h4>
            
            <a href="mailto:hello@epoxyman.ca" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={16} className="group-hover:text-[#FFD60A] transition-colors" />
                <span className="text-sm">hello@epoxyman.ca</span>
            </a>

            <a href="tel:+16045550198" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={16} className="group-hover:text-[#FFD60A] transition-colors" />
                <span className="text-sm">+1 (604) 555-0198</span>
            </a>

            <div className="group flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="group-hover:text-[#FFD60A] transition-colors" />
                <span className="text-sm">Vancouver, BC & Lower Mainland</span>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#FFD60A] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
            </div>
          </div>

        </div>

        {/* --- BOTTOM: COPYRIGHT --- */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-600 uppercase tracking-wider gap-4">
          <p>&copy; {new Date().getFullYear()} EpoxyMan Flooring. All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* --- SUB-COMPONENTS --- */

function FooterLink({ href, label }) {
  return (
    <a 
      href={href} 
      className="text-gray-400 text-sm hover:text-white hover:translate-x-2 transition-all duration-300 block w-fit"
    >
      {label}
    </a>
  );
}

function SocialIcon({ icon }) {
  return (
    <a 
      href="#" 
      className="
        w-10 h-10 rounded-full border border-white/10 
        flex items-center justify-center text-gray-400 
        hover:border-[#FFD60A] hover:bg-[#FFD60A]/10 hover:text-[#FFD60A] hover:scale-110 
        transition-all duration-300
      "
    >
      {icon}
    </a>
  );
}
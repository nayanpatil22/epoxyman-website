"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function Estimate() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  const SHEETDB_URL = "https://sheetdb.io/api/v1/7yhqv1fgendv0";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "incomplete" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        setStatus("incomplete");
        return;
    }

    setStatus("loading");

    try {
      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData })
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
            setStatus("idle");
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="relative w-full min-h-screen bg-[#050505] text-white border-t border-white/10 flex items-center py-16 md:py-24">
      
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* FIX: grid-cols-1 on mobile, lg:grid-cols-2 on desktop */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">

        {/* LEFT SIDE */}
        <div className="space-y-8 md:space-y-12 pt-0 md:pt-10">
          <div>
            <span className="uppercase text-xs font-bold tracking-[0.3em] text-[#FFD60A] mb-4 block">
                Start Your Project
            </span>
            <h2 className="text-3xl md:text-6xl font-medium tracking-tighter leading-[1.1]">
                Ready to transform <br />
                <span className="text-gray-600">your space?</span>
            </h2>
            <p className="text-gray-400 mt-6 text-base md:text-lg max-w-md leading-relaxed">
                Fill out the form for a free, accurate estimate. 
                We typically reply within 2 hours during business days.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 border-l border-white/10 pl-6 md:pl-8">
            <ContactDetail icon={<Phone size={20} />} label="Phone" value="+1 (604) 555-0198" href="tel:+16045550198"/>
            <ContactDetail icon={<Mail size={20} />} label="Email" value="hello@epoxyman.ca" href="mailto:hello@epoxyman.ca"/>
            <ContactDetail icon={<MapPin size={20} />} label="Service Area" value="Vancouver & Lower Mainland" />
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        {/* FIX: Reduced padding (p-6) for mobile */}
        <div className="bg-[#0A0A0A] border border-white/5 p-6 md:p-12 rounded-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            
            {/* FIX: Inputs stack on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <MinimalInput 
                    label="Name" name="name" type="text" placeholder="John Doe" 
                    value={formData.name} onChange={handleChange} required 
                />
                <MinimalInput 
                    label="Phone" name="phone" type="tel" placeholder="(555) 000-0000" 
                    value={formData.phone} onChange={handleChange} required 
                />
            </div>

            <MinimalInput 
                label="Email" name="email" type="email" placeholder="john@example.com" 
                value={formData.email} onChange={handleChange} required 
            />

            <div className="group relative">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-[#FFD60A] transition-colors">
                    Project Details
                </label>
                <textarea
                    name="message" rows={4} required
                    placeholder="Tell us about your floor..."
                    value={formData.message} onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-700 focus:border-[#FFD60A] outline-none transition-all resize-none"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`
                    w-full group relative h-14 font-bold uppercase tracking-wider overflow-hidden transition-all duration-300
                    ${status === "incomplete" ? "bg-red-500/10 text-red-500" : "bg-white text-black hover:bg-[#FFD60A]"}
                `}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    {status === "loading" ? (
                        <Loader2 className="animate-spin" />
                    ) : status === "success" ? (
                        <span className="flex items-center gap-2 text-green-700">
                            <CheckCircle2 /> Sent Successfully
                        </span>
                    ) : status === "incomplete" ? (
                        <span className="flex items-center gap-2">
                             <AlertCircle size={18} /> Fill All Fields
                        </span>
                    ) : (
                        <span className="flex items-center gap-3 group-hover:gap-6 transition-all">
                            Get Estimate <ArrowRight size={18} />
                        </span>
                    )}
                </div>
            </button>
            
            {status === "error" && (
                <p className="text-red-500 text-xs text-center mt-4">
                    Connection error. Please try again.
                </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}

function ContactDetail({ icon, label, value, href }) {
    const Content = (
        <div className="group flex items-start gap-4 cursor-pointer">
            <div className="text-gray-500 group-hover:text-[#FFD60A] transition-colors mt-1">{icon}</div>
            <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</h4>
                <p className="text-white font-medium text-lg group-hover:text-[#FFD60A] transition-colors">{value}</p>
            </div>
        </div>
    );
    return href ? <a href={href}>{Content}</a> : Content;
}

function MinimalInput({ label, name, type, placeholder, value, onChange, required }) {
    return (
        <div className="group relative">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-[#FFD60A] transition-colors">
                {label} {required && <span className="text-[#FFD60A]">*</span>}
            </label>
            <input
                type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 focus:border-[#FFD60A] outline-none transition-all"
            />
        </div>
    );
}
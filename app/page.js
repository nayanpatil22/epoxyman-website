import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ServiceArea from "@/components/ServiceArea";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <Contact />
      <ServiceArea />
      <Footer />
    </main>
  );
}

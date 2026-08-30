import BackgroundGrid from "@/components/BackgroundGrid";
import NoiseOverlay from "@/components/NoiseOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-[#000000] min-h-screen text-zinc-100 selection:bg-red-500/30 selection:text-red-200 overflow-hidden font-sans">
      {/* Film Grain Noise Texture */}
      <NoiseOverlay />

      {/* Background Ambient Lights & Particle Grid */}
      <BackgroundGrid />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

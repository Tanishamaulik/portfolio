"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const disciplines = [
  {
    id: "msc-cyber-risk",
    name: "Cyber Risk Management",
    image: "/hero-staircase.jpg",
    desc: "MSc in Cybersecurity Risk Management — threat mitigation, security risk modeling, NIST/ISO frameworks, and governance.",
  },
  {
    id: "cybersecurity-soc",
    name: "Cybersecurity & SOC",
    image: "/hero-monitor.jpg",
    desc: "Hands-on threat detection, incident response, network troubleshooting, and Security Operations Center (SOC) analysis.",
  },
  {
    id: "web-development",
    name: "Web Development",
    image: "/hero-staircase.jpg",
    desc: "Building high-performance React & Next.js web applications, client solutions, and dark obsidian design systems.",
  },
  {
    id: "crm-network-sec",
    name: "Network & CRM Systems",
    image: "/hero-monitor.jpg",
    desc: "Skilled in CCNA & CEH concepts, freelance CRM platform engineering, and packet analysis.",
  },
];

export default function Hero() {
  const [activeDiscipline, setActiveDiscipline] = useState(disciplines[0]);
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[95vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Grid Matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Left Index & Metadata */}
          <div className="lg:col-span-2 space-y-8 font-mono text-xs text-zinc-400">
            <div>
              <span className="text-3xl font-extrabold text-white block mb-2 font-sans tracking-tight">001</span>
              <span className="text-zinc-500 uppercase tracking-widest text-[10px] block">Key Services</span>
            </div>

            <div className="space-y-3 text-[11px] pt-4 border-t border-white/10">
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Postgrad</span>
                <span className="text-zinc-200">MSc Cybersecurity Risk Management (NUIG)</span>
              </div>
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Undergrad</span>
                <span className="text-zinc-200">B.Tech IT (RAIT)</span>
              </div>
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Location</span>
                <span className="text-zinc-200">Galway, Ireland</span>
              </div>
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Target Discipline</span>
                <span className="text-red-500 font-bold">SOC / Risk Analyst</span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 leading-relaxed font-sans pt-4 border-t border-white/10">
              {personal.availabilityStatus}
            </p>
          </div>

          {/* Column 2: Center Stacked Typography List */}
          <div className="lg:col-span-6 space-y-3 my-auto">
            <div className="space-y-1">
              {disciplines.map((d) => {
                const isActive = activeDiscipline.id === d.id;
                return (
                  <motion.div
                    key={d.id}
                    onMouseEnter={() => setActiveDiscipline(d)}
                    onClick={() => setActiveDiscipline(d)}
                    className="cursor-pointer group py-1"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <h2
                      className={`text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                          : "text-zinc-700 hover:text-zinc-400"
                      }`}
                    >
                      {d.name}
                    </h2>
                  </motion.div>
                );
              })}
            </div>

            {/* Active Discipline Description */}
            <motion.p
              key={activeDiscipline.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-zinc-400 max-w-md pt-4 font-sans font-normal leading-relaxed border-t border-white/10"
            >
              {activeDiscipline.desc}
            </motion.p>
          </div>

          {/* Column 3: Right Framed Visual Showcase */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Framed Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-[0_0_40px_rgba(255,59,0,0.2)] group">
              <motion.div
                key={activeDiscipline.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeDiscipline.image}
                  alt={activeDiscipline.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </motion.div>

              {/* Tag Label on Image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="uppercase tracking-widest">{activeDiscipline.name}</span>
                <span className="text-red-500 font-bold">GALWAY, IRELAND</span>
              </div>
            </div>

            {/* Studio Micro Copy & Email CTA */}
            <div className="space-y-4 font-mono text-xs">
              <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                Portfolio of <strong className="text-white">{personal.name}</strong> ({personal.pronouns}) — MSc Cybersecurity Risk Management | B.Tech IT | Ex-Intern at {personal.exInternship} | Email: <span className="text-red-400">{personal.email}</span>.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-white hover:text-red-400 font-bold uppercase transition-colors"
                >
                  <span>Connect with Tanisha</span>
                  <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

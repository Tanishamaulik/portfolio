"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-3 font-mono text-xs text-zinc-400">
            <span className="text-3xl font-extrabold text-white block mb-1 font-sans">002</span>
            <span className="text-zinc-500 uppercase tracking-widest text-[10px]">ABOUT & GOALS</span>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
              MSc Cybersecurity Risk Management & IT Developer passionate about threat detection & SOC analysis.
            </h2>
          </div>
        </div>

        {/* Multi-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Studio Visual Display */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 min-h-[340px] bg-zinc-950 shadow-[0_0_30px_rgba(255,59,0,0.15)] group">
            <Image
              src="/hero-monitor.jpg"
              alt="Tanisha Maulik - Cybersecurity & Web Dev Studio"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] text-zinc-300 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
              <span>SECURITY & IT WORKSPACE</span>
              <span className="text-red-500 font-bold">GALWAY, IRELAND</span>
            </div>
          </div>

          {/* Column 2: Exact LinkedIn Bio Story */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed font-sans">
              <p className="text-zinc-300 leading-relaxed">
                {personal.bioFull}
              </p>
            </div>

            {/* Editorial Metadata Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Postgrad</span>
                <span className="text-white font-bold">MSc Cybersecurity Risk Management (NUIG)</span>
              </div>
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Undergrad</span>
                <span className="text-white font-bold">B.Tech IT (RAIT)</span>
              </div>
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Focus</span>
                <span className="text-red-500 font-bold">SOC / Risk Analyst</span>
              </div>
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Location</span>
                <span className="text-emerald-400 font-bold">Galway, Ireland</span>
              </div>
            </div>

            {/* Micro Link */}
            <div>
              <a
                href="#projects"
                className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-white hover:text-red-400 uppercase font-bold transition-colors"
              >
                <span>View Projects & Risk Management Suites</span>
                <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-3 font-mono text-xs text-slate-500">
            <span className="text-3xl font-extrabold text-slate-900 block mb-1 font-sans">002</span>
            <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">ABOUT & GOALS</span>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight pb-2 bg-gradient-to-r from-slate-950 via-slate-900 to-orange-600 bg-clip-text text-transparent">
              MSc Cybersecurity Risk Management & IT Developer passionate about threat detection & SOC analysis.
            </h2>
          </div>
        </div>

        {/* Multi-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Studio Visual Display */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 min-h-[340px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] group">
            <Image
              src="/hero-monitor.jpg"
              alt="Tanisha Maulik - Cybersecurity & Software Dev Studio"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] text-white bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
              <span>SECURITY & IT WORKSPACE</span>
              <span className="text-red-400 font-bold">GALWAY, IRELAND</span>
            </div>
          </div>

          {/* Column 2: Exact LinkedIn Bio Story */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4 text-slate-700 text-sm leading-relaxed font-sans">
              <p className="text-slate-700 leading-relaxed font-normal">
                {personal.bioFull}
              </p>
            </div>

            {/* Editorial Metadata Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 font-mono text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-medium">Postgrad</span>
                <span className="text-slate-900 font-bold">MSc Cybersecurity Risk Management (NUIG)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-medium">Undergrad</span>
                <span className="text-slate-900 font-bold">B.Tech IT (DY Patil)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-medium">Focus</span>
                <span className="text-red-600 font-bold">SOC / Risk Analyst</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-medium">Location</span>
                <span className="text-emerald-600 font-bold">Galway, Ireland</span>
              </div>
            </div>

            {/* Micro Link */}
            <div>
              <a
                href="#projects"
                className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-slate-900 hover:text-red-600 uppercase font-bold transition-colors"
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

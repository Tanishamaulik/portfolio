"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Award, Briefcase, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const filterTabs = ["All Log", "Work & Internships", "Live Products", "Education"];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("All Log");
  const { experiences } = PORTFOLIO_DATA;

  const filteredExperiences = experiences.filter((exp) => {
    if (activeTab === "All Log") return true;
    if (activeTab === "Work & Internships") return exp.type === "Internship" || exp.type === "Freelance";
    if (activeTab === "Live Products") return exp.type === "Freelance" || (exp.liveLinks && exp.liveLinks.length > 0);
    if (activeTab === "Education") return exp.type === "Education";
    return true;
  });

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-3 font-mono text-xs text-slate-500">
            <span className="text-3xl font-extrabold text-slate-900 block mb-1 font-sans">004</span>
            <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">CAREER & EDUCATION LOG</span>
          </div>

          <div className="lg:col-span-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight pb-1.5 leading-snug bg-gradient-to-r from-slate-950 via-slate-900 to-orange-600 bg-clip-text text-transparent">
                Trajectory & Deliverables
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bento-card p-1 rounded-xl border-slate-200 font-mono text-xs">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 uppercase tracking-wider ${
                    activeTab === tab
                      ? "text-white bg-slate-900 font-bold shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Log List */}
        <motion.div layout className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="editorial-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group bg-white border border-slate-200 shadow-sm"
              >
                {/* Glowing Node Line */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Top Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100 font-mono text-xs">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-red-600 font-bold uppercase tracking-widest text-[10px] bg-red-50 px-2.5 py-0.5 rounded border border-red-200 flex items-center gap-1">
                        {exp.type === "Education" ? (
                          <GraduationCap className="w-3 h-3 text-red-500" />
                        ) : (
                          <Briefcase className="w-3 h-3 text-red-500" />
                        )}
                        {exp.type}
                      </span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-slate-500 text-[11px] font-sans">{exp.location}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 font-sans mt-1 group-hover:text-red-600 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 font-sans">{exp.company}</p>

                    {exp.cgpa && (
                      <span className="inline-flex items-center gap-1 mt-1.5 px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-xs font-mono text-amber-700 font-bold shadow-sm">
                        <Award className="w-3 h-3 text-amber-600" /> {exp.cgpa}
                      </span>
                    )}
                  </div>

                  <span className="text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200 self-start md:self-auto font-mono text-xs font-semibold">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-sans mb-4 leading-relaxed">{exp.summary}</p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6 font-sans text-xs text-slate-600">
                  {exp.bulletPoints.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Ultra-Cool Live Freelance Production Cards (Opens in new tab) */}
                {exp.liveLinks && exp.liveLinks.length > 0 && (
                  <div className="mb-6 p-5 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 font-mono text-xs">
                      <span className="text-red-600 font-bold uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-red-500" />
                        Live Deployed Production Client Platforms
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                      {exp.liveLinks.map((link) => {
                        const domain = link.url.replace("https://www.", "").replace("https://", "").replace("/", "");
                        return (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link p-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-red-400 transition-all flex flex-col justify-between shadow-sm"
                          >
                            <div>
                              <span className="text-[10px] text-slate-500 block mb-1 uppercase tracking-wider">Client Site</span>
                              <h4 className="text-xs font-bold text-slate-900 group-hover/link:text-red-600 transition-colors font-sans line-clamp-1">
                                {link.title}
                              </h4>
                            </div>

                            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 group-hover/link:text-slate-900">
                              <span className="truncate max-w-[120px]">{domain}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-red-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Technologies Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 font-mono text-[10px]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

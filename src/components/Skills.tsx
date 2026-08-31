"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Terminal, Flame, Wrench, ShieldCheck } from "lucide-react";

const skillFilterTabs = ["All Capabilities", "Core Competency", "Hands-on", "Cert Concepts"];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All Capabilities");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { skillGroups } = PORTFOLIO_DATA;

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Core Competency":
        return "bg-red-50 text-red-600 border-red-200 shadow-sm";
      case "Hands-on":
        return "bg-amber-50 text-amber-700 border-amber-200 shadow-sm";
      case "Cert Concepts":
        return "bg-purple-50 text-purple-700 border-purple-200 shadow-sm";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-3 font-mono text-xs text-slate-500">
            <span className="text-3xl font-extrabold text-slate-900 block mb-1 font-sans">005</span>
            <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">TECHNICAL CAPABILITIES</span>
          </div>

          <div className="lg:col-span-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight pb-1.5 leading-snug bg-gradient-to-r from-slate-950 via-slate-900 to-orange-600 bg-clip-text text-transparent">
              Tools, Stacks & Security Systems
            </h2>

            {/* Interactive Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bento-card p-1 rounded-xl border-slate-200 font-mono text-xs">
              {skillFilterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 uppercase tracking-wider text-[11px] ${
                    activeFilter === tab
                      ? "text-white bg-slate-900 font-bold shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {tab}
                  {activeFilter === tab && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 border border-slate-900 rounded-lg pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => {
            // Filter skills inside each group if specific filter active
            const displaySkills = group.skills.filter((skill) => {
              if (activeFilter === "All Capabilities") return true;
              if (activeFilter === "Core Competency") return skill.tag === "Core Competency";
              if (activeFilter === "Hands-on") return skill.tag === "Hands-on";
              if (activeFilter === "Cert Concepts") return skill.tag === "Cert Concepts";
              return true;
            });

            if (displaySkills.length === 0) return null;

            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="editorial-card p-6 rounded-2xl flex flex-col justify-between group/card relative overflow-hidden bg-white border border-slate-200 shadow-sm"
              >
                {/* Glowing Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-transparent opacity-60 group-hover/card:opacity-100 transition-opacity" />

                <div>
                  <div className="pb-3 mb-4 border-b border-slate-100 font-mono text-xs flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-red-500" />
                      {group.category}
                    </h3>
                    <span className="text-red-600 font-mono text-[10px] font-bold">
                      {displaySkills.length} Items
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-6 font-sans leading-relaxed">
                    {group.description}
                  </p>

                  {/* Animated Skill Rows */}
                  <div className="space-y-2.5 font-mono text-xs">
                    <AnimatePresence mode="popLayout">
                      {displaySkills.map((skill, sIdx) => {
                        const isHovered = hoveredSkill === skill.name;
                        return (
                          <motion.div
                            key={skill.name}
                            layout
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25, delay: sIdx * 0.04 }}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            whileHover={{ x: 4, scale: 1.01 }}
                            className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden ${
                              isHovered
                                ? "bg-white border-red-400 shadow-md"
                                : "bg-slate-50 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {/* Hover Pulse Accent */}
                            {isHovered && (
                              <motion.div
                                layoutId="hoverHighlight"
                                className="absolute inset-0 bg-red-500/5 pointer-events-none"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                              />
                            )}

                            <span className="text-slate-800 font-sans text-xs font-semibold z-10 flex items-center gap-2">
                              {skill.tag === "Core Competency" ? (
                                <Flame className="w-3.5 h-3.5 text-red-500" />
                              ) : skill.tag === "Hands-on" ? (
                                <Wrench className="w-3.5 h-3.5 text-amber-500" />
                              ) : (
                                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                              )}
                              {skill.name}
                            </span>

                            <span
                              className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider font-bold shrink-0 z-10 ${getTagColor(
                                skill.tag
                              )}`}
                            >
                              {skill.tag}
                            </span>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

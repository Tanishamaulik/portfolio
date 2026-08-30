"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X, Calendar } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { GithubIcon, FigmaIcon } from "@/components/SocialIcons";

const categories = ["All", "Cybersecurity", "Web Development", "AI / Tools", "UI / UX"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-3 font-mono text-xs text-zinc-400">
            <span className="text-3xl font-extrabold text-white block mb-1 font-sans">003</span>
            <span className="text-zinc-500 uppercase tracking-widest text-[10px]">FEATURED REPOSITORIES</span>
          </div>

          <div className="lg:col-span-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Software & Systems
            </h2>

            {/* Editorial Category Filters */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                    selectedCategory === cat
                      ? "text-white bg-white/10 border-red-500/80 font-bold"
                      : "text-zinc-400 border-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const projectIndex = String(idx + 1).padStart(3, "0");
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="editorial-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Bar with Index & Category */}
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs mb-5 pb-3 border-b border-white/10">
                      <span className="text-zinc-500 font-bold text-sm">{projectIndex}</span>
                      <div className="flex items-center gap-2">
                        {project.datePeriod && (
                          <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-red-500" />
                            {project.datePeriod}
                          </span>
                        )}
                        <span className="text-red-500 uppercase tracking-widest text-[10px] bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 font-bold">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <h3
                      onClick={() => setActiveProjectModal(project)}
                      className="text-2xl font-bold text-white mb-1.5 group-hover:text-red-400 transition-colors cursor-pointer leading-tight"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono text-zinc-400 mb-4">{project.subtitle}</p>

                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Bar: Tech Stack & Micro Arrow Link */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn text-white hover:text-red-400 font-bold flex items-center gap-1 uppercase transition-colors"
                        >
                          <span>GitHub Repo</span>
                          <ArrowUpRight className="w-4 h-4 text-red-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn text-white hover:text-red-400 font-bold flex items-center gap-1 uppercase transition-colors"
                        >
                          <span>Figma Prototype</span>
                          <ArrowUpRight className="w-4 h-4 text-red-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setActiveProjectModal(project)}
                          className="group/btn text-white hover:text-red-400 font-bold flex items-center gap-1 uppercase transition-colors"
                        >
                          <span>Inspect Details</span>
                          <ArrowUpRight className="w-4 h-4 text-red-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                      )}

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-zinc-400 hover:text-white bg-black border border-white/10 rounded-md transition-colors"
                            aria-label="View Source on GitHub"
                            title="View Repository on GitHub"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-zinc-400 hover:text-red-400 bg-black border border-white/10 rounded-md transition-colors"
                            aria-label="View Prototype / Website"
                            title="Open Prototype Link"
                          >
                            {project.category === "UI / UX" ? (
                              <FigmaIcon className="w-4 h-4" />
                            ) : (
                              <ExternalLink className="w-4 h-4" />
                            )}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="bg-black border border-white/15 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl"
            >
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[90vh] space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-bold uppercase">{activeProjectModal.category}</span>
                    {activeProjectModal.datePeriod && (
                      <span className="text-zinc-500 font-mono">&bull; {activeProjectModal.datePeriod}</span>
                    )}
                  </div>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{activeProjectModal.title}</h3>
                  <p className="text-xs font-mono text-zinc-400">{activeProjectModal.subtitle}</p>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                  {activeProjectModal.longDescription || activeProjectModal.description}
                </p>

                <div>
                  <h4 className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider mb-2">
                    Key Features & Design System
                  </h4>
                  <ul className="space-y-2">
                    {activeProjectModal.highlights.map((h, idx) => (
                      <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {activeProjectModal.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10 font-mono text-xs">
                  {activeProjectModal.liveUrl && (
                    <a
                      href={activeProjectModal.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold hover:bg-red-500 transition-colors flex items-center gap-2 uppercase tracking-wider"
                    >
                      <FigmaIcon className="w-4 h-4" /> Open Figma Prototype
                    </a>
                  )}
                  {activeProjectModal.githubUrl && (
                    <a
                      href={activeProjectModal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 uppercase tracking-wider"
                    >
                      <GithubIcon className="w-4 h-4" /> View GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

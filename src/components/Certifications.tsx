"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, ChevronDown, ChevronUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const issuerTabs = ["All (17)", "Cisco", "IBM", "AWS", "Security & IT"];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("All (17)");
  const [expanded, setExpanded] = useState(false);
  const { certifications } = PORTFOLIO_DATA;

  const filteredCerts = certifications.filter((cert) => {
    if (activeTab === "All (17)") return true;
    if (activeTab === "Cisco") return cert.category === "Cisco";
    if (activeTab === "IBM") return cert.category === "IBM";
    if (activeTab === "AWS") return cert.category === "AWS";
    if (activeTab === "Security & IT") return cert.category === "Security & IT";
    return true;
  });

  const visibleCerts = expanded ? filteredCerts : filteredCerts.slice(0, 6);

  const getIssuerBadgeColor = (issuer: string) => {
    switch (issuer) {
      case "Cisco":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case "IBM":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "Amazon Web Services (AWS)":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "IELTS Official":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      default:
        return "bg-red-500/10 text-red-400 border-red-500/30";
    }
  };

  return (
    <section id="certifications" className="py-20 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-3 font-mono text-xs text-zinc-400">
            <span className="text-3xl font-extrabold text-white block mb-1 font-sans">005</span>
            <span className="text-zinc-500 uppercase tracking-widest text-[10px]">LICENSES & CERTIFICATIONS</span>
          </div>

          <div className="lg:col-span-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Security Credentials
            </h2>

            {/* Issuer Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bento-card p-1 rounded-xl border-white/10 font-mono text-xs">
              {issuerTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpanded(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 uppercase tracking-wider text-[11px] ${
                    activeTab === tab
                      ? "text-white bg-white/10 border-red-500/80 font-bold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Certifications Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visibleCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="editorial-card p-5 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded border uppercase tracking-wider font-bold ${getIssuerBadgeColor(
                        cert.issuer
                      )}`}
                    >
                      {cert.issuer}
                    </span>
                    <span className="text-zinc-500">{cert.issueDate}</span>
                  </div>

                  <h3 className="text-base font-bold text-white font-sans group-hover:text-red-400 transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
                  {cert.credentialId ? (
                    <span className="text-zinc-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-red-500" />
                      <span>ID: {cert.credentialId}</span>
                    </span>
                  ) : (
                    <span className="text-zinc-500 flex items-center gap-1">
                      <Award className="w-3 h-3 text-zinc-600" />
                      <span>Verified Badge</span>
                    </span>
                  )}
                  <span className="text-zinc-600 group-hover:text-red-400 transition-colors uppercase">Verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse All Toggle Button */}
        {filteredCerts.length > 6 && (
          <div className="mt-8 text-center font-mono text-xs">
            <button
              onClick={() => setExpanded(!expanded)}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-white hover:text-red-400 transition-all uppercase tracking-widest font-bold shadow-lg"
            >
              <span>{expanded ? "Show Less" : `View All ${filteredCerts.length} Certifications`}</span>
              {expanded ? (
                <ChevronUp className="w-4 h-4 text-red-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-red-500 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

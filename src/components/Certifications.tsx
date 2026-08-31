"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, ChevronDown, ChevronUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA;
  const issuerTabs = [`All (${certifications.length})`, "Cisco", "IBM", "AWS", "Security & IT"];
  const [activeTab, setActiveTab] = useState(issuerTabs[0]);
  const [expanded, setExpanded] = useState(false);

  const filteredCerts = certifications.filter((cert) => {
    if (activeTab.startsWith("All")) return true;
    if (activeTab === "Cisco") return cert.category === "Cisco";
    if (activeTab === "IBM") return cert.category === "IBM";
    if (activeTab === "AWS") return cert.category === "AWS";
    if (activeTab === "Security & IT") return cert.category === "Security & IT";
    return true;
  });

  const visibleCerts = expanded ? filteredCerts : filteredCerts.slice(0, 6);

  const getIssuerBadgeColor = (issuer: string) => {
    switch (issuer) {
      case "EC-Council":
        return "bg-red-50 text-red-600 border-red-200 shadow-sm";
      case "Cisco":
        return "bg-cyan-50 text-cyan-700 border-cyan-200 shadow-sm";
      case "IBM":
        return "bg-blue-50 text-blue-700 border-blue-200 shadow-sm";
      case "Amazon Web Services (AWS)":
        return "bg-amber-50 text-amber-700 border-amber-200 shadow-sm";
      case "IELTS Official":
        return "bg-rose-50 text-rose-700 border-rose-200 shadow-sm";
      default:
        return "bg-red-50 text-red-600 border-red-200 shadow-sm";
    }
  };

  return (
    <section id="certifications" className="py-20 relative z-10 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-3 font-mono text-xs text-slate-500">
            <span className="text-3xl font-extrabold text-slate-900 block mb-1 font-sans">006</span>
            <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">LICENSES & CERTIFICATIONS</span>
          </div>

          <div className="lg:col-span-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight pb-1.5 leading-snug bg-gradient-to-r from-slate-950 via-slate-900 to-orange-600 bg-clip-text text-transparent">
              Verified Security Credentials
            </h2>

            {/* Issuer Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bento-card p-1 rounded-xl border-slate-200 font-mono text-xs">
              {issuerTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpanded(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 uppercase tracking-wider text-[11px] ${
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
                className="editorial-card p-5 rounded-2xl flex flex-col justify-between group relative overflow-hidden bg-white border border-slate-200 shadow-sm"
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
                    <span className={`font-mono ${cert.issueDate === "Ongoing" ? "text-amber-600 font-bold flex items-center gap-1.5" : "text-slate-500"}`}>
                      {cert.issueDate === "Ongoing" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      )}
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-sans group-hover:text-red-600 transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[10px]">
                  {cert.credentialId ? (
                    <span className="text-slate-600 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-red-500" />
                      <span>ID: {cert.credentialId}</span>
                    </span>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-1">
                      <Award className={`w-3 h-3 ${cert.issueDate === "Ongoing" ? "text-amber-500" : "text-slate-400"}`} />
                      <span>{cert.issueDate === "Ongoing" ? "In Progress" : "Verified Badge"}</span>
                    </span>
                  )}
                  <span className={`${cert.issueDate === "Ongoing" ? "text-amber-600 font-bold" : "text-slate-400 group-hover:text-red-600"} transition-colors uppercase`}>
                    {cert.issueDate === "Ongoing" ? "Ongoing" : "Verified"}
                  </span>
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
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 hover:text-red-600 transition-all uppercase tracking-widest font-bold shadow-sm"
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

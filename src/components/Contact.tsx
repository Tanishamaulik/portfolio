"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/SocialIcons";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;

  // Gmail & WhatsApp Links
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=Opportunity%20/%20Project%20Inquiry%20-%20Tanisha%20Maulik`;
  const whatsappUrl = "https://wa.me/919987010559?text=Hi%20Tanisha%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you!";

  const handleEmailClick = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#ff3b00", "#ffffff", "#ff8800"],
    });
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-3 font-mono text-xs text-zinc-400">
            <span className="text-3xl font-extrabold text-white block mb-1 font-sans">007</span>
            <span className="text-zinc-500 uppercase tracking-widest text-[10px]">CONNECT & COLLABORATE</span>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Secure Systems Together
            </h2>
          </div>
        </div>

        {/* Single Balanced Studio Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="editorial-card p-8 sm:p-12 rounded-3xl relative overflow-hidden group shadow-2xl"
        >
          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/20 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Direct Inquiry Intro & Status */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold uppercase tracking-wider flex items-center gap-1.5 text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Direct Gmail Inquiry
                </span>

                <span className="px-3 py-1 rounded-full bg-black/80 border border-white/10 text-zinc-300 flex items-center gap-1.5 text-[10px]">
                  <MapPin className="w-3 h-3 text-red-500" />
                  {personal.location}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight mb-2">
                  Open for SOC Analyst, Cyber Risk & Engineering Roles
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  Have an opportunity or project in mind? Click the email box to open Gmail directly or chat instantly on WhatsApp or professional networks.
                </p>
              </div>

              {/* Social Link Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 transition-all flex items-center gap-2 font-bold shadow-md"
                  title="Chat on WhatsApp (+91 9987010559)"
                >
                  <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link px-4 py-2.5 rounded-xl bg-black border border-white/15 hover:border-red-500/60 text-white hover:text-red-400 transition-all flex items-center gap-2 font-bold shadow-md"
                >
                  <LinkedinIcon className="w-4 h-4 text-red-500" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover/link:text-red-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link px-4 py-2.5 rounded-xl bg-black border border-white/15 hover:border-red-500/60 text-white hover:text-red-400 transition-all flex items-center gap-2 font-bold shadow-md"
                >
                  <GithubIcon className="w-4 h-4 text-red-500" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover/link:text-red-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Right Column: Giant Interactive Email Trigger */}
            <div className="lg:col-span-5">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleEmailClick}
                className="group/mailBlock block p-8 sm:p-10 rounded-2xl bg-black/90 hover:bg-zinc-950 border border-white/15 hover:border-red-500/70 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(255,59,0,0.25)] text-center relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 p-1.5 rounded-md bg-white/5 border border-white/10 text-zinc-400 group-hover/mailBlock:text-white group-hover/mailBlock:border-red-500/40 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-red-500 group-hover/mailBlock:translate-x-0.5 group-hover/mailBlock:-translate-y-0.5 transition-transform" />
                </div>

                <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center mx-auto mb-4 group-hover/mailBlock:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-red-500" />
                </div>

                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2 font-bold">
                  Click to Open Gmail Compose
                </span>

                <span className="text-lg sm:text-xl font-extrabold text-white font-mono tracking-tight group-hover/mailBlock:text-red-400 transition-colors block break-all">
                  {personal.email}
                </span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

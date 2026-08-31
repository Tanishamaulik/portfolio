"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="py-12 relative z-10 border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
          
          {/* Left Brand Mark */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-slate-900 font-bold tracking-widest uppercase">
              {personal.name} <span className="text-red-500">®</span> STUDIO
            </span>
          </div>

          {/* Middle Copyright */}
          <div className="text-slate-500 text-center">
            &copy; {new Date().getFullYear()} Tanisha Maulik. All Rights Reserved. Galway, Ireland.
          </div>

          {/* Right Social Links (LinkedIn & GitHub only) */}
          <div className="flex items-center gap-4 text-slate-500">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-slate-900 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-slate-900 transition-colors"
              aria-label="GitHub Repositories"
              title="GitHub Repositories"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

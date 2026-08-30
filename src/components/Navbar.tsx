"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about", index: "002" },
  { name: "Selected Work", href: "#projects", index: "003" },
  { name: "Log", href: "#experience", index: "004" },
  { name: "Capabilities", href: "#skills", index: "005" },
  { name: "Certs", href: "#certifications", index: "006" },
  { name: "Contact", href: "#contact", index: "007" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // WhatsApp Link
  const whatsappUrl = "https://wa.me/919987010559?text=Hi%20Tanisha%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you!";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-white font-mono text-xs tracking-widest uppercase"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
            <span className="font-bold text-white tracking-widest">
              TM STUDIO<span className="text-red-500">®</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group text-xs font-mono tracking-widest text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                <span className="text-zinc-600 text-[10px] group-hover:text-red-500 transition-colors">
                  {link.index}
                </span>
                <span className="uppercase">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Micro Action CTA (WhatsApp Launcher) */}
          <div className="hidden sm:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-xs font-mono tracking-widest text-white hover:text-red-400 transition-colors flex items-center gap-1 uppercase font-bold"
              title="Chat with Tanisha on WhatsApp (+91 9987010559)"
            >
              <span>Let&apos;s work together</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-red-500" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-4 font-mono text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-zinc-300 hover:text-white border-b border-zinc-900 uppercase tracking-widest"
                >
                  <span>{link.name}</span>
                  <span className="text-red-500 text-[10px]">{link.index}</span>
                </a>
              ))}
              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-red-500 font-bold uppercase tracking-widest"
                >
                  <span>Let&apos;s work together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

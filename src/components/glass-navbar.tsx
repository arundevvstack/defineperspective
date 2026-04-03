"use client";

import Image from "next/image";
import { useState, Suspense } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/magnetic";

function NavbarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileMenu, setMobileMenu] = useState(false);

  const activeView = searchParams.get("view");
  const isAiServices = pathname === "/ai-services" || activeView === "ai";

  const links = [
    { name: "HOME", href: "/" },
    { name: "VIDEO", href: "/services/video-production" },
    { name: "AI MEDIA", href: "/services/ai-media-production" },
    { name: "PRODUCT", href: "/services/product-content" },
    { name: "SOCIAL", href: "/services/social-media" },
    { name: "PERFORMANCE", href: "/services/performance-marketing" },
    { name: "CGI", href: "/services/cgi-virtual-production" },
    { name: "STRATEGY", href: "/services/video-strategy" },
    { name: "PORTFOLIO", href: "/portfolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-obsidian/80 backdrop-blur-3xl px-6 md:px-12 py-4">
      <div className="container mx-auto flex h-12 items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="group flex cursor-pointer items-center transition-all duration-500 hover:scale-105 p-0 m-0 leading-none">
            <Image 
              src={isAiServices ? "/images/ai-logo.png" : "/images/main-logo.png"} 
              alt="Define Perspective" 
              width={240} 
              height={76} 
              className="object-contain m-0 p-0"
              priority
            />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-primary-accent",
                pathname === link.href ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className="h-6 w-[1px] bg-white/10 mx-2" />
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition hover:bg-white/10 hover:text-primary-accent">
            <Search size={20} />
          </button>
          <Magnetic intensity={1.5}>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="h-10 px-6 rounded-full bg-primary-accent text-zinc-200 font-black uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 hover:text-white transition-all shadow-lg"
            >
              {isAiServices ? "START PROJECT" : "REQUEST QUOTE"}
            </button>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden h-10 w-10 flex items-center justify-center text-zinc-400 hover:text-white relative z-50"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 z-[49] flex flex-col bg-obsidian/95 backdrop-blur-3xl p-12 pt-32 gap-8 md:hidden overflow-y-auto"
          >
            {links.map((link, lIdx) => (
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: lIdx * 0.1 }}
                key={link.name}
                href={link.href}
                className={cn(
                  "text-4xl font-black uppercase tracking-tighter transition-colors hover:text-primary-accent",
                  pathname === link.href ? "text-primary-accent" : "text-white"
                )}
                onClick={() => setMobileMenu(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="mt-auto pb-12 flex flex-col gap-6">
                <button 
                  onClick={() => {
                    setMobileMenu(false);
                    window.dispatchEvent(new CustomEvent('open-ai-chat'));
                  }}
                  className="h-20 w-full rounded-2xl bg-primary-accent font-black text-primary-accent-fg text-xl flex items-center justify-center gap-4 shadow-[0_0_30px_var(--glow)]"
                >
                   Consult AI <ArrowRight size={24} />
                </button>
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-2">
                   <span>Nodes: TRV • COK</span>
                   <span>Latency: 1ms</span>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default function GlassNavbar() {
  return (
    <Suspense fallback={<div className="h-20 w-screen bg-black/20 animate-pulse" />}>
      <NavbarContent />
    </Suspense>
  );
}

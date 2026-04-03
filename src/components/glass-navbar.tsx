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

  const serviceLinks = [
    { name: "Video Production", href: "/services/video-production" },
    { name: "Product Content", href: "/services/product-content" },
    { name: "Performance Ads", href: "/services/performance-marketing" },
    { name: "Strategy & Consulting", href: "/services/video-strategy" },
  ];

  const aiStudioLinks = [
    { name: "AI Media Production", href: "/services/ai-media-production" },
    { name: "AI CGI & Virtual Prod", href: "/services/cgi-virtual-production" },
  ];

  const NavDropdown = ({ title, items }: { title: string; items: { name: string; href: string }[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div 
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className={cn(
          "text-sm font-semibold transition-colors flex items-center gap-2 py-2 uppercase tracking-widest",
          items.some(item => pathname === item.href) ? "text-primary-accent" : "text-foreground/80 group-hover:text-primary-accent"
        )}>
          {title}
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-[10px]">▼</motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-64 bg-obsidian/95 backdrop-blur-3xl border border-white/5 rounded-2xl p-4 shadow-2xl mt-2 flex flex-col gap-2 z-[110]"
            >
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                    pathname === item.href ? "bg-primary-accent text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

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
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          <a href="/" className={cn("text-sm font-semibold uppercase tracking-widest transition-colors", pathname === "/" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent")}>Home</a>
          <a href="/about" className={cn("text-sm font-semibold uppercase tracking-widest transition-colors", pathname === "/about" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent")}>About</a>
          
          <NavDropdown title="Services" items={serviceLinks} />
          <NavDropdown title="DP AI Studios" items={aiStudioLinks} />

          <a href="/portfolio" className={cn("text-sm font-semibold uppercase tracking-widest transition-colors", pathname === "/portfolio" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent")}>Portfolio</a>
          <a href="/contact" className={cn("text-sm font-semibold uppercase tracking-widest transition-colors", pathname === "/contact" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent")}>Contact</a>
          
          <div className="h-6 w-[1px] bg-white/10 mx-1" />
          
          <Magnetic intensity={1.5}>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="h-9 px-5 rounded-full bg-primary-accent text-zinc-200 font-black uppercase tracking-widest text-[9px] hover:scale-105 active:scale-95 hover:text-white transition-all shadow-lg"
            >
              Get Started
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
            <div className="flex flex-col gap-6">
              <a href="/" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>Home</a>
              <a href="/about" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>About</a>
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-primary-accent uppercase tracking-widest">Services</span>
                {serviceLinks.map(link => (
                  <a key={link.name} href={link.href} className="block text-2xl font-bold uppercase text-zinc-400 pl-4" onClick={() => setMobileMenu(false)}>{link.name}</a>
                ))}
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-mono text-primary-accent uppercase tracking-widest">DP AI Studios</span>
                {aiStudioLinks.map(link => (
                  <a key={link.name} href={link.href} className="block text-2xl font-bold uppercase text-zinc-400 pl-4" onClick={() => setMobileMenu(false)}>{link.name}</a>
                ))}
              </div>

              <a href="/portfolio" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>Portfolio</a>
              <a href="/contact" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>Contact</a>
            </div>

            <div className="mt-auto pb-12 flex flex-col gap-6">
                <button 
                  onClick={() => {
                    setMobileMenu(false);
                    window.location.href = '/contact';
                  }}
                  className="h-20 w-full rounded-2xl bg-primary-accent font-black text-primary-accent-fg text-xl flex items-center justify-center gap-4 shadow-[0_0_30px_var(--glow)]"
                >
                   Book Strategy <ArrowRight size={24} />
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

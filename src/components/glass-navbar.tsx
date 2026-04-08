"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";


const NavDropdown = ({ title, categories, pathname, onActiveChange }: { title: string; categories: any[], pathname: string, onActiveChange?: (active: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="relative group outline-none"
      onMouseEnter={() => {
         setIsOpen(true);
         onActiveChange?.(true);
      }}
      onMouseLeave={() => {
         setIsOpen(false);
         onActiveChange?.(false);
      }}
    >
      <Link href={categories[0].href} className={cn(
        "text-sm font-semibold transition-colors flex items-center gap-2 py-2 uppercase tracking-widest outline-none",
        categories.some((cat: any) => pathname.startsWith(cat.href)) ? "text-primary-accent" : "text-foreground/80 group-hover:text-primary-accent"
      )}>
        {title}
        <motion.span className="text-[10px]">▼</motion.span>
      </Link>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-obsidian/95 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 shadow-xl mt-4 grid grid-cols-2 gap-x-16 gap-y-10 z-[110] overflow-hidden"
          >
            {categories.map((cat) => (
              <div key={cat.name} className="space-y-8 relative z-10 group/cat">
                <Link href={cat.href} className="block border-b border-white/5 pb-6 transition-all">
                  <h4 className="text-base font-black text-white group-hover/cat:text-primary-accent uppercase tracking-widest mb-2 transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">{cat.desc}</p>
                </Link>
                <div className="flex flex-col gap-4">
                  {cat.subItems.map((sub: any) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={cn(
                        "text-xs font-bold uppercase tracking-tight transition-all flex items-center gap-3",
                        pathname === sub.href ? "text-primary-accent" : "text-zinc-500 hover:text-white"
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-800 transition-colors group-hover:bg-primary-accent hover:bg-white hover:text-primary-accent transition-all duration-300" />
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function NavbarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aiHovered, setAiHovered] = useState(false);

  const activeView = searchParams.get("view");
  const isAiPath = 
    pathname.includes("/services/ai-") || 
    pathname.includes("/ai-studios") ||
    pathname === "/ai-services" || 
    (pathname === "/portfolio" && activeView === "ai");

  const isAiActive = isAiPath || aiHovered;

  const serviceCategories = [
    {
      name: "E-commerce & D2C",
      href: "/services/ecommerce-video-production",
      desc: "Visual Engine for Marketplaces",
      subItems: [
        { name: "Product Videos", href: "/services/ecommerce-video-production" },
        { name: "Amazon/Shopify Creatives", href: "/services/ecommerce-video-production" },
        { name: "Performance Ad Videos", href: "/services/ecommerce-video-production" },
        { name: "Lifestyle Visuals", href: "/services/ecommerce-video-production" },
      ]
    },
    {
      name: "Real Estate",
      href: "/services/real-estate-video",
      desc: "Architectural & Property Films",
      subItems: [
        { name: "Property Showcase", href: "/services/real-estate-video" },
        { name: "Project Launch Ads", href: "/services/real-estate-video" },
        { name: "Walkthrough Videos", href: "/services/real-estate-video" },
        { name: "Promotional Campaigns", href: "/services/real-estate-video" },
      ]
    },
    {
      name: "SaaS & Tech",
      href: "/services/saas-explainer-video",
      desc: "Digital Clarity for Software",
      subItems: [
        { name: "Explainer Videos", href: "/services/saas-explainer-video" },
        { name: "Product Demos", href: "/services/saas-explainer-video" },
        { name: "Onboarding Videos", href: "/services/saas-explainer-video" },
        { name: "Feature Launch", href: "/services/saas-explainer-video" },
      ]
    },
    {
      name: "Healthcare",
      href: "/services/healthcare-video",
      desc: "Trust-Centric Medical Branding",
      subItems: [
        { name: "Hospital Branding", href: "/services/healthcare-video" },
        { name: "Doctor Profile Videos", href: "/services/healthcare-video" },
        { name: "Patient Awareness", href: "/services/healthcare-video" },
        { name: "Trust-Building Ads", href: "/services/healthcare-video" },
      ]
    }
  ];

  const aiStudioCategories = [
    {
      name: "Performance & Ads",
      href: "/services/ai-video-ads",
      desc: "Maximizing ROI through Neural Ads",
      subItems: [
        { name: "AI Video Ads", href: "/services/ai-video-ads" },
        { name: "Social Media Videos", href: "/services/ai-social-media-videos" },
        { name: "Video Marketing", href: "/services/ai-video-marketing" },
      ]
    },
    {
      name: "Production Core",
      href: "/services/ai-video-production",
      desc: "Cinematic AI Brand & Ad Films",
      subItems: [
        { name: "Full Production", href: "/services/ai-video-production" },
        { name: "Post & AI VFX", href: "/services/ai-video-editing" },
      ]
    },
    {
      name: "Specialized Nodes",
      href: "/services/ai-product-videos",
      desc: "E-comm & Corporate Solutions",
      subItems: [
        { name: "AI Product Videos", href: "/services/ai-product-videos" },
        { name: "Explainer Videos", href: "/services/ai-explainer-videos" },
        { name: "Corporate Films", href: "/services/ai-corporate-videos" },
      ]
    },
    {
      name: "Cinematic Gallery",
      href: "/services/ai-cinematic-production",
      desc: "Luxury Storytelling & AI Film",
      subItems: [
        { name: "Cinematic AI", href: "/services/ai-cinematic-production" },
        { name: "AI Film production", href: "/services/ai-film-production" },
      ]
    }
  ];



  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] border-b border-white/5 px-6 md:px-12 py-4 transition-all duration-500",
      isAiActive ? "bg-obsidian/90 backdrop-blur-3xl theme-blue" : "bg-obsidian/80 backdrop-blur-3xl"
    )}>
      <div className="container mx-auto flex h-12 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex cursor-pointer items-center transition-all duration-500 hover:scale-105 p-0 m-0 leading-none">
            <div className="w-[160px] md:w-[240px]">
              <Image 
                src={isAiActive ? "/images/ai-logo.png" : "/images/main-logo.png"} 
                alt="Define Perspective - Premier AI Media Production & Elite Video Agency India" 
                width={240} 
                height={76} 
                className="object-contain m-0 p-0"
                priority={true}
              />
            </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          <Link href="/" className={cn("text-sm font-semibold uppercase tracking-widest transition-colors", pathname === "/" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent")}>Home</Link>
          <Link href="/about" className={cn("text-sm font-semibold uppercase tracking-widest transition-colors", pathname === "/about" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent")}>About</Link>
          
          <NavDropdown title="Services" categories={serviceCategories} pathname={pathname} />
          <NavDropdown 
            title="DP AI Studios" 
            categories={aiStudioCategories} 
            pathname={pathname}
            onActiveChange={(active) => setAiHovered(active)}
          />

          <Link href="/portfolio" className={cn("text-sm font-semibold uppercase tracking-widest transition-colors", pathname === "/portfolio" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent")}>Portfolio</Link>

          <Link href="/contact" className={cn("text-sm font-semibold uppercase tracking-widest transition-colors", pathname === "/contact" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent")}>Contact</Link>
          
          <div className="h-6 w-[1px] bg-white/10 mx-1" />
          
          <button 
            onClick={() => window.location.href = '/contact'}
            className="group relative h-9 px-5 rounded-full bg-primary-accent text-white font-semibold uppercase tracking-widest text-[11px] flex items-center gap-2 shadow-lg transition-all duration-300 hover:bg-white hover:text-primary-accent"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight size={12} className="relative z-10" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden h-10 w-10 flex items-center justify-center text-zinc-400 hover:text-primary-accent relative z-50"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label={mobileMenu ? "Close Menu" : "Open Menu"}
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
              <Link href="/" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>Home</Link>
              <Link href="/about" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>About</Link>
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-primary-accent uppercase tracking-widest">Services</span>
                {serviceCategories.map(cat => (
                  <Link key={cat.name} href={cat.href} className="block text-2xl font-bold uppercase text-zinc-400 pl-4" onClick={() => setMobileMenu(false)}>{cat.name}</Link>
                ))}
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-mono text-primary-accent uppercase tracking-widest">DP AI Studios</span>
                {aiStudioCategories.map(cat => (
                  <Link key={cat.name} href={cat.href} className="block text-2xl font-bold uppercase text-zinc-400 pl-4" onClick={() => setMobileMenu(false)}>{cat.name}</Link>
                ))}
              </div>

              <Link href="/portfolio" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>Portfolio</Link>

              <Link href="/contact" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>Contact</Link>
            </div>

            <div className="mt-auto pb-12 flex flex-col gap-6">
                <button 
                  onClick={() => {
                    setMobileMenu(false);
                    window.location.href = '/contact';
                  }}
                  className="group relative h-20 w-full rounded-2xl bg-primary-accent font-black text-white text-xl flex items-center justify-center gap-4 shadow-xl transition-all duration-300 hover:bg-white hover:text-primary-accent"
                >
                  <span className="relative z-10 uppercase tracking-widest">Book Strategy</span> 
                  <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-2">
                   <span>Creative Team: Trivandrum • Kochi</span>
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

"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageCircle, Play, Sparkles, Target, Zap, Shield, Cpu, BarChart3, Star, Award, Search, Clapperboard, MonitorPlay, BrainCircuit, Globe, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICE_CATEGORIES = [
  {
    name: "Professional Production",
    href: "/services/video-production",
    description: "Cinematic brand films and high-end commercial narratives.",
    subItems: [
      { name: "Brand Film Production", href: "/services/video-production/brand-film-production" },
      { name: "Ad Film Commercials", href: "/services/video-production/ad-film-commercial-video-production" },
      { name: "Corporate Video Kerala", href: "/services/video-production/corporate-video-production-company-in-kerala" },
      { name: "Promotional Video", href: "/services/video-production/promotional-video-production" },
    ]
  },
  {
    name: "Performance Video",
    href: "/services/performance-video",
    description: "High ROAS video assets for Meta, YT, and Google ads.",
    subItems: [
      { name: "Video Ads (Meta/YT/Google)", href: "/services/performance-video/video-ads-meta-yt-google-production" },
      { name: "UGC Video Ads", href: "/services/performance-video/ugc-video-ads-production-company" },
      { name: "Short-form Ad Creatives", href: "/services/performance-video/short-form-ad-creatives-agency" },
      { name: "Conversion Videos (VSL)", href: "/services/performance-video/vsl-landing-page-video-production" },
    ]
  },
  {
    name: "Ad Film & Creative",
    href: "/services/ad-film-production",
    description: "Big screen aesthetics for global digital campaigns.",
    subItems: [
      { name: "TV Commercials (TVC)", href: "/services/ad-film-production/tv-commercial-tvc-production" },
      { name: "Digital Ad Films", href: "/services/ad-film-production/digital-ad-film-production-company" },
      { name: "Brand Campaign Films", href: "/services/ad-film-production/brand-campaign-film-production" },
    ]
  },
  {
    name: "Social Media Video",
    href: "/services/social-video",
    description: "Viral short-form content to dominate social landscapes.",
    subItems: [
      { name: "Instagram Reels", href: "/services/social-video/instagram-reels-production-company" },
      { name: "YouTube Shorts", href: "/services/social-video/youtube-shorts-production-india" },
      { name: "Trend-based Content", href: "/services/social-video/trend-based-video-content-agency" },
      { name: "Monthly Content Packages", href: "/services/social-video/monthly-social-content-packages" },
    ]
  },
  {
    name: "Product & E-comm",
    href: "/services/product-video",
    description: "Cinematic product storytelling for Amazon and D2C brands.",
    subItems: [
      { name: "Product Demo Videos", href: "/services/product-video/product-demo-video-production" },
      { name: "Amazon/Flipkart Videos", href: "/services/product-video/amazon-flipkart-product-video-services" },
      { name: "Product Ad Creatives", href: "/services/product-video/product-ad-creatives-agency" },
      { name: "Photography + Video Bundles", href: "/services/product-video/photography-video-content-bundles" },
    ]
  },
  {
    name: "Corporate Video",
    href: "/services/corporate-video",
    description: "Professional brand narratives for industry leaders.",
    subItems: [
      { name: "Company Profile Videos", href: "/services/corporate-video/company-profile-video-production" },
      { name: "Branding Films", href: "/services/corporate-video/corporate-branding-films-india" },
      { name: "CEO & Leadership Videos", href: "/services/corporate-video/ceo-leadership-video-production" },
      { name: "Internal Communications", href: "/services/corporate-video/internal-communications-video-agency" },
    ]
  },
  {
    name: "Explainer & Educational",
    href: "/services/explainer-video",
    description: "Simplifying complex ideas through visual intelligence.",
    subItems: [
      { name: "Animated Explainers", href: "/services/explainer-video/animated-explainer-video-production" },
      { name: "SaaS & App Demos", href: "/services/explainer-video/saas-explainer-video-company" },
      { name: "Training & Webinars", href: "/services/explainer-video/training-webinar-video-production" },
    ]
  },
  {
    name: "Marketing & Strategy",
    href: "/services/video-strategy",
    description: "Data-driven creative roadmaps for massive ROAS.",
    subItems: [
      { name: "Funnel Implementation", href: "/services/video-strategy/video-funnel-strategy-implementation" },
      { name: "Creative Strategy Hooks", href: "/services/video-strategy/creative-strategy-hook-optimization" },
      { name: "Campaign Optimization", href: "/services/video-strategy/platform-video-optimization-hub" },
    ]
  }
];

const AI_STUDIO_CATEGORIES = [
  {
    name: "AI Video Ads",
    href: "/services/ai-video-ads",
    description: "Synthetic media ads for high-frequency conversion.",
    subItems: [
      { name: "Meta AI Ads", href: "/services/ai-video-ads/ai-meta-ads-production-india" },
      { name: "YouTube AI Ads", href: "/services/ai-video-ads/ai-youtube-ads-production-company" },
      { name: "Performance AI Creatives", href: "/services/ai-video-ads/performance-ai-creatives-agency" },
    ]
  },
  {
    name: "Cinematic AI",
    href: "/services/ai-cinematic",
    description: "Fusing legacy optics with neural vision.",
    subItems: [
      { name: "AI Brand Films", href: "/services/ai-cinematic/premium-ai-brand-films-india" },
      { name: "AI Visual Narratives", href: "/services/ai-cinematic/high-end-ai-storytelling-agency" },
    ]
  },
  {
    name: "AI Film & Narrative",
    href: "/services/ai-film-narrative",
    description: "Next-gen cinematic storytelling for shorts & features.",
    subItems: [
      { name: "AI Short Films", href: "/services/ai-film-narrative/ai-short-film-production-kerala" },
      { name: "AI Music Videos", href: "/services/ai-film-narrative/ai-music-video-production-india" },
    ]
  },
  {
    name: "AI Social Video",
    href: "/services/ai-social-video",
    description: "Automated social content that feels hyper-organic.",
    subItems: [
      { name: "AI Reels & Shorts", href: "/services/ai-social-video/ai-instagram-reels-production-india" },
      { name: "Daily AI Content Hub", href: "/services/ai-social-video/daily-ai-content-hub-india" },
    ]
  },
  {
    name: "AI Product Video",
    href: "/services/ai-product-video",
    description: "Synthetic product visuals for e-commerce scale.",
    subItems: [
      { name: "AI Amazon Videos", href: "/services/ai-product-video/ai-amazon-e-comm-video-services" },
      { name: "AI Product Demos", href: "/services/ai-product-video/ai-product-demo-production-india" },
    ]
  },
  {
    name: "AI Post-Production",
    href: "/services/ai-post-production",
    description: "Neural enhancement for traditional film footage.",
    subItems: [
      { name: "Neural AI Editing", href: "/services/ai-post-production/neural-ai-video-editing-services" },
      { name: "AI VFX & Motion", href: "/services/ai-post-production/ai-vfx-motion-graphics-india" },
      { name: "AI Color Grading", href: "/services/ai-post-production/ai-color-grading-services-kerala" },
    ]
  },
  {
    name: "AI Corporate Cinema",
    href: "/services/ai-corporate-video",
    description: "Modernized corporate storytelling for tech-first brands.",
    subItems: [
      { name: "AI Company Profiles", href: "/services/ai-corporate-video/ai-company-profiles-production" },
      { name: "AI Employer Branding", href: "/services/ai-corporate-video/ai-employer-branding-videos-kerala" },
    ]
  },
  {
    name: "AI Explainer Lab",
    href: "/services/ai-explainer",
    description: "Educational tools powered by neural synthesis.",
    subItems: [
      { name: "AI SaaS Explainers", href: "/services/ai-explainer/ai-saas-explainer-company-india" },
      { name: "AI Avatar Training", href: "/services/ai-explainer/ai-avatar-educational-videos-uae" },
    ]
  },
  {
    name: "AI Video Strategy",
    href: "/services/ai-video-strategy",
    description: "Algorithmic creative research and optimization.",
    subItems: [
      { name: "AI Funnel Planning", href: "/services/ai-video-strategy/ai-video-funnel-planning-uae" },
      { name: "AI Distribution Lab", href: "/services/ai-video-strategy/ai-distribution-lab-india" },
    ]
  }
];

const getIcon = (name: string) => {
  switch (name) {
    case "Performance Video":
    case "AI Video Ads":
      return <Zap size={18} />;
    case "Product & E-comm":
    case "AI Product Video":
      return <Star size={18} />;
    case "Social Media Video":
    case "AI Social Video":
      return <Target size={18} />;
    case "Corporate Video":
    case "AI Corporate Cinema":
      return <Shield size={18} />;
    case "Explainer & Educational":
    case "AI Explainer Lab":
      return <BarChart3 size={18} />;
    case "Ad Film & Creative":
    case "Cinematic AI":
      return <Award size={18} />;
    case "Marketing & Strategy":
    case "AI Video Strategy":
      return <Search size={18} />;
    case "AI Post-Production":
      return <Cpu size={18} />;
    case "AI Film & Narrative":
      return <Clapperboard size={18} />;
    default:
      return <Play size={18} />;
  }
};

const DropdownPanel = ({
  isOpen,
  title,
  description,
  categories,
  pathname,
  onMouseEnter,
  onMouseLeave,
}: {
  isOpen: boolean;
  title: string;
  description: string;
  categories: any[];
  pathname: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <div
      className={cn(
        "fixed top-[76px] left-0 right-0 bottom-0 z-[5000]",
        "transition-opacity duration-300 ease-out",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute -top-10 left-0 right-0 h-10 bg-transparent" />
      <div
        className="h-full flex flex-col relative"
        style={{
          background: "rgba(4,4,4,0.98)",
          backdropFilter: "blur(60px)",
          boxShadow: "0 60px 160px rgba(0,0,0,0.95)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-accent/80 to-transparent z-10 pointer-events-none" />
        <div className="flex-1 overflow-hidden">
          <div className="h-full grid grid-cols-1 lg:grid-cols-[340px_1fr]">
            <div className="hidden lg:flex flex-col h-full border-r border-white/5 bg-white/[0.01]">
              <div className="flex flex-col justify-between h-full px-12 py-8 overflow-y-auto no-scrollbar">
                <div className="space-y-12">
                  <div>
                    <div className="h-0.5 w-12 bg-primary-accent mb-5" />
                    <h3 className="text-[24px] font-bold text-white uppercase leading-[0.75] tracking-tighter mb-4">
                      {title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 mb-6 leading-[1.8] font-normal max-w-[240px] uppercase tracking-[0.2em] italic">
                      {description}
                    </p>

                    <div className="space-y-4">
                        <Link 
                          href="/contact"
                          className="h-16 px-10 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] flex items-center justify-between group/btn hover:bg-primary-accent transition-all shadow-2xl outline-none focus:ring-2 focus:ring-primary-accent"
                          aria-label="Get a project quote"
                        >
                          Get A Quote <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" aria-hidden="true" />
                        </Link>
                        <Link 
                          href="https://wa.me/917012941696"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-16 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-between group/wa hover:border-[#25D366]/50 transition-all outline-none focus:ring-2 focus:ring-[#25D366]"
                          aria-label="Contact us on WhatsApp"
                        >
                          Whatsapp Now <MessageCircle size={16} className="text-[#25D366] group-hover/wa:scale-125 transition-transform" aria-hidden="true" />
                        </Link>
                    </div>
                  </div>
                </div>
                
                <div className="pt-12 border-t border-white/5">
                   <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Define Perspective © 2026</span>
                </div>
              </div>
            </div>

            {/* Col 2: High-Density Links Grid */}
            <div className="h-full overflow-y-auto px-8 lg:px-20 py-8 no-scrollbar lg:col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                {categories.map((cat) => {
                  const isActive = pathname === cat.href || cat.subItems.some((s: any) => pathname === s.href);
                  return (
                    <div key={cat.name} className="group/cat transition-all">
                      <Link href={cat.href} className="flex items-center gap-5 mb-4 group/link">
                        <div className={cn("shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500", isActive ? "bg-primary-accent text-black scale-110 shadow-[0_0_30px_rgba(var(--primary-accent-rgb),0.4)]" : "bg-white/[0.03] text-zinc-400 group-hover/cat:bg-white group-hover/cat:text-black")}>
                          {getIcon(cat.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-[14px] font-bold uppercase tracking-tight leading-[0.85] text-white group-hover/cat:text-primary-accent transition-colors">
                            {cat.name}
                          </span>
                        </div>
                      </Link>
                      <div className="grid gap-y-3 pl-[68px]">
                        {cat.subItems.map((sub: any) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={cn(
                              "text-[12px] text-zinc-400 hover:text-white uppercase tracking-normal leading-[0.7] transition-colors font-semibold py-0.5 block relative group/sub",
                              pathname === sub.href && "text-primary-accent"
                            )}
                          >
                            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-px bg-primary-accent scale-x-0 group-hover/sub:scale-x-100 transition-transform origin-left" />
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const DropdownBackdrop = ({ isOpen }: { isOpen: boolean }) => (
  <div className={cn("fixed inset-0 top-[76px] z-[4000] bg-black/60 backdrop-blur-md pointer-events-none transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0")} />
);

const NavTrigger = ({ title, isOpen, categories, pathname, href, onOpen, onClose }: any) => {
  const isActive = categories.some((cat: any) => pathname === cat.href || cat.subItems.some((s: any) => pathname === s.href));
  return (
    <Link 
      href={href} 
      className={cn("h-full flex items-center text-[12px] font-normal transition-all gap-1.5 py-2 uppercase tracking-normal outline-none", isActive || isOpen ? "text-primary-accent" : "text-foreground/70 hover:text-primary-accent")} 
      onMouseEnter={onOpen} 
      onMouseLeave={onClose}
      onFocus={onOpen}
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-label={`${title} menu`}
    >
      {title} <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-[7px] opacity-40 ml-0.5 block">▼</motion.span>
    </Link>
  );
};

function GlassNavbarInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openMenu, setOpenMenu] = useState<"video" | "ai" | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // AI Mode Logic: Trigger when on AI pages OR when AI menu is open
  const isAiMode = pathname.includes("/ai-") || openMenu === "ai" || (pathname === "/portfolio" && searchParams.get("view") === "ai");

  const handleOpen = (menu: "video" | "ai") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    timerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 500); 
  };

  const keepOpen = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    setMobileMenu(false);
    setOpenMenu(null);
  }, [pathname]);

  // Handle Dynamic Theme Switching based on Interaction + Path
  useEffect(() => {
    const themeClass = isAiMode ? "theme-blue" : "theme-red";
    document.body.classList.remove("theme-red", "theme-blue");
    document.body.classList.add(themeClass);
    
    if (openMenu || mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openMenu, mobileMenu, isAiMode]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[10000] border-b border-white/5 px-6 md:px-12 py-4 backdrop-blur-3xl transition-all duration-500",
        isAiMode ? "bg-blue-900/10" : "bg-obsidian/90"
      )}>
        <div className="w-full max-w-none flex h-12 items-center justify-between px-2 md:px-8">
          <Link href="/" className="group flex cursor-pointer items-center transition-all duration-500 hover:scale-105">
            <div className="w-[160px] md:w-[240px]">
              <Image 
                src={isAiMode ? "/images/ai-logo.png" : "/images/main-logo.png"} 
                alt="AI video production company in Kerala - DP AI Studio" 
                width={240} 
                height={76} 
                className="object-contain" 
                priority 
                {...({ fetchPriority: "high" } as any)}
              />
            </div>
          </Link>

          <div className="hidden items-center gap-10 lg:gap-14 md:flex h-full">
            <Link href="/" className={cn("text-[12px] font-normal uppercase tracking-normal transition-colors", pathname === "/" ? "text-primary-accent" : "text-foreground/80")}>Home</Link>
            <Link href="/about" className={cn("text-[12px] font-normal uppercase tracking-normal transition-colors", pathname === "/about" ? "text-primary-accent" : "text-foreground/80")}>About Us</Link>
            
            <NavTrigger 
              title="VIDEO PRODUCTION SERVICES" 
              isOpen={openMenu === "video"} 
              categories={SERVICE_CATEGORIES} 
              pathname={pathname} 
              href="/services/video-production" 
              onOpen={() => handleOpen("video")} 
              onClose={handleClose} 
            />

            <NavTrigger 
              title="AI VIDEO PRODUCTION" 
              isOpen={openMenu === "ai"} 
              categories={AI_STUDIO_CATEGORIES} 
              pathname={pathname} 
              href="/services/ai-video-production" 
              onOpen={() => handleOpen("ai")} 
              onClose={handleClose} 
            />

            <Link href="/portfolio" className={cn("text-[12px] font-normal uppercase tracking-normal transition-colors", pathname === "/portfolio" ? "text-primary-accent" : "text-foreground/80")}>Portfolio</Link>
            <Link href="/contact" className={cn("text-[12px] font-normal uppercase tracking-normal transition-colors", pathname === "/contact" ? "text-primary-accent" : "text-foreground/80")}>Contact</Link>
          </div>

          <button 
            className="md:hidden h-10 w-10 flex items-center justify-center text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-accent rounded-lg" 
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      
      {/* Mega Menu Dropdowns - Integrated with AnimatePresence for robust mounting */}
      <AnimatePresence>
        {openMenu === "video" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-[76px] left-0 right-0 bottom-0 z-[9999]"
            onMouseEnter={keepOpen}
            onMouseLeave={handleClose}
          >
            <DropdownPanel 
              isOpen={true} 
              title="Video Production" 
              description="Dominating the visual web with high-velocity media networks."
              categories={SERVICE_CATEGORIES} 
              pathname={pathname} 
              onMouseEnter={keepOpen}
              onMouseLeave={handleClose} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openMenu === "ai" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-[76px] left-0 right-0 bottom-0 z-[9999]"
            onMouseEnter={keepOpen}
            onMouseLeave={handleClose}
          >
            <DropdownPanel 
              isOpen={true} 
              title="AI Studio Node" 
              description="Neural-velocity production for high-stakes digital assets."
              categories={AI_STUDIO_CATEGORIES} 
              pathname={pathname} 
              onMouseEnter={keepOpen}
              onMouseLeave={handleClose} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <DropdownBackdrop isOpen={openMenu !== null} />
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[101]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[400px] bg-zinc-950 border-l border-white/10 z-[6001] p-8 pt-12 shadow-2xl flex flex-col"
            >
               <button 
                 onClick={() => setMobileMenu(false)} 
                 className="absolute top-6 right-6 text-zinc-400 hover:text-white outline-none focus:ring-2 focus:ring-primary-accent rounded-full p-2"
                 aria-label="Close menu"
               >
                 <X size={28} aria-hidden="true" />
               </button>
               
               <div className="flex flex-col gap-6 flex-1 overflow-y-auto no-scrollbar">
                  <Link href="/" className="text-base font-bold uppercase tracking-tighter text-white hover:text-primary-accent" onClick={() => setMobileMenu(false)}>Home_</Link>
                  <Link href="/about" className="text-base font-bold uppercase tracking-tighter text-white hover:text-primary-accent" onClick={() => setMobileMenu(false)}>About_</Link>
                  
                  {/* Mobile Services Accordion */}
                  <div className="space-y-4">
                     <button 
                       onClick={() => setExpandedSection(expandedSection === "services" ? null : "services")}
                       className="flex items-center justify-between w-full text-base font-bold uppercase tracking-tighter text-white focus:text-primary-accent outline-none"
                       aria-expanded={expandedSection === "services"}
                       aria-controls="mobile-video-services"
                     >
                        VIDEO PRODUCTION SERVICES {expandedSection === "services" ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                     </button>
                     <AnimatePresence>
                        {expandedSection === "services" && (
                          <motion.div 
                            id="mobile-video-services"
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-3 overflow-hidden pt-4 border-l border-white/5"
                          >
                             {SERVICE_CATEGORIES.map(cat => (
                               <div key={cat.name} className="space-y-1.5">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-accent">{cat.name}</span>
                                  <ul className="space-y-1.5 pl-2">
                                     {cat.subItems.map(sub => (
                                       <li key={sub.name}>
                                          <Link href={sub.href} className="text-sm text-zinc-400 hover:text-white transition-colors block leading-[0.7] font-medium" onClick={() => setMobileMenu(false)} aria-label={sub.name}>
                                             {sub.name}
                                          </Link>
                                       </li>
                                     ))}
                                  </ul>
                               </div>
                             ))}
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>

                  {/* Mobile AI Studios Accordion */}
                  <div className="space-y-4">
                     <button 
                       onClick={() => setExpandedSection(expandedSection === "ai" ? null : "ai")}
                       className="flex items-center justify-between w-full text-base font-bold uppercase tracking-tighter text-white focus:text-primary-accent outline-none"
                       aria-expanded={expandedSection === "ai"}
                       aria-controls="mobile-ai-services"
                     >
                        AI VIDEO PRODUCTION {expandedSection === "ai" ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                     </button>
                     <AnimatePresence>
                        {expandedSection === "ai" && (
                          <motion.div 
                            id="mobile-ai-services"
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-3 overflow-hidden pt-4 border-l border-white/5"
                          >
                             {AI_STUDIO_CATEGORIES.map(cat => (
                               <div key={cat.name} className="space-y-1.5">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-accent">{cat.name}</span>
                                  <ul className="space-y-1.5 pl-2">
                                     {cat.subItems.map(sub => (
                                       <li key={sub.name}>
                                          <Link href={sub.href} className="text-sm text-zinc-400 hover:text-white transition-colors block leading-[0.7] font-medium" onClick={() => setMobileMenu(false)}>
                                             {sub.name}
                                          </Link>
                                       </li>
                                     ))}
                                  </ul>
                               </div>
                             ))}
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>

                  <Link href="/portfolio" className="text-base font-bold uppercase tracking-tighter text-white hover:text-primary-accent" onClick={() => setMobileMenu(false)}>Portfolio_</Link>
                  <Link href="/contact" className="text-base font-bold uppercase tracking-tighter text-white hover:text-primary-accent" onClick={() => setMobileMenu(false)}>Contact_</Link>
               </div>

               <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <Link 
                    href="https://wa.me/917012941696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-zinc-400 hover:text-white group transition-all"
                    aria-label="Contact us on WhatsApp"
                  >
                     <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#25D366]">
                        <MessageCircle size={18} className="text-[#25D366]" />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest">Live Support</span>
                  </Link>
                  <Link 
                    href="/contact"
                    className="w-full h-16 rounded-2xl bg-primary-accent text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 active:scale-95 transition-all"
                    onClick={() => setMobileMenu(false)}
                    aria-label="Start your project"
                  >
                    Start Project <ArrowRight size={18} />
                  </Link>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function GlassNavbar() {
  return (
    <Suspense fallback={
      <nav className="fixed top-0 left-0 right-0 z-[10000] border-b border-white/5 px-6 md:px-12 py-4 bg-obsidian/90 backdrop-blur-3xl h-[80px]">
        <div className="w-full max-w-none flex h-12 items-center justify-between px-2 md:px-8">
           <div className="w-[160px] md:w-[240px] h-10 bg-white/5 animate-pulse rounded-lg" />
           <div className="hidden md:flex gap-8">
              {[1,2,3,4].map(i => <div key={i} className="w-16 h-4 bg-white/5 animate-pulse rounded" />)}
           </div>
        </div>
      </nav>
    }>
      <GlassNavbarInner />
    </Suspense>
  );
}


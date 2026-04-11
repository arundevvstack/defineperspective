"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageCircle, Play, Sparkles, Target, Zap, Shield, Cpu, BarChart3, Star, Award, Search, Clapperboard, MonitorPlay, BrainCircuit, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICE_CATEGORIES = [
  {
    name: "Performance Video",
    href: "/services/performance-video",
    description: "High ROAS video assets for Meta, YT, and Google ads.",
    subItems: [
      { name: "Video Ads (Meta/YT/Google)", href: "/services/performance-video/video-ads-meta-yt-google-production" },
      { name: "UGC Video Ads", href: "/services/performance-video/ugc-video-ads-production-india" },
      { name: "Short-form Ad Creatives", href: "/services/performance-video/short-form-video-ad-creatives-india-uae" },
      { name: "Conversion Videos", href: "/services/performance-video/conversion-video-vsl-landing-page-production" },
    ]
  },
  {
    name: "Ad Film & Creative",
    href: "/services/ad-film-production",
    description: "Big screen aesthetics for global digital campaigns.",
    subItems: [
      { name: "TV Commercials", href: "/services/ad-film-production/tv-commercial-ad-film-production-india" },
      { name: "Digital Ad Films", href: "/services/ad-film-production/digital-ad-film-production-company-india-uae" },
      { name: "Brand Campaigns", href: "/services/ad-film-production/creative-brand-campaign-production" },
    ]
  },
  {
    name: "Social Media Video",
    href: "/services/social-video",
    description: "Viral short-form content to dominate social landscapes.",
    subItems: [
      { name: "Instagram Reels", href: "/services/social-video/instagram-reels-production-agency-india" },
      { name: "YouTube Shorts", href: "/services/social-video/youtube-shorts-production-company-india" },
      { name: "Trend-based Content", href: "/services/social-video/trend-based-video-content-production" },
      { name: "Monthly Content Packages", href: "/services/social-video/monthly-social-media-video-content-packages" },
    ]
  },
  {
    name: "Product & E-comm",
    href: "/services/product-video",
    description: "Cinematic product storytelling for Amazon and D2C brands.",
    subItems: [
      { name: "Product Demo Videos", href: "/services/product-video/product-demo-video-production-services" },
      { name: "Amazon/Flipkart Videos", href: "/services/product-video/amazon-flipkart-product-video-production" },
      { name: "Product Ad Creatives", href: "/services/product-video/product-video-ads-production-india" },
      { name: "Photography + Video Bundles", href: "/services/product-video/product-photography-video-bundle-services" },
    ]
  },
  {
    name: "Corporate Video",
    href: "/services/corporate-video",
    description: "Professional brand narratives for industry leaders.",
    subItems: [
      { name: "Company Profile Videos", href: "/services/corporate-video/company-profile-video-production-india" },
      { name: "Branding Films", href: "/services/corporate-video/corporate-branding-film-production" },
      { name: "CEO & Recruitment Videos", href: "/services/corporate-video/ceo-recruitment-video-production-services" },
      { name: "Internal Communications", href: "/services/corporate-video/internal-corporate-communication-video-production" },
    ]
  },
  {
    name: "Explainer & Educational",
    href: "/services/explainer-video",
    description: "Simplifying complex ideas through visual intelligence.",
    subItems: [
      { name: "Animated Explainers", href: "/services/explainer-video/animated-explainer-video-production-services" },
      { name: "SaaS & App Demos", href: "/services/explainer-video/saas-app-demo-video-production-company" },
      { name: "Training & Webinars", href: "/services/explainer-video/corporate-training-webinar-video-production" },
    ]
  },
  {
    name: "Marketing & Strategy",
    href: "/services/video-strategy",
    description: "Data-driven creative roadmaps for massive ROAS.",
    subItems: [
      { name: "Funnel & Creative Strategy", href: "/services/video-strategy/video-marketing-funnel-creative-strategy" },
      { name: "Campaign Planning", href: "/services/video-strategy/video-ad-campaign-planning-services" },
      { name: "Platform Optimization", href: "/services/video-strategy/video-content-platform-optimization" },
    ]
  }
];

const AI_STUDIO_CATEGORIES = [
  {
    name: "AI Video Ads",
    href: "/services/ai-video-ads",
    description: "Synthetic media ads for high-frequency conversion.",
    subItems: [
      { name: "Meta AI Ads", href: "/services/ai-video-ads/ai-meta-facebook-instagram-ads-production" },
      { name: "YouTube AI Ads", href: "/services/ai-video-ads/ai-youtube-video-ads-production-services" },
      { name: "Performance AI Creatives", href: "/services/ai-video-ads/high-performance-ai-video-creatives" },
    ]
  },
  {
    name: "Cinematic AI",
    href: "/services/ai-cinematic",
    description: "Fusing legacy optics with neural vision.",
    subItems: [
      { name: "AI Brand Films", href: "/services/ai-cinematic/premium-cinematic-ai-brand-films" },
      { name: "AI Visual Narratives", href: "/services/ai-cinematic/cinematic-ai-visual-storytelling-production" },
    ]
  },
  {
    name: "AI Film & Narrative",
    href: "/services/ai-film-narrative",
    description: "Next-gen cinematic storytelling for shorts & features.",
    subItems: [
      { name: "AI Short Films", href: "/services/ai-film-narrative/ai-powered-short-film-production" },
      { name: "AI Music Videos", href: "/services/ai-film-narrative/ai-generated-cinematic-music-videos" },
    ]
  },
  {
    name: "AI Social Video",
    href: "/services/ai-social-video",
    description: "Automated social content that feels hyper-organic.",
    subItems: [
      { name: "AI Reels & Shorts", href: "/services/ai-social-video/ai-generated-reels-shorts-production" },
      { name: "Daily AI Content Hub", href: "/services/ai-social-video/daily-ai-social-media-content-creation" },
    ]
  },
  {
    name: "AI Product Video",
    href: "/services/ai-product-video",
    description: "Synthetic product visuals for e-commerce scale.",
    subItems: [
      { name: "AI Amazon Videos", href: "/services/ai-product-video/ai-amazon-e-comm-video-services" },
      { name: "AI Product Demos", href: "/services/ai-product-video/ai-generated-product-demo-videos" },
    ]
  },
  {
    name: "AI Post-Production",
    href: "/services/ai-post-production",
    description: "Neural enhancement for traditional film footage.",
    subItems: [
      { name: "Neural AI Editing", href: "/services/ai-post-production/neural-ai-video-editing-services" },
      { name: "AI VFX & Motion", href: "/services/ai-post-production/ai-powered-vfx-motion-graphics" },
      { name: "AI Color Grading", href: "/services/ai-post-production/ai-video-color-grading-enhancement" },
    ]
  },
  {
    name: "AI Corporate Cinema",
    href: "/services/ai-corporate-video",
    description: "Modernized corporate storytelling for tech-first brands.",
    subItems: [
      { name: "AI Company Profiles", href: "/services/ai-corporate-video/ai-corporate-company-profile-production" },
      { name: "AI Branding Films", href: "/services/ai-corporate-video/ai-enhanced-corporate-branding-films" },
    ]
  },
  {
    name: "AI Explainer Lab",
    href: "/services/ai-explainer",
    description: "Educational tools powered by neural synthesis.",
    subItems: [
      { name: "AI SaaS Explainers", href: "/services/ai-explainer/ai-powered-saas-explainer-videos" },
      { name: "AI Avatar Training", href: "/services/ai-explainer/ai-avatar-educational-training-videos" },
    ]
  },
  {
    name: "AI Video Strategy",
    href: "/services/ai-video-strategy",
    description: "Algorithmic creative research and optimization.",
    subItems: [
      { name: "AI Funnel Strategy", href: "/services/ai-video-strategy/ai-driven-video-marketing-funnel-strategy" },
      { name: "AI Data Optimization", href: "/services/ai-video-strategy/ai-video-content-performance-data-analysis" },
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
            {/* Col 1 */}
            <div className="hidden lg:flex flex-col h-full border-r border-white/5">
              <div className="flex flex-col justify-between h-full px-14 py-16 overflow-y-auto">
                <div className="space-y-12">
                  <div>
                    <h3 className="text-[34px] font-black text-white uppercase leading-[0.88] tracking-tight mb-6">
                      {title}
                    </h3>
                    <p className="text-[13px] text-zinc-500 mb-10 leading-[1.7] font-normal max-w-[220px] uppercase italic tracking-widest text-[10px]">
                      {description}
                    </p>

                    <div className="space-y-4">
                      <Link 
                        href="/contact"
                        className="h-14 px-8 rounded-xl bg-primary-accent text-black font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg"
                      >
                        Scale Your Brand Now <ArrowRight size={14} />
                      </Link>
                      <Link 
                        href="https://wa.me/917012941696"
                        className="h-14 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                      >
                        Protocol Start <MessageCircle size={14} className="text-[#25D366]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2 */}
            <div className="h-full overflow-y-auto px-8 lg:px-12 py-12 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-4">
                {categories.map((cat) => {
                  const isActive = pathname === cat.href || cat.subItems.some((s: any) => pathname === s.href);
                  return (
                    <div key={cat.name} className="group/cat border-b border-white/[0.05] py-6 last:border-0 transition-all">
                      <Link href={cat.href} className="flex items-start gap-4 mb-4 group/link">
                        <div className={cn("shrink-0 p-2.5 rounded-xl mt-0.5", isActive ? "bg-primary-accent/20 text-primary-accent" : "bg-white/[0.04] text-zinc-500 group-hover/cat:text-primary-accent")}>
                          {getIcon(cat.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-[19px] font-black uppercase tracking-[0.06em] leading-tight text-white group-hover/cat:text-primary-accent transition-colors">
                            {cat.name}
                          </span>
                        </div>
                      </Link>
                      <div className="grid gap-x-6 gap-y-2 pl-14">
                        {cat.subItems.map((sub: any) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={cn(
                              "text-[10px] text-zinc-500 hover:text-primary-accent uppercase tracking-widest leading-loose transition-colors font-mono py-0.5",
                              pathname === sub.href && "text-primary-accent"
                            )}
                          >
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
    <Link href={href} className={cn("h-full flex items-center text-[13px] font-medium transition-all gap-1.5 py-4 uppercase outline-none", isActive || isOpen ? "text-primary-accent" : "text-foreground/50 hover:text-primary-accent")} onMouseEnter={onOpen} onMouseLeave={onClose}>
      {title} <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-[7px] opacity-40 ml-0.5 block">▼</motion.span>
    </Link>
  );
};

export default function GlassNavbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"video" | "ai" | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = (menu: "video" | "ai") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    timerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 160);
  };

  const keepOpen = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    setMobileMenu(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[6000] border-b border-white/5 px-6 md:px-12 py-4 bg-obsidian/90 backdrop-blur-3xl transition-all duration-500">
        <div className="w-full max-w-none flex h-12 items-center justify-between px-2 md:px-8">
          <Link href="/" className="group flex cursor-pointer items-center transition-all duration-500 hover:scale-105">
            <div className="w-[160px] md:w-[240px]">
              <Image src="/images/main-logo.png" alt="Define Perspective" width={240} height={76} className="object-contain" priority />
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:gap-8 md:flex h-full">
            <Link href="/" className={cn("text-[13px] font-light uppercase", pathname === "/" ? "text-primary-accent" : "text-foreground/80")}>Home</Link>
            <Link href="/about" className={cn("text-[13px] font-light uppercase", pathname === "/about" ? "text-primary-accent" : "text-foreground/80")}>About Us</Link>
            
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

            <Link href="/portfolio" className={cn("text-[13px] font-light uppercase", pathname === "/portfolio" ? "text-primary-accent" : "text-foreground/80")}>Portfolio</Link>
            <Link href="/contact" className={cn("text-[13px] font-light uppercase", pathname === "/contact" ? "text-primary-accent" : "text-foreground/80")}>Contact</Link>
          </div>

          <button className="md:hidden h-10 w-10 flex items-center justify-center text-zinc-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mega Menu Dropdowns - Moved outside nav for clean stacking context */}
      <DropdownPanel 
        isOpen={openMenu === "video"} 
        title="Video Production Hub" 
        description="Dominating the visual web with high-velocity media networks."
        categories={SERVICE_CATEGORIES} 
        pathname={pathname} 
        onMouseEnter={keepOpen}
        onMouseLeave={handleClose} 
      />
      <DropdownPanel 
        isOpen={openMenu === "ai"} 
        title="AI Studio Node" 
        description="Neural-velocity production for high-stakes digital assets."
        categories={AI_STUDIO_CATEGORIES} 
        pathname={pathname} 
        onMouseEnter={keepOpen}
        onMouseLeave={handleClose} 
      />

      <DropdownBackdrop isOpen={openMenu !== null} />
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[1400] bg-black p-10 md:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
               <Image src="/images/main-logo.png" alt="Define Perspective" width={140} height={40} />
               <button onClick={() => setMobileMenu(false)} className="text-zinc-400"><X size={28} /></button>
            </div>
            
            <div className="space-y-8">
               <Link href="/" className="block text-2xl font-black uppercase italic tracking-tighter">Home_</Link>
               <Link href="/about" className="block text-2xl font-black uppercase italic tracking-tighter">About_</Link>
               
               <div className="space-y-4">
                  <p className="text-[10px] font-mono text-primary-accent uppercase tracking-widest">Video Silos</p>
                  {SERVICE_CATEGORIES.map(cat => (
                    <Link key={cat.name} href={cat.href} className="block text-lg font-bold uppercase text-zinc-400">{cat.name}</Link>
                  ))}
               </div>

               <div className="space-y-4">
                  <p className="text-[10px] font-mono text-primary-accent uppercase tracking-widest">AI Studios</p>
                  {AI_STUDIO_CATEGORIES.map(cat => (
                    <Link key={cat.name} href={cat.href} className="block text-lg font-bold uppercase text-zinc-400">{cat.name}</Link>
                  ))}
               </div>
               
               <Link href="/portfolio" className="block text-2xl font-black uppercase italic tracking-tighter">Portfolio_</Link>
               <Link href="/contact" className="block text-2xl font-black uppercase italic tracking-tighter">Contact_</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

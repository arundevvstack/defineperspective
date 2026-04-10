"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, Suspense } from "react";
import { ArrowRight, Menu, X, Zap, Video, Layers, ShoppingBag, Presentation, Briefcase, Target, PlayCircle, Cpu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ─── Icon helper ───────────────────────────────────────────────────────────────
const getIcon = (name: string) => {
  const n = name.toUpperCase();
  if (n.includes("PERFORMANCE") || n.includes("ADS")) return <Zap size={13} />;
  if (n.includes("PRODUCT")) return <ShoppingBag size={13} />;
  if (n.includes("SOCIAL")) return <Sparkles size={13} />;
  if (n.includes("CORPORATE") || n.includes("BUSINESS")) return <Briefcase size={13} />;
  if (n.includes("EXPLAINER") || n.includes("EDUCATIONAL")) return <Presentation size={13} />;
  if (n.includes("AD FILM") || n.includes("CINEMATIC") || n.includes("NARRATIVE")) return <PlayCircle size={13} />;
  if (n.includes("MARKETING") || n.includes("STRATEGY")) return <Target size={13} />;
  if (n.includes("EDITING") || n.includes("POST")) return <Cpu size={13} />;
  if (n.includes("CORE") || n.includes("SPECIALIZED")) return <Layers size={13} />;
  return <Video size={13} />;
};

// ─── Dropdown Panel ─────────────────────────────────────────────────────────────
// Rendered as a SIBLING to <nav>, NOT inside it — escapes backdrop-filter stacking context
const DropdownPanel = ({
  isOpen,
  title,
  categories,
  pathname,
  onClose,
}: {
  isOpen: boolean;
  title: string;
  categories: any[];
  pathname: string;
  onClose: () => void;
}) => {
  return (
    <div
      className={cn(
        "fixed top-[76px] left-0 right-0 bottom-0 z-[1200]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-3 pointer-events-none"
      )}
      onMouseEnter={onClose}
    >
      <div className="absolute -top-2 left-0 right-0 h-3 bg-transparent" />

      {/* Full-height shell */}
      <div
        className="h-full flex flex-col relative"
        style={{
          background: "rgba(4,4,4,0.98)",
          backdropFilter: "blur(60px)",
          boxShadow: "0 60px 160px rgba(0,0,0,0.95)",
        }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-accent/80 to-transparent z-10 pointer-events-none" />

        {/* 3-column layout */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full grid grid-cols-1 lg:grid-cols-[340px_1fr_360px]">

            {/* ── Col 1 : Hub Identity ────────────────────────────────── */}
            <div className="hidden lg:flex flex-col h-full border-r border-white/[0.06]">
              <div className="flex flex-col justify-between h-full px-14 py-16 overflow-y-auto">

                <div className="space-y-8">
                  <div>
                    <p className="text-primary-accent text-[11px] font-semibold tracking-[0.4em] uppercase mb-6">
                      Services Hub
                    </p>
                    <h3 className="text-[34px] font-black text-white uppercase leading-[0.88] tracking-tight">
                      {title}
                    </h3>
                    <p className="text-[13px] text-zinc-500 mt-6 leading-[1.7] font-normal max-w-[220px]">
                      Premium production solutions crafted for elite brands and market leaders.
                    </p>
                  </div>

                  {/* Count badge */}
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] flex-1 bg-white/[0.06]" />
                    <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">
                      {String(categories.length).padStart(2, "0")} Hubs
                    </span>
                  </div>

                  {/* Index list */}
                  <div className="flex flex-col">
                    {categories.map((cat, i) => {
                      const active = pathname === cat.href || cat.subItems.some((s: any) => pathname === s.href);
                      return (
                        <Link
                          key={cat.name}
                          href={cat.href}
                          className="flex items-center gap-4 py-2.5 group/idx border-b border-white/[0.04] last:border-0"
                        >
                          <span className="text-[10px] font-mono text-zinc-700 tabular-nums shrink-0 w-5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className={cn(
                            "text-[11px] font-semibold uppercase tracking-[0.07em] transition-colors duration-150 truncate leading-tight",
                            active ? "text-primary-accent" : "text-zinc-600 group-hover/idx:text-zinc-300"
                          )}>
                            {cat.name}
                          </span>
                          <ArrowRight size={10} className={cn(
                            "ml-auto shrink-0 opacity-0 group-hover/idx:opacity-100 transition-all duration-200 -translate-x-1 group-hover/idx:translate-x-0",
                            active ? "text-primary-accent opacity-100" : "text-zinc-500"
                          )} />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Status */}
                <div className="space-y-3 pt-8 border-t border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.7)] animate-pulse shrink-0" />
                    <span className="text-[11px] font-medium text-zinc-500">Studio: Online</span>
                  </div>
                  <p className="text-[11px] text-zinc-700">Kerala · India · Global</p>
                </div>
              </div>
            </div>

            {/* ── Col 2 : Service Grid ─────────────────────────────────── */}
            <div className="h-full overflow-y-auto px-8 lg:px-12 py-12 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-0">
                {categories.map((cat, idx) => {
                  const isActive =
                    pathname === cat.href ||
                    cat.subItems.some((s: any) => pathname === s.href);
                  return (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, y: 14 }}
                      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                      transition={{
                        delay: isOpen ? idx * 0.035 : 0,
                        duration: 0.28,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group/cat border-b border-white/[0.05] py-6 last:border-0"
                    >
                      {/* Category header */}
                      <Link href={cat.href} className="flex items-start gap-4 mb-4 group/link">
                        {/* Icon */}
                        <div className={cn(
                          "shrink-0 p-2.5 rounded-xl mt-0.5 transition-all duration-300",
                          isActive
                            ? "bg-primary-accent/20 text-primary-accent"
                            : "bg-white/[0.04] text-zinc-500 group-hover/cat:bg-primary-accent/15 group-hover/cat:text-primary-accent"
                        )}>
                          {getIcon(cat.name)}
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Decorative number */}
                          <span className="block text-[9px] font-mono text-zinc-800 mb-1 tabular-nums">
                            {String(idx + 1).padStart(2, "0")} /
                          </span>
                          {/* Category name */}
                          <span className={cn(
                            "block text-[13px] font-black uppercase tracking-[0.06em] leading-tight transition-colors duration-200",
                            isActive ? "text-primary-accent" : "text-zinc-200 group-hover/cat:text-white"
                          )}>
                            {cat.name}
                          </span>
                          {/* Underline */}
                          <div className="mt-2 h-[1px] w-0 group-hover/link:w-full bg-gradient-to-r from-primary-accent/60 to-transparent transition-all duration-300" />
                        </div>
                      </Link>

                      {/* Sub-items */}
                      <div className="pl-[54px] flex flex-col gap-1">
                        {cat.subItems.map((sub: any) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={cn(
                              "text-[12px] font-normal transition-colors duration-150 flex items-center gap-3 group/sub py-1 leading-snug",
                              pathname === sub.href
                                ? "text-primary-accent"
                                : "text-zinc-600 hover:text-zinc-200"
                            )}
                          >
                            <span className="w-0 group-hover/sub:w-3 h-[1px] bg-current shrink-0 transition-all duration-200 opacity-60" />
                            <span className="truncate">{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ── Col 3 : CTA + Stats ──────────────────────────────────── */}
            <div className="hidden lg:flex flex-col h-full border-l border-white/[0.06]">
              <div className="flex flex-col justify-between h-full px-12 py-16 gap-8 overflow-y-auto">

                {/* CTA card */}
                <Link
                  href="/contact"
                  className="group flex flex-col flex-1 p-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-primary-accent/[0.07] hover:border-primary-accent/25 transition-all duration-300 min-h-0"
                >
                  <p className="text-primary-accent text-[11px] font-semibold tracking-[0.4em] uppercase mb-6">
                    Ready to create?
                  </p>
                  <h4 className="text-white text-[32px] font-black uppercase leading-[0.9] tracking-tight mb-6">
                    Start Your<br />Project
                  </h4>
                  <p className="text-zinc-500 text-[13px] leading-[1.7] mb-auto">
                    Get a fully custom production plan within 24 hours. Elite teams, cinematic results.
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-primary-accent text-[12px] font-bold uppercase tracking-widest group-hover:gap-5 transition-all duration-200">
                    <span>Initiate Protocol</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
                  </div>
                </Link>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 shrink-0">
                  {[
                    { val: "500+", label: "Projects Delivered" },
                    { val: "8+", label: "Years Active" },
                    { val: "Kerala", label: "HQ Location" },
                    { val: "24h", label: "Response Time" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] text-center"
                    >
                      <div className="text-white font-black text-[22px] leading-none">{stat.val}</div>
                      <div className="text-zinc-600 text-[10px] font-medium mt-2 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Studio status */}
                <div className="shrink-0 flex items-center justify-between pt-4 border-t border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)] animate-pulse" />
                    <span className="text-[11px] font-medium text-zinc-600">Global Studio: Active</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-700">{categories.length} Hubs</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom status bar */}
        <div className="shrink-0 px-8 lg:px-14 py-3.5 flex justify-between items-center border-t border-white/[0.04] bg-black/30">
          <div className="flex gap-8 text-[10px] font-medium text-zinc-600">
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/70 animate-pulse" />
              Kerala Node
            </span>
            <span className="hidden sm:inline">Trivandrum • Kochi</span>
            <span className="hidden md:inline text-zinc-700">DP_2026.v1</span>
          </div>
          <span className="text-[10px] font-medium text-zinc-600">
            {categories.length} Service Categories
          </span>
        </div>
      </div>
    </div>
  );
};




// ─── Backdrop overlay ────────────────────────────────────────────────────────
const DropdownBackdrop = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={cn(
      "fixed inset-0 top-[76px] z-[1100] bg-black/55 backdrop-blur-sm pointer-events-none transition-opacity duration-300",
      isOpen ? "opacity-100" : "opacity-0"
    )}
  />
);

// ─── Service data ────────────────────────────────────────────────────────────
const SERVICE_CATEGORIES = [
  {
    name: "PERFORMANCE VIDEO PRODUCTION",
    href: "/services/video-ads",
    desc: "Data-Driven ROI & High-Conversion Creative",
    subItems: [
      { name: "Video Ads Production (Meta, YouTube, Google)", href: "/services/video-ads" },
      { name: "UGC Video Ads Production", href: "/services/ugc-ads" },
      { name: "Short-form Ad Creatives (Reels, Shorts)", href: "/services/short-form-ads" },
      { name: "A/B Testing & Creative Variations", href: "/services/ab-testing" },
      { name: "Conversion Video Production (VSL)", href: "/services/conversion-videos" },
    ],
  },
  {
    name: "PRODUCT & E-COMMERCE VIDEO",
    href: "/services/product-videos",
    desc: "Visual Excellence for Marketplaces & D2C",
    subItems: [
      { name: "Product Demo Videos", href: "/services/product-demo" },
      { name: "E-commerce Product Videos (Amazon, Flipkart)", href: "/services/ecommerce-videos" },
      { name: "Product Ad Creatives", href: "/services/product-ads" },
      { name: "Product Photography + Video Bundles", href: "/services/product-photography" },
      { name: "Bulk Product Content Production", href: "/services/bulk-content" },
    ],
  },
  {
    name: "SOCIAL MEDIA VIDEO PRODUCTION",
    href: "/services/social-media",
    desc: "Viral Hooks & Consistent Brand Presence",
    subItems: [
      { name: "Instagram Reels Production", href: "/services/reels" },
      { name: "YouTube Shorts Production", href: "/services/shorts" },
      { name: "Trend-based Content Creation", href: "/services/trend-content" },
      { name: "Daily / Monthly Content Packages", href: "/services/content-packages" },
    ],
  },
  {
    name: "CORPORATE & BUSINESS VIDEO",
    href: "/services/corporate",
    desc: "Elite Storytelling for Professional Brands",
    subItems: [
      { name: "Company Profile Videos", href: "/services/company-profile" },
      { name: "Corporate Branding Videos", href: "/services/corporate-branding" },
      { name: "CEO / Leadership Videos", href: "/services/leadership-videos" },
      { name: "Recruitment Videos", href: "/services/recruitment-videos" },
      { name: "Internal Communication Videos", href: "/services/internal-communications" },
    ],
  },
  {
    name: "EXPLAINER & EDUCATIONAL VIDEO",
    href: "/services/explainer",
    desc: "Simplifying Complexity through Motion",
    subItems: [
      { name: "Animated Explainer Videos", href: "/services/animated-explainer" },
      { name: "SaaS Explainer Videos", href: "/services/saas-explainer" },
      { name: "App Demo Videos", href: "/services/app-demo" },
      { name: "Product Walkthrough Videos", href: "/services/walkthroughs" },
      { name: "Webinar & Training Videos", href: "/services/training-videos" },
    ],
  },
  {
    name: "AD FILM & CREATIVE PRODUCTION",
    href: "/services/ad-films",
    desc: "Cinematic Excellence for Digital & TV",
    subItems: [
      { name: "TV Commercial Production", href: "/services/tv-commercials" },
      { name: "Digital Ad Films", href: "/services/digital-ads" },
      { name: "Brand Campaign Videos", href: "/services/brand-campaigns" },
      { name: "Product Launch Films", href: "/services/launch-films" },
      { name: "Music Videos / Short Films", href: "/services/music-videos" },
    ],
  },
  {
    name: "VIDEO MARKETING & STRATEGY",
    href: "/services/marketing-strategy",
    desc: "Full-Funnel Growth & Optimization",
    subItems: [
      { name: "Video Funnel Strategy", href: "/services/video-funnel" },
      { name: "Content Strategy & Planning", href: "/services/content-strategy" },
      { name: "Creative Strategy (Hooks, Angles)", href: "/services/creative-strategy" },
      { name: "Campaign Planning", href: "/services/campaign-planning" },
      { name: "Platform-specific Optimization", href: "/services/platform-optimization" },
    ],
  },
];

const AI_STUDIO_CATEGORIES = [
  {
    name: "AI CORE PRODUCTION SERVICES",
    href: "/services/ai-video-production",
    desc: "Cinematic Brand & Commercial Films",
    subItems: [
      { name: "Brand Films", href: "/services/ai-brand-films" },
      { name: "Commercial Videos", href: "/services/ai-commercials" },
      { name: "Campaign Videos", href: "/services/ai-campaigns" },
    ],
  },
  {
    name: "AI VIDEO ADS (PERFORMANCE)",
    href: "/services/ai-video-ads",
    desc: "Maximize ROI with Neural Creatives",
    subItems: [
      { name: "Meta Ads (FB/Instagram)", href: "/services/ai-meta-ads" },
      { name: "YouTube Ads", href: "/services/ai-youtube-ads" },
      { name: "Performance Creatives", href: "/services/ai-performance-creatives" },
      { name: "A/B Testing Variations", href: "/services/ai-ab-testing" },
    ],
  },
  {
    name: "AI SOCIAL MEDIA PRODUCTION",
    href: "/services/ai-social-media",
    desc: "Viral Hooks & Trend-Based Content",
    subItems: [
      { name: "Reels / Shorts / TikTok", href: "/services/ai-reels-shorts" },
      { name: "Daily Content", href: "/services/ai-daily-content" },
      { name: "Trend-Based Videos", href: "/services/ai-trend-videos" },
    ],
  },
  {
    name: "AI VIDEO EDITING & POST",
    href: "/services/ai-video-editing",
    desc: "Neural Post-Production & VFX",
    subItems: [
      { name: "AI Editing", href: "/services/ai-editing" },
      { name: "AI VFX", href: "/services/ai-vfx" },
      { name: "Color Grading", href: "/services/ai-color-grading" },
      { name: "AI Enhancement & Upscaling", href: "/services/ai-upscaling" },
    ],
  },
  {
    name: "SPECIALIZED AI SOLUTIONS",
    href: "/services/ai-specialized",
    desc: "Product & Explainer Ecosystems",
    subItems: [
      { name: "AI Product Video (E-comm)", href: "/services/ai-product-videos" },
      { name: "Product Demos", href: "/services/ai-product-demo" },
      { name: "AI Explainer (SaaS/Avatar)", href: "/services/ai-explainer-videos" },
      { name: "Educational Videos", href: "/services/ai-education" },
    ],
  },
  {
    name: "AI CORPORATE PRODUCTION",
    href: "/services/ai-corporate-videos",
    desc: "Elite Business Communications",
    subItems: [
      { name: "Company Profile", href: "/services/ai-company-profile" },
      { name: "Internal Communication", href: "/services/ai-internal-comms" },
      { name: "Employer Branding", href: "/services/ai-employer-branding" },
    ],
  },
  {
    name: "AI MARKETING & STRATEGY",
    href: "/services/ai-video-marketing",
    desc: "Full-Funnel Content Planning",
    subItems: [
      { name: "Campaign Strategy", href: "/services/ai-campaign-strategy" },
      { name: "Funnel Videos", href: "/services/ai-video-funnels" },
      { name: "Distribution Planning", href: "/services/ai-distribution" },
    ],
  },
  {
    name: "CINEMATIC & NARRATIVE AI",
    href: "/services/ai-cinematic-production",
    desc: "Next-Gen Luxury Storytelling",
    subItems: [
      { name: "Cinematic AI (High-end)", href: "/services/ai-cinematic" },
      { name: "Premium Brand Films", href: "/services/ai-premium-films" },
      { name: "Short Films & Narrative", href: "/services/ai-film-production" },
      { name: "Music Videos", href: "/services/ai-music-videos" },
    ],
  },
];

// ─── Navbar trigger button ──────────────────────────────────────────────────
const NavTrigger = ({
  title,
  isOpen,
  categories,
  pathname,
  onOpen,
  onClose,
}: {
  title: string;
  isOpen: boolean;
  categories: any[];
  pathname: string;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const isActive = categories.some(
    (cat) =>
      pathname === cat.href || cat.subItems.some((s: any) => pathname === s.href)
  );

  return (
    <div
      className="h-full flex items-center"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        className={cn(
          "text-[10px] md:text-xs font-black transition-all flex items-center gap-1.5 py-4 uppercase tracking-[0.25em] outline-none cursor-default",
          isActive || isOpen
            ? "text-primary-accent"
            : "text-foreground/50 hover:text-primary-accent"
        )}
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[7px] opacity-40 ml-0.5 block"
        >
          ▼
        </motion.span>
      </button>
    </div>
  );
};

// ─── Main navbar content ───────────────────────────────────────────────────
function NavbarContent({ isAiModeOverride }: { isAiModeOverride?: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openMenu, setOpenMenu] = useState<"video" | "ai" | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = (menu: "video" | "ai") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 160);
  };

  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const activeView = searchParams.get("view");
  const isAiPath =
    pathname.includes("/services/ai-") ||
    pathname.includes("/ai-studios") ||
    pathname === "/ai-services" ||
    (pathname === "/portfolio" && activeView === "ai");

  const isAiActive = isAiModeOverride ?? (isAiPath || openMenu === "ai");

  return (
    <>
      {/* ── Navbar bar ──────────────────────────────────────────────── */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[1300] border-b border-white/5 px-6 md:px-12 py-4 transition-all duration-500",
          isAiActive
            ? "bg-obsidian/90 backdrop-blur-3xl theme-blue"
            : "bg-obsidian/80 backdrop-blur-3xl"
        )}
      >
        <div className="w-full max-w-none flex h-12 items-center justify-between px-2 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group flex cursor-pointer items-center transition-all duration-500 hover:scale-105 p-0 m-0 leading-none"
          >
            <div className="w-[160px] md:w-[240px]">
              <Image
                src={isAiActive ? "/images/ai-logo.png" : "/images/main-logo.png"}
                alt="Define Perspective - Premier AI Media Production & Elite Video Agency India"
                width={240}
                height={76}
                className="object-contain m-0 p-0"
                priority
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 lg:gap-8 md:flex h-full">
            <Link
              href="/"
              className={cn(
                "text-sm font-semibold uppercase tracking-widest transition-colors",
                pathname === "/" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-semibold uppercase tracking-widest transition-colors",
                pathname === "/about" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent"
              )}
            >
              About
            </Link>

            {/* VIDEO PRODUCTION trigger */}
            <NavTrigger
              title="VIDEO PRODUCTION"
              isOpen={openMenu === "video"}
              categories={SERVICE_CATEGORIES}
              pathname={pathname}
              onOpen={() => handleOpen("video")}
              onClose={handleClose}
            />

            {/* AI VIDEO PRODUCTION trigger */}
            <NavTrigger
              title="AI VIDEO PRODUCTION"
              isOpen={openMenu === "ai"}
              categories={AI_STUDIO_CATEGORIES}
              pathname={pathname}
              onOpen={() => handleOpen("ai")}
              onClose={handleClose}
            />

            <Link
              href="/portfolio"
              className={cn(
                "text-sm font-semibold uppercase tracking-widest transition-colors",
                pathname === "/portfolio" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent"
              )}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-semibold uppercase tracking-widest transition-colors",
                pathname === "/contact" ? "text-primary-accent" : "text-foreground/80 hover:text-primary-accent"
              )}
            >
              Contact
            </Link>

            <div className="h-6 w-[1px] bg-white/10 mx-1" />

            <button
              onClick={() => (window.location.href = "/contact")}
              className="group relative h-9 px-5 rounded-full bg-primary-accent text-white font-semibold uppercase tracking-widest text-[11px] flex items-center gap-2 shadow-lg transition-all duration-300 hover:bg-white hover:text-primary-accent"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight size={12} className="relative z-10" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden h-10 w-10 flex items-center justify-center text-zinc-400 hover:text-primary-accent relative z-50"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label={mobileMenu ? "Close Menu" : "Open Menu"}
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 top-0 z-[49] flex flex-col bg-obsidian/95 backdrop-blur-3xl p-12 pt-32 gap-8 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col gap-6">
                <Link href="/" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>Home</Link>
                <Link href="/about" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>About</Link>

                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-primary-accent uppercase tracking-widest">VIDEO PRODUCTION</span>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <Link key={cat.name} href={cat.href} className="block text-xl font-bold uppercase text-zinc-400 pl-4" onClick={() => setMobileMenu(false)}>
                      {cat.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-primary-accent uppercase tracking-widest">AI VIDEO PRODUCTION</span>
                  {AI_STUDIO_CATEGORIES.map((cat) => (
                    <Link key={cat.name} href={cat.href} className="block text-xl font-bold uppercase text-zinc-400 pl-4" onClick={() => setMobileMenu(false)}>
                      {cat.name}
                    </Link>
                  ))}
                </div>

                <Link href="/portfolio" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>Portfolio</Link>
                <Link href="/contact" className="text-3xl font-black uppercase text-white" onClick={() => setMobileMenu(false)}>Contact</Link>
              </div>

              <div className="mt-auto pb-12 flex flex-col gap-6">
                <button
                  onClick={() => { setMobileMenu(false); window.location.href = "/contact"; }}
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

      {/* ── Dropdown panels — OUTSIDE nav, in root stacking context ── */}
      <DropdownBackdrop isOpen={openMenu !== null} />

      {/* VIDEO PRODUCTION panel */}
      <div
        onMouseEnter={() => { keepOpen(); }}
        onMouseLeave={handleClose}
      >
        <DropdownPanel
          isOpen={openMenu === "video"}
          title="VIDEO PRODUCTION"
          categories={SERVICE_CATEGORIES}
          pathname={pathname}
          onClose={keepOpen}
        />
      </div>

      {/* AI VIDEO PRODUCTION panel */}
      <div
        onMouseEnter={() => { keepOpen(); }}
        onMouseLeave={handleClose}
      >
        <DropdownPanel
          isOpen={openMenu === "ai"}
          title="AI VIDEO PRODUCTION"
          categories={AI_STUDIO_CATEGORIES}
          pathname={pathname}
          onClose={keepOpen}
        />
      </div>
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────────────
export default function GlassNavbar({ isAiModeOverride }: { isAiModeOverride?: boolean }) {
  return (
    <Suspense fallback={<div className="h-20 w-screen bg-black/20 animate-pulse" />}>
      <NavbarContent isAiModeOverride={isAiModeOverride} />
    </Suspense>
  );
}

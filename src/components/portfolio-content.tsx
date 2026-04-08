"use client";

import { motion } from "framer-motion";
import { 
  Play, 
  Video, 
  Camera, 
  MoveRight,
  Cpu,
  ArrowRight,
  ExternalLink,
  LayoutGrid,
  List,
  Layout
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import LiteYouTube from "@/components/lite-youtube";
import Link from "next/link";

const videoData = [
  {
    category: "Corporate & Brand Films",
    description: "Premium brand storytelling and corporate video production in Kerala, designed to build trust and authority.",
    projects: [
      { id: "corp1", title: "To U Commercial", videoId: "NEqjeiDThcY", service: "TVC", industry: "Fashion/ Apparal", href: "/portfolio/to-u-commercial" },
      { id: "corp2", title: "BB Serum TVC", videoId: "8TntXDekuE8", service: "TVC", industry: "Cosmetics & Beauty", href: "/portfolio/bb-serum-tvc" },
      { id: "corp3", title: "Dotspace Commercial", videoId: "HuX40LSwF7M", service: "TVC", industry: "Co-working Space", href: "/portfolio/dotspace-commercial" },
      { id: "corp4", title: "SP Wellness Fort Hospital AD", videoId: "67IExKhWqd0", service: "TVC", industry: "Health" },
      { id: "corp5", title: "Suruma Wedding TVC", videoId: "oP9rsiWbGAE", service: "TVC", industry: "Fashion" },
    ]
  },
  {
    category: "Social Media & Ads",
    description: "High-impact reels, ads, and short-form videos for brands across India, optimized for algorithmic growth.",
    projects: [
      { id: "social1", title: "Muralya Dairy Ad Film", videoId: "99T1Nwo45O4", service: "TVC", industry: "FMCG" },
      { id: "social2", title: "OhMyGene Minime MicroAD", videoId: "HG24sn19Dp0", service: "TVC", industry: "Health" },
      { id: "social3", title: "To U TVC Trichur Fashion Jewellery", videoId: "rVKLj_se29k", service: "TVC", industry: "Fashion" },
      { id: "social4", title: "Fortune Academy Advertisement", videoId: "0xw5zclnT9g", service: "TVC", industry: "Education" },
    ]
  },
  {
    category: "Vertical Ads",
    description: "Mobile-first cinematic vertical storytelling designed for maximum retention and cross-platform engagement.",
    projects: [
      { id: "vert1", title: "Yaalika Fashion Reel", videoId: "6h3iDa4iSlQ", service: "Vertical Ad", industry: "Fashion" },
      { id: "vert2", title: "To U Fashion Short", videoId: "Bv82EbGrDas", service: "Vertical Ad", industry: "Fashion" },
      { id: "vert3", title: "Yaalika Boutique Series", videoId: "6X4nwm1bMB4", service: "Vertical Ad", industry: "Fashion" },
      { id: "vert4", title: "Yaalika Lifestyle Edit", videoId: "1y3pCiIXY2g", service: "Vertical Ad", industry: "Fashion" },
      { id: "vert5", title: "Trichur Jewellery Commercial", videoId: "xSmBZrlZOxQ", service: "Vertical Ad", industry: "Fashion" },
    ]
  }
];

const aiData = [
  {
    category: "AI Video Production",
    description: "Photorealistic generative video and motion for brands. Visual velocity refined.",
    projects: [
      { id: "ai1", title: "Desert Queen | West Vogue Series", videoId: "HtomLPOzkCU", service: "AI Fashion Film", industry: "Fashion & Lifestyle", client: "West Vogue", href: "/portfolio/desert-queen" },
      { id: "ai2", title: "SHE Luxury Body Lotion", videoId: "5kOnWP-dZZY", service: "AI TV Commercial", industry: "Fashion & Lifestyle", client: "She", href: "/portfolio/she-body-lotion" },
      { id: "ai3", title: "Banaras Silk | Fabrics of India", videoId: "ic0skwrzA5M", service: "AI Documentary", industry: "Fashion & Lifestyle", client: "WestVogue", href: "/portfolio/banaras-silk" },
      { id: "ai4", title: "Swarna Kosa | Heritage Silk Sarees", videoId: "-CYvl4ytIFY", service: "AI TVC", industry: "Fashion & Lifestyle", client: "WestVogue", href: "/portfolio/swarna-kosa" },
      { id: "ai5", title: "SHE Diamond | Cinematic AI Luxury Jewelry Advertisement", videoId: "ZKsTHF772K0", service: "AI TVC", industry: "Fashion & Lifestyle", client: "SHE", href: "/portfolio/she-diamond" },
    ]
  },
  {
    category: "AI Vertical Ads",
    description: "High-conversion, AI-generated short-form vertical assets calibrated for algorithmic delivery.",
    projects: [
      { 
        id: "ai-vert1", 
        title: "Leelama Restaurant | Next-Gen AI Food AI Shortfom AD", 
        videoId: "doApkqt7zDU", 
        service: "AI Shortfom AD", 
        industry: "Food & Beverages", 
        client: "Leelamma Since 1980 Restaurant Chain",
        href: "/portfolio/leelama-restaurant"
      }
    ]
  }
];

const photoData = [
  {
    category: "Strategic Case Studies",
    description: "High-impact advertisement photography for billboards, luxury catalogs, and product advertising in India.",
    projects: [
      { id: "photo1", title: "Kumbayah Kombucha", img: "/images/clients/kumbayah-kombucha.png", href: "/portfolio/kumbayah-kombucha" },
      { id: "photo2", title: "Fashion Editorial", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200", href: "/portfolio/fashion-editorial" },
    ]
  }
];

export default function PortfolioContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("view") || "video";
  const [viewMode, setViewMode] = useState<"grid" | "list" | "masonry">("grid");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const tabs = [
    { id: "video", label: "Production", icon: Video },
    { id: "ai", label: "AI Studios", icon: Cpu },
    { id: "photo", label: "Case Study", icon: Camera },
  ];

  const handleNavigate = (pathOrId: string) => {
    if (pathOrId.startsWith("/")) {
      router.push(pathOrId);
    } else {
      router.push(`/portfolio?view=${pathOrId}`, { scroll: false });
    }
  };

  const currentData = activeTab === "video" ? videoData : activeTab === "ai" ? aiData : photoData;

  return (
    <main className="min-h-screen bg-obsidian text-white pt-20 pb-40 relative overflow-hidden selection:bg-primary-accent/30">
      <GlassNavbar />
      
      {/* Background Graphic Nodes */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[1000px] w-[1000px] bg-primary-accent/5 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 h-[800px] w-[800px] bg-white/5 blur-[180px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Pitch Deck Header Node */}
        <section className="py-8 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <h1 className="text-4xl md:text-8xl font-black tracking-[-0.04em] uppercase mb-6 leading-tight drop-shadow-2xl">
              {activeTab === "video" && <>Cinematic <span className="text-primary-accent italic">& Brand.</span></>}
              {activeTab === "ai" && <>AI <span className="text-primary-accent italic">& Neural Studios.</span></>}
              {activeTab === "photo" && <>Case <span className="text-primary-accent italic">Study.</span></>}
            </h1>
            
            <p className="text-base md:text-lg text-zinc-500 font-light max-w-3xl mx-auto uppercase tracking-[0.15em] leading-relaxed mb-10">
               {activeTab === "video" && "Our core philosophy centers on high-stakes, broadcast-ready practical production. We build visual narratives that command authority and define market leadership."}
               {activeTab === "ai" && "Leveraging proprietary generative systems to bypass legacy constraints. We deliver hyper-realistic visual impact at 10x the speed of traditional agencies."}
               {activeTab === "photo" && "Deep-dive analysis of cross-industry visual solutions. Explore how we’ve moved the needle for major brands through strategic imagery and heritage preservation."}
            </p>

           

            {/* Strategic Switcher (The Deck Navigator) */}
            <div className="flex justify-center w-full mb-12">
              <div className="flex p-3 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl">
                 <div className="flex gap-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleNavigate(tab.id)}
                        className={cn(
                          "relative px-4 py-3 md:px-12 md:py-6 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 flex items-center gap-2 md:gap-4 outline-none",
                          activeTab === tab.id ? "text-obsidian" : "text-zinc-500 hover:text-white"
                        )}
                      >
                        {activeTab === tab.id && (
                          <motion.div 
                            layoutId="activePortfolioTab"
                            className="absolute inset-0 bg-white rounded-2xl shadow-2xl"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                          />
                        )}
                        <tab.icon size={18} className="relative z-10" />
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="space-y-20">
          {currentData.map((section, sectionIdx) => (
            <motion.section 
              key={activeTab + section.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-12 border-b border-white/5 pb-12 group">
                <div className="max-w-4xl">
                  <span className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 block">Strategic Node {" // "} 0{sectionIdx + 1}</span>
                  <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 group-hover:text-primary-accent transition-colors leading-none">
                    {section.category}
                  </h2>
                  <p className="text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest">
                    {section.description}
                  </p>
                </div>

                {/* Local View Switcher - Hidden on Mobile */}
                <div className="hidden md:flex p-1 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl shrink-0">
                   {[
                     { id: "grid", icon: LayoutGrid, label: "Grid View" },
                     { id: "list", icon: List, label: "List View" },
                   ].map((mode) => (
                     <button
                       key={mode.id}
                       onClick={() => setViewMode(mode.id as any)}
                       title={mode.label}
                       className={cn(
                         "p-2 rounded-lg transition-all duration-300",
                         viewMode === mode.id ? "bg-white text-obsidian shadow-sm" : "text-zinc-500 hover:text-zinc-200"
                       )}
                     >
                       <mode.icon size={14} />
                     </button>
                   ))}
                </div>
              </div>

              {/* Grid View */}              {viewMode === "grid" && (
                <div className={cn(
                  "grid gap-12 md:gap-16",
                  (section.category === "AI Vertical Ads" || section.category === "Vertical Ads") 
                    ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-5" 
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                )}>
                  {section.projects.map((project: any, projectIdx: number) => {
                    const ContentWrapper = (project.href ? Link : "div") as any;
                    const wrapperProps = project.href ? { href: project.href } : {};
                    const isVertical = section.category === "AI Vertical Ads" || section.category === "Vertical Ads";

                    return (
                      <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: projectIdx * 0.1 }}
                        className="group"
                      >
                        <ContentWrapper {...wrapperProps} className="block h-full w-full">
                          <div className={cn(
                            "relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-black/60 shadow-xl mb-4 transition-all duration-700",
                            isVertical ? "aspect-[9/16] w-full" : "aspect-video",
                            project.href ? "group-hover:border-primary-accent/50 cursor-pointer" : "cursor-default"
                          )}>
                             {!project.videoId ? (
                               <Image src={project.img || ""} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105 duration-700" />
                             ) : (
                               <LiteYouTube 
                                 videoId={project.videoId} 
                                 title={project.title} 
                                 aspectRatio={isVertical ? "vertical" : "video"} 
                                 isPlaying={activeVideoId === project.id}
                                 onTogglePlay={(playing) => setActiveVideoId(playing ? project.id : null)}
                               />
                             )}
                          </div>
                          <div className="px-4">
                            <h4 className={cn("font-bold uppercase tracking-widest mb-4 group-hover:text-primary-accent transition-colors", isVertical ? "text-xs md:text-sm" : "text-lg")}>
                              {project.title}
                              {project.href && (
                                <span className="ml-4 px-3 py-1 bg-primary-accent/10 border border-primary-accent/20 rounded-full text-[8px] font-black text-primary-accent tracking-tighter align-middle">
                                  CASE STUDY
                                </span>
                              )}
                            </h4>
                            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                              {project.service || "Phased Production"} {" // "} {project.industry || "Strategic"}
                            </p>
                          </div>
                        </ContentWrapper>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* List View */}
              {viewMode === "list" && (
                <div className="flex flex-col gap-12">
                  {section.projects.map((project: any, projectIdx: number) => {
                    const ContentWrapper = (project.href ? Link : "div") as any;
                    const wrapperProps = project.href ? { href: project.href } : {};
                    const isVertical = section.category === "AI Vertical Ads" || section.category === "Vertical Ads";

                    return (
                      <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="group bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition-all"
                      >
                        <ContentWrapper {...wrapperProps} className="flex flex-col md:flex-row gap-8 items-center">
                          <div className={cn("relative rounded-2xl overflow-hidden shrink-0", isVertical ? "h-64 aspect-[9/16]" : "h-40 aspect-video")}>
                             {!project.videoId ? (
                               <Image src={project.img || ""} alt={project.title} fill className="object-cover" />
                             ) : (
                               <LiteYouTube 
                                 videoId={project.videoId} 
                                 title={project.title} 
                                 aspectRatio={isVertical ? "vertical" : "video"} 
                                 isPlaying={activeVideoId === project.id}
                                 onTogglePlay={(playing) => setActiveVideoId(playing ? project.id : null)}
                               />
                             )}
                          </div>
                          <div className="flex-1 text-left">
                            <div className="flex items-center gap-4 mb-2">
                              <h4 className="text-2xl font-black uppercase tracking-widest group-hover:text-primary-accent transition-colors">{project.title}</h4>
                              {project.href && (
                                <span className="px-3 py-1 bg-primary-accent/10 border border-primary-accent/20 rounded-full text-[8px] font-black text-primary-accent tracking-tighter">
                                  CASE STUDY
                                </span>
                              )}
                            </div>
                            <div className="flex gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                               <span>Client: {project.client || "Confidential"}</span>
                               <span>Service: {project.service || "Visual Production"}</span>
                               <span>Industry: {project.industry || "Market Leader"}</span>
                            </div>
                          </div>
                          <ArrowRight className="text-zinc-500 group-hover:translate-x-4 transition-transform group-hover:text-primary-accent" size={32} />
                        </ContentWrapper>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Masonry View Removal */}

            </motion.section>
          ))}
        </div>

        <section className="mt-40 p-12 md:p-32 rounded-[5rem] border border-white/5 bg-white/5 backdrop-blur-3xl text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-[9rem] font-black uppercase tracking-tighter text-white mb-16 leading-[0.8]">
              Ready for <br /><span className="text-primary-accent italic">Impact?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent hover:text-primary-accent"
              >
                Start New Project <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => window.location.href = 'https://wa.me/919496191684'}
                className="h-20 px-16 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-4 hover:text-primary-accent"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppChat />
    </main>
  );
}

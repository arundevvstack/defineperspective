"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  ArrowRight, 
  Video, 
  Camera, 
  Zap, 
  Globe, 
  MoveRight,
  Sparkles,
  LayoutGrid,
  Cpu
} from "lucide-react";
import Image from "next/image";
import GlassNavbar from "@/components/glass-navbar";
import AIDiscoveryAgent from "@/components/ai-discovery-agent";
import { cn } from "@/lib/utils";

const videoData = [
  {
    category: "Corporate & Brand Films",
    description: "Premium brand storytelling and corporate video production in Kerala, designed to build trust and authority.",
    projects: [
      { id: "corp1", title: "Global Tech Summit", videoId: "dQw4w9WgXcQ" },
      { id: "corp2", title: "Luxury Real Estate", videoId: "dQw4w9WgXcQ" },
    ]
  },
  {
    category: "Social Media & Ads",
    description: "High-impact reels, ads, and short-form videos for brands across India, optimized for algorithmic growth.",
    projects: [
      { id: "social1", title: "D2C Brand Launch", videoId: "dQw4w9WgXcQ" },
      { id: "social2", title: "Viral Social Campaign", videoId: "dQw4w9WgXcQ" },
    ]
  }
];

const aiData = [
  {
    category: "AI Video Production & Core",
    description: "Photorealistic generative video and motion for brands. Visual velocity refined.",
    projects: [
      { id: "ai1", title: "Neural Horizons", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200" },
      { id: "ai2", title: "Synthentic Flow", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" },
    ]
  },
  {
    category: "AI Design & Digital Humans",
    description: "Virtual avatars and next-gen brand imagery for high-end fashion and commercials.",
    projects: [
      { id: "ai-design-1", title: "The Synthetic Muse", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" },
      { id: "ai-design-2", title: "Virtual Retainer Hub", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200" },
    ]
  }
];

const photoData = [
  {
    category: "Commercial Photography",
    description: "High-impact advertisement photography for billboards, luxury catalogs, and product advertising in India.",
    projects: [
      { id: "photo1", title: "Luxury Timepiece", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200" },
      { id: "photo2", title: "Fashion Editorial", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" },
      { id: "photo3", title: "Architectural Showcase", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" },
      { id: "photo4", title: "Product Flatlay", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200" },
    ]
  }
];

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PortfolioContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("view") || "video";

  const tabs = [
    { id: "video", label: "Video Production", icon: Video },
    { id: "ai", label: "AI Studios", icon: Cpu },
    { id: "photo", label: "Photography", icon: Camera },
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
    <main className="min-h-screen bg-background text-foreground pt-20 pb-40 relative overflow-hidden transition-colors duration-500">
      <GlassNavbar />
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[800px] w-[800px] bg-primary-accent/10 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* 1. Hero Section */}
        <section className="py-32 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-[10px] font-mono tracking-[0.6em] uppercase text-primary-accent mb-8 block">Archives {" // "} v2026 Core</span>
            <h1 className="text-4xl md:text-9xl font-black tracking-tight uppercase mb-10 leading-[0.85]">
              Visions in <br /><span className="text-primary-accent">Execution.</span>
            </h1>
            
            {/* Tab Switcher */}
            <div className="mt-12 md:mt-20 flex justify-center w-full">
              <div className="flex p-1.5 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl max-w-full overflow-x-auto custom-scrollbar">
                 <div className="flex min-w-max">
                   {tabs.map((tab) => (
                     <button
                       key={tab.id}
                       onClick={() => handleNavigate(tab.id)}
                       className={cn(
                         "relative px-4 md:px-8 py-3 md:py-4 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-2 md:gap-3 outline-none whitespace-nowrap",
                         activeTab === tab.id ? "text-primary-accent-fg" : "text-zinc-500 hover:text-white"
                       )}
                     >
                       {activeTab === tab.id && (
                         <motion.div 
                           layoutId="activePortfolioTab"
                           className="absolute inset-0 bg-primary-accent rounded-2xl shadow-[0_0_30px_var(--glow)]"
                           transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                         />
                       )}
                       <tab.icon size={14} className="relative z-10" />
                       <span className="relative z-10">{tab.label}</span>
                     </button>
                   ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. Portfolio Items (Switchable) */}
        <div className="space-y-48">
          {currentData.map((section, sectionIdx) => (
            <motion.section 
              key={activeTab + section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div className="max-w-3xl">
                  <span className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6 block">Division {" // "} {activeTab}</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
                    {section.category}
                  </h2>
                  <p className="text-xl text-zinc-500 font-light leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {section.projects.map((project: any, projectIdx) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: projectIdx * 0.1 }}
                    className="group"
                  >
                    <div 
                      onClick={() => {
                        if (activeTab === "photo") handleNavigate(`/photography/${project.id}`);
                        if (activeTab === "ai" && project.id.startsWith("ai-design")) handleNavigate(`/ai-studios/${project.id}`);
                      }}
                      className={cn(
                        "relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-black/60 shadow-xl mb-8 transition-all duration-500",
                        (activeTab === "photo" || (activeTab === "ai" && project.id.startsWith("ai-design"))) ? "group-hover:border-primary-accent/30 cursor-pointer" : "cursor-default"
                      )}
                    >
                       {(activeTab === "photo" || activeTab === "ai") ? (
                         <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105">
                           <Image 
                             src={project.img} 
                             alt={project.title} 
                             fill
                             sizes="(max-width: 768px) 100vw, 33vw"
                             className="object-cover"
                             loading="lazy"
                           />
                         </div>
                       ) : (
                         <iframe 
                           src={`https://www.youtube.com/embed/${project.videoId}`} 
                           className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                           allowFullScreen
                         />
                       )}
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <div className="h-14 w-14 rounded-full bg-primary-accent text-primary-accent-fg flex items-center justify-center scale-75 group-hover:scale-100 transition-transform shadow-2xl">
                             {(activeTab === "photo" || (activeTab === "ai" && project.id.startsWith("ai-design"))) ? <MoveRight size={24} /> : <Play size={24} fill="currentColor" />}
                          </div>
                       </div>
                    </div>
                    <div className="px-4">
                      <h4 className="text-xl font-bold uppercase tracking-widest mb-2 group-hover:text-primary-accent transition-colors">{project.title}</h4>
                      <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest leading-loose">
                         Studio Pipeline: {activeTab === "ai" ? "Neural Core" : "Optic Engine"} <br />
                         Status: Released v2.0
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* 3. Conversion Section */}
        <section className="mt-80 p-16 md:p-32 rounded-[4rem] border border-white/5 bg-gradient-to-br from-white/5 to-primary-accent/10 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-12 leading-[0.9]">
              Let’s Create <br /><span className="text-primary-accent">Something Powerful.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="h-20 px-16 rounded-3xl bg-primary-accent text-primary-accent-fg font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl"
              >
                Inquire for {activeTab === 'ai' ? 'AI' : activeTab}
              </button>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
                className="h-20 px-16 rounded-3xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center gap-4"
              >
                Consult with AI Agent <MoveRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </div>

      <AIDiscoveryAgent />
    </main>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-obsidian flex items-center justify-center"><div className="h-2 w-24 bg-red-400 animate-pulse rounded-full" /></div>}>
      <PortfolioContent />
    </Suspense>
  );
}

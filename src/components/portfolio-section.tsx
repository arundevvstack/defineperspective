"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveRight, ChevronRight, BarChart3, Clock, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "tfj-jewellery",
    title: "Trichur Fashion Jewellers",
    desc: "Merging regional heritage with modern CGI. A high-production brand film that elevated a traditional narrative into a visual landmark.",
    beforeUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    ttm: "12 days",
    workflow: "Heritage + CGI",
    roi: "215% High-End Interest",
  },
  {
    id: "kumbayah-kombucha",
    title: "Kumbayah Kombucha",
    desc: "D2C growth through high-velocity social ads. One shoot transformed into 100+ platform-optimized, viral assets.",
    beforeUrl: "https://images.unsplash.com/photo-1549490349-8643362247b2?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    ttm: "48 hours",
    workflow: "D2C + Modular AI",
    roi: "185% Engagement Up",
  }
];

export default function PortfolioSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlider = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <section id="portfolio" className="py-40 px-6 md:px-12 bg-obsidian relative">
      <div className="container mx-auto">
        <div className="mb-32 flex flex-col md:flex-row md:items-end md:justify-between max-w-6xl mx-auto">
          <div className="flex-1">
            <h2 className="text-4xl font-black md:text-7xl text-white tracking-widest uppercase">
              Intelligent Success Stories
            </h2>
            <p className="mt-8 text-xl text-zinc-500 font-light max-w-2xl leading-relaxed">
              See how our AI-integrated workflows helped businesses explain, convert, and dominate their niche.
            </p>
          </div>
          <button className="mt-12 flex items-center gap-4 text-cyan-400 font-bold tracking-widest text-sm uppercase hover:text-white transition-colors duration-300">
            Explore All Project Nodes <ChevronRight size={18} />
          </button>
        </div>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-12 gap-16 items-center",
                idx % 2 === 1 && "lg:rtl" // Alternative layout
              )}
            >
              {/* Before / After Slider */}
              <div className="lg:col-span-7 relative group select-none lg:ltr">
                  <div 
                    ref={containerRef}
                    className="relative aspect-video w-full rounded-3xl overflow-hidden cursor-ew-resize border border-white/5 shadow-2xl"
                    onMouseMove={handleSlider}
                    onTouchMove={handleSlider}
                  >
                    {/* After Image */}
                    <div 
                      className="absolute inset-0 z-0 h-full w-full bg-cover bg-center" 
                      style={{ backgroundImage: `url(${project.afterUrl})` }}
                    />
                    {/* Before Image Overlay */}
                    <div 
                      className="absolute inset-0 z-10 h-full w-full bg-cover bg-center overflow-hidden border-r-[3px] border-cyan-400/50 backdrop-blur-sm" 
                      style={{ 
                        backgroundImage: `url(${project.beforeUrl})`,
                        clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                      }}
                    />
                    {/* Labels */}
                    <div className="absolute top-6 left-6 z-20 rounded-full shadow px-4 py-1.5 bg-black/60 text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] backdrop-blur-md border border-white/5">
                      Raw Concept
                    </div>
                    <div className="absolute top-6 right-6 z-20 rounded-full shadow px-4 py-1.5 bg-cyan-400 text-[10px] font-mono text-black font-black uppercase tracking-[0.2em]">
                      AI Final Master
                    </div>
                    
                    {/* Control Handle */}
                    <div 
                      className="absolute top-0 bottom-0 z-30 w-[2px] flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform" 
                      style={{ left: `${sliderPos}%` }}
                    >
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-400 text-black shadow-[0_0_20px_rgba(240,68,71,1)]">
                         <MoveRight size={20} className="rotate-0" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-[10px] font-mono text-zinc-600 text-center tracking-[0.3em] uppercase opacity-60">
                     DRAG TO VISUALIZE TRANSFORMATION v2.0
                  </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-5 flex flex-col gap-10 lg:ltr text-left">
                 <div>
                    <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-4 block">Case Study {" // "} 0{idx + 1}</span>
                    <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">{project.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg font-light">{project.desc}</p>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 group">
                       <Workflow size={20} className="text-cyan-400 mb-2 transition-transform group-hover:scale-110" />
                       <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-1">Architecture</span>
                       <span className="text-xs font-bold text-white uppercase tracking-wider">{project.workflow}</span>
                    </div>
                    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 group">
                       <Clock size={20} className="text-purple-400 mb-2 transition-transform group-hover:scale-110" />
                       <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-1">Velocity</span>
                       <span className="text-xs font-bold text-white uppercase tracking-wider">{project.ttm}</span>
                    </div>
                    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 group">
                       <BarChart3 size={20} className="text-pink-400 mb-2 transition-transform group-hover:scale-110" />
                       <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-1">Impact Agent</span>
                       <span className="text-xs font-bold text-white uppercase tracking-wider">{project.roi}</span>
                    </div>
                 </div>
                 
                 <button className="h-16 w-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-4 text-sm font-black tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all">
                    Unlock Full Metrics <MoveRight size={18} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

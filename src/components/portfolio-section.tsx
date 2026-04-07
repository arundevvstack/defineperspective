"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveRight, ChevronRight, BarChart3, Clock, Workflow } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "desert-queen-west-vogue",
    title: "Desert Queen | West Vogue Series",
    desc: "Enter a realm of power, elegance, and haute couture with Desert Queen, a cinematic AI fashion film from the West Vogue series.",
    beforeUrl: "https://images.unsplash.com/photo-1515562141511-6cbd47a619ff?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    workflowLabel: "Campaign",
    workflow: "Desert Queen",
    ttmLabel: "Series",
    ttm: "West Vogue",
    roiLabel: "Genre",
    roi: "AI Fashion/Luxury",
  },
  {
    id: "bb-serum-tvc",
    title: "BB Serum TVC",
    desc: "A premium, high-fidelity traditional television commercial designed to elevate the brand's visual identity. Executed with cinematic lighting, expert live-action direction, and high-end color grading to deliver a flawless, broadcast-ready aesthetic.",
    beforeUrl: "https://images.unsplash.com/photo-1594498653385-60177217cce3?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    workflowLabel: "Pipeline",
    workflow: "Live-Action Production",
    ttmLabel: "Format",
    ttm: "Broadcast TVC",
    roiLabel: "Industry",
    roi: "Cosmetics & Beauty",
    actionUrl: "https://youtu.be/8TntXDekuE8",
    actionLabel: "Watch Campaign Film"
  }
];

export default function PortfolioSection({ mode }: { mode: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(p => {
    if (mode === "ai-studio") return p.id.includes("desert") || p.id.includes("ai");
    return p.id.includes("bb-serum") || !p.id.includes("ai");
  });

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
          <button
            onClick={() => window.location.href = '/portfolio'}
            className="mt-12 flex items-center gap-4 text-primary-accent font-black tracking-[0.2em] text-[10px] uppercase hover:text-primary-accent transition-colors duration-300 group"
          >
            Explore All Project Nodes <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="space-y-40">
          {filteredProjects.map((project, idx) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-12 gap-16 items-center",
                idx % 2 === 1 && "lg:rtl" // Alternative layout
              )}
            >
              <div className="lg:col-span-7 relative group select-none lg:ltr">
                  <div 
                    ref={containerRef}
                    className="relative aspect-video w-full rounded-3xl overflow-hidden cursor-ew-resize border border-white/5 shadow-xl"
                    onMouseMove={handleSlider}
                    onTouchMove={handleSlider}
                  >
                    {/* After Image */}
                    <Image 
                      src={project.afterUrl} 
                      alt={`${project.title} - Final Production Result by Define Perspective Kerala Studio`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                    />
                    {/* Before Image Overlay */}
                    <div 
                      className="absolute inset-0 z-10 h-full w-full overflow-hidden border-r-[3px] border-primary-accent/50 backdrop-blur-sm" 
                      style={{ 
                        clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                      }}
                    >
                       <Image 
                        src={project.beforeUrl} 
                        alt={`${project.title} - Raw Concept / Draft Media Assets`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                      />
                    </div>

                    {/* Labels */}
                    <div className="absolute top-6 left-6 z-20 rounded-full shadow px-4 py-1.5 bg-black/60 text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] backdrop-blur-md border border-white/5">
                      Raw Concept
                    </div>
                    <div className="absolute top-6 right-6 z-20 rounded-full shadow px-4 py-1.5 bg-primary-accent text-[10px] font-mono text-white font-black uppercase tracking-[0.2em] hover:bg-white hover:text-primary-accent transition-all duration-300">
                      AI Final Master
                    </div>
                    
                    {/* Control Handle */}
                    <div 
                      className="absolute top-0 bottom-0 z-30 w-[2px] flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform" 
                      style={{ left: `${sliderPos}%` }}
                    >
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-transparent border-2 border-primary-accent text-white shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
                         <MoveRight size={20} className="rotate-0 transition-colors duration-300 group-hover:text-primary-accent" />
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
                    <span className="text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-4 block transition-colors duration-300 group-hover:text-primary-accent">Case Study {" // "} 0{idx + 1}</span>
                    <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">{project.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg font-light">{project.desc}</p>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-transparent border border-white/20 backdrop-blur-sm transition-colors hover:bg-white group hover:text-primary-accent transition-all duration-300">
                       <Workflow size={20} className="text-primary-accent mb-2 transition-transform group-hover:scale-110 transition-colors duration-300 group-hover:text-primary-accent" />
                       <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-1 transition-colors duration-300 group-hover:text-primary-accent">{project.workflowLabel || "Architecture"}</span>
                       <span className="text-xs font-bold text-white uppercase tracking-wider transition-colors duration-300 group-hover:text-primary-accent">{project.workflow}</span>
                    </div>
                    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-transparent border border-white/20 backdrop-blur-sm transition-colors hover:bg-white group hover:text-primary-accent transition-all duration-300">
                       <Clock size={20} className="text-primary-accent mb-2 transition-transform group-hover:scale-110 transition-colors duration-300 group-hover:text-primary-accent" />
                       <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-1 transition-colors duration-300 group-hover:text-primary-accent">{project.ttmLabel || "Velocity"}</span>
                       <span className="text-xs font-bold text-white uppercase tracking-wider transition-colors duration-300 group-hover:text-primary-accent">{project.ttm}</span>
                    </div>
                    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-transparent border border-white/20 backdrop-blur-sm transition-colors hover:bg-white group hover:text-primary-accent transition-all duration-300">
                       <BarChart3 size={20} className="text-primary-accent mb-2 transition-transform group-hover:scale-110 transition-colors duration-300 group-hover:text-primary-accent" />
                       <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-1 transition-colors duration-300 group-hover:text-primary-accent">{project.roiLabel || "Impact Agent"}</span>
                       <span className="text-xs font-bold text-white uppercase tracking-wider transition-colors duration-300 group-hover:text-primary-accent">{project.roi}</span>
                    </div>
                 </div>
                 
                 <button
                   onClick={() => project.actionUrl ? window.open(project.actionUrl, '_blank') : window.location.href = `/portfolio?id=${project.id}`}
                   className="h-16 w-full rounded-2xl bg-transparent border border-white/20 flex items-center justify-center gap-4 text-[10px] font-black tracking-[0.2em] uppercase text-white/40 transition-all shadow-xl hover:text-primary-accent hover:border-primary-accent/40 transition-all duration-300"
                 >
                    {project.actionLabel || "Unlock Full Metrics"} <MoveRight size={18} className="text-primary-accent transition-colors duration-300 group-hover:text-primary-accent" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

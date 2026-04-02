"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Megaphone, Globe, UserCog, Brackets, ArrowUpRight, 
  CheckCircle2, Video, Target, Share2, Zap, Camera, Eye, 
  Box, Workflow, Package, Wand2, Cpu, Star, PlayCircle, Users, ArrowRight
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import AIDiscoveryAgent from "@/components/ai-discovery-agent";
import { cn } from "@/lib/utils";

const serviceSections = [
  {
    title: "Specialized Video & Ad Production",
    subtitle: "Premium Craftsmanship & Cinematic Storytelling",
    icon: Star,
    color: "from-red-400 to-red-600",
    accent: "text-red-400",
    items: [
      { id: "brand-films", title: "Brand Films & TV Commercials", icon: PlayCircle, color: "from-red-400 to-red-500" },
      { id: "corp-id", title: "Corporate & Company Videos", icon: Workflow, color: "from-red-500 to-red-700" },
      { id: "ads-photo", title: "Professional Ad Photography", icon: Camera, color: "from-orange-500 to-red-600" },
      { id: "campaign-strategy", title: "Creative Strategy & Planning", icon: Eye, color: "from-indigo-500 to-purple-600" }
    ]
  },
  {
    title: "AI Studios & Generative Scaling",
    subtitle: "2026-Era Speed, Scalability & AEO",
    icon: Cpu,
    color: "from-cyan-400 to-blue-600",
    accent: "text-cyan-400",
    items: [
      { id: "ai-video", title: "Generative AI Video Production", icon: Video, color: "from-cyan-400 to-blue-500" },
      { id: "ai-cgi", title: "AI & CGI Fusion Hub", icon: Globe, color: "from-blue-500 to-purple-600" },
      { id: "ai-scale", title: "Automated Content Scaling", icon: Zap, color: "from-orange-400 to-red-500" },
      { id: "performance-ads", title: "AI-Optimized Social Ads", icon: Target, color: "from-rose-400 to-pink-500" }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 pb-40 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] bg-red-400/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-cyan-400/10 blur-[180px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <header className="mb-32 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl font-black md:text-9xl tracking-tight uppercase mb-12 leading-[0.85]"
          >
            Media <br /><span className="text-cyan-400">Production</span>
          </motion.h1>
          <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
            Specialized AI and Cinematic divisions delivering high-velocity production for brands in Kerala & India.
          </p>
        </header>

        <div className="space-y-40">
           {serviceSections.map((section, sIdx) => (
             <div key={section.title} className="relative">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-16">
                   <div className="max-w-3xl">
                      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
                         {section.title}
                      </h2>
                      <p className="text-xl font-mono tracking-widest text-zinc-600 uppercase">
                         {section.subtitle}
                      </p>
                   </div>
                </div>
                
                <div className="grid grid-cols-1 gap-12 lg:gap-20">
                  {section.items.map((service, idx) => (
                    <motion.div 
                      key={service.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-20 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden"
                    >
                        <div className="lg:col-span-1 hidden lg:block">
                          <span className="text-3xl font-mono text-primary-accent/40">S{idx+1}</span>
                        </div>
                        
                        <div className="lg:col-span-6">
                          <div className="flex items-center gap-6 mb-10">
                              <div className={cn(
                                "h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center transition-all group-hover:scale-110 shadow-2xl",
                                section.accent
                              )}>
                                <service.icon size={32} />
                              </div>
                              <h3 className="text-3xl font-bold uppercase tracking-widest leading-tight">{service.title}</h3>
                          </div>
                          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                            High-velocity production engineered for your specific trajectory. Blending cinematic craft with 2026-ready scalability.
                          </p>
                          <button 
                            onClick={() => window.location.href = `/contact?subject=Service Intake: ${service.title}`}
                            className="h-16 px-10 rounded-2xl border border-white/10 text-sm font-bold uppercase tracking-widest hover:bg-primary-accent hover:text-primary-accent-fg transition flex items-center gap-4"
                          >
                            Request a Quote <ArrowRight className="text-primary-accent group-hover:text-primary-accent-fg" size={18} />
                          </button>
                        </div>
 
                        <div className="lg:col-span-1 flex items-center justify-center hidden lg:flex">
                           <div className="h-24 w-[1px] bg-white/5" />
                        </div>
 
                        <div className="lg:col-span-4 flex flex-col justify-center">
                          <div className="p-10 rounded-3xl bg-black/40 border border-white/5 space-y-8 relative overflow-hidden">
                              <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">Strategic Benchmarks</span>
                              <ul className="space-y-6">
                                {["AEO-Optimized Assets", "High-Velocity Turnaround", "Premium Aesthetic Core"].map(f => (
                                  <li key={f} className="flex items-center gap-4 text-sm text-zinc-300">
                                    <div className={cn("h-1.5 w-1.5 rounded-full shadow-[0_0_10px_rgba(var(--accent-rgb),1)]", section.accent.replace('text-', 'bg-'))} /> {f}
                                  </li>
                                ))}
                              </ul>
                          </div>
                        </div>
                    </motion.div>
                  ))}
                </div>
             </div>
           ))}
        </div>
      </div>

      <AIDiscoveryAgent />
    </main>
  );
}

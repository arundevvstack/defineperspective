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
    title: "Cinematic Video Production",
    subtitle: "High-End Corporate & Social Media Content",
    items: [
      {
        id: "brand-films",
        title: "Brand Films & TV Commercials",
        desc: "High-quality, human-led commercials and films that build strong trust with your customers.",
        features: ["Professional Direction", "Emotional Storytelling", "Cinema-Grade Quality"],
        icon: PlayCircle,
        color: "text-red-400",
        seo: "TV Ad Production Kerala"
      },
      {
        id: "corp-id",
        title: "Corporate & Company Videos",
        desc: "Premium video storytelling for your company's profile, history, and investor relations.",
        features: ["Company Profiles", "Documentaries", "Corporate Storytelling"],
        icon: Workflow,
        color: "text-red-600",
        seo: "Corporate Video Kochi"
      },
      {
        id: "ads-photo",
        title: "Professional Ad Photography",
        desc: "High-impact photography for billboards, luxury catalogs, and product advertising.",
        features: ["Luxury Product Photos", "Billboard Resolution", "Precision Studio Lighting"],
        icon: Camera,
        color: "text-orange-600",
        seo: "Advertising Photographer Kochi"
      },
      {
        id: "3d-animation",
        title: "3D Animation & Explainer Videos",
        desc: "Custom animation that explains technical products and services in a clear and engaging way.",
        features: ["Technical Animation", "Clear Product Demos", "Expert Animation Team"],
        icon: Sparkles,
        color: "text-pink-600",
        seo: "3D Explainer Videos"
      },
      {
        id: "campaign-strategy",
        title: "Creative Strategy & Planning",
        desc: "We help you plan your entire marketing strategy and write scripts that actually sell.",
        features: ["Marketing Strategy", "Professional Scriptwriting", "Growth Planning"],
        icon: Eye,
        color: "text-indigo-600",
        seo: "Creative Ad Agency Kerala"
      }
    ]
  }
];

export default function ServicesPage() {
  const [activeDivision, setActiveDivision] = useState(0);

  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 pb-40 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] bg-cyan-400/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <header className="mb-24 px-4 py-16 border-b border-white/5 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-10"
            >
               <Video className="text-red-400" size={32} />
               <div className="h-[1px] w-12 bg-white/10" />
               <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600">Cinematic Division v.2026</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-black md:text-8xl tracking-tight uppercase mb-8 leading-[0.9]"
            >
              Elite Cinematic <br /><span className="text-red-400 drop-shadow-[0_0_20px_rgba(240,68,71,0.3)]">Production</span>
            </motion.h1>
            <p className="text-xl text-zinc-500 font-light max-w-2xl leading-relaxed">
              Elevate your brand with world-class human-led video and photography. Our cinematic division focuses on high-impact storytelling for premium brands.
            </p>
          </div>
        </header>

        <div className="space-y-40">
           {serviceSections.map((section) => (
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
                   
                   <div className="hidden lg:flex items-center gap-8">
                     <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-700">Division Pipeline: Online</span>
                     <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-red-400">
                        <Star size={24} />
                     </div>
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
                                service.color
                              )}>
                                <service.icon size={32} />
                              </div>
                              <h3 className="text-3xl font-bold uppercase tracking-widest leading-tight">{service.title}</h3>
                          </div>
                          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                            {service.desc}
                          </p>
                          <button 
                            onClick={() => window.location.href = `/contact?subject=Production Capacity Request: ${service.title}`}
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
                              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-red-400/5 to-transparent" />
                              <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">Strategic Benchmarks</span>
                              <ul className="space-y-6">
                                {service.features.map(f => (
                                  <li key={f} className="flex items-center gap-4 text-sm text-zinc-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(240,68,71,1)]" /> {f}
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

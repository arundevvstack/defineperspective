"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Play, Cpu, Briefcase, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERT_SERVICES = [
  {
    id: "media-production",
    label: "Media Production",
    icon: Play,
    heading: "Elite Media Production & Video Production Studio",
    description: "Our full-service media production and AI studio delivers high-end video production, expert cinematography, and advanced post-production. We specialize in premium TV commercial production, brand films, and corporate video production engineered for global impact and search visibility.",
    features: ["Broadcast TV Commercial Production", "Cinematic Brand Film Production", "Corporate Video Production Services", "Premium Commercial Media Production"],
    mediaUrl: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "ai-studio",
    label: "DP AI Studios",
    icon: Cpu,
    heading: "Premier DP AI Studios & Generative Video Production",
    description: "We combine cutting-edge generative AI with cinematic art direction to engineer photorealistic, high-performance visual assets. From AI-powered product videos to rapid vertical ad pipelines, our AI studio delivers world-class content with unmatched velocity and scale.",
    features: ["Generative AI Video Production", "AI-Powered Product Visuals", "Vertical Ad Pipeline Engineering", "Cinematic AI Brand Storytelling"],
    mediaUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function ServicesSwitcher({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (id: string) => void }) {
  const activeContent = EXPERT_SERVICES.find(s => s.id === activeTab);

  return (
    <section className="py-32 px-6 md:px-12 bg-black relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-20 text-center">
            <span className="text-base font-mono tracking-[0.3em] uppercase text-primary-accent mb-6 block">Choose Your Media Production Solution</span>
            <motion.h2 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-white uppercase"
            >
              {activeTab === "media-production" ? "Media" : "DP AI"} <span className="text-primary-accent italic">{activeTab === "media-production" ? "Production_" : "Studios_"}</span>
            </motion.h2>
        </div>

        {/* Tab Switcher - Horizontal scroll on mobile */}
        <div className="flex flex-nowrap overflow-x-auto gap-4 mb-20 justify-start md:justify-center pb-4 hide-scrollbar">
           {EXPERT_SERVICES.map((service) => (
             <button
               key={service.id}
               onClick={() => setActiveTab(service.id)}
               className={cn(
                 "relative px-8 py-5 rounded-2xl flex items-center gap-3 font-bold uppercase tracking-widest text-xs transition-all whitespace-nowrap overflow-hidden border",
                 activeTab === service.id 
                  ? "bg-transparent border-primary-accent text-primary-accent shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]" 
                  : "bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:border-white/20"
               )}
             >
                <service.icon size={16} className={cn(
                  "transition-colors",
                  activeTab === service.id ? "text-primary-accent" : "text-zinc-600"
                )} />
                <span className="relative z-10">{service.label}</span>
                
                {/* Active Indicator Glow */}
                {activeTab === service.id && (
                  <motion.div 
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-primary-accent/10 rounded-2xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
             </button>
           ))}
        </div>

        {/* Content Display Window */}
        <div className="relative min-h-[500px] border border-white/10 rounded-[3rem] bg-zinc-900/40 p-8 md:p-16 overflow-hidden">
           {/* Abstract Background Blur */}
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-accent/20 rounded-full blur-[120px] pointer-events-none" />

           <AnimatePresence mode="wait">
             {activeContent && (
               <motion.div 
                 key={activeContent.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.5 }}
                 className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 h-full"
               >
                  {/* Text Half */}
                  <div className="flex flex-col justify-center">
                     <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
                       {activeContent.heading}
                     </h3>
                     <p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
                       {activeContent.description}
                     </p>
                     
                     <div className="space-y-4 mb-16">
                        {activeContent.features.map((feat, i) => (
                           <div key={i} className="flex items-center gap-4 text-zinc-300 font-mono text-[11px] uppercase tracking-widest">
                             <div className="h-1.5 w-1.5 rounded-full bg-primary-accent" />
                             {feat}
                           </div>
                        ))}
                     </div>
                     
                     <div className="flex flex-wrap items-center gap-8">
                        <a
                          href="tel:+917012941696"
                          className="group flex w-max items-center gap-4 text-[10px] font-black tracking-[0.3em] uppercase text-white hover:text-primary-accent transition-colors duration-300"
                        >
                           Speak with us <MoveRight size={18} className="text-primary-accent group-hover:translate-x-2 transition-transform" />
                        </a>
                        <a
                          href="https://wa.me/917012941696"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex w-max items-center gap-4 text-[10px] font-black tracking-[0.3em] uppercase text-white hover:text-primary-accent transition-all duration-300"
                        >
                           WhatsApp Now <MessageCircle size={18} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                        </a>
                     </div>
                  </div>

                  {/* Image Half */}
                  <div className="relative h-80 my-auto lg:h-full min-h-[300px] w-full max-h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={activeContent.mediaUrl}
                      alt={activeContent.label}
                      className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale hover:grayscale-0"
                    />
                    {/* Interior gradient shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

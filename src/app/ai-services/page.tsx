"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, Megaphone, Globe, UserCog, Brackets, ArrowUpRight, 
  CheckCircle2, Video, Target, Share2, Zap, Camera, Eye, 
  Box, Workflow, Package, Wand2, Cpu, Star, PlayCircle, Users, ArrowRight
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";
import { cn } from "@/lib/utils";

const aiServices = [
  {
    id: "gen-ai-video",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    desc: "Next-gen video generation for commercials, explainers, and digital backgrounds without traditional sets.",
    features: ["Text-to-Video Engine", "AI Digital Environments", "Deep-Level Post Editing"],
    icon: Video,
    color: "text-primary-accent"
  },
  {
    id: "ai-cgi",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    desc: "Merging real-world physics with AI-generated visual effects and 3D architectural renders.",
    features: ["Virtual Studio Hub", "Physically Accurate AI", "Real-time 3D Rendering"],
    icon: Globe,
    color: "text-primary-accent"
  },
  {
    id: "ai-scale",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    desc: "One master shoot turned into 100+ platform-optimized short-form assets in under 24 hours.",
    features: ["Social Formatting AI", "Automated Hook Testing", "Multi-Language Dubbing"],
    icon: Zap,
    color: "text-primary-accent"
  },
  {
    id: "performance-ads",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    desc: "High-velocity ad creative designed specifically for algorithmic engagement on Meta and TikTok.",
    features: ["Click-Rate Optimization", "Dynamic Visual Testing", "Regional Content Localization"],
    icon: Target,
    color: "text-primary-accent"
  }
];

export default function AIServicesPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 pb-40 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20 transition-colors duration-1000">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] bg-transparent border-2 border-primary-accent/20 blur-[150px] rounded-full animate-pulse hover:bg-transparent    transition-all duration-300" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-transparent border-2 border-primary-accent/10 blur-[180px] rounded-full animate-pulse hover:bg-transparent    transition-all duration-300" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <header className="mb-32 text-center max-w-5xl mx-auto">
          
          <motion.h1 
            
className="text-6xl font-black md:text-9xl tracking-tight uppercase mb-10 leading-[0.85]"
          >
            Future-Proof <br /><span className="text-primary-accent">Intelligence.</span>
          </motion.h1>
          <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
            Welcome to the laboratory. We deploy advanced neural architectures to streamline media production, 
            slashing overhead while maximizing cinematic impact for modern brands.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-16 lg:gap-24">
          {aiServices.map((service, idx) => (
            <motion.div 
              key={service.id}
              
whileInView={{ opacity: 1, x: 0 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-12 lg:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl  transition-all outline outline-1 outline-white/5 hover:outline-primary-accent/20  transition-all duration-300"
            >
              <div className="lg:col-span-7 flex flex-col justify-center">
                 <div className="flex items-center gap-6 mb-10">
                    <div className={cn("h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center transition-all group-hover:scale-110 shadow-xl", service.color)}>
                       <service.icon size={36} />
                    </div>
                    <span className="text-4xl font-bold uppercase tracking-tighter">{service.title}</span>
                 </div>
                 <p className="text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl">
                    {service.desc}
                 </p>
                 <button 
                   onClick={() => window.location.href = `/contact?subject=AI Studio Intake: ${service.title}`}
                   className="h-20 px-12 rounded-3xl bg-transparent border-2 border-primary-accent text-primary-accent-fg font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center gap-4 w-fit hover:bg-transparent    transition-all duration-300"
                 >
                   Initialize Project <ArrowRight size={20} />
                 </button>
              </div>

              <div className="lg:col-span-1 hidden lg:flex items-center justify-center">
                 <div className="h-1/2 w-[1px] bg-white/10" />
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center">
                 <div className="p-10 rounded-[2.5rem] bg-black/40 border border-white/5 space-y-10 relative">
                    <span className="block text-[10px] font-mono tracking-widest text-zinc-600 uppercase border-b border-white/5 pb-4">Studio Modules</span>
                    <ul className="space-y-8">
                       {service.features.map(f => (
                         <li key={f} className="flex items-center gap-5 text-sm font-medium text-zinc-400">
                           <div className="h-2 w-2 rounded-full bg-transparent border-2 border-primary-accent shadow-xl hover:bg-transparent    transition-all duration-300" /> {f}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <WhatsAppChat />
    </main>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cpu,
  Zap,
  Wand2,
  Maximize2,
  MoveRight,
  Database,
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";
import { use } from "react";
const projects = {
  "ai-design-1": {
    title: "The Synthetic Muse",
    client: "Moda Verve",
    cat: "AI Design & Digital Humans",
    hero: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2400",
    description:
      "Developing the first AI-generated virtual model for an Indian luxury brand. Every texture, lighting angle, and pose was meticulously engineered through multi-stage neural diffusion.",
    gallery: [
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1614741487319-f9479ed30100?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
    ],
    technical: [
      { id: "gen", label: "Generator", value: "Custom Flux LoRA", icon: Cpu },
      {
        id: "proc",
        label: "Processing",
        value: "Dual RTX 6000 Ada",
        icon: Database,
      },
      {
        id: "time",
        label: "Pipeline",
        value: "Neural Diffusion v4",
        icon: Wand2,
      },
    ],
  },
};
export default function AICaseStudy({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project =
    projects[id as keyof typeof projects] || projects["ai-design-1"];
  return (
    <main className="min-h-screen bg-obsidian text-white relative theme-blue">
      
      <GlassNavbar /> {/* 1. Full-Bleed Hero Image (Neural Theme) */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        
        <motion.img
          
transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.hero}
          alt={project.title}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        <div className="absolute bottom-20 left-6 md:left-24 max-w-4xl">
          
          <motion.div
            
transition={{ delay: 0.5 }}
          >
            
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-primary-accent mb-6 block">
              Case Study {" // "} AI Design
            </span>
            <h1 className="text-4xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white">
              
              {project.title}
            </h1>
            <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-primary-accent">
              
              <div>
                Client: <span className="text-white">{project.client}</span>
              </div>
              <div>
                Year: <span className="text-white">2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="container mx-auto px-6 md:px-24 py-40">
        
        {/* 2. Project Vision & Technical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48">
          
          <div className="lg:col-span-12">
            
            <h2 className="text-xs font-mono tracking-[0.5em] uppercase text-zinc-600 mb-12 border-b border-white/5 pb-4">
              Neural Architecture Context
            </h2>
          </div>
          <div className="lg:col-span-7">
            
            <p className="text-3xl md:text-5xl font-light leading-snug text-white">
              
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
            
            {project.technical.map((t) => (
              <div
                key={t.id}
                className="flex items-center gap-6 p-8 rounded-3xl bg-transparent border border-white/20 group /30 transition-all border-l-[3px] border-l-primary-accent   transition-all duration-300"
              >
                
                <div className="h-14 w-14 rounded-2xl bg-transparent border-2 border-primary-accent/20 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform shadow-xl hover:bg-transparent    transition-all duration-300">
                  
                  <t.icon size={24} />
                </div>
                <div>
                  
                  <span className="text-[10px] font-mono text-primary-accent/60 uppercase block mb-1 font-bold">
                    {t.label}
                  </span>
                  <span className="text-lg font-black text-white">
                    {t.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 3. Neural-High Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-48">
          
          <div className="md:col-span-2 aspect-[21/9] rounded-[3rem] overflow-hidden group relative border border-white/5">
            
            <img
              src={project.gallery[0]}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Detail 1"
            />
            <div className="absolute inset-0 bg-transparent border-2 border-primary-accent/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xl hover:bg-transparent    transition-all duration-300">
              
              <Maximize2 className="text-white" size={40} />
            </div>
          </div>
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/5">
            
            <img
              src={project.gallery[1]}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              alt="Detail 2"
            />
          </div>
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/5">
            
            <img
              src={project.gallery[2]}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              alt="Detail 3"
            />
          </div>
          <div className="md:col-span-2 aspect-video rounded-[3rem] overflow-hidden group border border-white/5">
            
            <img
              src={project.gallery[3]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              alt="Detail 4"
            />
          </div>
        </div>
        {/* 4. Final Conversion CTA */}
        <section className="p-16 md:p-32 rounded-[4rem] border border-primary-accent/20 bg-gradient-to-br from-white/5 to-primary-accent/5 text-center relative overflow-hidden group">
          
          <div className="absolute inset-0 bg-transparent border-2 border-primary-accent/5 animate-pulse rounded-[4rem] hover:bg-transparent    transition-all duration-300" />
          <div className="relative z-10">
            
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-12 leading-[0.9]">
              
              Deploy the <br />
              <span className="text-primary-accent drop-shadow-xl">
                Future of Design.
              </span>
            </h2>
            <p className="text-2xl text-zinc-500 font-light max-w-2xl mx-auto mb-20 leading-relaxed">
              
              Collaborate with DP AI Studios to initialize your brand's
              synthetic evolution.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              
              <Link
                href="/contact?subject=AI Studio Intake: General Inquire"
                className="h-20 px-16 rounded-3xl bg-transparent border-2 border-primary-accent text-primary-accent-fg font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl hover:bg-transparent    transition-all duration-300"
              >
                
                Inquire for AI
              </Link>
              <Link
                href="/portfolio?view=ai"
                className="h-20 px-16 rounded-3xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm  hover:text-black transition-all flex items-center gap-4  transition-all duration-300"
              >
                
                Back to AI Studios <ArrowLeft size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <WhatsAppChat />
    </main>
  );
}

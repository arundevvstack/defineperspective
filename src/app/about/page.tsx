"use client";

import { motion } from "framer-motion";
import { MoveRight, ChevronRight, BarChart3, Clock, Workflow, Sparkles, Wand2, Globe } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import AIDiscoveryAgent from "@/components/ai-discovery-agent";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Fluid Motion (Simulated) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#00F5FF]/10 blur-[150px]" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] animate-pulse rounded-full bg-[#7000FF]/10 blur-[130px]" />
      </div>

      <div className="container relative z-10 mx-auto">
        <header className="mb-40 flex flex-col items-center text-center max-w-5xl mx-auto py-24">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-6xl font-black md:text-9xl tracking-tighter uppercase mb-12"
           >
             The Future <br /> of Vision
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl"
           >
             Define Perspective is not just a production agency; it's a 2026-era laboratory where human creativity meets AI velocity. We don't just capture moments; we build autonomous visual environments.
           </motion.p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
           <div className="space-y-12">
              <h2 className="text-4xl font-bold uppercase tracking-widest text-cyan-400">Our Manifesto</h2>
              <div className="space-y-8 text-xl font-light text-zinc-300 leading-relaxed">
                 <p>
                    In 2026, the barrier between physical and digital media has dissolved. Brands that thrive are those that can scale their vision at the speed of thought.
                 </p>
                 <p>
                    We built Define Perspective to handle this transition. By integrating localized Small Language Models (SLMs) and generative VFX pipelines, we've reduced the distance between an idea and a world-class execution.
                 </p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "AI Velocity", icon: Sparkles, color: "text-cyan-400", desc: "Production scaled at autonomous speeds." },
                { title: "Human Craft", icon: Wand2, color: "text-purple-500", desc: "Direction that machines cannot replicate." },
                { title: "Regional Depth", icon: Globe, color: "text-green-400", desc: "Localized media for 2026 global markets." },
                { title: "Future-Ready", icon: Clock, color: "text-white", desc: "Built for the next decade of media." },
              ].map(stat => (
                <div key={stat.title} className="p-10 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl flex flex-col gap-6">
                   <stat.icon size={32} className={stat.color} />
                   <h4 className="text-xl font-bold uppercase tracking-widest">{stat.title}</h4>
                   <p className="text-sm text-zinc-500 leading-relaxed font-light">{stat.desc}</p>
                </div>
              ))}
           </div>
        </section>

        <section className="py-32 mb-20">
           <div className="p-16 md:p-32 rounded-3xl bg-white/5 border border-white/5 text-center flex flex-col items-center backdrop-blur-xl">
              <h3 className="text-4xl md:text-5xl font-black uppercase mb-10 tracking-widest leading-tight">
                Defining the <br /> 2026 Perspective
              </h3>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="h-16 px-12 rounded-full bg-primary-accent text-primary-accent-fg font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl"
              >
                Inquire for Project
              </button>
           </div>
        </section>
      </div>

      <AIDiscoveryAgent />
    </main>
  );
}

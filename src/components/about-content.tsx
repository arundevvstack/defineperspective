"use client";

import { motion } from "framer-motion";
import { Sparkles, Wand2, Globe, Clock, ArrowRight } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import AIDiscoveryAgent from "@/components/ai-discovery-agent";

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-accent/10 blur-[150px]" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] animate-pulse rounded-full bg-primary-accent/10 blur-[130px]" />
      </div>

      <div className="container relative z-10 mx-auto">
        <header className="mb-40 flex flex-col items-center text-center max-w-5xl mx-auto py-24">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-6xl font-black md:text-[11rem] tracking-tighter uppercase mb-12 leading-[0.8]"
           >
             The Future <br /> 
             <span className="text-primary-accent italic shadow-glow">of Vision_</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl uppercase tracking-widest"
           >
             Define Perspective is a 2026-era media laboratory where human cinematic excellence meets high-velocity neural workflows.
           </motion.p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40 items-center">
           <div className="space-y-12">
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-primary-accent block">Division Origins {" // "} Node 01</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Our <br /><span className="text-primary-accent">Manifesto.</span>
              </h2>
              <div className="space-y-8 text-xl font-light text-zinc-400 leading-relaxed uppercase tracking-tight">
                 <p>
                    In 2026, the barrier between physical and digital media has dissolved. Brands that thrive are those that can scale their vision at the speed of thought.
                 </p>
                 <p>
                    We built Define Perspective to lead this transition. By integrating custom neural VFX pipelines and high-end cinematography, we reduce the latency between concept and global impact.
                 </p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "AI Velocity", icon: Sparkles, desc: "Production scaled at autonomous speeds across India and global markets." },
                { title: "Human Craft", icon: Wand2, desc: "Cinematic direction and artistic soul that machines cannot replicate." },
                { title: "Regional Depth", icon: Globe, desc: "Localized media intelligence optimized for AI-driven search visibility." },
                { title: "Future-Ready", icon: Clock, desc: "Architected for the next decade of spatial and generative media." },
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 rounded-[2.5rem] border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col gap-6 group hover:border-primary-accent/30 transition-all"
                >
                   <stat.icon size={32} className="text-primary-accent group-hover:scale-110 transition-transform" />
                   <h4 className="text-xl font-bold uppercase tracking-widest">{stat.title}</h4>
                   <p className="text-xs text-zinc-600 leading-relaxed font-light uppercase tracking-tighter">{stat.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* New methodology block for AI Search/SEO */}
        <section className="mb-40 py-32 border-y border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <div className="md:col-span-1">
                 <h3 className="text-3xl font-black uppercase tracking-widest mb-6">Autonomous <br /> Production.</h3>
                 <p className="text-zinc-500 text-sm font-light uppercase tracking-widest leading-relaxed">
                   How we leverage AI to outpace traditional agencies.
                 </p>
              </div>
              <div className="md:col-span-2 space-y-12">
                 {[
                   { t: "Generative Environments", d: "Creating photorealistic 3D locations without travel logistics, powered by our proprietary virtual production nodes in Kerala." },
                   { t: "Neural Color Grading", d: "Next-gen color science that adapts to multiple platform color spaces (HDR, Rec.709) for consistent brand identity." },
                   { t: "AEO Optimization", d: "Structuring every piece of content to be discoverable by AI Search agents and LLMs, ensuring your brand stays visible in the post-Google era." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-10 items-start border-l border-primary-accent/30 pl-8">
                     <div>
                       <h4 className="text-xl font-bold uppercase tracking-widest text-white mb-2">{item.t}</h4>
                       <p className="text-zinc-400 font-light leading-relaxed uppercase text-xs tracking-widest">{item.d}</p>
                     </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <section className="py-32 mb-20">
           <div className="p-16 md:p-32 rounded-[4rem] bg-white/5 border border-white/5 text-center flex flex-col items-center backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <h3 className="text-4xl md:text-7xl font-black uppercase mb-12 tracking-widest leading-tight">
                Defining the <br /> <span className="text-primary-accent shadow-glow italic">Perspective.</span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="h-20 px-16 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4"
                >
                  Inquire for Project <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => window.location.href = 'https://wa.me/919496191684'}
                  className="h-20 px-16 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-4"
                >
                  Direct WhatsApp
                </button>
              </div>
           </div>
        </section>
      </div>

      <AIDiscoveryAgent />
    </main>
  );
}

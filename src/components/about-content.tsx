"use client";

import { motion } from "framer-motion";
import { Sparkles, Wand2, Globe, Clock, ArrowRight } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";
import Link from "next/link";

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
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-4xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter uppercase mb-12 leading-[0.8]"
           >
             The Future <br /> 
             <span className="text-primary-accent italic">of Vision.</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl uppercase tracking-widest"
           >
             Define Perspective is a modern media studio where human cinematic excellence meets advanced AI technology.
           </motion.p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40 items-center">
           <div className="space-y-12">
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-primary-accent block">Our Mission {" // "} Kerala & India</span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Our <br /><span className="text-primary-accent">Manifesto.</span>
              </h2>
              <div className="space-y-8 text-xl font-light text-zinc-400 leading-relaxed uppercase tracking-tight">
                 <p>
                    In 2026, the barrier between physical and digital media has dissolved. Brands that thrive are those that can scale their vision at the speed of thought.
                 </p>
                 <p>
                    We built Define Perspective to lead this transition. By combining custom AI workflows and high-end cinematography, we deliver high-impact results for global brands.
                 </p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "AI Speed", icon: Sparkles, desc: "Production scaled at high speeds across India and global markets." },
                { title: "Human Craft", icon: Wand2, desc: "Cinematic direction and artistic soul that machines cannot replicate." },
                { title: "Regional Depth", icon: Globe, desc: "Localized media expertise optimized for maximum search visibility." },
                { title: "Future-Ready", icon: Clock, desc: "Built for the next decade of modern and interactive media." },
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 rounded-[2.5rem] border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col gap-6 group/30 transition-all hover:text-primary-accent transition-all duration-300"
                >
                   <stat.icon size={32} className="text-primary-accent group-hover:scale-110 transition-transform" />
                   <h4 className="text-xl font-bold uppercase tracking-widest">{stat.title}</h4>
                   <p className="text-xs text-zinc-600 leading-relaxed font-light uppercase tracking-tighter">{stat.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* methodology block */}
        <section className="mb-40 py-32 border-y border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <div className="md:col-span-1">
                 <h3 className="text-3xl font-black uppercase tracking-widest mb-6">Modern <br /> Production.</h3>
                 <p className="text-zinc-500 text-sm font-light uppercase tracking-widest leading-relaxed">
                   How we use AI to outpace traditional creative agencies.
                 </p>
              </div>
              <div className="md:col-span-2 space-y-12">
                 {[
                   { t: "Generative Environments", d: "Creating photorealistic 3D locations without travel, powered by our custom virtual production setups in Kerala." },
                   { t: "AI Color Grading", d: "Next-gen color science that adapts across all platforms for a consistent brand identity." },
                   { t: "Search Optimization", d: "Structuring every piece of content to be found by search engines and modern AI tools, ensuring your brand stays visible." }
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
           <div className="p-16 md:p-32 rounded-[4rem] bg-transparent border border-white/20 text-center flex flex-col items-center backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <h3 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-12 tracking-widest leading-tight">
                Defining the <br /> <span className="text-primary-accent italic">Perspective.</span>
              </h3>
               <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/contact"
                  className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-primary-accent/10 hover:border-primary-accent/30"
                >
                  Inquire for Project <ArrowRight size={20} />
                </Link>
                <Link 
                  href="https://wa.me/919496191684"
                  target="_blank"
                  className="h-20 px-16 rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-primary-accent/10 hover:text-primary-accent transition-all flex items-center justify-center gap-4 hover:border-primary-accent/30"
                >
                  Direct WhatsApp
                </Link>
              </div>
            </div>
          </section>
      </div>

      <WhatsAppChat />
    </main>
  );
}

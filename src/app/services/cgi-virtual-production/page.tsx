"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Cpu, Zap, Target, Star, Layers, Play, MessageSquare } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import Link from "next/link";
import Image from "next/image";

export default function CGIVirtualProductionPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 pb-40 relative overflow-hidden font-sans">
      <GlassNavbar />
      
      {/* Hero */}
      <section className="container mx-auto px-6 md:px-12 mb-32 relative z-10">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black underline decoration-2 underline-offset-8">
               Advanced Labs {" // "} Immersive Vision
             </span>
             <h1 className="text-5xl md:text-[6.5rem] lg:text-[8.5rem] font-black uppercase mb-12 leading-[0.85] text-white tracking-tighter">
               CGI & <br />
               <span className="text-primary-accent italic">Virtual Prod_</span>
             </h1>
             <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-12 uppercase tracking-widest max-w-4xl">
               Eliminating location constraints through high-fidelity neural rendering and immersive LED environments.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
            <div className="space-y-10">
               <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter leading-none">
                  Breaking Reality <br /> <span className="text-primary-accent">With Precision_</span>
               </h2>
               <p className="text-lg text-zinc-400 leading-relaxed font-light">
                  Our CGI and Virtual Production pipeline allows brands to create hyper-realistic environments that were previously impossible or too expensive to scout. We merge Unreal Engine 5 with proprietary AI filters to deliver Hollywood-grade visuals for advertising and corporate storytelling.
               </p>
               <ul className="space-y-4">
                  {["LED Volume Integration", "Neural Asset Generation", "Real-time Volumetric Lighting", "Digital Double Synthesis"].map(item => (
                    <li key={item} className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
                       <Zap size={14} className="text-primary-accent" /> {item}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-950 group">
               <Image 
                 src="/images/blog/cgi-interaction.png" 
                 alt="Virtual Production Kerala Studio"
                 fill
                 className="object-cover opacity-60 group-hover:scale-105 transition-all duration-1000"
               />
            </div>
         </div>

         {/* SEO Block */}
         <div className="p-16 md:p-24 rounded-[4rem] bg-white text-obsidian shadow-2xl mb-40">
             <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter mb-8 italic leading-none">The Future of Media In India is Virtual_</h3>
             <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
                By integrating virtual production into your campaign, you reduce travel costs by 80% and increase creative flexibility by 100%. Define Perspective is Kerala's flagship studio for immersive CGI services.
             </p>
         </div>

         <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-8xl font-black uppercase text-white mb-12 leading-none tracking-tighter">
               Ready To <br /> <span className="italic text-primary-accent">Go Virtual?</span>
            </h2>
            <Link href="/contact" className="h-24 px-16 rounded-[2.5rem] bg-white text-black font-black uppercase tracking-[0.3em] text-[12px] flex items-center gap-6 hover:bg-primary-accent transition-all">
               Start Your Project <ArrowRight size={20} />
            </Link>
         </div>
      </section>

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(112,0,255,0.03)_0%,transparent_70%)] pointer-events-none" />
    </main>
  );
}

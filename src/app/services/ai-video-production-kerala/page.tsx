"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Rocket, Zap, Target, Star, Play, MessageCircle } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import Link from "next/link";
import Image from "next/image";

export default function AiVideoKeralaPage() {
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
               Location Protocol {" // "} Kerala Intelligence
             </span>
             <h1 className="text-5xl md:text-[6.5rem] lg:text-[8.5rem] font-black uppercase mb-12 leading-[0.85] text-white tracking-tighter">
               AI Video Prod <br />
               <span className="text-primary-accent italic">In Kerala_</span>
             </h1>
             <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-12 uppercase tracking-widest max-w-4xl">
               Kerala's flagship AI studio for cinematic brand growth, performance ads, and neural storytelling in Kochi and Trivandrum.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Logic Grid */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {[
              { t: "Kochi Startup Hub", d: "Accelerating D2C growth through high-velocity AI creative nodes.", i: Rocket },
              { t: "Trivandrum Enterprise", d: "Scalable corporate media for the capital's tech and public sectors.", i: Target },
              { t: "Pillar Authority", d: "Dominating the Indian SERPs through high-fidelity neural media.", i: Star }
            ].map(pill => (
              <div key={pill.t} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 hover:border-primary-accent/40 transition-all">
                 <pill.i className="text-primary-accent mb-6" size={28} />
                 <h4 className="text-xl font-bold uppercase text-white mb-4 tracking-tighter">{pill.t}</h4>
                 <p className="text-sm text-zinc-400 font-light leading-relaxed uppercase tracking-widest">{pill.d}</p>
              </div>
            ))}
         </div>

         <div className="relative aspect-video rounded-[4rem] overflow-hidden border border-white/5 bg-zinc-950 mb-40 group shadow-2xl">
            <iframe
               src="https://www.youtube.com/embed/BisAbe9s4N8?autoplay=0&rel=0&modestbranding=1"
               title="Kerala AI Production Sample"
               className="absolute inset-0 w-full h-full border-0"
               allowFullScreen
            />
         </div>

         <div className="p-16 md:p-32 rounded-[6rem] bg-primary-accent text-white text-center overflow-hidden">
            <h2 className="text-5xl md:text-9xl font-black uppercase mb-12 leading-[0.8] tracking-tighter">
               Scale Your <br /> Brand In <span className="italic underline underline-offset-8">Kerala_</span>
            </h2>
            <Link href="/contact" className="inline-flex h-24 px-16 rounded-[2.5rem] bg-white text-primary-accent font-black uppercase tracking-[0.3em] text-sm items-center gap-8 shadow-2xl hover:scale-105 transition-all">
               Talk To AI Experts <ArrowRight size={24} />
            </Link>
         </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Cpu, Clock, DollarSign, Users, Globe } from "lucide-react";

const rows = [
  { feature: "Production Time", traditional: "4-8 Weeks", ai: "72-96 Hours", icon: Clock },
  { feature: "Cost Scale", traditional: "High (Shoots + Cast)", ai: "Low (Neural Rendering)", icon: DollarSign },
  { feature: "Revisions", traditional: "Expensive / Limited", ai: "Instant / Infinite", icon: Zap },
  { feature: "Localization", traditional: "Manual Dubbing", ai: "Neural Lip-Sync", icon: Globe },
  { feature: "Variations", traditional: "1-2 Versions", ai: "50+ A/B Variations", icon: Cpu },
  { feature: "Team Size", traditional: "5-10 People", ai: "3-5 AI Experts", icon: Users },
];

export default function AIVideoComparison() {
  return (
    <section className="py-40 px-6 md:px-12 bg-black/40 border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-32 space-y-8">
           <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] text-white">
              The Performance <br />
              <span className="text-primary-accent">Shift_</span>
           </h2>
           <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto uppercase leading-relaxed">
              Analyzing the technical and economic gap between legacy production and neural cinematic workflows.
           </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-3xl">
           <div className="grid grid-cols-3 bg-white/5 p-10 border-b border-white/10">
              <div className="text-[10px] font-black text-zinc-500 uppercase">Feature Set_</div>
              <div className="text-[10px] font-black text-zinc-400 uppercase text-center">Traditional_</div>
              <div className="text-[10px] font-black text-primary-accent uppercase text-center">Neural_AI_</div>
           </div>

           {rows.map((row, idx) => (
             <div key={row.feature} className="grid grid-cols-3 p-10 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                <div className="flex items-center gap-6">
                   <row.icon size={18} className="text-zinc-600 group-hover:text-primary-accent transition-colors" />
                   <span className="text-xs md:text-sm font-bold text-white uppercase">{row.feature}</span>
                </div>
                <div className="flex items-center justify-center text-zinc-500 text-[10px] md:text-xs font-mono uppercase">
                   {row.traditional}
                </div>
                <div className="flex items-center justify-center text-primary-accent text-[10px] md:text-xs font-black uppercase">
                   {row.ai}
                </div>
             </div>
           ))}
        </div>
        
        <div className="mt-16 flex justify-center">
           <div className="px-8 py-3 rounded-full border border-primary-accent/20 bg-primary-accent/5 text-[9px] font-mono text-primary-accent uppercase flex items-center gap-3">
              <Zap size={14} className="animate-pulse" /> Optimized for AI Search Overviews & Comparison Extraction
           </div>
        </div>
      </div>
    </section>
  );
}

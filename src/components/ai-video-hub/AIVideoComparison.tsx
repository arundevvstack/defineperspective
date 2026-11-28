"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Cpu, Clock, DollarSign, Users, Globe } from "lucide-react";

const rows = [
  { feature: "Timeline", traditional: "Scheduling, locations and shoot logistics", ai: "Potentially faster concept-to-edit workflow", icon: Clock },
  { feature: "Cost Structure", traditional: "Crew, locations, travel and set costs", ai: "Budget focused on creative production and finishing", icon: DollarSign },
  { feature: "Revisions", traditional: "Major changes may require reshoots", ai: "Greater flexibility for visual adjustments", icon: Zap },
  { feature: "Localization", traditional: "Separate shoots or dubbing may be needed", ai: "Easier adaptation across markets and languages", icon: Globe },
  { feature: "Campaign Formats", traditional: "Planned around shoot deliverables", ai: "Adaptable across different aspect ratios", icon: Cpu },
  { feature: "Creative Team", traditional: "On-location crew according to production needs", ai: "Focused creative, direction and post-production team", icon: Users },
];

export default function AIVideoComparison() {
  return (
    <section className="py-40 px-6 md:px-12 bg-black/40 border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-32 space-y-8">
           <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] text-white">
              A Different Approach <br />
              <span className="text-primary-accent">to Production_</span>
           </h2>
           <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto uppercase leading-relaxed">
              A comparison of traditional production and AI-assisted commercial filmmaking.
           </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-3xl">
           <div className="grid grid-cols-3 bg-white/5 p-10 border-b border-white/10">
              <div className="text-[10px] font-black text-zinc-500 uppercase">Production Aspect</div>
              <div className="text-[10px] font-black text-zinc-400 uppercase text-center">Traditional Shoot</div>
              <div className="text-[10px] font-black text-primary-accent uppercase text-center">AI-Assisted Production</div>
           </div>

           {rows.map((row, idx) => (
             <div key={row.feature} className="grid grid-cols-3 p-10 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                <div className="flex items-center gap-6">
                   <row.icon size={18} className="text-zinc-600 group-hover:text-primary-accent transition-colors" />
                   <span className="text-xs md:text-sm font-bold text-white uppercase">{row.feature}</span>
                </div>
                <div className="flex items-center justify-center text-zinc-500 text-[10px] md:text-xs font-mono uppercase text-center px-2">
                   {row.traditional}
                </div>
                <div className="flex items-center justify-center text-primary-accent text-[10px] md:text-xs font-black uppercase text-center px-2">
                   {row.ai}
                </div>
             </div>
           ))}
        </div>
        
        <div className="mt-16 flex justify-center">
           <div className="px-8 py-3 rounded-full border border-primary-accent/20 bg-primary-accent/5 text-[9px] font-mono text-primary-accent uppercase flex items-center gap-3 text-center">
              <Zap size={14} className="animate-pulse shrink-0" /> Every production is shaped around the brand, brief, budget, timeline and campaign requirements.
           </div>
        </div>
      </div>
    </section>
  );
}

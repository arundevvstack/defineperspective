"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Calculator, Zap, Cpu, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type Tier = "human" | "assisted" | "full-ai";

const tiers = [
  { id: "human", name: "Classic Human-Led", icon: Users, multiplier: 1.0, desc: "Highest quality manual production by our expert team." },
  { id: "assisted", name: "AI-Powered Mix", icon: Zap, multiplier: 0.6, desc: "A perfect blend of human creativity and AI speed." },
  { id: "full-ai", name: "Modern AI-Only", icon: Cpu, multiplier: 0.3, desc: "Fastest delivery using our latest AI video technology." },
];

export default function PricingCalculator() {
  const [selectedTier, setSelectedTier] = useState<Tier>("assisted");
  const [baseCost, setBaseCost] = useState(10000); // Base cost in USD
  const [quoteId, setQuoteId] = useState("");

  useEffect(() => {
    setQuoteId(`DP-${Math.floor(Math.random() * 90000) + 10000}`);
  }, []);

  const calculatedCost = useMemo(() => {
    const tier = tiers.find(t => t.id === selectedTier);
    return baseCost * (tier?.multiplier || 1);
  }, [baseCost, selectedTier]);

  const handleBaseCostChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseCost(parseInt(e.target.value));
  }, []);

  const handleTierSelect = useCallback((tierId: Tier) => {
    setSelectedTier(tierId);
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 bg-black/60 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 h-full w-[1px] bg-primary-accent opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-accent opacity-20" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold md:text-6xl text-white uppercase mb-8 leading-none">
            Estimate <span className="text-primary-accent">Costing_</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl uppercase tracking-widest leading-relaxed">
            Choose the production style that works best for your brand. We offer traditional human-led crafts and modern AI-assisted workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Controls */}
          <div className="lg:col-span-4 flex flex-col gap-10">
             <div className="flex flex-col gap-6">
                <span className="text-[10px] text-zinc-400 font-mono tracking-[0.3em] uppercase flex items-center gap-2">
                   <Calculator size={14} /> Project Settings
                </span>
                <div className="flex flex-col gap-4">
                   <label className="text-sm font-bold text-white uppercase tracking-wider">Project Complexity</label>
                   <input 
                     type="range" 
                     min="2000" 
                     max="50000" 
                     step="1000" 
                     value={baseCost} 
                     onChange={handleBaseCostChange}
                     className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-accent"
                   />
                   <div className="flex justify-between text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
                      <span>Lite</span>
                      <span>Enterprise</span>
                   </div>
                </div>
             </div>

             <div className="flex flex-col gap-6">
                <span className="text-sm font-bold text-white uppercase tracking-wider">Select Production Style</span>
                <div className="flex flex-col gap-4">
                  {tiers.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => handleTierSelect(tier.id as Tier)}
                      className={cn(
                        "flex items-center gap-4 p-6 rounded-2xl border transition-all text-left",
                        selectedTier === tier.id 
                          ? "bg-white/10 border-primary-accent/30 shadow-lg text-white" 
                          : "bg-transparent border-white/5 text-zinc-400 hover:border-white/10"
                      )}
                    >
                      <tier.icon size={24} className={selectedTier === tier.id ? "text-primary-accent" : ""} />
                      <div>
                         <p className="font-bold uppercase tracking-widest text-xs mb-1">{tier.name}</p>
                         <p className="text-[10px] opacity-60 leading-tight line-clamp-1 uppercase tracking-tighter">{tier.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
             </div>
          </div>

          {/* Pricing Output */}
          <div className="lg:col-span-8">
             <motion.div 
               key={selectedTier}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="h-full rounded-[2.5rem] border border-white/10 bg-white/5 p-12 lg:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-xl"
             >
                <div className="absolute top-8 right-8 text-[10px] font-mono tracking-[0.3em] text-zinc-600 uppercase">
                  Quote Node: {quoteId}
                </div>

                <span className="text-zinc-400 text-lg uppercase tracking-[0.3em] font-light mb-4">Estimated Investment_</span>
                <div className="flex items-start gap-4">
                   <h3 className="text-7xl font-black md:text-9xl text-white tracking-tighter">
                     ${calculatedCost.toLocaleString()}
                   </h3>
                   <span className="mt-4 text-primary-accent font-black text-2xl uppercase tracking-widest">USD</span>
                </div>
                <p className="mt-12 text-zinc-400 max-w-sm font-light leading-relaxed uppercase tracking-tighter text-sm">
                   Based on your selection, this project will ship in approximately <span className="text-white font-bold">{Math.ceil(calculatedCost / 1000)} business days</span>. 
                   Save <span className="text-primary-accent font-bold">{Math.round((1 - calculatedCost / baseCost) * 100)}%</span> vs. legacy methods.
                </p>

                <div className="mt-16 flex flex-col md:flex-row gap-6 w-full max-w-xl">
                   <button 
                     onClick={() => {
                       const tierName = tiers.find(t => t.id === selectedTier)?.name;
                       window.dispatchEvent(new CustomEvent('open-ai-chat', { 
                         detail: `${tierName} (Quote: $${calculatedCost.toLocaleString()})` 
                       }));
                     }}
                     className="h-16 flex-1 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent"
                   >
                     Request a Quote
                   </button>
                   <button className="h-16 flex-1 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-sm hover:bg-white transition-all hover:text-primary-accent">
                     Download Prices
                   </button>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

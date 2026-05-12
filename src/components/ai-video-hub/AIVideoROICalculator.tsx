"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, Zap, Clock, DollarSign, ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const platforms = [
  { id: "tv-theatre", name: "TV & Theatre", multiplier: 1.5 },
  { id: "social-media", name: "Social (Reels/Ads)", multiplier: 0.8 },
  { id: "ecommerce", name: "E-Commerce", multiplier: 1.0 },
  { id: "corporate", name: "Corporate/Brand", multiplier: 1.2 },
];

export default function AIVideoROICalculator() {
  const [budget, setBudget] = useState(500000); // INR
  const [frequency, setFrequency] = useState(4); // Videos per month
  const [platform, setPlatform] = useState("social-media");

  const results = useMemo(() => {
    const plat = platforms.find(p => p.id === platform);
    const m = plat?.multiplier || 1;
    
    // Theoretical calculations based on AI efficiency (60% cost reduction, 10x speed)
    const traditionalCost = budget * frequency;
    const aiCost = traditionalCost * 0.4; // 60% savings
    const annualSavings = (traditionalCost - aiCost) * 12;
    const acceleration = frequency * 8; // 8x more output for same budget roughly
    
    return {
      monthlySavings: traditionalCost - aiCost,
      annualSavings,
      acceleration,
      traditionalCost,
      aiCost
    };
  }, [budget, frequency, platform]);

  return (
    <section className="py-40 px-6 md:px-12 bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Content side */}
          <div className="space-y-16 text-center lg:text-left">
            <div className="space-y-6">
              <span className="text-primary-accent font-mono text-[10px] uppercase font-black underline decoration-2 underline-offset-8">
                Economic Intelligence {" // "} Node_ROI
              </span>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-white">
                The AI <br />
                <span className="text-primary-accent">Commercial_</span> <br />
                ROI Engine
              </h2>
              <p className="text-xl text-zinc-400 font-light max-w-xl uppercase leading-relaxed">
                Calculate the immediate economic impact of switching to cinematic AI production workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4">
                  <Clock className="text-primary-accent" size={32} />
                  <h4 className="text-4xl font-black text-white">72H</h4>
                  <p className="text-[10px] text-zinc-500 uppercase leading-loose">Average Turnaround for Premium AI Commercials</p>
               </div>
               <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4">
                  <TrendingUp className="text-primary-accent" size={32} />
                  <h4 className="text-4xl font-black text-white">10X</h4>
                  <p className="text-[10px] text-zinc-500 uppercase leading-loose">Increase in Content Velocity & Variations</p>
               </div>
            </div>
          </div>

          {/* Calculator side */}
          <div className="w-full">
            <div className="p-10 md:p-16 rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl relative">
              <div className="absolute top-10 right-10 flex items-center gap-2 opacity-30">
                 <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
                 <span className="text-[9px] font-mono uppercase text-white">Live Processing</span>
              </div>

              <div className="space-y-12">
                {/* Input: Budget */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] font-black text-zinc-400 uppercase">Monthly Ad Budget (₹)</label>
                    <span className="text-2xl font-black text-white italic">₹{(budget/100000).toFixed(1)}L</span>
                  </div>
                  <input 
                    type="range" min="100000" max="5000000" step="50000" 
                    value={budget} onChange={(e) => setBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary-accent"
                  />
                </div>

                {/* Input: Frequency */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] font-black text-zinc-400 uppercase">Videos Per Month</label>
                    <span className="text-2xl font-black text-white italic tracking-tighter">{frequency} Units</span>
                  </div>
                  <input 
                    type="range" min="1" max="20" step="1" 
                    value={frequency} onChange={(e) => setFrequency(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary-accent"
                  />
                </div>

                {/* Output Display */}
                <div className="pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-[9px] font-black text-primary-accent uppercase">Annual Savings_</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white tracking-tighter">₹{(results.annualSavings / 100000).toFixed(1)}L</span>
                      <span className="text-xs font-bold text-zinc-600 uppercase">/yr</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[9px] font-black text-primary-accent uppercase">Velocity Boost_</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white tracking-tighter">+{results.acceleration}</span>
                      <span className="text-xs font-bold text-zinc-600 uppercase">Ads/mo</span>
                    </div>
                  </div>
                </div>

                <button className="w-full h-24 rounded-3xl bg-primary-accent text-black font-black uppercase text-xs flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-xl shadow-primary-accent/20">
                  Claim Your AI Efficiency Plan <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

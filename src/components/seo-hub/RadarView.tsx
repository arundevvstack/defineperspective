"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  Target, 
  Globe2, 
  Scan, 
  Maximize2,
  Signal,
  Cpu,
  Compass
} from "lucide-react";
import { cn } from "@/lib/utils";

const REGIONAL_SIGNALS = [
  { city: "Kochi", strength: 94, status: "Peak", lat: "10.0° N", lng: "76.3° E" },
  { city: "Trivandrum", strength: 89, status: "Hub", lat: "8.5° N", lng: "76.9° E" },
  { city: "Bangalore", strength: 76, status: "Expanding", lat: "12.9° N", lng: "77.6° E" },
  { city: "Dubai", strength: 82, status: "Target", lat: "25.2° N", lng: "55.3° E" },
];

export default function RadarView({ city }: { city?: string }) {
  const [rotation, setRotation] = useState(0);
  const [activeSignals, setActiveSignals] = useState<number[]>([]);
  const [selectedHub, setSelectedHub] = useState(REGIONAL_SIGNALS[0]);

  // Sync with global city node
  useEffect(() => {
    if (city) {
      const hub = REGIONAL_SIGNALS.find(s => s.city.toLowerCase() === city.toLowerCase());
      if (hub) setSelectedHub(hub);
    }
  }, [city]);

  useEffect(() => {
    const interval = setInterval(() => setRotation(prev => (prev + 1) % 360), 20);
    const hitInterval = setInterval(() => {
      const index = REGIONAL_SIGNALS.findIndex(s => s.city === selectedHub.city);
      setActiveSignals(prev => [...prev, index]);
      setTimeout(() => setActiveSignals(prev => prev.filter(i => i !== index)), 2000);
    }, 3000);
    return () => { clearInterval(interval); clearInterval(hitInterval); };
  }, [selectedHub]);

  return (
    <div className="space-y-12">
      {/* Tactical Hub Selector (Real Function) */}
      <div className="flex flex-wrap gap-4 p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent border border-primary-accent/20">
               <Compass className="animate-spin-slow" size={20} />
            </div>
            <div>
               <h4 className="text-sm font-black uppercase tracking-widest">Hub Targeting</h4>
               <span className="text-[8px] font-mono uppercase text-zinc-500">Currently Scanning: {selectedHub.city} Node</span>
            </div>
         </div>
         <div className="flex gap-2">
            {REGIONAL_SIGNALS.map((hub) => (
               <button 
                key={hub.city}
                onClick={() => setSelectedHub(hub)}
                className={cn(
                  "px-4 py-2 rounded-xl text-[9px] font-mono uppercase tracking-widest border transition-all",
                  selectedHub.city === hub.city 
                    ? "bg-primary-accent border-primary-accent text-white shadow-lg" 
                    : "bg-white/5 border-white/10 text-zinc-500 hover:border-white/20"
                )}
               >
                 {hub.city}
               </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Radar Map */}
        <div className="lg:col-span-8 flex justify-center relative py-20 bg-white/[0.02] rounded-[3rem] border border-white/5">
           <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {[0.25, 0.5, 0.75, 1].map((s) => (
                <div key={s} className="absolute inset-0 border border-white/5 rounded-full" style={{ transform: `scale(${s})` }} />
              ))}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
              <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/5" />
              
              <div className="absolute inset-0 z-20" style={{ transform: `rotate(${rotation}deg)` }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1/2 bg-gradient-to-t from-primary-accent/20 to-transparent blur-xl" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1/2 bg-primary-accent" />
              </div>

              {REGIONAL_SIGNALS.map((signal, idx) => (
                <div key={signal.city} className="absolute z-30" style={{ top: `${20+(idx*15)}%`, left: `${20+((idx*137)%60)}%` }}>
                   <motion.div animate={activeSignals.includes(idx) ? { scale: [1, 2, 1], opacity: [0.5, 1, 0.5] } : {}} className={cn("h-3 w-3 rounded-full border border-white/30", activeSignals.includes(idx) ? "bg-primary-accent" : "bg-white/10")} />
                   <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[8px] font-mono whitespace-nowrap uppercase tracking-widest text-zinc-500">{signal.city}</div>
                </div>
              ))}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Target className="text-primary-accent animate-pulse" size={24} />
              </div>
           </div>
        </div>

        {/* Radar Info */}
        <div className="lg:col-span-4 space-y-8">
           <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-8">
              <div className="flex items-center justify-between">
                 <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-500 font-black underline">Signal Strength</h3>
                 <Signal size={14} className="text-primary-accent" />
              </div>
              <div className="space-y-6">
                 {REGIONAL_SIGNALS.map((s) => (
                   <div key={s.city} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono">
                        <span className="uppercase">{s.city}</span>
                        <span>{s.strength}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${s.strength}%` }} className="h-full bg-primary-accent" />
                      </div>
                   </div>
                 ))}
              </div>
              <button className="w-full py-4 bg-primary-accent text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3">
                Full Scan <Scan size={14} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

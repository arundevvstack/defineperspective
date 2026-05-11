"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, 
  Zap, 
  Crosshair, 
  BarChart2, 
  Target,
  TrendingUp,
  Minimize2
} from "lucide-react";
import { cn } from "@/lib/utils";

const COMPETITORS = [
  { id: 1, name: "SpiderWorks (Kochi)", x: 65, y: 30, threat: "Medium", strength: "SEO Network", weakness: "Traditional Focus" },
  { id: 2, name: "Quadcubes", x: 40, y: 55, threat: "Low", strength: "Branding", weakness: "AI Scale" },
  { id: 3, name: "Originative Nest", x: 80, y: 70, threat: "Medium", strength: "Content Velocity", weakness: "Production Value" },
  { id: 4, name: "Made in Space (TVM)", x: 25, y: 40, threat: "Low", strength: "Workflows", weakness: "Market Reach" },
];

export default function MapView({ city }: { city?: string }) {
  const [selectedComp, setSelectedComp] = useState<any>(null);

  // Auto-select a competitor if they match the detected city
  useEffect(() => {
    if (city) {
      const match = COMPETITORS.find(c => c.name.toLowerCase().includes(city.toLowerCase()));
      if (match) setSelectedComp(match);
    }
  }, [city]);
  const [isRunningStrategy, setIsRunningStrategy] = useState(false);
  const [strategyPlan, setStrategyPlan] = useState<string | null>(null);

  const runStrategy = () => {
    if (!selectedComp) return;
    setIsRunningStrategy(true);
    setStrategyPlan(null);
    
    // Simulate tactical calculation
    setTimeout(() => {
      setStrategyPlan(`DOMINATE_PLAN: Execute high-velocity AI cycles focused on ${selectedComp.weakness}. Deploy regional authority signals in ${selectedComp.name}'s core sectors.`);
      setIsRunningStrategy(false);
    }, 2500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Tactical Map */}
      <div className="lg:col-span-8 relative aspect-video bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden group">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
        
        {/* DP Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
           <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} className="h-10 w-10 rounded-full bg-primary-accent border-2 border-white/20 shadow-[0_0_30px_rgba(235,30,44,0.5)] flex items-center justify-center">
             <Zap size={20} className="text-white" />
           </motion.div>
           <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[8px] font-mono uppercase text-primary-accent font-black">DP_CORE</span>
        </div>

        {/* Competitor Nodes */}
        {COMPETITORS.map((comp) => (
          <button key={comp.id} onClick={() => { setSelectedComp(comp); setStrategyPlan(null); }} className="absolute z-30 group" style={{ left: `${comp.x}%`, top: `${comp.y}%` }}>
            <div className={cn(
              "h-5 w-5 rotate-45 border transition-all duration-500", 
              selectedComp?.id === comp.id ? "bg-primary-accent scale-125 border-white shadow-xl" : "bg-white/10 border-white/20"
            )} />
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black p-2 rounded text-[8px] font-mono whitespace-nowrap z-50 border border-white/10">{comp.name}</div>
          </button>
        ))}
        
        <div className="absolute bottom-6 left-6 p-4 bg-black/60 border border-white/10 rounded-2xl backdrop-blur-md">
           <div className="flex items-center gap-4">
              <TrendingUp size={12} className="text-green-500" />
              <span className="text-[10px] font-mono uppercase">+14% Growth Velocity</span>
           </div>
        </div>
      </div>

      {/* Intel Panel */}
      <div className="lg:col-span-4 h-full">
         <AnimatePresence mode="wait">
           {selectedComp ? (
             <motion.div key="intel" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 h-full flex flex-col">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-[10px] font-mono uppercase text-zinc-500 underline font-black">Target Intel Brief</h3>
                   <button onClick={() => setSelectedComp(null)} className="hover:text-primary-accent transition-colors"><Minimize2 size={12}/></button>
                </div>
                
                <div className="mb-8">
                   <h4 className="text-2xl font-black uppercase mb-2">{selectedComp.name}</h4>
                   <span className={cn("px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest", selectedComp.threat === "High" ? "bg-red-500/20 text-red-500" : "bg-white/10 text-zinc-400")}>
                     Threat: {selectedComp.threat}
                   </span>
                </div>

                <div className="space-y-4 flex-1">
                   <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[7px] font-mono text-zinc-600 block mb-1 uppercase tracking-widest">Market Strength</span>
                      <span className="text-xs font-bold text-white uppercase">{selectedComp.strength}</span>
                   </div>
                   <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[7px] font-mono text-zinc-600 block mb-1 uppercase tracking-widest">Vulnerability Node</span>
                      <span className="text-xs font-bold text-primary-accent uppercase">{selectedComp.weakness}</span>
                   </div>

                   <AnimatePresence>
                      {strategyPlan && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-primary-accent/10 border border-primary-accent/30 shadow-inner">
                           <h5 className="text-[9px] font-black uppercase text-primary-accent mb-3 flex items-center gap-2">
                             <BarChart2 size={12} /> Executable Strategy
                           </h5>
                           <p className="text-[10px] text-zinc-200 leading-relaxed italic font-light">{strategyPlan}</p>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>

                <div className="mt-8">
                   <button 
                    onClick={runStrategy}
                    disabled={isRunningStrategy}
                    className="w-full py-4 bg-primary-accent text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary-accent/20"
                   >
                     {isRunningStrategy ? <div className="h-4 w-4 border-2 border-white border-t-transparent animate-spin rounded-full" /> : <><Target size={14} /> Run Counter-Strategy</>}
                   </button>
                </div>
             </motion.div>
           ) : (
             <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 h-full flex flex-col items-center justify-center text-center py-20 group hover:border-primary-accent/20 transition-all">
                <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target size={40} className="text-zinc-800" />
                </div>
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.3em]">Acquire Target Node for Tactical Intel</p>
             </div>
           )}
         </AnimatePresence>
      </div>
    </div>
  );
}

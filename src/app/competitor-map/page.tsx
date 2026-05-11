"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, 
  Sword, 
  Target, 
  Zap, 
  AlertTriangle, 
  ArrowRight,
  Maximize2,
  Minimize2,
  Crosshair,
  TrendingUp,
  BarChart2,
  Eye,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassNavbar from "@/components/glass-navbar";
import GlassFooter from "@/components/glass-footer";

const COMPETITORS = [
  { id: 1, name: "Traditional Studio A", x: 65, y: 30, threat: "Low", type: "Legacy", weakness: "Slow AI Adoption", strength: "Local Network" },
  { id: 2, name: "Creative Agency X", x: 40, y: 55, threat: "Medium", type: "Full Service", weakness: "High Price", strength: "Branding" },
  { id: 3, name: "AI Startup Y", x: 80, y: 70, threat: "High", type: "AI-First", weakness: "Low Production Value", strength: "Speed" },
  { id: 4, name: "Production House Z", x: 25, y: 40, threat: "Medium", type: "Cinema", weakness: "Tech Stack", strength: "8K Pipeline" },
];

const BATTLE_ZONES = [
  { name: "Kerala AI Hub", dp_strength: 95, comp_strength: 40, status: "Dominating" },
  { name: "Dubai Luxury TVC", dp_strength: 70, comp_strength: 85, status: "Contested" },
  { name: "Mumbai Corporate", dp_strength: 55, comp_strength: 90, status: "Strategic Entry" },
];

export default function CompetitorMapPage() {
  const [selectedComp, setSelectedComp] = useState<any>(null);
  const [activeZone, setActiveZone] = useState(0);

  return (
    <main className="min-h-screen bg-obsidian text-white font-sans overflow-hidden">
      <GlassNavbar />

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-mono tracking-widest text-red-500 uppercase mb-4">
                <ShieldAlert size={12} className="animate-pulse" /> Threat Intelligence v2.4
              </span>
              <h1 className="text-5xl font-black uppercase tracking-tighter">
                Competitor <br /><span className="text-primary-accent">Battle Map.</span>
              </h1>
            </motion.div>

            <div className="flex gap-4">
               <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary-accent shadow-[0_0_10px_rgba(235,30,44,1)]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">DP Dominance</span>
               </div>
               <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Active Threat</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tactical Map (SVG) */}
            <div className="lg:col-span-8 relative">
              <div className="aspect-[16/9] bg-white/[0.02] border border-white/10 rounded-[3rem] relative overflow-hidden group shadow-2xl backdrop-blur-3xl">
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                
                {/* Topographic Lines (Decorative) */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                  <path d="M0,100 Q200,50 400,150 T800,100" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M0,200 Q300,150 600,250 T1200,200" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="50%" cy="50%" r="300" fill="none" stroke="rgba(235,30,44,0.1)" strokeWidth="1" strokeDasharray="10 10" />
                </svg>

                {/* DP Core node */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="h-12 w-12 rounded-full bg-primary-accent flex items-center justify-center shadow-[0_0_40px_rgba(235,30,44,0.5)] border-2 border-white/20">
                    <Zap className="text-white" size={24} />
                  </div>
                  <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[8px] font-mono uppercase tracking-widest text-primary-accent font-black">
                    Authority_Core
                  </span>
                </motion.div>

                {/* Competitor Nodes */}
                {COMPETITORS.map((comp) => (
                  <motion.button
                    key={comp.id}
                    onClick={() => setSelectedComp(comp)}
                    className="absolute z-30 group"
                    style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className={cn(
                      "h-6 w-6 rounded-lg rotate-45 border transition-all duration-300 flex items-center justify-center",
                      comp.threat === "High" ? "bg-red-500/20 border-red-500 animate-pulse" : 
                      comp.threat === "Medium" ? "bg-orange-500/20 border-orange-500" : 
                      "bg-zinc-500/20 border-zinc-500"
                    )}>
                      <div className="h-2 w-2 rounded-full bg-white -rotate-45" />
                    </div>
                    
                    {/* Tooltip on Map */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-3 rounded-xl min-w-[140px]">
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase mb-1">{comp.type}</span>
                        <span className="block text-xs font-bold uppercase">{comp.name}</span>
                      </div>
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black/90 mx-auto" />
                    </div>
                  </motion.button>
                ))}

                {/* Conflict/Aura Rings */}
                <svg className="absolute inset-0 w-full h-full z-10 opacity-30">
                  {COMPETITORS.map((comp) => (
                    <circle 
                      key={comp.id}
                      cx={`${comp.x}%`} 
                      cy={`${comp.y}%`} 
                      r={comp.threat === "High" ? "80" : "50"} 
                      fill="url(#threatGradient)" 
                    />
                  ))}
                  <defs>
                    <radialGradient id="threatGradient">
                      <stop offset="0%" stopColor="rgba(239,68,68,0.2)" />
                      <stop offset="100%" stopColor="rgba(239,68,68,0)" />
                    </radialGradient>
                  </defs>
                </svg>

                <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-6">
                   <div className="flex flex-col">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Sector Analysis</span>
                      <span className="text-xs font-bold uppercase">South Asia | MENA</span>
                   </div>
                   <div className="h-8 w-[1px] bg-white/10" />
                   <div className="flex items-center gap-2">
                      <TrendingUp size={14} className="text-green-500" />
                      <span className="text-[10px] font-mono text-green-500 uppercase">+14.2% Growth</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Tactical Intel Panel */}
            <div className="lg:col-span-4 space-y-8">
              <AnimatePresence mode="wait">
                {selectedComp ? (
                  <motion.div
                    key="intel"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl h-full"
                  >
                    <div className="flex items-center justify-between mb-8">
                       <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-500 font-black underline">Intel Briefing</h3>
                       <button onClick={() => setSelectedComp(null)}>
                         <Minimize2 size={14} className="text-zinc-700 hover:text-white transition-colors" />
                       </button>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[8px] font-mono uppercase mb-2 inline-block",
                          selectedComp.threat === "High" ? "bg-red-500 text-white" : "bg-white/10 text-zinc-400"
                        )}>
                          Threat: {selectedComp.threat}
                        </span>
                        <h4 className="text-3xl font-black uppercase mb-1">{selectedComp.name}</h4>
                        <p className="text-zinc-500 text-sm font-light">{selectedComp.type} Entity</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                           <span className="text-[8px] font-mono text-zinc-500 uppercase block mb-2">Strength</span>
                           <span className="text-xs font-bold text-white uppercase">{selectedComp.strength}</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                           <span className="text-[8px] font-mono text-zinc-500 uppercase block mb-2">Weakness</span>
                           <span className="text-xs font-bold text-primary-accent uppercase">{selectedComp.weakness}</span>
                        </div>
                      </div>

                      <div className="p-6 rounded-[2rem] bg-primary-accent/5 border border-primary-accent/20">
                         <h5 className="text-[10px] font-mono uppercase text-primary-accent font-black mb-4 flex items-center gap-2 underline">
                           <Crosshair size={12} /> DP Counter-Strategy
                         </h5>
                         <p className="text-xs text-zinc-400 leading-relaxed">
                            Exploit {selectedComp.name}'s {selectedComp.weakness} by deploying high-velocity AI production cycles and regional language dominance.
                         </p>
                      </div>

                      <button className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3">
                        Generate Deep Audit <BarChart2 size={14} />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-zinc-700 animate-pulse">
                      <Target size={32} />
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-widest mb-2">No Target Selected</h3>
                    <p className="text-sm text-zinc-500 max-w-[200px] font-light leading-relaxed">
                      Select a competitor node on the tactical map to view deep intelligence and counter-strategies.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Battle Zone Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {BATTLE_ZONES.map((zone, i) => (
              <div 
                key={zone.name}
                onMouseEnter={() => setActiveZone(i)}
                className={cn(
                  "p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer",
                  activeZone === i ? "bg-white/5 border-primary-accent/30 translate-y-[-5px]" : "bg-transparent border-white/5"
                )}
              >
                <div className="flex items-center justify-between mb-6">
                   <h4 className="text-sm font-bold uppercase tracking-widest">{zone.name}</h4>
                   <span className={cn(
                     "text-[8px] font-mono uppercase px-2 py-0.5 rounded",
                     zone.status === "Dominating" ? "bg-green-500/20 text-green-500" : "bg-orange-500/20 text-orange-500"
                   )}>{zone.status}</span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                      <span>DP Authority</span>
                      <span className="text-white">{zone.dp_strength}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div animate={{ width: `${zone.dp_strength}%` }} className="h-full bg-primary-accent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                      <span>Competitor Pressure</span>
                      <span className="text-zinc-400">{zone.comp_strength}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div animate={{ width: `${zone.comp_strength}%` }} className="h-full bg-zinc-700" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

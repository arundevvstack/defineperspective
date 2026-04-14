"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Trash2, 
  Zap, 
  Camera, 
  Cpu, 
  Volume2, 
  Layers, 
  BarChart3, 
  Workflow, 
  BarChart,
  BrainCircuit,
  Wand2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassNavbar from "@/components/glass-navbar";
import Magnetic from "@/components/magnetic";

const SERVICE_MODULES = [
  { id: "cinema", label: "Cinema Cam", icon: Camera, color: "bg-primary-accent", price: 2500, time: 5, power: 80, desc: "High-end 8K cinematic capture." },
  { id: "neural", label: "AI Grading", icon: BrainCircuit, color: "bg-primary-accent", price: 1200, time: 2, power: 95, desc: "AI-powered photorealistic color grading." },
  { id: "audio", label: "Sound Lab", icon: Volume2, color: "bg-primary-accent", price: 800, time: 3, power: 60, desc: "Immersive Dolby Atmos design." },
  { id: "vfx", label: "CGI / VFX", icon: Wand2, color: "bg-primary-accent", price: 3000, time: 10, power: 100, desc: "Digital asset & visual effects integration." },
  { id: "velocity", label: "Fast Delivery", icon: Zap, color: "bg-primary-accent", price: 500, time: -1, power: 40, desc: "Rapid delivery optimization pipeline." },
  { id: "analytics", label: "Search Optimization", icon: BarChart3, color: "bg-primary-accent", price: 1000, time: 4, power: 75, desc: "Search-optimized metadata & structure." },
];

export default function LabPage() {
  const [pipeline, setPipeline] = useState<any[]>([]);
  const [draggedItem, setDraggedItem] = useState<any>(null);

  const addToPipeline = (module: any) => {
    setPipeline([...pipeline, { ...module, uniqueId: Date.now() }]);
  };

  const removeFromPipeline = (uniqueId: number) => {
    setPipeline(pipeline.filter(item => item.uniqueId !== uniqueId));
  };

  const totalPrice = pipeline.reduce((sum, item) => sum + item.price, 0);
  const totalTime = Math.max(0, pipeline.reduce((sum, item) => sum + item.time, 0));
  const avgPower = pipeline.length > 0 ? (pipeline.reduce((sum, item) => sum + item.power, 0) / pipeline.length).toFixed(0) : 0;

  return (
    <main className="min-h-screen bg-obsidian text-white pt-24 pb-40 relative overflow-hidden font-sans">
      <GlassNavbar />

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[800px] w-[800px] bg-primary-accent/20 blur-[150px] rounded-full animate-pulse transition-all duration-300" />
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] bg-primary-accent/10 blur-[150px] rounded-full animate-pulse transition-all duration-300" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Header */}
        <section className="py-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-6 block font-black underline">DP Lab {" // "} Production Tool</span>
            <h1 className="text-5xl md:text-8xl font-black uppercaseer mb-8 leading-[0.85]">
              Modular <br /><span className="text-primary-accent">Production.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
              Drag and drop service blocks to build your custom video production project. Get real-time estimates on budget, timeline, and visual quality.
            </p>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Palette (Left Panel) */}
          <section className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-600 mb-8 flex items-center gap-3 font-black underline">
                <Layers size={14} className="text-primary-accent" /> Available Services
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {SERVICE_MODULES.map((module) => (
                  <motion.div
                    key={module.id}
                    draggable
                    onDragStart={() => setDraggedItem(module)}
                    onClick={() => addToPipeline(module)}
                    className="group p-6 rounded-3xl bg-white/5 border border-white/5  transition-all cursor-grab active:cursor-grabbing flex items-center justify-between  transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-300", module.color)}>
                        <module.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{module.label}</h4>
                        <p className="text-[10px] text-zinc-400 font-mono tracking-wider">{module.desc}</p>
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Plus size={16} className="text-primary-accent" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Builder Canvas (Right Panel) */}
          <section className="lg:col-span-8 flex flex-col gap-12">
             {/* Pipeline Canvas */}
             <div 
               onDragOver={(e) => e.preventDefault()}
               onDrop={() => draggedItem && addToPipeline(draggedItem)}
               className={cn(
                 "min-h-[500px] w-full rounded-[3rem] border border-dashed flex flex-col items-center justify-center relative transition-all duration-500 overflow-hidden",
                 pipeline.length === 0 ? "border-white/10 bg-white/5" : "border-primary-accent/20 bg-primary-accent/5"
               )}
             >
                {pipeline.length === 0 ? (
                   <div className="text-center">
                     <div className="h-20 w-20 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 text-zinc-600 animate-bounce">
                        <Workflow size={32} />
                     </div>
                     <p className="text-zinc-400 font-mono text-xs tracking-widest uppercase mb-2">Build Your Plan</p>
                     <p className="text-zinc-700 font-mono text-[10px] tracking-widest uppercase">Drop Service Blocks Here</p>
                   </div>
                ) : (
                  <div className="w-full flex-1 p-12 flex flex-col gap-6 custom-scrollbar overflow-y-auto max-h-[600px]">
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                       <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400 font-black underline">Live Project Plan</h3>
                       <button 
                         onClick={() => setPipeline([])}
                         className="text-[10px] font-mono text-zinc-400  uppercase tracking-widest flex items-center gap-2 transition-colors font-black underline"
                       >
                         <Trash2 size={12} /> Clear Plan
                       </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AnimatePresence mode="popLayout">
                        {pipeline.map((item, idx) => (
                          <motion.div
                            key={item.uniqueId}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className="p-8 rounded-3xl bg-black border border-white/10 flex items-center justify-between relative group hover:shadow-xl transition-all duration-300"
                          >
                            <div className="flex items-center gap-6">
                               <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-300", item.color)}>
                                 <item.icon size={24} />
                               </div>
                               <div>
                                 <span className="text-[9px] font-mono text-zinc-400 block mb-1">SERVICE 0{idx + 1}</span>
                                 <h4 className="font-bold uppercase tracking-widest">{item.label}</h4>
                               </div>
                            </div>
                            <button 
                              onClick={() => removeFromPipeline(item.uniqueId)}
                              className="h-10 w-10 rounded-xl bg-white/5  text-zinc-600  opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center transition-all duration-300"
                            >
                              <Trash2 size={16} />
                            </button>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                )}

                {/* Intelligence Overlay */}
                <div className="absolute -bottom-10 left-6 right-6 p-8 rounded-[2rem] bg-zinc-900 border border-white/10 shadow-xl flex flex-wrap items-center justify-between gap-8 z-20">
                   <div className="flex gap-12">
                      <div className="flex flex-col">
                         <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest mb-1 flex items-center gap-2 font-black underline">
                           <BarChart size={10} className="text-primary-accent" /> Estimated Budget
                         </span>
                         <span className="text-2xl font-black text-white tracking-widest">${totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest mb-1 flex items-center gap-2 font-black underline">
                           <Zap size={10} className="text-primary-accent" /> Timeline
                         </span>
                         <span className="text-2xl font-black text-white tracking-widest">{totalTime}d</span>
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest mb-1 flex items-center gap-2 font-black underline">
                           <Sparkles size={10} className="text-primary-accent" /> Quality Index
                         </span>
                         <span className="text-2xl font-black text-white tracking-widest">{avgPower}%</span>
                      </div>
                   </div>

                   <button 
                     onClick={() => {
                       if (pipeline.length === 0) return;
                       window.location.href = `/contact?lab_build=${pipeline.map(p => p.id).join(',')}`;
                     }}
                     disabled={pipeline.length === 0}
                     className={cn(
                       "h-14 px-10 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center gap-4 shadow-xl disabled:opacity-20 transition-all duration-300  ",
                       pipeline.length > 0 ? "" : "cursor-not-allowed"
                     )}
                   >
                      Get Started with This Plan <ArrowRight size={14} />
                   </button>
                </div>
             </div>

             {/* Production Analysis */}
             <div className="mt-20 p-12 rounded-[3rem] border border-white/5 bg-white/5">
                <div className="flex items-center gap-4 mb-8">
                   <div className="h-10 w-10 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                      <Sparkles size={20} />
                   </div>
                   <h3 className="text-xl font-bold uppercase tracking-widest">Production Insights</h3>
                 </div>
                 <p className="text-zinc-400 font-light leading-relaxed mb-8">
                    Your current plan uses {pipeline.length} custom service blocks. The visual quality is estimated at {avgPower}%. Your estimated timeline of {totalTime} days ensures high-quality results across all our service areas in India.
                 </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-6 rounded-2xl bg-black border border-white/5">
                      <span className="text-[10px] font-mono text-zinc-600 block mb-3 uppercase font-black underline">Visual Technology</span>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${avgPower}%` }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="h-full bg-primary-accent"
                         />
                      </div>
                   </div>
                   <div className="p-6 rounded-2xl bg-black border border-white/5">
                      <span className="text-[10px] font-mono text-zinc-600 block mb-3 uppercase font-black underline">Creative Impact</span>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${Math.min(100, Number(avgPower) * 1.2)}%` }}
                           transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                           className="h-full bg-primary-accent"
                         />
                      </div>
                   </div>
                </div>
             </div>
          </section>
        </div>
      </div>
    </main>
  );
}

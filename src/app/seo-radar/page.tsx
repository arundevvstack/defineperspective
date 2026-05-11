"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Radar, 
  Target, 
  Activity, 
  Globe2, 
  MapPin, 
  Signal, 
  Zap, 
  Cpu, 
  ShieldAlert,
  ArrowUpRight,
  Maximize2,
  Scan,
  Compass
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassNavbar from "@/components/glass-navbar";
import GlassFooter from "@/components/glass-footer";

const REGIONAL_SIGNALS = [
  { city: "Kochi", strength: 94, status: "Peak Authority", lat: "10.0° N", lng: "76.3° E" },
  { city: "Dubai", strength: 82, status: "Expanding", lat: "25.2° N", lng: "55.3° E" },
  { city: "Bangalore", strength: 76, status: "Target Zone", lat: "12.9° N", lng: "77.6° E" },
  { city: "Trivandrum", strength: 89, status: "Neural Hub", lat: "8.5° N", lng: "76.9° E" },
  { city: "Mumbai", strength: 65, status: "Growth Phase", lat: "19.0° N", lng: "72.8° E" },
];

const SCAN_LOGS = [
  "New Entity Detected: 'AI Video Agency Kerala'",
  "Semantic Cluster Synced: 'Cinematic TVC India'",
  "Authority Loop Closed: regional-voiceover-services",
  "Competitor Signal Detected: Low Impact",
  "Vector Map Updated: malayalam-ai-generation",
];

export default function SeoRadarPage() {
  const [rotation, setRotation] = useState(0);
  const [activeSignals, setActiveSignals] = useState<number[]>([]);
  const [logs, setLogs] = useState(SCAN_LOGS);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 20);

    const logInterval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev];
        const last = newLogs.pop();
        if (last) newLogs.unshift(last);
        return newLogs;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  // Simulate radar "hits"
  useEffect(() => {
    const hitInterval = setInterval(() => {
      const index = Math.floor(Math.random() * REGIONAL_SIGNALS.length);
      setActiveSignals(prev => [...prev, index]);
      setTimeout(() => {
        setActiveSignals(prev => prev.filter(i => i !== index));
      }, 2000);
    }, 4000);

    return () => clearInterval(hitInterval);
  }, []);

  return (
    <main className="min-h-screen bg-obsidian text-white font-sans overflow-hidden">
      <GlassNavbar />

      {/* Hero / Radar Visualization */}
      <section className="relative pt-32 pb-40 flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(235,30,44,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/20 text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-6">
                  <Activity size={12} className="animate-pulse" /> Live Neural Scan
                </span>
                <h1 className="text-6xl font-black uppercase leading-[0.85] mb-6">
                  SEO <br /><span className="text-primary-accent">Radar.</span>
                </h1>
                <p className="text-zinc-500 font-light leading-relaxed max-w-sm">
                  Real-time visualization of DP's semantic authority and digital footprint across regional clusters.
                </p>
              </motion.div>

              <div className="space-y-4">
                <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-600 font-black underline">Live Telemetry</h3>
                {logs.slice(0, 3).map((log, i) => (
                  <motion.div 
                    key={log + i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-[10px] font-mono text-zinc-400 py-2 border-b border-white/5"
                  >
                    <div className="h-1 w-1 rounded-full bg-primary-accent" />
                    {log}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Center Radar */}
            <div className="lg:col-span-4 flex justify-center relative">
              <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
                {/* Background Circles */}
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="absolute inset-0 border border-white/5 rounded-full"
                    style={{ transform: `scale(${i * 0.25})` }}
                  />
                ))}
                
                {/* Crosshair */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" />
                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/10" />

                {/* Rotating Sweeper */}
                <div 
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1/2 bg-gradient-to-t from-primary-accent to-transparent shadow-[0_0_20px_rgba(235,30,44,0.5)]" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1/2 bg-gradient-to-t from-primary-accent/20 to-transparent blur-xl opacity-50" />
                </div>

                {/* Radar Hits (Regional Signals) */}
                {REGIONAL_SIGNALS.map((signal, idx) => {
                  const isActive = activeSignals.includes(idx);
                  return (
                    <motion.div
                      key={signal.city}
                      className="absolute z-30 flex flex-col items-center group cursor-crosshair"
                      style={{
                        top: `${20 + (idx * 15)}%`,
                        left: `${20 + ((idx * 137) % 60)}%`
                      }}
                    >
                      <motion.div 
                        animate={isActive ? { scale: [1, 2, 1], opacity: [0.5, 1, 0.5] } : {}}
                        className={cn(
                          "h-3 w-3 rounded-full border border-white/50 transition-all duration-500",
                          isActive ? "bg-primary-accent scale-150" : "bg-white/20"
                        )}
                      />
                      <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center w-32">
                         <span className="block text-[8px] font-mono text-primary-accent uppercase mb-1">{signal.status}</span>
                         <span className="block text-xs font-bold uppercase tracking-widest">{signal.city}</span>
                         <span className="block text-[8px] font-mono text-zinc-500 mt-1">{signal.lat} | {signal.lng}</span>
                      </div>
                    </motion.div>
                  );
                })}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-primary-accent/20 border border-primary-accent/50 flex items-center justify-center animate-pulse">
                    <Target className="text-primary-accent" size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Data Panel */}
            <div className="lg:col-span-4">
              <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl space-y-8">
                 <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-500 font-black underline">Global Signal Index</h3>
                    <Maximize2 size={14} className="text-zinc-700" />
                 </div>

                 <div className="space-y-6">
                    {REGIONAL_SIGNALS.map((signal) => (
                      <div key={signal.city} className="group cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                           <span className="text-sm font-bold uppercase tracking-widest group-hover:text-primary-accent transition-colors">{signal.city}</span>
                           <span className="text-[10px] font-mono text-zinc-500">{signal.strength}%</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: `${signal.strength}%` }}
                             className="h-full bg-primary-accent"
                           />
                        </div>
                      </div>
                    ))}
                 </div>

                 <div className="pt-6 border-t border-white/5">
                    <button className="w-full py-4 bg-primary-accent text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
                      Recalibrate Neural Map <Scan size={14} />
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Metrics */}
      <section className="pb-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Neural Authority", value: "8.4/10", icon: Cpu },
              { label: "Signal Latency", value: "14ms", icon: Signal },
              { label: "Regional Reach", value: "2.4M", icon: Globe2 },
              { label: "Authority Loops", value: "128", icon: Compass },
            ].map((metric, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 flex items-center gap-6 group hover:bg-white/10 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform">
                  <metric.icon size={24} />
                </div>
                <div>
                   <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">{metric.label}</span>
                   <span className="text-2xl font-black">{metric.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

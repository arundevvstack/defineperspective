"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Activity, Globe, Zap, Users, TrendingUp, Monitor, Smartphone, 
  Search, ShieldCheck, Layers, BarChart, Server, Cpu, Navigation, Terminal,
  Clock, Wifi, Shield, Database, Layout, Eye, MousePointer2, MapPin, SearchCode,
  Radio, Share2, MoreHorizontal, Maximize2, RefreshCw
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";

// Mock Data Generators for Real-time Dashboard
const generateTimeSlots = () => {
  const slots = [];
  for (let i = 0; i < 24; i++) {
    slots.push(`${i}:00`);
  }
  return slots;
};

const serviceSearchData = [
  { name: "AI Video Production", volume: 4520, trend: "+12%", growth: 78 },
  { name: "CGI Virtual Production", volume: 3840, trend: "+8%", growth: 64 },
  { name: "Ad Film Production", volume: 2900, trend: "-2%", growth: 45 },
  { name: "E-comm Content", volume: 5120, trend: "+24%", growth: 92 },
  { name: "Predictive AI Strategy", volume: 1840, trend: "+45%", growth: 56 }
];

export default function AnalysisDashboard() {
  const [visitors, setVisitors] = useState(14528);
  const [activeNodes, setActiveNodes] = useState(842);
  const [logs, setLogs] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dataPoints, setDataPoints] = useState<number[]>(Array(24).fill(0).map(() => Math.floor(Math.random() * 100)));
  const [intensity, setIntensity] = useState(0.85);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logInterval = setInterval(() => {
      const actions = ["FETCH_NODE", "CACHE_HIT", "PIPELINE_INIT", "RENDER_COMPLETE", "VO_SYNC", "D2C_QUERY"];
      const resources = ["/services/ai-media", "/portfolio", "/blogs/short-form", "/analysis/traffic", "/contact"];
      const newLog = `[${new Date().toLocaleTimeString()}] ${actions[Math.floor(Math.random() * actions.length)]} -> ${resources[Math.floor(Math.random() * resources.length)]}`;
      setLogs(prev => [newLog, ...prev.slice(0, 10)]);
    }, 1500);

    const statsInterval = setInterval(() => {
      setVisitors(v => v + Math.floor(Math.random() * 3));
      setActiveNodes(n => Math.max(800, n + (Math.random() > 0.5 ? 2 : -2)));
      setCurrentTime(new Date());
      setIntensity(prev => Math.min(1, Math.max(0.7, prev + (Math.random() - 0.5) * 0.1)));
    }, 2000);

    return () => {
      clearInterval(logInterval);
      clearInterval(statsInterval);
    };
  }, []);

  // Custom Chart Component
  const ActivityChart = () => {
    return (
      <div className="relative h-64 w-full flex items-end justify-between gap-1 overflow-hidden pt-10">
        {dataPoints.map((p, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${p}%` }}
            transition={{ duration: 1.5, delay: i * 0.05 }}
            className={`flex-1 min-w-[2px] transition-all duration-1000 ${i % 2 === 0 ? "bg-primary-accent" : "bg-primary-accent/30"} rounded-t-sm`}
          />
        ))}
        {/* Overlay Grid */}
        <div className="absolute inset-0 grid grid-rows-4 pointer-events-none opacity-10">
          <div className="border-t border-white/40" />
          <div className="border-t border-white/40" />
          <div className="border-t border-white/40" />
          <div className="border-t border-white/40" />
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden font-sans selection:bg-primary-accent selection:text-white">
      {/* Background Matrix/Glow */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-accent-rgb),0.05),transparent_50%)]" />
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_80%,rgba(var(--primary-accent-rgb),0.02))]" />
      
      <GlassNavbar />

      {/* Main Control Surface */}
      <div className="container-fluid mx-auto px-6 h-full relative z-10">
        
        {/* TOP STATUS BAR */}
        <div className="flex flex-wrap items-center justify-between mb-10 p-6 bg-zinc-900/50 backdrop-blur-3xl border border-white/5 rounded-[2rem] gap-8">
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                 <div className="h-2.5 w-2.5 rounded-full bg-primary-accent animate-pulse shadow-[0_0_15px_var(--primary-accent)]" />
                 <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white">INTELLIGENCE_ENGINE v4.0</span>
              </div>
              <div className="h-10 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-8 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                 <span className="flex items-center gap-3"><MapPin size={12} className="text-primary-accent" /> TRV • COK Hub</span>
                 <span className="flex items-center gap-3"><RefreshCw size={12} className="animate-spin-slow" /> SYNC: ACTIVE</span>
                 <span className="flex items-center gap-3"><Cpu size={12} /> LOAD: 24%</span>
              </div>
           </div>
           
           <div className="flex items-center gap-8 font-mono text-[11px] text-primary-accent">
              <span>{currentTime.toLocaleDateString()}</span>
              <span>{currentTime.toLocaleTimeString()}</span>
           </div>
        </div>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-12 gap-8 lg:h-[calc(100vh-250px)]">
           
           {/* LEFT COLUMN: GLOBAL REACH */}
           <div className="col-span-12 lg:col-span-3 flex flex-col gap-8 h-full">
              
              {/* PRIMARY STAT */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex-1 p-10 bg-zinc-900 border border-white/5 rounded-[3.5rem] relative overflow-hidden group transition-all"
              >
                 <div className="absolute top-0 right-0 p-8 text-primary-accent opacity-20 transition-opacity group-hover:opacity-100">
                    <TrendingUp size={24} />
                 </div>
                 <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-500 mb-6">Total Traffic_</h3>
                 <div className="text-7xl font-black tracking-tighter mb-4 text-white leading-none">
                    {visitors.toLocaleString()}
                 </div>
                 <div className="flex items-center gap-3 text-primary-accent text-sm font-bold italic">
                    <Zap size={14} className="fill-primary-accent" /> +214% CURRENT PEAK
                 </div>
                 {/* Mini Chart */}
                 <div className="mt-auto pt-10">
                    <ActivityChart />
                 </div>
              </motion.div>

              {/* NODE STATUS */}
              <div className="p-8 bg-primary-accent text-white rounded-[3rem] relative overflow-hidden">
                 <div className="flex justify-between items-start mb-6">
                    <Users size={28} className="text-white" />
                    <div className="h-2 w-2 rounded-full bg-white animate-ping" />
                 </div>
                 <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-white/50 mb-2">Live Nodes_</h3>
                 <div className="text-5xl font-black tracking-tighter">{activeNodes}</div>
                 <div className="text-[10px] mt-4 font-mono uppercase tracking-widest text-white/70">Connections Stabilized</div>
                 <div className="absolute -bottom-6 -right-6 opacity-20">
                    <Globe size={120} />
                 </div>
              </div>

           </div>

           {/* CENTER COLUMN: MARKET INTELLIGENCE */}
           <div className="col-span-12 lg:col-span-6 flex flex-col gap-8 h-full">
              
              {/* INTERNET SEARCH VOLUME DATA */}
              <div className="flex-1 p-12 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[4rem] flex flex-col">
                 <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
                    <div>
                       <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-primary-accent mb-4">Market Intent_</h3>
                       <h2 className="text-4xl font-black uppercase tracking-tighter">Service Demand Index_</h2>
                    </div>
                    <div className="flex gap-4">
                       <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-all cursor-pointer">
                          <Maximize2 size={16} />
                       </div>
                    </div>
                 </div>

                 <div className="flex-1 space-y-8 flex flex-col justify-center">
                    {serviceSearchData.map((data, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest px-1">
                            <span className="text-zinc-400">{data.name}</span>
                            <div className="flex gap-4">
                               <span className="text-primary-accent">{data.volume} Q/sec</span>
                               <span className="text-zinc-600 font-mono italic">{data.trend}</span>
                            </div>
                         </div>
                         <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: `${data.growth}%` }}
                               transition={{ duration: 2, delay: i * 0.2 }}
                               className={`h-full bg-gradient-to-r ${i % 2 === 0 ? "from-primary-accent to-red-500" : "from-zinc-700 to-zinc-500"}`}
                            />
                         </div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="mt-12 pt-8 border-t border-white/5 text-[9px] font-mono tracking-widest text-zinc-600 uppercase flex justify-between">
                    <span>*Data aggregated from global search nodes & proprietary LLM intent logs</span>
                    <span className="animate-pulse">REDACTED_ACCESS_ONLY</span>
                 </div>
              </div>

              {/* LIVE CONSOLE */}
              <div className="h-48 p-8 bg-obsidian border border-white/5 rounded-[3rem] font-mono relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-primary-accent/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                 <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                    <span className="text-primary-accent text-[10px] flex items-center gap-2"><Terminal size={12} /> GLOBAL_RESOURCE_STREAM</span>
                    <span className="text-zinc-700 text-[9px]">v2.10.4-LTS</span>
                 </div>
                 <div className="space-y-1 overflow-hidden" ref={scrollRef}>
                    {logs.map((log, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] text-zinc-400 truncate flex items-center gap-3"
                      >
                        <span className="text-primary-accent/40">{'>'}</span>
                        <span className="text-zinc-600">[{Math.random().toString(36).substr(2, 5)}]</span>
                        {log}
                      </motion.div>
                    ))}
                 </div>
                 <div className="absolute bottom-4 right-8 h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
              </div>

           </div>

           {/* RIGHT COLUMN: NODE MESH & COGNITIVE HUD */}
           <div className="col-span-12 lg:col-span-3 flex flex-col gap-8 h-full">
              
              {/* TOP PAGE PERFORMANCE */}
              <div className="flex-1 p-10 bg-zinc-900/80 border border-white/5 rounded-[3.5rem] flex flex-col">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-500 mb-8 flex items-center gap-3">
                    <Eye size={14} className="text-primary-accent" /> Content Nodes_
                 </h3>
                 <div className="space-y-6 flex-1">
                    {[
                      { name: "/video-ads", val: "48%", color: "bg-primary-accent" },
                      { name: "/ai-studios", val: "32%", color: "bg-white" },
                      { name: "/performance", val: "24%", color: "bg-zinc-800" },
                      { name: "/blogs/ai", val: "18%", color: "bg-zinc-700" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                         <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter">
                            <span>{item.name}</span>
                            <span className="text-primary-accent">{item.val}</span>
                         </div>
                         <div className="h-1 w-full bg-white/5 rounded-full">
                            <motion.div 
                               initial={{ scaleX: 0 }}
                               animate={{ scaleX: 1 }}
                               transition={{ duration: 1, delay: i * 0.1 }}
                               style={{ originX: 0 }}
                               className={`h-full ${item.color} w-full`}
                            />
                         </div>
                      </div>
                    ))}
                 </div>
                 <button className="mt-10 w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-primary-accent transition-all duration-300">
                    Expand Full Mesh View
                 </button>
              </div>

              {/* COGNITIVE HEATMAP PREVIEW */}
              <div className="aspect-square p-8 bg-zinc-900 border border-white/5 rounded-[3rem] relative overflow-hidden group">
                 <Image 
                   src="/images/analytics/heatmap.png" 
                   alt="Heatmap" 
                   fill 
                   className="object-cover opacity-20 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-40"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-80" />
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                       <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-accent mb-2">Intent Heatmap_</h4>
                       <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                          <Radio size={10} className="animate-pulse text-red-500" /> CALIBRATING MESH...
                       </div>
                    </div>
                    <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest italic group-hover:text-primary-accent transition-colors">
                       [0.942 INTENSITY DETECTED]
                    </div>
                 </div>
              </div>

           </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-12 font-mono text-[9px] text-zinc-600 uppercase tracking-[0.4em] border-t border-white/5 pt-12">
            <div className="flex gap-16">
               <span className="flex items-center gap-3"><Activity size={12} className="text-primary-accent" /> SYSTEM_UPTIME: 99.98%</span>
               <span className="flex items-center gap-3"><Database size={12} /> PROTOCOL: LAYER_10_MESH</span>
            </div>
            <div className="flex gap-16">
               <span className="flex items-center gap-3"><Shield size={12} /> ENCRYPTION: QUANTUM_SAFE</span>
               <span className="hidden md:inline">NODE_IDENTITY: {activeNodes + 42} (PUBLIC_VIEW)</span>
            </div>
        </div>

      </div>

      {/* FLOATING HUD ELEMENTS */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col gap-4 z-50">
         {[Activity, Layers, Search, Radio].map((Icon, i) => (
           <div key={i} className="h-10 w-10 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-zinc-600 hover:text-primary-accent transition-colors cursor-pointer group">
              <Icon size={14} />
              <div className="absolute left-12 px-3 py-1 bg-primary-accent text-white rounded text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">SYS_{i}</div>
           </div>
         ))}
      </div>

    </main>
  );
}

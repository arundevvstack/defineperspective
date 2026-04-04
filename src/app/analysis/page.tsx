"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Activity, Globe, Zap, Users, TrendingUp, Monitor, Smartphone, 
  Search, ShieldCheck, Layers, BarChart, Server, Cpu, Navigation, Terminal,
  Clock, Wifi, Shield, Database, Layout, Eye, MousePointer2
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";

export default function AnalysisDashboard() {
  const [visitors, setVisitors] = useState(14528);
  const [activeNodes, setActiveNodes] = useState(842);
  const [renderProgress, setRenderProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  // Simulated real-time logs
  useEffect(() => {
    const logInterval = setInterval(() => {
      const paths = ["/blogs/short-form-growth", "/portfolio", "/analysis", "/services/ai-media", "/blogs/cognitive-content"];
      const nodes = ["Node_TRV", "Node_COK", "Node_DXB", "Node_LDN"];
      const newLog = `[${nodes[Math.floor(Math.random() * nodes.length)]}] Request: ${paths[Math.floor(Math.random() * paths.length)]}`;
      setLogs(prev => [newLog, ...prev.slice(0, 5)]);
    }, 2000);

    const statsInterval = setInterval(() => {
      setVisitors(v => v + Math.floor(Math.random() * 2));
      setActiveNodes(n => n + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);

    const progressTimer = setInterval(() => {
      setRenderProgress(p => (p >= 100 ? 0 : p + 2));
    }, 4500);

    return () => {
      clearInterval(logInterval);
      clearInterval(statsInterval);
      clearInterval(progressTimer);
    };
  }, []);

  const topPages = [
    { path: "/blogs/short-form-growth", visits: "4.2k", bounce: "12%", color: "bg-primary-accent" },
    { path: "/blogs/cognitive-content", visits: "3.8k", bounce: "14%", color: "bg-white" },
    { path: "/portfolio/premium-ads", visits: "3.1k", bounce: "18%", color: "bg-zinc-800" },
    { path: "/analysis/global-node", visits: "2.4k", bounce: "22%", color: "bg-zinc-700" }
  ];

  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 pb-40 relative overflow-hidden font-sans selection:bg-primary-accent selection:text-white">
      <GlassNavbar />

      {/* Futuristic Background Node */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary-accent)_0%,transparent_70%)] opacity-10" />
         <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.02)_20px,rgba(255,255,255,0.02)_21px)]" />
      </div>

      {/* Header / Command Center */}
      <section className="container mx-auto px-6 md:px-12 mb-24 lg:mb-40 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
             <div className="flex items-center gap-4 mb-8">
                <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse shadow-[0_0_10px_var(--primary-accent)]" />
                <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-zinc-500 font-black">System Status: Optimal</span>
             </div>
             <h1 className="text-6xl md:text-[8rem] lg:text-[12rem] font-black uppercase tracking-tighter mb-8 leading-[0.8] mix-blend-difference">
                Global <br /> <span className="text-primary-accent italic">Command_</span>
             </h1>
          </motion.div>

          {/* Real-time Ticker */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-96 p-8 rounded-[2rem] bg-zinc-900 border border-white/5 font-mono text-[10px] tracking-widest relative overflow-hidden"
          >
                 <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <span className="text-primary-accent flex items-center gap-2"><Terminal size={12} /> Live Traffic_</span>
                    <span className="text-zinc-600">Sync: 1ms</span>
                 </div>
             <div className="space-y-4">
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-white/60 truncate"
                  >
                    <span className="text-zinc-800 mr-2">{'>'}</span> {log}
                  </motion.div>
                ))}
             </div>
             {/* Scanning Line */}
             <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] bg-primary-accent/30 pointer-events-none"
             />
          </motion.div>
        </div>
      </section>

      {/* The Dashboard Grid */}
      <section className="container mx-auto px-6 md:px-12 mb-40 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Primary Stat: Total Visits */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="lg:col-span-8 p-16 rounded-[4rem] bg-white text-obsidian relative overflow-hidden group shadow-2xl"
            >
               <div className="absolute -bottom-20 -right-20 opacity-5 group-hover:scale-110 transition-transform duration-2000 pointer-events-none">
                  <Users size={400} className="text-primary-accent" />
               </div>
               
               <div className="relative z-10 flex flex-col h-full justify-between gap-20">
                  <div>
                    <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] mb-4 font-black text-zinc-400">Total Website Visits_</h3>
                    <div className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none">
                       {visitors.toLocaleString()}<span className="text-primary-accent animate-pulse">+</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-12 items-center border-t border-obsidian/5 pt-12">
                     <div>
                        <span className="block text-[9px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Growth Rate</span>
                        <span className="text-3xl font-black italic">+214.2%</span>
                     </div>
                     <div className="h-10 w-px bg-obsidian/10" />
                     <div>
                        <span className="block text-[9px] font-mono uppercase tracking-widest text-zinc-400 mb-2">People Online Now</span>
                        <span className="text-3xl font-black italic">{activeNodes}</span>
                     </div>
                     <div className="h-10 w-px bg-obsidian/10" />
                     <div className="flex-1">
                        <span className="block text-[9px] font-mono uppercase tracking-widest text-zinc-400 mb-2">System Stability</span>
                        <div className="w-full h-1 bg-obsidian/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "99.9%" }}
                             className="h-full bg-primary-accent" 
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Secondary Stats Column */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-8 h-full">
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="p-12 rounded-[3.5rem] bg-zinc-900 border border-white/5 relative group hover:border-primary-accent transition-all duration-500 overflow-hidden"
               >
                  <div className="relative z-10">
                     <Clock className="text-primary-accent mb-10" size={32} />
                     <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500 mb-6">Engagement Average_</h4>
                     <div className="text-6xl font-black text-white tracking-tighter">128<span className="text-sm font-mono tracking-widest text-zinc-600">SEC</span></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-accent/10">
                     <motion.div animate={{ left: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity }} className="w-1/3 h-full bg-primary-accent/50" />
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="p-12 rounded-[3.5rem] bg-primary-accent text-white relative group overflow-hidden"
               >
                  <ShieldCheck className="text-white mb-10" size={32} />
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60 mb-6 font-black">Intelligence Index_</h4>
                  <div className="text-6xl font-black text-white tracking-tighter">98.4<span className="text-sm font-mono tracking-widest text-white/30">%</span></div>
                  <div className="absolute -bottom-8 -right-8 opacity-20 rotate-45 pointer-events-none">
                     <Zap size={160} />
                  </div>
               </motion.div>
            </div>

            {/* Top Pages / Content Node Index */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="lg:col-span-12 p-12 md:p-20 rounded-[4rem] bg-zinc-900 border border-white/5 relative overflow-hidden"
            >
               <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 border-b border-white/5 pb-12">
                  <div className="flex-1">
                     <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] mb-4 text-primary-accent">Popular Pages_</h3>
                     <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Top <span className="text-zinc-700">Visits_</span></h2>
                  </div>
                  <div className="flex gap-16 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                     <span className="flex items-center gap-3"><Eye size={14} className="text-primary-accent" /> Page Visits</span>
                     <span className="flex items-center gap-3"><MousePointer2 size={14} className="text-primary-accent" /> Popularity Rank</span>
                  </div>
               </div>

               <div className="space-y-4">
                  {topPages.map((page, i) => (
                    <div key={i} className="group relative flex items-center justify-between p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary-accent transition-all duration-500 overflow-hidden">
                       <div className="flex items-center gap-12 flex-1">
                          <span className="text-[10px] font-mono text-zinc-800">0{i+1}</span>
                          <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-primary-accent transition-colors">{page.path}</h4>
                       </div>
                       
                       <div className="flex gap-16 items-center">
                          <div className={`h-1 w-24 ${page.color} opacity-20 relative rounded-full overflow-hidden`}>
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: "70%" }}
                               transition={{ duration: 1.5, delay: i * 0.1 }}
                               className={`h-full ${page.color}`}
                             />
                          </div>
                          <div className="text-right min-w-[100px]">
                             <span className="block text-2xl font-black tracking-tighter">{page.visits}</span>
                             <span className="text-[9px] font-mono uppercase text-zinc-600 tracking-widest">Bounce: {page.bounce}</span>
                          </div>
                          <Link href={page.path} className="h-14 w-15 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary-accent hover:text-white transition-all">
                             <ArrowRight size={20} />
                          </Link>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>

            {/* Cognitive heatmap integration preview */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="lg:col-span-12 relative aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/5 bg-zinc-900 group shadow-2xl"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10 opacity-70" />
               <Image 
                 src="/images/analytics/heatmap.png" 
                 alt="Cognitive Interaction Heatmap Dashboard" 
                 fill 
                 className="object-cover opacity-50 contrast-125 group-hover:scale-105 transition-transform duration-2000"
               />
               
               <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-12">
                  <div className="bg-primary-accent/80 backdrop-blur-md px-8 py-3 rounded-full text-[10px] uppercase font-black tracking-[0.5em] mb-12 animate-pulse border border-white/20">Global Heatmap Mode: ACTIVE</div>
                  <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                     Mapping <span className="text-primary-accent italic underline underline-offset-[20px]">Desire_</span>
                  </h2>
                  <p className="max-w-2xl text-xl font-light text-zinc-400 uppercase tracking-widest leading-loose mb-12">
                     Simulating 1M+ data nodes to identify high-density cognitive hotspots for brands in 2026.
                  </p>
                  <div className="h-1.5 w-80 bg-white/5 rounded-full overflow-hidden border border-white/5">
                     <motion.div 
                       animate={{ left: ["-100%", "100%"] }} 
                       transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                       className="relative w-1/2 h-full bg-primary-accent shadow-[0_0_20px_var(--primary-accent)]" 
                     />
                  </div>
               </div>
            </motion.div>

         </div>
      </section>

      {/* Simple Explanation Section */}
      <section className="container mx-auto px-6 md:px-12 mb-32 relative z-10">
         <div className="p-12 md:p-20 rounded-[4rem] bg-white/5 border border-white/5 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">What is a <span className="text-primary-accent underline">Node?</span></h2>
            <p className="text-xl font-light text-zinc-400 leading-relaxed uppercase tracking-[0.2em] leading-loose">
               "In simple terms, a Node is just a web page or a piece of content on this website. When people visit our site, they connect to a 'Node'. We track these visits to see which ideas and stories our audience cares about most."
            </p>
         </div>
      </section>

      {/* Global Node Summary */}
      <section className="container mx-auto px-6 md:px-12 text-center pb-20 overflow-hidden">
         <div className="inline-flex flex-wrap items-center justify-center gap-16 text-zinc-600 font-mono text-[9px] uppercase tracking-[0.6em] border-t border-white/5 pt-20 max-w-full">
            <div className="flex items-center gap-3"><Activity size={12} className="text-primary-accent animate-pulse" /> Status: Live</div>
            <div className="flex items-center gap-3"><Globe size={12} /> Sync: Active</div>
            <div className="flex items-center gap-3"><Database size={12} /> Data: Secure</div>
            <div className="flex items-center gap-3"><Cpu size={12} /> Proc: Stable</div>
            <div className="flex items-center gap-3"><Wifi size={12} className="text-primary-accent" /> Connectivity: 100%</div>
         </div>
      </section>

      {/* Side HUD Elements */}
      <div className="fixed top-0 left-0 w-1.5 h-screen bg-primary-accent/10 z-50 pointer-events-none" />
      <div className="fixed top-0 right-0 w-1.5 h-screen bg-primary-accent/10 z-50 pointer-events-none" />
      
      {/* Corner Brackets */}
      <div className="fixed top-10 left-10 w-20 h-20 border-t border-l border-white/5 pointer-events-none z-50 md:block hidden" />
      <div className="fixed top-10 right-10 w-20 h-20 border-t border-r border-white/5 pointer-events-none z-50 md:block hidden" />
      <div className="fixed bottom-10 left-10 w-20 h-20 border-b border-l border-white/5 pointer-events-none z-50 md:block hidden" />
      <div className="fixed bottom-10 right-10 w-20 h-20 border-b border-r border-white/5 pointer-events-none z-50 md:block hidden" />
    </main>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Activity, Globe, Zap, Users, TrendingUp, Monitor, Smartphone, 
  Search, ShieldCheck, Layers, BarChart, Server, Cpu, Navigation, Terminal,
  Clock, Wifi, Shield, Database, Layout, Eye, MousePointer2, MapPin, SearchCode,
  Radio, Share2, MoreHorizontal, Maximize2, RefreshCw, CheckCircle2, AlertTriangle,
  Lightbulb, Gauge, Target, FileSearch, LineChart, Globe2, PieChart, Tablet, 
  ChevronRight, Settings, Bell, Download, Filter
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";

// Tab Types
type TabType = "overview" | "seo" | "marketing" | "system";

export default function AnalysisDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [visitors, setVisitors] = useState(14528);
  const [activeNodes, setActiveNodes] = useState(842);
  const [logs, setLogs] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [seoScore, setSeoScore] = useState(92);
  const [dataPoints, setDataPoints] = useState<number[]>(Array(24).fill(0).map(() => 40 + Math.floor(Math.random() * 60)));

  useEffect(() => {
    const logInterval = setInterval(() => {
      const actions = ["SEO_SCAN", "INTENT_ANALYSIS", "TREND_FETCH", "NODE_SYNC", "SERP_CHECK"];
      const resources = ["GoogleCloud_Node", "SearchAPI_v2", "Analytics_Core", "AEO_Validator"];
      const newLog = `[${new Date().toLocaleTimeString()}] ${actions[Math.floor(Math.random() * actions.length)]} -> ${resources[Math.floor(Math.random() * resources.length)]}`;
      setLogs(prev => [newLog, ...prev.slice(0, 15)]);
    }, 1500);

    const statsInterval = setInterval(() => {
      setVisitors(v => v + Math.floor(Math.random() * 5));
      setActiveNodes(n => Math.max(800, n + (Math.random() > 0.5 ? 4 : -4)));
      setCurrentTime(new Date());
      setSeoScore(prev => Math.min(98, Math.max(88, prev + (Math.random() - 0.5) * 0.3)));
    }, 2500);

    return () => {
      clearInterval(logInterval);
      clearInterval(statsInterval);
    };
  }, []);

  // UI Components
  const SidebarButton = ({ icon: Icon, label, tab }: { icon: any; label: string; tab: TabType }) => (
    <button 
      onClick={() => setActiveTab(tab)}
      className={`group relative flex items-center justify-start gap-4 w-full p-5 rounded-2xl transition-all duration-300 border mb-2 ${
        activeTab === tab 
        ? "bg-primary-accent text-white border-primary-accent shadow-[0_0_20px_rgba(var(--primary-accent-rgb),0.3)]" 
        : "bg-white/5 text-zinc-500 border-white/5 hover:bg-white/10 hover:text-white"
      }`}
    >
       <Icon size={20} className={activeTab === tab ? "animate-pulse" : ""} />
       <span className="text-xs font-black uppercase tracking-[0.2em]">{label}</span>
       {activeTab === tab && (
          <motion.div layoutId="sidebar-active" className="absolute left-0 w-1 h-2/3 bg-white rounded-full ml-1" />
       )}
    </button>
  );

  const StatBox = ({ title, value, sub, icon: Icon, color }: { title: string; value: string; sub: string; icon: any; color?: string }) => (
    <div className="p-8 bg-zinc-900 border border-white/5 rounded-[3rem] relative overflow-hidden group transition-all hover:border-white/20 shadow-xl">
       <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-8 ${color || "text-primary-accent"}`}>
          <Icon size={24} />
       </div>
       <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">{title}_</h4>
       <div className="text-5xl font-black tracking-tighter mb-4 text-white group-hover:scale-105 transition-transform origin-left">{value}</div>
       <div className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-2">
          <Activity size={12} className="text-primary-accent" /> {sub}
       </div>
       <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Icon size={120} />
       </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden font-sans selection:bg-primary-accent selection:text-white">
      {/* Premium Background FX */}
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-obsidian via-black to-zinc-900 overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-primary-accent/5 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/5 blur-[150px] rounded-full" />
      </div>

      <GlassNavbar />

      <div className="container mx-auto px-6 max-w-[1700px] relative z-10 h-full flex flex-col xl:flex-row gap-10 min-h-[85vh]">
        
        {/* LEFT SIDEBAR CONTROLS */}
        <aside className="w-full xl:w-72 flex flex-col gap-6">
           <div className="p-8 bg-zinc-900/50 backdrop-blur-3xl border border-white/5 rounded-[3rem] h-full flex flex-col">
              <div className="mb-12">
                 <h2 className="text-sm font-black uppercase tracking-[0.5em] text-primary-accent mb-2">Command Center_</h2>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Active nodes: {activeNodes}</p>
              </div>

              <div className="flex-1">
                 <SidebarButton icon={Layers} label="Overview" tab="overview" />
                 <SidebarButton icon={SearchCode} label="SEO Analytics" tab="seo" />
                 <SidebarButton icon={Target} label="Marketing" tab="marketing" />
                 <SidebarButton icon={Cpu} label="System" tab="system" />
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                 <button className="flex items-center gap-4 text-zinc-500 hover:text-white transition-colors text-[11px] font-black uppercase tracking-widest mb-6 w-full group">
                    <Settings size={16} className="group-hover:rotate-90 transition-transform" /> Config_Stream
                 </button>
                 <button className="flex items-center gap-4 text-zinc-500 hover:text-white transition-colors text-[11px] font-black uppercase tracking-widest w-full">
                    <Bell size={16} /> Critical_Logs
                 </button>
              </div>
           </div>
        </aside>

        {/* MAIN DASHBOARD CONTENT */}
        <div className="flex-1 flex flex-col gap-10">
           
           {/* TOP STATUS RIBBON */}
           <div className="flex flex-wrap items-center justify-between p-8 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[3.5rem] shadow-2xl gap-8">
              <div className="flex items-center gap-10 flex-wrap">
                 <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-primary-accent shadow-[0_0_15px_var(--primary-accent)] animate-pulse" />
                    <h1 className="text-lg font-black uppercase tracking-[0.4em] text-white">Analysis_Engine v5.0</h1>
                 </div>
                 <div className="h-10 w-px bg-white/10 hidden md:block" />
                 <div className="flex items-center gap-8 text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                    <span className="flex items-center gap-3"><Globe size={14} className="text-blue-400" /> Latency: 0.04ms</span>
                    <span className="flex items-center gap-3"><RefreshCw size={14} className="text-green-400 animate-spin-slow" /> Real-time: Active</span>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <button className="h-12 w-12 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                    <Download size={18} />
                 </button>
                 <button className="h-12 w-40 rounded-2xl bg-primary-accent text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-primary-accent transition-all shadow-xl">
                    Export Data <ChevronRight size={14} />
                 </button>
              </div>
           </div>

           <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="space-y-10"
                >
                   {/* STAT GRID */}
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <StatBox title="Website Visitors" value={visitors.toLocaleString()} sub="+14% vs Last 24h" icon={Users} />
                      <StatBox title="Avg. Time on Node" value="128s" sub="High Retention" icon={Clock} color="text-blue-500" />
                      <StatBox title="SEO Health Index" value={`${seoScore.toFixed(0)}%`} sub="Top 2% Performance" icon={Gauge} color="text-green-500" />
                      <StatBox title="AEO Alignment" value="Highly Optimized" sub="Neural Search Active" icon={Cpu} color="text-zinc-500" />
                   </div>

                   {/* PERFORMANCE CHART AREA */}
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                      
                      {/* TRAFFIC SOURCE BREAKDOWN */}
                      <div className="lg:col-span-2 p-12 bg-zinc-900 border border-white/5 rounded-[4rem] flex flex-col h-[500px]">
                         <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-8">
                            <div>
                               <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary-accent mb-2">Growth Analytics_</h3>
                               <h2 className="text-4xl font-black uppercase tracking-tighter">Visitor_Flow Node_</h2>
                            </div>
                            <div className="flex gap-4">
                               <button className="h-10 px-6 rounded-xl bg-white/5 text-[10px] uppercase font-bold tracking-widest border border-white/10 hover:text-primary-accent">Daily</button>
                               <button className="h-10 px-6 rounded-xl bg-primary-accent text-[10px] uppercase font-bold tracking-widest">Live</button>
                            </div>
                         </div>
                         
                         <div className="flex-1 relative flex items-end justify-between gap-2 overflow-hidden pt-10">
                            {dataPoints.map((p, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${p}%` }}
                                transition={{ duration: 1.5, delay: i * 0.02 }}
                                className={`flex-1 min-w-[4px] rounded-t-xl group/bar relative ${i > 15 ? "bg-primary-accent" : "bg-zinc-800 hover:bg-zinc-700"} transition-all`}
                              >
                                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-white text-obsidian text-[10px] px-3 py-1 rounded-lg font-black uppercase pointer-events-none">
                                    {p}% Load
                                 </div>
                              </motion.div>
                            ))}
                            <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />
                         </div>

                         <div className="grid grid-cols-4 mt-8 pt-6 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                            <span>04:00</span>
                            <span>12:00</span>
                            <span>18:00</span>
                            <span className="text-right">NOW</span>
                         </div>
                      </div>

                      {/* DEVICE SEGMENTATION */}
                      <div className="p-12 bg-zinc-900 border border-white/5 rounded-[4rem] flex flex-col justify-between">
                         <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-500 mb-10">Device Segmentation_</h3>
                         
                         <div className="space-y-10">
                            {[
                              { label: "Mobile Users", val: "68%", icon: Smartphone, color: "bg-primary-accent" },
                              { label: "Desktop Access", val: "24%", icon: Monitor, color: "bg-blue-500" },
                              { label: "Tablet / Other", val: "8%", icon: Tablet, color: "bg-zinc-700" }
                            ].map((d, i) => (
                              <div key={i} className="space-y-4">
                                 <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                                    <span className="flex items-center gap-3 text-white"><d.icon size={16} /> {d.label}</span>
                                    <span className="text-zinc-500">{d.val}</span>
                                 </div>
                                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                    <motion.div 
                                       initial={{ width: 0 }}
                                       animate={{ width: d.val }}
                                       transition={{ duration: 1, delay: i * 0.1 }}
                                       className={`h-full ${d.color}`} 
                                    />
                                 </div>
                              </div>
                            ))}
                         </div>

                         <div className="mt-12 p-8 bg-black/40 rounded-3xl border border-white/5 text-center">
                            <span className="block text-[10px] font-black uppercase tracking-widest text-primary-accent mb-2 underline underline-offset-4 decoration-primary-accent/30">Mobile First Strategy_</span>
                            <p className="text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed">Optimization required for Node_DXB mobile clusters.</p>
                         </div>
                      </div>

                   </div>

                </motion.div>
              )}

              {activeTab === "seo" && (
                <motion.div 
                  key="seo"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                >
                   {/* SEO AUDIT CARD */}
                   <div className="p-12 bg-zinc-900 border border-white/5 rounded-[4rem]">
                      <div className="flex items-center gap-6 mb-12 border-b border-white/5 pb-8">
                         <div className="h-14 w-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                            <SearchCode size={28} />
                         </div>
                         <div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter">SEO Health_Audit</h2>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Last scan: {currentTime.toLocaleTimeString()}</p>
                         </div>
                      </div>

                      <div className="space-y-4">
                         {[
                           { name: "Sitemap Architecture", score: 98, status: "Optimal", color: "text-green-500" },
                           { name: "Schema.org Markup", score: 84, status: "Good", color: "text-blue-500" },
                           { name: "Backlink Density", score: 72, status: "Building", color: "text-zinc-500" },
                           { name: "Meta Descriptions", score: 94, status: "Optimal", color: "text-green-500" },
                           { name: "Mobile Core Web Vitals", score: 99, status: "Elite", color: "text-primary-accent" }
                         ].map((item, i) => (
                           <div key={i} className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 flex items-center justify-between group hover:border-primary-accent transition-all">
                              <div className="flex items-center gap-6">
                                 <span className="text-[11px] font-mono text-zinc-700">0{i+1}</span>
                                 <h4 className="text-lg font-bold uppercase tracking-tight">{item.name}</h4>
                              </div>
                              <div className="flex items-center gap-8">
                                 <div className="text-right">
                                    <span className="block text-xl font-black">{item.score}%</span>
                                    <span className={`text-[9px] font-mono uppercase tracking-widest ${item.color}`}>{item.status}</span>
                                 </div>
                                 <div className="h-10 w-px bg-white/5" />
                                 <CheckCircle2 size={18} className="text-green-500" />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* OPPORTUNITY & VISIBILITY ACTION */}
                   <div className="space-y-10">
                      <div className="p-10 bg-primary-accent text-white rounded-[4rem] relative overflow-hidden group">
                         <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-white/50 mb-6">Strategic Opportunity_</h3>
                         <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-tight">Implement <br />Neural Search_Tags</h2>
                         <p className="text-base font-light text-white/80 leading-relaxed uppercase tracking-widest mb-10">
                            "AEO (Answer Engine Optimization) is now 40% more effective than traditional SEO for creative agency leads in 2026."
                         </p>
                         <button className="h-16 w-full rounded-2xl bg-white text-primary-accent text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-transform shadow-2xl">
                            Deploy AEO Pipeline <ArrowRight size={14} />
                         </button>
                         <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
                            <Search size={220} />
                         </div>
                      </div>

                      <div className="p-10 bg-zinc-900 border border-white/5 rounded-[4rem]">
                         <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-500 mb-8 flex items-center gap-3">
                            <Lightbulb size={16} className="text-primary-accent" /> Improve Visibility_
                         </h3>
                         <div className="space-y-6">
                            {[
                              "Add location-specific structured data for Kochi & Trivandrum.",
                              "Optimize blog images with WebP 2.0 and neural alt-tags.",
                              "Enable instant-load preloading for Service nodes.",
                              "Add 2026-era industry-specific AI keywords."
                            ].map((tip, i) => (
                              <div key={i} className="flex gap-4 text-[13px] font-bold uppercase tracking-tight text-zinc-400 group cursor-default">
                                 <span className="text-primary-accent">●</span>
                                 <span className="group-hover:text-white transition-colors">{tip}</span>
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </motion.div>
              )}

              {activeTab === "marketing" && (
                <motion.div 
                  key="marketing"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-10"
                >
                   {/* MARKET INTENT INDEX */}
                   <div className="p-12 bg-zinc-900 border border-white/5 rounded-[4rem]">
                      <div className="flex justify-between items-center mb-16 px-4">
                         <h2 className="text-5xl font-black uppercase tracking-tighter">Market_Intent Index</h2>
                         <div className="flex items-center gap-10 text-[11px] font-mono tracking-widest text-zinc-600 uppercase">
                            <span className="flex items-center gap-3"><Gauge size={14} /> Global Demand</span>
                            <span className="flex items-center gap-3"><LineChart size={14} /> Peak Trend</span>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                         <div className="space-y-10">
                            {[
                              { label: "AI Video Production", val: "84%", trend: "Critical" },
                              { label: "Virtual Production", val: "62%", trend: "High" },
                              { label: "D2C Ad Content", val: "94%", trend: "Critical" },
                              { label: "Brand Storytelling", val: "48%", trend: "Moderate" }
                            ].map((m, i) => (
                              <div key={i} className="space-y-4">
                                 <div className="flex justify-between items-center">
                                    <span className="text-sm font-black uppercase tracking-widest">{m.label}</span>
                                    <span className={m.trend === 'Critical' ? 'text-primary-accent' : 'text-zinc-500'}>{m.trend}</span>
                                 </div>
                                 <div className="h-6 w-full bg-white/5 rounded-2xl relative overflow-hidden flex items-center px-4 border border-white/5">
                                    <motion.div 
                                       initial={{ width: 0 }}
                                       animate={{ width: m.val }}
                                       transition={{ duration: 1.5, delay: i * 0.1 }}
                                       className="h-2 bg-primary-accent rounded-full shadow-[0_0_10px_var(--primary-accent)]" 
                                    />
                                 </div>
                              </div>
                            ))}
                         </div>
                         <div className="p-12 rounded-3xl bg-black/40 border border-white/5 flex flex-col justify-center items-center text-center">
                            <Target size={48} className="text-primary-accent mb-8" />
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Lead Opportunity_</h3>
                            <p className="text-sm font-light text-zinc-500 uppercase tracking-widest leading-loose mb-10 max-w-sm">
                               Google Trends identifies a 300% surge in 'Neural AI Ad Creatives' within the last 30 days. Focus marketing budget here.
                            </p>
                            <button className="h-16 px-10 rounded-2xl bg-white text-obsidian text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                               Launch Campaign Node_
                            </button>
                         </div>
                      </div>
                   </div>
                </motion.div>
              )}

              {activeTab === "system" && (
                <motion.div 
                  key="system"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                >
                   {/* NODE MESH */}
                   <div className="lg:col-span-2 p-12 bg-zinc-900 border border-white/5 rounded-[4rem] h-[600px] flex flex-col">
                      <h2 className="text-3xl font-black uppercase tracking-tighter mb-10">Global_Node Mesh_</h2>
                      <div className="flex-1 border border-white/5 rounded-[3rem] bg-black/50 relative overflow-hidden group">
                         {/* SIMULATED GRID MESH */}
                         <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
                            {Array(144).fill(0).map((_, i) => (
                              <div key={i} className="border-[0.5px] border-white/10" />
                            ))}
                         </div>
                         {/* ACTIVE NODES PULSE */}
                         <AnimatePresence>
                           {Array(6).fill(0).map((_, i) => (
                             <motion.div
                               key={i}
                               animate={{ 
                                 opacity: [0, 1, 0],
                                 scale: [0.5, 1.5, 0.5],
                                 x: [Math.random() * 500, Math.random() * 500],
                                 y: [Math.random() * 300, Math.random() * 300]
                               }}
                               transition={{ duration: 4 + i, repeat: Infinity }}
                               className="absolute h-4 w-4 bg-primary-accent rounded-full blur-md"
                             />
                           ))}
                         </AnimatePresence>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <Globe size={180} className="text-zinc-900 opacity-20" />
                            <h3 className="text-[10px] font-black uppercase tracking-[1em] text-white/40 mt-6 mt-[-100px] absolute w-full left-0">Synchronized</h3>
                         </div>
                      </div>
                   </div>

                   {/* LIVE LOG STREAM */}
                   <div className="p-10 bg-zinc-900 border border-white/5 rounded-[4rem] flex flex-col">
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                         <span className="text-[11px] font-black uppercase tracking-widest text-primary-accent">Log_Stream v2.0</span>
                         <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                      <div className="flex-1 font-mono text-[11px] text-zinc-500 space-y-2 overflow-hidden bg-black/20 p-6 rounded-2xl">
                         {logs.map((log, i) => (
                           <motion.div 
                             key={i} 
                             initial={{ opacity: 0, x: -10 }}
                             animate={{ opacity: 1, x: 0 }}
                             className="truncate"
                           >
                              <span className="text-zinc-800 mr-2">{'>'}</span> {log}
                           </motion.div>
                         ))}
                      </div>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>

        </div>

      </div>

      {/* FOOTER METADATA */}
      <footer className="container-fluid mx-auto px-12 mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-between items-center gap-12 font-mono text-[10px] text-zinc-700 uppercase tracking-[0.5em] relative z-10">
         <div className="flex gap-16">
            <span className="flex items-center gap-3"><Activity size={12} className="text-primary-accent" /> PROC_INTENSITY: 0.94</span>
            <span className="flex items-center gap-3"><Database size={12} /> ENCRYPTION: SECURE</span>
         </div>
         <div className="flex gap-16">
            <span className="hidden md:inline">NODE IDENT: 145.2.x.94</span>
            <span className="text-primary-accent animate-pulse italic">AEO_INTELLIGENCE: ACTIVE</span>
         </div>
      </footer>

      {/* FIXED CORNER ACCENTS */}
      <div className="fixed top-28 left-10 w-24 h-24 border-t border-l border-white/5 pointer-events-none pointer-events-none opacity-40 z-0" />
      <div className="fixed bottom-10 right-10 w-24 h-24 border-b border-r border-white/5 pointer-events-none opacity-40 z-0" />
    </main>
  );
}

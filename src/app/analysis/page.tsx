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
  Lightbulb, Gauge, Target, FileSearch, LineChart, Globe2
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";

// Mock Data Generators for Real-time Dashboard
const serviceSearchData = [
  { name: "AI Video Production", volume: 4520, trend: "+12%", growth: 78, opportunity: "High" },
  { name: "CGI Virtual Production", volume: 3840, trend: "+8%", growth: 64, opportunity: "Moderate" },
  { name: "Ad Film Production", volume: 2900, trend: "-2%", growth: 45, opportunity: "Stable" },
  { name: "E-comm Content", volume: 5120, trend: "+24%", growth: 92, opportunity: "Critical" },
  { name: "Predictive AI Strategy", volume: 1840, trend: "+45%", growth: 56, opportunity: "Emerging" }
];

const seoAuditItems = [
  { title: "Meta Architecture", score: 92, status: "Optimal", suggestion: "Increase keyword density in OG tags." },
  { title: "Semantic Structure", score: 88, status: "Good", suggestion: "Add h3 nesting in blog sub-sections." },
  { title: "Loading Velocity", score: 98, status: "Critical", suggestion: "Optimize LCP for mobile nodes." },
  { title: "AEO Compliance", score: 84, status: "Needs Improvement", suggestion: "Implement more JSON-LD Schema markup." }
];

const leadSuggestions = [
  { 
    title: "Focus on E-commerce Ads", 
    why: "D2C brands are moving 60% of budget to short-form AI video in Q2 2026.",
    impact: "High Conversion",
    action: "Create dedicated landing pages for Amazon/Flipkart sellers."
  },
  { 
    title: "AI Avatar Showcases", 
    why: "Market trend shows 40% increased trust in AI presenters vs generic voiceovers.",
    impact: "Moderate Engagement",
    action: "Update 'AI Studio' page with 4K presenter demos."
  },
  { 
    title: "Regional SEO Nodes", 
    why: "Hyper-local search for 'AI video production Kochi' is up by 150%.",
    impact: "Direct Leads",
    action: "Create location-specific service pages for tier-2 cities."
  }
];

export default function AnalysisDashboard() {
  const [visitors, setVisitors] = useState(14528);
  const [activeNodes, setActiveNodes] = useState(842);
  const [logs, setLogs] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [seoScore, setSeoScore] = useState(89);
  const [dataPoints, setDataPoints] = useState<number[]>(Array(24).fill(0).map(() => Math.floor(Math.random() * 100)));

  useEffect(() => {
    const logInterval = setInterval(() => {
      const actions = ["SEO_SCAN", "INTENT_ANALYSIS", "TREND_FETCH", "NODE_PULSE_SYNC", "SERP_RANK_CHECK"];
      const resources = ["GoogleTrends_API", "SearchConsole_Node", "Analytics_v4", "AEO_Validator"];
      const newLog = `[${new Date().toLocaleTimeString()}] ${actions[Math.floor(Math.random() * actions.length)]} -> ${resources[Math.floor(Math.random() * resources.length)]}`;
      setLogs(prev => [newLog, ...prev.slice(0, 8)]);
    }, 2000);

    const statsInterval = setInterval(() => {
      setVisitors(v => v + Math.floor(Math.random() * 5));
      setActiveNodes(n => Math.max(800, n + (Math.random() > 0.5 ? 3 : -3)));
      setCurrentTime(new Date());
      setSeoScore(prev => Math.min(96, Math.max(88, prev + (Math.random() - 0.5) * 0.5)));
    }, 3000);

    return () => {
      clearInterval(logInterval);
      clearInterval(statsInterval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden font-sans selection:bg-primary-accent selection:text-white">
      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary-accent-rgb),0.03),transparent_60%)]" />

      <GlassNavbar />

      <div className="container-fluid mx-auto px-6 h-full relative z-10">
        
        {/* COMMAND HEADER */}
        <div className="flex flex-wrap items-center justify-between mb-8 p-8 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] shadow-2xl">
           <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-4">
                 <div className="h-3 w-3 rounded-full bg-primary-accent shadow-[0_0_15px_var(--primary-accent)] animate-pulse" />
                 <span className="text-sm font-black uppercase tracking-[0.5em]">Global_Visibility_Controller v4.1</span>
              </div>
              <div className="h-10 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-8 text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                 <span className="flex items-center gap-3"><Globe2 size={14} className="text-blue-500" /> SERP_INDEX: ACTIVE</span>
                 <span className="flex items-center gap-3"><SearchCode size={14} className="text-green-500" /> SEO_HEALTH: OPTIMAL</span>
                 <span className="flex items-center gap-3 text-primary-accent"><Activity size={14} /> LIVE_SYNC</span>
              </div>
           </div>
           <div className="font-mono text-xs text-zinc-500">Node_{currentTime.getSeconds()} // {currentTime.toLocaleTimeString()}</div>
        </div>

        {/* PRIMARY DASHBOARD GRID */}
        <div className="grid grid-cols-12 gap-8 mb-8">
           
           {/* LEFT: AUDIENCE CONSOLE */}
           <div className="col-span-12 lg:col-span-4 flex flex-col gap-8 h-full">
              
              {/* TOTAL VISITORS HUB */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 bg-zinc-900 border border-white/5 rounded-[4rem] relative overflow-hidden group shadow-2xl flex-1"
              >
                 <div className="absolute top-8 right-10 text-primary-accent/30 group-hover:text-primary-accent transition-colors">
                    <Users size={32} />
                 </div>
                 <h3 className="text-[11px] font-black uppercase tracking-[0.7em] text-zinc-600 mb-8">Audience Reach_</h3>
                 
                 <div className="space-y-2 mb-10">
                    <span className="block text-[10px] font-mono text-primary-accent uppercase tracking-widest">Total Cumulative Reach</span>
                    <div className="text-8xl font-black text-white tracking-tighter leading-none group-hover:scale-105 transition-transform origin-left">
                       {visitors.toLocaleString()}
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                    <div>
                       <span className="block text-[9px] font-mono uppercase text-zinc-500 mb-1">Growth Index</span>
                       <span className="text-4xl font-black italic">+214%</span>
                    </div>
                    <div>
                       <span className="block text-[9px] font-mono uppercase text-zinc-500 mb-1">Live Online</span>
                       <span className="text-4xl font-black italic text-primary-accent">{activeNodes}</span>
                    </div>
                 </div>

                 <div className="mt-12 h-20 w-full overflow-hidden flex items-end gap-1">
                    {dataPoints.slice(0, 15).map((p, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: `${p}%` }}
                        className="flex-1 bg-primary-accent/20 rounded-t-sm group-hover:bg-primary-accent transition-all duration-1000"
                      />
                    ))}
                 </div>
              </motion.div>

              {/* SEO HEALTH GAUGE */}
              <div className="p-10 bg-zinc-900/60 border border-white/5 rounded-[4rem] flex flex-col items-center justify-center text-center relative overflow-hidden group">
                  <div className="relative h-48 w-48 mb-6 flex items-center justify-center">
                     <svg className="w-full h-full -rotate-90">
                        <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-zinc-800" />
                        <motion.circle 
                           cx="96" cy="96" r="80" 
                           stroke="var(--primary-accent)" 
                           strokeWidth="12" 
                           strokeDasharray="502.6"
                           animate={{ strokeDashoffset: 502.6 - (502.6 * seoScore) / 100 }}
                           fill="transparent" 
                           strokeLinecap="round"
                        />
                     </svg>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-6xl font-black tracking-tighter">{seoScore.toFixed(0)}</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-accent">Global_Score</span>
                     </div>
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest mb-2">Search Visibility Score</h3>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">98th Percentile in Creative Media</p>
                  
                  <div className="absolute -bottom-8 -right-8 opacity-5">
                    <Gauge size={160} />
                  </div>
              </div>

           </div>

           {/* CENTER: INTELLIGENCE & OPPORTUNITY HUB */}
           <div className="col-span-12 lg:col-span-12 xl:col-span-5 flex flex-col gap-8 h-full">
              
              {/* MARKET TREND ANALYSIS */}
              <div className="flex-1 p-12 bg-zinc-900/30 border border-white/5 rounded-[4rem] backdrop-blur-3xl">
                 <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
                    <div>
                       <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-accent mb-4">Intent_Engine v4.0</h4>
                       <h2 className="text-5xl font-black uppercase tracking-tighter">Market <span className="text-zinc-600">Growth Index_</span></h2>
                    </div>
                    <div className="h-12 w-12 rounded-full border border-white/5 flex items-center justify-center text-primary-accent">
                       <TrendingUp size={24} />
                    </div>
                 </div>

                 <div className="space-y-8">
                    {serviceSearchData.map((data, i) => (
                      <div key={i} className="group cursor-default">
                         <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest mb-3 px-1">
                            <span className="text-white flex items-center gap-2 group-hover:text-primary-accent transition-colors">
                              {data.name} 
                              <span className={`text-[8px] px-2 py-0.5 rounded-full ${data.opportunity === 'Critical' ? 'bg-red-500 text-white' : 'bg-white/5 text-zinc-500'}`}>
                                 {data.opportunity}
                              </span>
                            </span>
                            <div className="flex gap-4">
                               <span className="text-zinc-500">{data.volume} Search/mo</span>
                               <span className="text-primary-accent italic">{data.trend}</span>
                            </div>
                         </div>
                         <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                            <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: `${data.growth}%` }}
                               transition={{ duration: 1.5, delay: i * 0.1 }}
                               className={`h-full bg-gradient-to-r ${i === 0 || i === 3 ? "from-primary-accent to-red-500" : "from-zinc-700 to-zinc-500"} rounded-full`}
                            />
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* SEO SUGGESTIONS WIDGET */}
                 <div className="mt-16 bg-white/5 rounded-[3rem] p-10 border border-white/5 relative overflow-hidden self-end">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="h-10 w-10 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                          <Lightbulb size={20} />
                       </div>
                       <h3 className="text-xl font-black uppercase tracking-tighter">Strategic Lead Optimization</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {leadSuggestions.slice(0, 2).map((s, i) => (
                         <div key={i} className="p-8 rounded-[2rem] bg-black/40 border border-white/5 transition-colors hover:border-primary-accent">
                            <span className="block text-[8px] font-mono text-primary-accent uppercase tracking-[0.4em] mb-4">{s.impact}</span>
                            <h4 className="text-lg font-black uppercase tracking-tight mb-4">{s.title}</h4>
                            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest leading-loose mb-6">{s.why}</p>
                            <Link href="/contact" className="text-[9px] font-black uppercase tracking-[0.5em] text-white flex items-center gap-3 hover:text-primary-accent transition-colors">
                               EXECUTE PLAN <ArrowRight size={10} />
                            </Link>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

           </div>

           {/* RIGHT: REAL-TIME AUDIT STREAM */}
           <div className="col-span-12 lg:col-span-12 xl:col-span-3 flex flex-col gap-8 h-full">
              
              {/* SYSTEM AUDIT LOGS */}
              <div className="flex-1 p-10 bg-zinc-900 border border-white/5 rounded-[4rem] flex flex-col">
                 <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-500">Visibility Audit Stream_</h3>
                    <div className="h-2 w-2 rounded-full bg-primary-accent animate-ping" />
                 </div>
                 
                 <div className="space-y-4 flex-1">
                    {seoAuditItems.map((item, i) => (
                      <div key={i} className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 group hover:border-primary-accent/30 transition-all">
                         <div className="flex justify-between items-center mb-3">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{item.title}</span>
                            <span className="text-[10px] font-mono text-primary-accent">{item.score}%</span>
                         </div>
                         <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle size={10} className={item.score < 90 ? "text-yellow-500" : "text-green-500"} />
                            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{item.status}</span>
                         </div>
                         <p className="text-[9px] font-mono text-zinc-500 italic uppercase tracking-wider leading-relaxed">
                            {item.suggestion}
                         </p>
                      </div>
                    ))}
                 </div>

                 <div className="mt-12 group p-6 rounded-[2rem] bg-obsidian border border-white/10 font-mono text-[9px] tracking-widest text-zinc-700 overflow-hidden relative">
                    <div className="flex justify-between mb-4 text-primary-accent">
                       <span>CONSOLE_STREAM</span>
                       <span>OK_200</span>
                    </div>
                    <div className="space-y-1">
                       {logs.slice(0, 5).map((log, i) => (
                         <div key={i} className="truncate">{'>'} {log}</div>
                       ))}
                    </div>
                 </div>
              </div>

           </div>

        </div>

        {/* BOTTOM ACTION SECTION: LEAD RADAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-10 rounded-[3rem] bg-primary-accent text-white relative overflow-hidden group">
              <div className="relative z-10">
                 <Target className="mb-6" size={32} />
                 <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-4">Lead Opportunity_</h4>
                 <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Hyper-Local Domination</h3>
                 <p className="text-[10px] font-mono text-white/60 leading-relaxed uppercase tracking-widest italic">
                    "Google Trends identifies Kochi & Trivandrum as high-volume AI search nodes. Dominate regional SEO now."
                 </p>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-20 rotate-12 group-hover:scale-125 transition-transform">
                 <Globe size={180} />
              </div>
           </div>

           <div className="md:col-span-2 p-12 rounded-[3.5rem] bg-zinc-900 border border-white/5 flex items-center justify-between group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/5 to-transparent z-0" />
              <div className="relative z-10 max-w-xl">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center text-primary-accent border border-white/10">
                       <Search size={20} />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">SEO Intelligence Summary</h3>
                 </div>
                 <p className="text-sm font-light text-zinc-500 uppercase tracking-widest leading-loose">
                    Your website visibility is currently performing at the <span className="text-white font-bold">98th percentile</span>. To convert more leads, prioritise <span className="text-primary-accent font-bold italic">D2C Industry Verticalisation</span> and <span className="text-white font-bold">Local-AI SEO</span> optimization.
                 </p>
              </div>
              <Link href="/contact" className="relative z-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-white text-obsidian flex flex-col items-center justify-center text-center group-hover:bg-primary-accent group-hover:text-white transition-all shadow-2xl">
                 <span className="text-[9px] font-black uppercase tracking-tighter leading-none mb-1">Get</span>
                 <span className="text-xl font-black uppercase tracking-tighter leading-none">Leads</span>
                 <ArrowRight size={20} className="mt-2" />
              </Link>
           </div>
        </div>

        {/* FOOTER METRICS */}
        <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-between items-center gap-12 font-mono text-[9px] text-zinc-600 uppercase tracking-[0.5em]">
           <span className="flex items-center gap-3"><Gauge size={12} className="text-primary-accent" /> ENGINE_INTENSITY: 0.94</span>
           <div className="flex gap-12">
              <span>SCAN_LATENCY: 0.04ms</span>
              <span className="text-primary-accent animate-pulse">AUTONOMOUS_MODE: ENABLED</span>
           </div>
        </div>

      </div>

      {/* FLOAT HUD ELEMENTS */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col gap-6 z-50">
         {[Search, FileSearch, LineChart, ShieldCheck].map((Icon, i) => (
           <div key={i} className="h-10 w-10 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-zinc-600 hover:text-primary-accent transition-all cursor-pointer hover:scale-110">
              <Icon size={14} />
           </div>
         ))}
      </div>

    </main>
  );
}

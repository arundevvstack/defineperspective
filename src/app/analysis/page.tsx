"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Activity, Globe, Zap, Users, TrendingUp, Monitor, Smartphone, 
  Search, Shield, Layers, BarChart, Server, Cpu, Navigation, Terminal,
  Clock, Wifi, Database, Layout, Eye, MousePointer2, MapPin, SearchCode,
  Radio, Share2, MoreHorizontal, Maximize2, RefreshCw, CheckCircle2, AlertTriangle,
  Lightbulb, Gauge, Target, FileSearch, LineChart, Globe2, PieChart, Tablet, 
  ChevronRight, Settings, Bell, Download, Filter, Menu, X
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import { cn } from "@/lib/utils";

// Tab Types
type TabType = "overview" | "seo" | "marketing" | "system";

export default function AnalysisDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visitors, setVisitors] = useState(14528);
  const [activeSystems, setActiveSystems] = useState(842);
  const [logs, setLogs] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [seoScore, setSeoScore] = useState(92);
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [chartMode, setChartMode] = useState<"daily" | "live">("live");
  const [isSaving, setIsSaving] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [systemAlerts, setSystemAlerts] = useState(0);

  const [userData, setUserData] = useState<any>(null);
  const [sitePages] = useState<string[]>([
    "/", "/arun-devv", "/services/ai-video-production", "/blog", "/portfolio", "/contact"
  ]);

  useEffect(() => {
    // Fetch real user data with robust error handling
    try {
      fetch("https://ipapi.co/json/")
        .then(res => {
          if (!res.ok) throw new Error("API Limit");
          return res.json();
        })
        .then(data => setUserData(data))
        .catch(() => setUserData({ query: "127.0.0.1", city: "Local Hub", org: "DP Secure Network" }));
    } catch (e) {
      setUserData({ query: "127.0.0.1", city: "Local Hub", org: "DP Secure Network" });
    }

    // Initial client-side populate
    setCurrentTime(new Date());
    setDataPoints(Array(24).fill(0).map(() => 45 + Math.floor(Math.random() * 55)));

    const logInterval = setInterval(() => {
      const actions = ["SEO_SCAN", "MARKET_ANALYSIS", "TREND_FETCH", "SYNC_ACTIVE", "SEARCH_CHECK", "BOT_FILTER"];
      const resources = ["Cloud_Server", "SearchAPI", "Analytics_Core", "Security_Layer"];
      const newLog = `[${new Date().toLocaleTimeString()}] ${actions[Math.floor(Math.random() * actions.length)]} -> ${resources[Math.floor(Math.random() * resources.length)]}`;
      setLogs(prev => [newLog, ...prev.slice(0, 15)]);
    }, 3000);

    const statsInterval = setInterval(() => {
      setVisitors(v => v + Math.floor(Math.random() * 3));
      setActiveSystems(n => Math.max(820, n + (Math.random() > 0.5 ? 2 : -2)));
      setCurrentTime(new Date());
    }, 5000);

    return () => {
      clearInterval(logInterval);
      clearInterval(statsInterval);
    };
  }, []);

  const handleSaveReport = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  const handleRefreshSEO = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setSeoScore(prev => Math.min(98.5, prev + 0.5));
    }, 1500);
  };

  const toggleChartMode = (mode: "daily" | "live") => {
    setChartMode(mode);
    setDataPoints(Array(24).fill(0).map(() => 
      mode === "live" ? 40 + Math.floor(Math.random() * 60) : 20 + Math.floor(Math.random() * 40)
    ));
  };

  // UI Components
  const SidebarButton = ({ icon: Icon, label, tab }: { icon: any; label: string; tab: TabType }) => (
    <button 
      onClick={() => {
        setActiveTab(tab);
        setIsMobileMenuOpen(false);
      }}
      className={cn(
        "group relative flex items-center justify-start gap-4 w-full p-4 rounded-2xl transition-all duration-300 border mb-2",
        activeTab === tab 
        ? "bg-primary-accent text-black border-primary-accent shadow-[0_0_20px_rgba(var(--primary-accent-rgb),0.3)]" 
        : "bg-white/5 text-zinc-400 border-white/5 hover:text-white hover:bg-white/10"
      )}
    >
       <Icon size={18} className={activeTab === tab ? "animate-pulse" : ""} />
       <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
       {activeTab === tab && (
          <motion.div layoutId="sidebar-active" className="absolute left-0 w-1 h-2/3 bg-black rounded-full ml-1" />
       )}
    </button>
  );

  const StatBox = ({ title, value, sub, icon: Icon, color, onClick }: { title: string; value: string; sub: string; icon: any; color?: string; onClick?: () => void }) => (
    <div 
      onClick={onClick}
      className={cn(
        "p-6 md:p-8 bg-zinc-900 border border-white/5 rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden group transition-all hover:border-white/20 shadow-xl",
        onClick ? "cursor-pointer active:scale-[0.98]" : ""
      )}
    >
       <div className={cn("p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 w-fit mb-6 md:mb-8", color || "text-primary-accent")}>
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
       </div>
       <h4 className="text-[9px] md:text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-1 md:mb-2">{title}_</h4>
       <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2 md:mb-4 text-white group-hover:scale-105 transition-transform origin-left">{value}</div>
       <div className="text-[9px] md:text-[11px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-2">
          <Activity size={10} className="text-primary-accent" /> {sub}
       </div>
       <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Icon className="w-20 h-20 md:w-32 md:h-32" />
       </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white pt-20 md:pt-28 pb-12 relative overflow-hidden font-sans selection:bg-primary-accent selection:text-white">
      {/* Premium Background FX */}
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-obsidian via-black to-zinc-900 overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-primary-accent/5 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/5 blur-[150px] rounded-full" />
      </div>

      <GlassNavbar />

      <div className="container mx-auto px-4 md:px-6 max-w-[1700px] relative z-10 flex flex-col xl:flex-row gap-6 md:gap-10">
        
        {/* MOBILE MENU TOGGLE */}
        <div className="xl:hidden flex items-center justify-between p-4 bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-2xl mb-4">
           <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Dashboard System_</span>
           </div>
           <button 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400"
           >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>

        {/* SIDEBAR (Responsive Drawer) */}
        <aside className={cn(
          "xl:w-72 flex flex-col gap-6 transition-all duration-500",
          "fixed inset-x-4 top-[140px] bottom-4 z-50 xl:static xl:inset-auto xl:h-auto",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 xl:translate-x-0 xl:opacity-100 pointer-events-none xl:pointer-events-auto"
        )}>
           <div className="p-6 md:p-8 bg-zinc-900/80 xl:bg-zinc-900/50 backdrop-blur-3xl border border-white/10 xl:border-white/5 rounded-[2rem] md:rounded-[3rem] h-full flex flex-col shadow-2xl">
              <div className="mb-8 md:mb-12">
                 <h2 className="text-[11px] font-black uppercase text-primary-accent mb-2 tracking-widest">Dashboard Settings_</h2>
                 <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                    <Radio size={10} className="text-primary-accent" /> Active Systems: {activeSystems}
                 </p>
              </div>

              <div className="flex-1 space-y-2">
                 <SidebarButton icon={Layers} label="Overview" tab="overview" />
                 <SidebarButton icon={SearchCode} label="SEO Health" tab="seo" />
                 <SidebarButton icon={Target} label="Market Index" tab="marketing" />
                 <SidebarButton icon={Cpu} label="System Node" tab="system" />
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 space-y-4">
                 <button 
                  onClick={() => alert("Restricted: Admin access required for secure layer-3 settings.")}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest w-full group"
                 >
                    <Settings size={14} className="group-hover:rotate-90 transition-transform" /> system_admin
                 </button>
                 <button 
                  onClick={() => setSystemAlerts(0)}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest w-full group"
                 >
                    <div className="relative">
                      <Bell size={14} />
                      {systemAlerts > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-accent rounded-full animate-ping" />}
                    </div>
                    security_logs
                 </button>
              </div>
           </div>
        </aside>

        {/* MAIN DASHBOARD CONTENT */}
        <div className="flex-1 flex flex-col gap-6 md:gap-10">
           
           {/* TOP STATUS RIBBON */}
           <div className="flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 text-center sm:text-left">
                 <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-primary-accent shadow-[0_0_15px_var(--primary-accent)] animate-pulse" />
                    <h1 className="text-base md:text-lg font-black uppercase text-white tracking-tighter">WEBSITE_PERFORMANCE_DASHBOARD</h1>
                 </div>
                 <div className="h-10 w-px bg-white/10 hidden md:block" />
                 <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[9px] md:text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                    <span className="flex items-center gap-2"><Globe size={12} className="text-blue-500" /> Latency: 12ms</span>
                    <span className="flex items-center gap-2"><RefreshCw size={12} className="text-green-500 animate-spin-slow" /> Real-time Sync</span>
                 </div>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                 <button 
                  onClick={handleSaveReport}
                  className="h-12 w-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group active:scale-95"
                  title="Export Data"
                 >
                    <Download size={18} className={isSaving ? "animate-bounce" : "group-hover:translate-y-0.5 transition-transform"} />
                 </button>
                 <button 
                  onClick={handleSaveReport}
                  disabled={isSaving}
                  className="flex-1 sm:flex-none h-12 px-8 rounded-xl md:rounded-2xl bg-primary-accent text-black text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl disabled:opacity-50 active:scale-95"
                 >
                    {isSaving ? "Finalizing..." : "Export Report"} <ChevronRight size={14} className={isSaving ? "animate-ping" : ""} />
                 </button>
              </div>
           </div>

           <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6 md:space-y-10"
                >
                   {/* STAT GRID */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                      <StatBox title="Live Traffic" value={visitors.toLocaleString()} sub="+14% Performance" icon={Users} onClick={() => setActiveTab("overview")} />
                      <StatBox title="Engagement" value="2.4m" sub="Retention High" icon={TrendingUp} color="text-blue-500" />
                      <StatBox title="SEO Index" value={`${seoScore.toFixed(0)}%`} sub="Top-Tier Authority" icon={Gauge} color="text-green-500" onClick={() => setActiveTab("seo")} />
                      <StatBox title="System Load" value="Optimal" sub="Zero Latency" icon={Cpu} color="text-zinc-500" onClick={() => setActiveTab("system")} />
                   </div>

                   {/* PERFORMANCE CHART AREA */}
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
                      
                      <div className="lg:col-span-2 p-8 md:p-12 bg-zinc-900 border border-white/5 rounded-[2.5rem] md:rounded-[4rem] flex flex-col h-[400px] md:h-[500px]">
                         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-10 border-b border-white/5 pb-6 md:pb-8 gap-4">
                            <div>
                               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-accent mb-1 md:mb-2">Traffic Source_</h3>
                               <h2 className="text-2xl md:text-4xl font-black uppercase">Visitor_Traffic_Map</h2>
                            </div>
                             <div className="flex gap-2 md:gap-4 w-full sm:w-auto">
                                <button 
                                  onClick={() => toggleChartMode("daily")}
                                  className={cn(
                                    "flex-1 sm:flex-none h-10 px-6 rounded-xl text-[10px] uppercase font-bold tracking-widest border transition-all",
                                    chartMode === 'daily' ? 'bg-white text-black border-white' : 'bg-white/5 text-zinc-500 border-white/10'
                                  )}
                                >
                                  Static
                                </button>
                                <button 
                                  onClick={() => toggleChartMode("live")}
                                  className={cn(
                                    "flex-1 sm:flex-none h-10 px-6 rounded-xl text-[10px] uppercase font-bold tracking-widest border transition-all",
                                    chartMode === 'live' ? 'bg-primary-accent text-black border-primary-accent shadow-[0_0_15px_rgba(var(--primary-accent-rgb),0.3)]' : 'bg-white/5 text-zinc-500 border-white/10'
                                  )}
                                >
                                  Live
                                </button>
                             </div>
                         </div>
                         
                         <div className="flex-1 relative flex items-end justify-between gap-1 md:gap-2 overflow-hidden pt-10">
                            {dataPoints.map((p, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${p}%` }}
                                transition={{ duration: 1.5, delay: i * 0.02 }}
                                className={cn(
                                  "flex-1 min-w-[2px] md:min-w-[4px] rounded-t-lg md:rounded-t-xl group/bar relative transition-all",
                                  i > 18 ? "bg-primary-accent shadow-[0_0_10px_rgba(var(--primary-accent-rgb),0.5)]" : "bg-zinc-800 hover:bg-zinc-700"
                                )}
                              >
                                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-white text-black text-[8px] md:text-[10px] px-2 py-1 rounded md:rounded-lg font-black uppercase pointer-events-none whitespace-nowrap z-20">
                                    {p}% Load
                                 </div>
                              </motion.div>
                            ))}
                            <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 pointer-events-none" />
                         </div>

                         <div className="grid grid-cols-4 mt-6 md:mt-8 pt-6 border-t border-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-600">
                            <span>04:00</span>
                            <span>12:00</span>
                            <span>18:00</span>
                            <span className="text-right">ACTIVE_NODE</span>
                         </div>
                      </div>

                      <div className="p-8 md:p-12 bg-zinc-900 border border-white/5 rounded-[2.5rem] md:rounded-[4rem] flex flex-col justify-between">
                         <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 md:mb-10">Device Metrics_</h3>
                         
                         <div className="space-y-8 md:space-y-10">
                            {[
                               { label: "Mobile Hub", val: "72%", icon: Smartphone, color: "bg-primary-accent" },
                               { label: "Desktop Node", val: "22%", icon: Monitor, color: "bg-blue-500" },
                               { label: "Other Terminals", val: "6%", icon: Tablet, color: "bg-zinc-700" }
                            ].map((d, i) => (
                              <div key={i} className="space-y-4">
                                 <div className="flex justify-between items-center text-[10px] md:text-xs font-black uppercase tracking-widest">
                                    <span className="flex items-center gap-3 text-white"><d.icon className="w-3.5 h-3.5 md:w-4 md:h-4" /> {d.label}</span>
                                    <span className="text-zinc-500 font-mono">{d.val}</span>
                                 </div>
                                 <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                    <motion.div 
                                       initial={{ width: 0 }}
                                       animate={{ width: d.val }}
                                       transition={{ duration: 1, delay: i * 0.1 }}
                                       className={cn("h-full", d.color)} 
                                    />
                                 </div>
                              </div>
                            ))}
                         </div>

                         <div className="mt-10 md:mt-12 p-6 md:p-8 bg-black/40 rounded-3xl border border-white/5 text-center">
                            <span className="block text-[9px] font-black uppercase tracking-[0.4em] text-primary-accent mb-3">Adaptive Intelligence Active_</span>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">System automatically detects and optimizes for incoming user-agent strings.</p>
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
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10"
                >
                   <div className="p-8 md:p-12 bg-zinc-900 border border-white/5 rounded-[2.5rem] md:rounded-[4rem]">
                      <div className="flex items-center gap-6 mb-8 md:mb-12 border-b border-white/5 pb-6 md:pb-8">
                         <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                            <SearchCode className="w-6 h-6 md:w-7 md:h-7" />
                         </div>
                         <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">SEARCH_OPTIMIZATION_STATUS</h2>
                            <p className="text-[9px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest">Global Scan: {currentTime?.toLocaleTimeString() || "Syncing..."}</p>
                         </div>
                      </div>

                      <div className="space-y-3 md:space-y-4">
                         {[
                           { name: "Sitemap Integrity", score: 99, status: "Secure", color: "text-green-500" },
                           { name: "Schema Topology", score: 88, status: "Active", color: "text-blue-500" },
                           { name: "Backlink Network", score: 76, status: "Scaling", color: "text-zinc-500" },
                           { name: "Metadata Density", score: 94, status: "Optimal", color: "text-green-500" },
                           { name: "Core Web Vitals", score: 100, status: "Elite", color: "text-primary-accent" }
                         ].map((item, i) => (
                           <div key={i} className="p-5 md:p-6 rounded-2xl md:rounded-[2rem] bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-primary-accent/30 transition-all">
                              <div className="flex items-center gap-4 md:gap-6">
                                 <span className="text-[9px] md:text-[11px] font-mono text-zinc-700">CHECK_0{i+1}</span>
                                 <h4 className="text-base md:text-lg font-bold uppercase tracking-tight text-white group-hover:text-primary-accent transition-colors">{item.name}</h4>
                              </div>
                              <div className="flex items-center gap-4 md:gap-8">
                                 <div className="text-right">
                                    <span className="block text-lg md:text-xl font-black text-white">{item.score}%</span>
                                    <span className={cn("text-[8px] md:text-[9px] font-mono uppercase tracking-widest", item.color)}>{item.status}</span>
                                 </div>
                                 <div className="h-8 md:h-10 w-px bg-white/5" />
                                 <CheckCircle2 className="w-4 h-4 md:w-[18px] md:h-[18px] text-green-500" />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-6 md:space-y-10">
                      <div className="p-8 md:p-10 bg-primary-accent text-black rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden group shadow-2xl">
                         <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-6">Discovery Optimization_</h3>
                         <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 md:mb-8 leading-tight tracking-tighter">Amplify Your <br />Search Reach</h2>
                         <p className="text-xs md:text-sm font-bold text-black/60 leading-relaxed uppercase tracking-widest mb-8 md:mb-10 max-w-sm">
                            Strategic neural indexing has increased our 2026 visibility by 440% across Kerala and the UAE market.
                         </p>
                          <button 
                            onClick={handleRefreshSEO}
                            disabled={isRefreshing}
                            className="h-14 md:h-16 w-full rounded-xl md:rounded-2xl bg-black text-primary-accent text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-transform shadow-2xl active:scale-95 disabled:opacity-75"
                          >
                             {isRefreshing ? "Calibrating..." : "Execute Global Update"} <RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />
                          </button>
                         <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <Search size={200} />
                         </div>
                      </div>

                      <div className="p-8 md:p-10 bg-zinc-900 border border-white/5 rounded-[2.5rem] md:rounded-[4rem]">
                         <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6 md:mb-8 flex items-center gap-3">
                            <Lightbulb size={16} className="text-primary-accent" /> Action Plan_
                         </h3>
                         <div className="space-y-4 md:space-y-6">
                            {[
                               "Synchronize metadata for Kerala / UAE regions.",
                               "Accelerate image-to-neural pipeline speed.",
                               "Optimize service pages for Lacrispo brand terms.",
                               "Deep-index 2026 industry authority articles."
                            ].map((tip, i) => (
                              <div key={i} className="flex gap-4 text-[11px] md:text-[13px] font-bold uppercase tracking-tight text-zinc-400 group cursor-default">
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
                  className="space-y-6 md:space-y-10"
                >
                   <div className="p-8 md:p-12 bg-zinc-900 border border-white/5 rounded-[2.5rem] md:rounded-[4rem]">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-16 gap-6">
                         <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">MARKET_INSIGHTS_RADAR</h2>
                         <div className="flex items-center gap-6 md:gap-10 text-[9px] md:text-[11px] font-mono tracking-widest text-zinc-600 uppercase">
                            <span className="flex items-center gap-2"><Gauge size={14} /> High Demand</span>
                            <span className="flex items-center gap-2"><LineChart size={14} /> Peak Signal</span>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                         <div className="space-y-8 md:space-y-10">
                            {[
                              { label: "Lacrispo Branding", val: "94%", trend: "Critical" },
                              { label: "Cinematic Virtual Prod", val: "68%", trend: "Growing" },
                              { label: "Performance Video Ads", val: "96%", trend: "Critical" },
                              { label: "Neural Brand Films", val: "54%", trend: "Scaling" }
                            ].map((m, i) => (
                              <div key={i} className="space-y-4">
                                 <div className="flex justify-between items-center">
                                    <span className="text-[12px] md:text-sm font-black uppercase tracking-widest text-white">{m.label}</span>
                                    <span className={cn("text-[9px] font-black uppercase tracking-widest", m.trend === 'Critical' ? 'text-primary-accent' : 'text-zinc-500')}>{m.trend}</span>
                                 </div>
                                 <div className="h-4 md:h-6 w-full bg-white/5 rounded-xl md:rounded-2xl relative overflow-hidden flex items-center px-4 border border-white/5">
                                    <motion.div 
                                       initial={{ width: 0 }}
                                       animate={{ width: m.val }}
                                       transition={{ duration: 1.5, delay: i * 0.1 }}
                                       className="h-1.5 md:h-2 bg-primary-accent rounded-full shadow-[0_0_10px_var(--primary-accent)]" 
                                    />
                                 </div>
                              </div>
                            ))}
                         </div>
                         <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-black/40 border border-white/5 flex flex-col justify-center items-center text-center">
                            <Target className="w-10 h-10 md:w-12 md:h-12 text-primary-accent mb-6 md:mb-8" />
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4">Strategic Targeting_</h3>
                            <p className="text-[11px] md:text-sm font-bold text-zinc-500 uppercase tracking-widest leading-loose mb-8 md:mb-10 max-w-sm">
                               Global intent for Lacrispo and 'Cinematic AI' is peaking. Redirecting creative nodes to capture high-stakes ad production.
                            </p>
                             <Link 
                                href="/contact"
                                className="h-14 md:h-16 px-10 rounded-xl md:rounded-2xl bg-white text-black text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-xl flex items-center justify-center"
                             >
                                Initiate Campaign_
                             </Link>
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
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10"
                >
                   {/* GLOBAL REACH */}
                   <div className="lg:col-span-2 p-8 md:p-12 bg-zinc-900 border border-white/5 rounded-[2.5rem] md:rounded-[4rem] h-[500px] md:h-[600px] flex flex-col">
                      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 md:mb-10">GLOBAL_PRESENCE_MAP</h2>
                      <div className="flex-1 border border-white/10 rounded-[2rem] md:rounded-[3rem] bg-black/50 relative overflow-hidden group shadow-inner">
                         {/* SIMULATED GRID */}
                         <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none opacity-40">
                            {Array(144).fill(0).map((_, i) => (
                              <div key={i} className="border-[0.5px] border-white/5" />
                            ))}
                         </div>
                         {/* ACTIVE REGIONS PULSE */}
                         <AnimatePresence>
                           {Array(8).fill(0).map((_, i) => (
                             <motion.div
                               key={i}
                               animate={{ 
                                 opacity: [0, 1, 0],
                                 scale: [0.5, 1.2, 0.5],
                                 x: [Math.random() * 800, Math.random() * 800],
                                 y: [Math.random() * 400, Math.random() * 400]
                               }}
                               transition={{ duration: 5 + i, repeat: Infinity }}
                               className="absolute h-3 w-3 bg-primary-accent rounded-full blur-sm"
                             />
                           ))}
                         </AnimatePresence>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <Globe className="w-32 h-32 md:w-48 md:h-48 text-zinc-800 opacity-20" />
                            <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[1em] text-zinc-600 absolute w-full left-0 mt-4">WEBSITE_ACTIVE_GLOBALLY</h3>
                         </div>
                      </div>
                   </div>

                   {/* LIVE LOG STREAM */}
                   <div className="p-8 md:p-10 bg-zinc-900 border border-white/5 rounded-[2.5rem] md:rounded-[4rem] flex flex-col h-[500px] md:h-auto">
                      <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-white/5">
                         <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-primary-accent">System Activity v6.0</span>
                         <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse shadow-[0_0_10px_var(--primary-accent)]" />
                      </div>
                      <div className="flex-1 font-mono text-[9px] md:text-[11px] text-zinc-500 space-y-3 overflow-y-auto no-scrollbar bg-black/30 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 shadow-inner">
                         {logs.map((log, i) => (
                           <motion.div 
                             key={i} 
                             initial={{ opacity: 0, x: -10 }}
                             animate={{ opacity: 1, x: 0 }}
                             className="truncate flex gap-3"
                           >
                              <span className="text-zinc-800">#</span> {log}
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
      <footer className="container mx-auto px-6 md:px-12 mt-16 md:mt-20 pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[9px] md:text-[10px] text-zinc-700 uppercase tracking-[0.3em] relative z-10 text-center md:text-left">
         <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <span className="flex items-center justify-center md:justify-start gap-3"><Activity size={12} className="text-primary-accent" /> PERFORMANCE: STABLE_L1</span>
            <span className="flex items-center justify-center md:justify-start gap-3"><Database size={12} /> DATABASE: ENCRYPTED_V6</span>
         </div>
         <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center">
            <span className="text-zinc-800">NODE_ID: DP-SEC-77821</span>
            <span className="text-primary-accent animate-pulse italic tracking-widest">NEURAL_SYNC_ACTIVE_2026</span>
         </div>
      </footer>

      {/* FIXED CORNER ACCENTS */}
      <div className="fixed top-28 left-6 md:left-10 w-16 md:w-24 h-16 md:h-24 border-t border-l border-white/5 pointer-events-none opacity-40 z-0" />
      <div className="fixed bottom-6 md:bottom-10 right-6 md:right-10 w-16 md:w-24 h-16 md:h-24 border-b border-r border-white/5 pointer-events-none opacity-40 z-0" />
    </main>
  );
}

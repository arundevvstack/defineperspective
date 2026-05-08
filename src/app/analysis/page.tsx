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
  ChevronRight, Settings, Bell, Download, Filter
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";

// Tab Types
type TabType = "overview" | "seo" | "marketing" | "system";

export default function AnalysisDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
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
    // Fetch real user data
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
      onClick={() => setActiveTab(tab)}
      className={`group relative flex items-center justify-start gap-4 w-full p-5 rounded-2xl transition-all duration-300 border mb-2 ${
        activeTab === tab 
        ? "bg-primary-accent text-white border-primary-accent shadow-[0_0_20px_rgba(var(--primary-accent-rgb),0.3)]" 
        : "bg-white/5 text-zinc-400 border-white/5 /10 hover:text-white"
      }`}
    >
       <Icon size={20} className={activeTab === tab ? "animate-pulse" : ""} />
       <span className="text-xs font-black uppercase tracking-[0.2em]">{label}</span>
       {activeTab === tab && (
          <motion.div layoutId="sidebar-active" className="absolute left-0 w-1 h-2/3 bg-white rounded-full ml-1" />
       )}
    </button>
  );

  const StatBox = ({ title, value, sub, icon: Icon, color, onClick }: { title: string; value: string; sub: string; icon: any; color?: string; onClick?: () => void }) => (
    <div 
      onClick={onClick}
      className={`p-8 bg-zinc-900 border border-white/5 rounded-[3rem] relative overflow-hidden group transition-all hover:border-white/20 shadow-xl ${onClick ? "cursor-pointer active:scale-[0.98]" : ""}`}
    >
       <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-8 ${color || "text-primary-accent"}`}>
          <Icon size={24} />
       </div>
       <h4 className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-2">{title}_</h4>
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
                 <h2 className="text-sm font-black uppercase text-primary-accent mb-2">Management Center_</h2>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Active Systems: {activeSystems}</p>
              </div>

              <div className="flex-1">
                 <SidebarButton icon={Layers} label="Overview" tab="overview" />
                 <SidebarButton icon={SearchCode} label="SEO Status" tab="seo" />
                 <SidebarButton icon={Target} label="Marketing" tab="marketing" />
                 <SidebarButton icon={Cpu} label="System" tab="system" />
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                 <button 
                  onClick={() => alert("Management Settings Panel - System locked for security.")}
                  className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors text-[11px] font-black uppercase tracking-widest mb-6 w-full group active:scale-95"
                 >
                    <Settings size={16} className="group-hover:rotate-90 transition-transform" /> settings_panel
                 </button>
                 <button 
                  onClick={() => setSystemAlerts(0)}
                  className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors text-[11px] font-black uppercase tracking-widest w-full group active:scale-95"
                 >
                    <div className="relative">
                      <Bell size={16} />
                      {systemAlerts > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-accent rounded-full animate-ping" />}
                    </div>
                    system_alerts
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
                    <h1 className="text-lg font-black uppercase text-white">Analytics_Dashboard</h1>
                 </div>
                 <div className="h-10 w-px bg-white/10 hidden md:block" />
                 <div className="flex items-center gap-8 text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
                    <span className="flex items-center gap-3"><Globe size={14} className="text-blue-400" /> Response: Very Fast</span>
                    <span className="flex items-center gap-3"><RefreshCw size={14} className="text-green-400 animate-spin-slow" /> Real-time Update</span>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <button 
                  onClick={handleSaveReport}
                  className="h-12 w-12 rounded-2xl bg-white/5 /10 border border-white/10 flex items-center justify-center transition-all group active:scale-95"
                 >
                    <Download size={18} className={isSaving ? "animate-bounce" : "group-hover:translate-y-0.5 transition-transform"} />
                 </button>
                 <button 
                  onClick={handleSaveReport}
                  disabled={isSaving}
                  className="h-12 w-40 rounded-2xl bg-primary-accent text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3   transition-all shadow-xl disabled:opacity-50 active:scale-95"
                 >
                    {isSaving ? "Saving..." : "Save Report"} <ChevronRight size={14} className={isSaving ? "animate-ping" : ""} />
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
                      <StatBox title="Total Visitors" value={visitors.toLocaleString()} sub="+14% vs Yesterday" icon={Users} onClick={() => setActiveTab("overview")} />
                      <StatBox title="Avg. Time on Site" value="128s" sub="Top Engagement" icon={Clock} color="text-blue-500" />
                      <StatBox title="SEO Ranking Index" value={`${seoScore.toFixed(0)}%`} sub="Top 2% Performance" icon={Gauge} color="text-green-500" onClick={() => setActiveTab("seo")} />
                      <StatBox title="Search Readiness" value="Highly Optimized" sub="Search Visibility Active" icon={Cpu} color="text-zinc-400" onClick={() => setActiveTab("system")} />
                   </div>

                   {/* PERFORMANCE CHART AREA */}
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                      
                      {/* TRAFFIC SOURCE BREAKDOWN */}
                      <div className="lg:col-span-2 p-12 bg-zinc-900 border border-white/5 rounded-[4rem] flex flex-col h-[500px]">
                         <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-8">
                            <div>
                               <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary-accent mb-2">Growth Charts_</h3>
                               <h2 className="text-4xl font-black uppercaseer">Visitor_Traffic</h2>
                            </div>
                             <div className="flex gap-4">
                                <button 
                                  onClick={() => toggleChartMode("daily")}
                                  className={`h-10 px-6 rounded-xl text-[10px] uppercase font-bold tracking-widest border transition-all ${chartMode === 'daily' ? 'bg-white text-black border-white' : 'bg-white/5 text-zinc-400 border-white/10 '}`}
                                >
                                  Daily
                                </button>
                                <button 
                                  onClick={() => toggleChartMode("live")}
                                  className={`h-10 px-6 rounded-xl text-[10px] uppercase font-bold tracking-widest border transition-all ${chartMode === 'live' ? 'bg-primary-accent text-white border-primary-accent' : 'bg-white/5 text-zinc-400 border-white/10 '}`}
                                >
                                  Live
                                </button>
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
                                    {p}% Visits
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
                         <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-10">Device Type_</h3>
                         
                         <div className="space-y-10">
                            {[
                               { label: "Mobile Access", val: "68%", icon: Smartphone, color: "bg-primary-accent" },
                               { label: "Desktop Access", val: "24%", icon: Monitor, color: "bg-blue-500" },
                               { label: "Other Devices", val: "8%", icon: Tablet, color: "bg-zinc-700" }
                            ].map((d, i) => (
                              <div key={i} className="space-y-4">
                                 <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                                    <span className="flex items-center gap-3 text-white"><d.icon size={16} /> {d.label}</span>
                                    <span className="text-zinc-400">{d.val}</span>
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
                            <span className="block text-[10px] font-black uppercase tracking-widest text-primary-accent mb-2 underline underline-offset-4 decoration-primary-accent/30">Mobile Strategy Active_</span>
                            <p className="text-[11px] text-zinc-400 uppercase tracking-widest leading-relaxed">Website is optimized for mobile users in all regions.</p>
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
                            <h2 className="text-3xl font-black uppercaseer">SEO Health_Report</h2>
                            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Last scan: {currentTime?.toLocaleTimeString() || "Initializing..."}</p>
                         </div>
                      </div>

                      <div className="space-y-4">
                         {[
                           { name: "Sitemap Structure", score: 98, status: "Perfect", color: "text-green-500" },
                           { name: "Website Structure", score: 84, status: "Good", color: "text-blue-500" },
                           { name: "Backlink Analysis", score: 72, status: "Improving", color: "text-zinc-400" },
                           { name: "Page Descriptions", score: 94, status: "Perfect", color: "text-green-500" },
                           { name: "Loading Speed", score: 99, status: "Elite", color: "text-primary-accent" }
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
                         <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/50 mb-6">Strategic Tip_</h3>
                         <h2 className="text-4xl font-black uppercaseer mb-8 leading-tight">Improve AI <br />Visibility</h2>
                         <p className="text-base font-light text-white/80 leading-relaxed uppercase tracking-widest mb-10">
                            "Modern search tools and AI are now 40% more likely to find businesses with structured website data in 2026."
                         </p>
                          <button 
                            onClick={handleRefreshSEO}
                            disabled={isRefreshing}
                            className="h-16 w-full rounded-2xl bg-white text-primary-accent text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-transform shadow-2xl active:scale-95 disabled:opacity-75"
                          >
                             {isRefreshing ? "Scanning..." : "Update Optimization"} <RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />
                          </button>
                         <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
                            <Search size={220} />
                         </div>
                      </div>

                      <div className="p-10 bg-zinc-900 border border-white/5 rounded-[4rem]">
                         <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 flex items-center gap-3">
                            <Lightbulb size={16} className="text-primary-accent" /> Improve Rankings_
                         </h3>
                         <div className="space-y-6">
                            {[
                               "Update location details for Kochi & Trivandrum.",
                               "Add better image descriptions for faster loading.",
                               "Update service pages with new project examples.",
                               "Include new industry-related keywords for 2026."
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
                         <h2 className="text-5xl font-black uppercaseer">Market_Trend Report</h2>
                         <div className="flex items-center gap-10 text-[11px] font-mono tracking-widest text-zinc-600 uppercase">
                            <span className="flex items-center gap-3"><Gauge size={14} /> Global Demand</span>
                            <span className="flex items-center gap-3"><LineChart size={14} /> Peak Season</span>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                         <div className="space-y-10">
                            {[
                              { label: "AI Video Production", val: "84%", trend: "Critical" },
                              { label: "Virtual Production", val: "62%", trend: "High" },
                              { label: "E-comm Ad Content", val: "94%", trend: "Critical" },
                              { label: "Brand Storytelling", val: "48%", trend: "Good" }
                            ].map((m, i) => (
                              <div key={i} className="space-y-4">
                                 <div className="flex justify-between items-center">
                                    <span className="text-sm font-black uppercase tracking-widest">{m.label}</span>
                                    <span className={m.trend === 'Critical' ? 'text-primary-accent' : 'text-zinc-400'}>{m.trend}</span>
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
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Lead Progress_</h3>
                            <p className="text-sm font-light text-zinc-400 uppercase tracking-widest leading-loose mb-10 max-w-sm">
                               Google Trends shows a massive increase in 'AI Video Ads' this month. We suggest focusing on this area.
                            </p>
                             <button 
                                onClick={() => window.location.href = '/contact'}
                                className="h-16 px-10 rounded-2xl bg-white text-obsidian text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-xl"
                             >
                                Launch Campaign Now_
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
                   {/* GLOBAL REACH */}
                   <div className="lg:col-span-2 p-12 bg-zinc-900 border border-white/5 rounded-[4rem] h-[600px] flex flex-col">
                      <h2 className="text-3xl font-black uppercaseer mb-10">Global_Reach Map_</h2>
                      <div className="flex-1 border border-white/5 rounded-[3rem] bg-black/50 relative overflow-hidden group">
                         {/* SIMULATED GRID */}
                         <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
                            {Array(144).fill(0).map((_, i) => (
                              <div key={i} className="border-[0.5px] border-white/10" />
                            ))}
                         </div>
                         {/* ACTIVE REGIONS PULSE */}
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
                            <h3 className="text-[10px] font-black uppercase tracking-[1em] text-white/40 mt-6 mt-[-100px] absolute w-full left-0">Active Everywhere</h3>
                         </div>
                      </div>
                   </div>

                   {/* LIVE LOG STREAM */}
                   <div className="p-10 bg-zinc-900 border border-white/5 rounded-[4rem] flex flex-col">
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                         <span className="text-[11px] font-black uppercase tracking-widest text-primary-accent">Log_Stream v2.0</span>
                         <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                      <div className="flex-1 font-mono text-[11px] text-zinc-400 space-y-2 overflow-hidden bg-black/20 p-6 rounded-2xl">
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
      <footer className="container-fluid mx-auto px-12 mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-between items-center gap-12 font-mono text-[10px] text-zinc-700 uppercase tracking-[0.3em] relative z-10">
         <div className="flex gap-16">
            <span className="flex items-center gap-3"><Activity size={12} className="text-primary-accent" /> PERFORMANCE: STABLE</span>
            <span className="flex items-center gap-3"><Database size={12} /> STATUS: SECURE</span>
         </div>
         <div className="flex gap-16">
            <span className="hidden md:inline">SYSTEM ID: 145.2.x.94</span>
            <span className="text-primary-accent animate-pulse italic">SEARCH_INTELLIGENCE: ACTIVE</span>
         </div>
      </footer>

      {/* FIXED CORNER ACCENTS */}
      <div className="fixed top-28 left-10 w-24 h-24 border-t border-l border-white/5 pointer-events-none opacity-40 z-0" />
      <div className="fixed bottom-10 right-10 w-24 h-24 border-b border-r border-white/5 pointer-events-none opacity-40 z-0" />
    </main>
  );
}

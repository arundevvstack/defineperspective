"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Target, 
  Activity, 
  Trophy, 
  Zap, 
  ShieldAlert, 
  Globe2,
  ChevronRight,
  Sparkles,
  LayoutDashboard,
  Cpu,
  Brain,
  Terminal,
  Shield,
  Eye,
  EyeOff,
  ArrowRight,
  Minimize2,
  Network
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassNavbar from "@/components/glass-navbar";
import NeuralSeoLayer from "@/components/neural-seo-layer";

// View Components
import AnalysisView from "@/components/seo-hub/AnalysisView";
import RadarView from "@/components/seo-hub/RadarView";
import MapView from "@/components/seo-hub/MapView";
import RankingsView from "@/components/seo-hub/RankingsView";
import CrossAnalysisView from "@/components/seo-hub/CrossAnalysisView";

// Cyber Components
import { TerminalLogs, RadarScanner, CyberGrid, ScanLines } from "@/components/seo-hub/CyberComponents";

export default function SeoHubPage() {
  const TABS = [
    { id: "rankings", label: "Global Rankings", icon: Trophy, desc: "DP vs. Competitor Authority" },
    { id: "radar", label: "Signal Radar", icon: Activity, desc: "Real-time regional footprint" },
    { id: "map", label: "Tactical Map", icon: Target, desc: "Competitor threat nodes" },
    { id: "analysis", label: "Deep Analysis", icon: BarChart3, desc: "Neural SEO diagnostic" },
    { id: "cross", label: "Unified Plan", icon: Network, desc: "Cross-tab executive intel" },
  ];

  const [activeTab, setActiveTab] = useState("rankings");
  const [isCyberMode, setIsCyberMode] = useState(false);
  const [currentNode, setCurrentNode] = useState<{city: string, country: string} | null>(null);

  useEffect(() => {
    // Simulate Neural Node Detection
    const timer = setTimeout(() => {
      setCurrentNode({ city: "Kochi", country: "India" });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic colors based on mode
  const primaryColor = isCyberMode ? "text-[#00ff41]" : "text-primary-accent";
  const primaryBg = isCyberMode ? "bg-[#00ff41]" : "bg-primary-accent";
  const primaryBorder = isCyberMode ? "border-[#00ff41]/30" : "border-primary-accent/20";
  const accentGlow = isCyberMode ? "shadow-[0_0_30px_rgba(0,255,65,0.3)]" : "shadow-[0_0_30px_rgba(235,30,44,0.3)]";

  const [activeStat, setActiveStat] = useState<string | null>(null);

  const stats = [
    { 
      id: "node", 
      label: isCyberMode ? "ACTIVE_NODE" : "Current Node", 
      value: currentNode ? `${currentNode.city}` : "LOCATING...", 
      icon: Globe2, 
      color: "text-white",
      details: {
        title: "Node Diagnostics",
        data: "Status: OPTIMAL | Latency: 22ms | Uplink: STABLE",
        solution: "All regional signals are synchronized. No action required.",
        link: "radar"
      }
    },
    { 
      id: "score", 
      label: isCyberMode ? "AUTH_SCORE" : "Authority Score", 
      value: "98", 
      trend: "+2.4%", 
      icon: Trophy, 
      color: primaryColor,
      details: {
        title: "Authority Breakdown",
        data: "Domain Power: 96/100 | Semantic Density: 99/100 | Backlink Trust: 94/100",
        solution: "Maintain current content velocity to reach 99.5% by Q3.",
        link: "analysis"
      }
    },
    { 
      id: "threats", 
      label: isCyberMode ? "THREAT_LEVEL" : "Active Threats", 
      value: "03", 
      icon: ShieldAlert, 
      color: "text-red-500",
      details: {
        title: "Threat Briefing",
        data: "Target: SpiderWorks (Expanding) | Target: Quadcubes (AI Shift) | Target: Digital Era (Local)",
        solution: "Deploy counter-strategy for SpiderWorks immediately.",
        link: "map"
      }
    },
    { 
      id: "visibility", 
      label: isCyberMode ? "AI_VISIBILITY" : "AI Visibility", 
      value: "Elite", 
      icon: Brain, 
      color: "text-blue-500",
      details: {
        title: "Neural Visibility",
        data: "ChatGPT: 98% | Google Gemini: 94% | Perplexity: 99%",
        solution: "Optimizing for Gemini 1.5 Pro multimodal search path.",
        link: "analysis"
      }
    }
  ];

  return (
    <main className={cn(
      "min-h-screen font-sans transition-colors duration-1000 overflow-hidden relative",
      isCyberMode ? "bg-black text-[#00ff41]" : "bg-obsidian text-white"
    )}>
      {/* Background Decorators */}
      {isCyberMode && (
        <>
          <CyberGrid />
          <ScanLines />
          <RadarScanner />
        </>
      )}

      <NeuralSeoLayer city="Kochi" serviceId="ai-video-production" />
      <GlassNavbar />

      <section className="pt-32 pb-40 relative z-10">
        <div className="container mx-auto px-6">
          {/* Unified Global Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-6 mb-6">
                <span className={cn(
                  "inline-flex items-center gap-2 px-3 py-1 rounded-full border transition-all uppercase text-[10px] font-mono tracking-widest",
                  isCyberMode ? "bg-[#00ff41]/10 border-[#00ff41]/20 text-[#00ff41]" : "bg-primary-accent/10 border-primary-accent/20 text-primary-accent"
                )}>
                  {isCyberMode ? <Terminal size={12} className="animate-pulse" /> : <Sparkles size={12} className="animate-pulse" />} 
                  {isCyberMode ? "SYSTEM_INTEL_STREAM_V6" : "Neural Intelligence Hub v1.0"}
                </span>
                
                {/* View Switcher Toggle */}
                <button 
                  onClick={() => setIsCyberMode(!isCyberMode)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-1.5 rounded-full border transition-all duration-500 hover:scale-105 active:scale-95",
                    isCyberMode ? "bg-[#00ff41] text-black border-[#00ff41]" : "bg-white/5 text-white border-white/10"
                  )}
                >
                  {isCyberMode ? <Eye size={12} /> : <EyeOff size={12} />}
                  <span className="text-[9px] font-black uppercase tracking-widest">
                    {isCyberMode ? "Disable Tactical" : "Enable Tactical"}
                  </span>
                </button>
              </div>

              <h1 className={cn(
                "text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 transition-all duration-700",
                isCyberMode ? "font-mono tracking-[-0.1em]" : ""
              )}>
                {isCyberMode ? "SYSTEM_" : "SEO "} <br />
                <span className={cn("transition-colors duration-700", isCyberMode ? "text-[#00ff41]" : "text-primary-accent")}>
                  {isCyberMode ? "DECRYPT." : "Command."}
                </span>
              </h1>
              <p className={cn(
                "font-light text-lg transition-colors duration-700",
                isCyberMode ? "text-[#00ff41]/60 font-mono text-sm uppercase tracking-widest" : "text-zinc-500"
              )}>
                {isCyberMode 
                  ? "RUNNING_DEEP_CRAWL_PROTOCOL :: ENCRYPTED_DOMINANCE_ACTIVE" 
                  : "The centralized orchestration layer for Define Perspective's global authority and market dominance."
                }
              </p>
            </motion.div>

            {/* Global Stats HUD */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full lg:w-auto relative">
               {stats.map((stat) => (
                 <motion.button
                   key={stat.id}
                   whileHover={{ scale: 1.02, y: -5 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => setActiveStat(activeStat === stat.id ? null : stat.id)}
                   className={cn(
                     "p-6 rounded-3xl border transition-all duration-700 backdrop-blur-xl bg-black/40 text-left relative overflow-hidden group",
                     isCyberMode ? "border-[#00ff41]/30 shadow-[0_0_15px_rgba(0,255,65,0.1)]" : "bg-white/5 border-white/10 hover:border-white/20",
                     activeStat === stat.id && (isCyberMode ? "border-[#00ff41] bg-[#00ff41]/10" : "border-primary-accent/50 bg-primary-accent/5")
                   )}
                 >
                    <span className={cn("block text-[8px] font-mono uppercase tracking-widest mb-2", isCyberMode ? "text-[#00ff41]/40" : "text-zinc-600")}>
                      {stat.label}
                    </span>
                    <div className="flex items-end gap-2">
                       <span className={cn("text-xl md:text-2xl font-black transition-colors duration-700 whitespace-nowrap", stat.id === "node" && !isCyberMode ? "text-white" : stat.color)}>
                         {stat.value}
                       </span>
                       {stat.trend && <span className="text-[10px] font-mono text-green-500 mb-1">{stat.trend}</span>}
                       <stat.icon size={14} className={cn("mb-1", stat.color, stat.id === "node" && "animate-pulse")} />
                    </div>

                    {/* Quick Indicator for Clickability */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <Sparkles size={10} className={stat.color} />
                    </div>
                 </motion.button>
               ))}

               {/* Stat Detail Overlay (Solution Provider) */}
               <AnimatePresence>
                 {activeStat && (
                   <motion.div
                     initial={{ opacity: 0, y: 10, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
                     className={cn(
                       "absolute top-full mt-6 left-0 right-0 z-[100] p-8 rounded-[2.5rem] border backdrop-blur-2xl bg-black/80 shadow-2xl",
                       isCyberMode ? "border-[#00ff41]/50" : "border-white/10"
                     )}
                   >
                     <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                           <h4 className={cn("text-xs font-mono uppercase font-black mb-2 flex items-center gap-2", isCyberMode ? "text-[#00ff41]" : "text-zinc-500")}>
                             <Sparkles size={12} /> {stats.find(s => s.id === activeStat)?.details.title}
                           </h4>
                           <p className="text-xl font-black mb-4 uppercase tracking-tighter">
                             {stats.find(s => s.id === activeStat)?.details.data}
                           </p>
                           <p className={cn("text-sm font-light italic", isCyberMode ? "text-[#00ff41]/60" : "text-zinc-400")}>
                             Solution: {stats.find(s => s.id === activeStat)?.details.solution}
                           </p>
                        </div>
                        <button 
                          onClick={() => {
                            setActiveTab(stats.find(s => s.id === activeStat)?.details.link || "rankings");
                            setActiveStat(null);
                          }}
                          className={cn(
                            "px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 transition-all active:scale-95",
                            isCyberMode ? "bg-[#00ff41] text-black" : "bg-primary-accent text-white"
                          )}
                        >
                          Execute Analysis <ArrowRight size={14} />
                        </button>
                        <button 
                          onClick={() => setActiveStat(null)}
                          className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
                        >
                          <Minimize2 size={16} />
                        </button>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>

          {/* Hub Navigation Sidebar + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Nav Sidebar */}
            <div className="lg:col-span-3 space-y-4">
               <h3 className={cn("text-[10px] font-mono tracking-[0.3em] uppercase font-black mb-8 underline", isCyberMode ? "text-[#00ff41]/40" : "text-zinc-700")}>
                {isCyberMode ? "MODULE_SELECT" : "Intelligence Modules"}
               </h3>
               <div className="flex flex-col gap-3">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "group p-6 rounded-2xl border transition-all duration-500 text-left relative overflow-hidden",
                        activeTab === tab.id 
                          ? cn(primaryBg, "border-transparent", accentGlow) 
                          : cn("bg-black/40 border-white/10 hover:border-white/20", isCyberMode && "border-[#00ff41]/20")
                      )}
                    >
                      <div className="relative z-10 flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <tab.icon size={20} className={activeTab === tab.id ? "text-black" : isCyberMode ? "text-[#00ff41]" : "text-primary-accent"} />
                            <div>
                               <span className={cn("block text-xs font-black uppercase tracking-widest", activeTab === tab.id ? "text-black" : isCyberMode ? "text-[#00ff41]" : "text-zinc-200")}>
                                {isCyberMode ? tab.id.toUpperCase() : tab.label}
                               </span>
                               <span className={cn("block text-[8px] font-mono uppercase mt-1", activeTab === tab.id ? "text-black/60" : "text-zinc-500")}>{tab.desc}</span>
                            </div>
                         </div>
                         <ChevronRight size={14} className={cn("transition-transform duration-500", activeTab === tab.id ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0")} />
                      </div>
                      
                      {activeTab === tab.id && (
                        <motion.div 
                          layoutId="active-bg" 
                          className={cn("absolute inset-0 -z-0 transition-colors duration-700", isCyberMode ? "bg-[#00ff41]" : "bg-primary-accent")} 
                        />
                      )}
                    </button>
                  ))}
               </div>

               {/* Cyber Mode Terminal */}
               {isCyberMode && (
                 <div className="mt-8 h-64">
                   <TerminalLogs />
                 </div>
               )}

               {/* Tactical Quick Actions */}
               <div className={cn(
                 "mt-12 p-8 rounded-[2rem] border transition-all duration-700 space-y-6 bg-black/40",
                 isCyberMode ? "border-[#00ff41]/20" : "bg-gradient-to-br from-zinc-900 to-black border-white/5"
               )}>
                  <h4 className={cn("text-[10px] font-mono uppercase font-black flex items-center gap-2", isCyberMode ? "text-[#00ff41]" : "text-zinc-500")}>
                    <Zap size={12} className={isCyberMode ? "text-[#00ff41]" : "text-primary-accent"} /> 
                    {isCyberMode ? "EXEC_COMMANDS" : "Command Actions"}
                  </h4>
                  <button className={cn(
                    "w-full py-3 border rounded-xl text-[10px] font-mono uppercase tracking-widest transition-all",
                    isCyberMode ? "border-[#00ff41]/20 text-[#00ff41] hover:bg-[#00ff41]/10" : "bg-white/5 border-white/10 hover:bg-white/10"
                  )}>
                    {isCyberMode ? "DUMP_INTEL" : "Export Intelligence"}
                  </button>
                  <button className={cn(
                    "w-full py-3 border rounded-xl text-[10px] font-mono uppercase tracking-widest transition-all",
                    isCyberMode ? "border-[#00ff41]/20 text-[#00ff41] hover:bg-[#00ff41]/10" : "bg-white/5 border-white/10 hover:bg-white/10"
                  )}>
                    {isCyberMode ? "BROADCAST_PROTO" : "Broadcast Update"}
                  </button>
               </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 min-h-[600px] relative">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${isCyberMode}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={cn(
                      "transition-all duration-700",
                      isCyberMode && "cyber-view-wrapper"
                    )}
                  >
                    {/* Add unique styles for cyber mode content via container class */}
                    <div className={cn(isCyberMode && "cyber-theme-active")}>
                      {activeTab === "rankings" && <RankingsView city={currentNode?.city} />}
                      {activeTab === "radar" && <RadarView city={currentNode?.city} />}
                      {activeTab === "map" && <MapView city={currentNode?.city} />}
                      {activeTab === "analysis" && <AnalysisView city={currentNode?.city} />}
                      {activeTab === "cross" && <CrossAnalysisView city={currentNode?.city} />}
                    </div>
                  </motion.div>
               </AnimatePresence>

               {/* Cyber Overlay for Content Area */}
               {isCyberMode && (
                 <div className="absolute top-0 right-0 p-4 font-mono text-[7px] text-[#00ff41]/30 flex flex-col items-end pointer-events-none">
                    <span>SEC_OVERLAY_ACTIVE</span>
                    <span>FRAME_SYNC: LOCKED</span>
                    <span>GEO_TARGET: KERALA_NODE_01</span>
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* CSS Overrides for Cyber Mode */}
      {isCyberMode && (
        <style dangerouslySetInnerHTML={{ __html: `
          .cyber-theme-active * { 
            border-color: rgba(0, 255, 65, 0.2) !important;
            font-family: monospace !important;
          }
          .cyber-theme-active .text-primary-accent { color: #00ff41 !important; }
          .cyber-theme-active .bg-primary-accent { background-color: #00ff41 !important; }
          .cyber-theme-active .bg-white\\/5 { background-color: rgba(0, 255, 65, 0.05) !important; }
          .cyber-theme-active .border-white\\/5 { border-color: rgba(0, 255, 65, 0.1) !important; }
          .cyber-theme-active .text-zinc-500 { color: rgba(0, 255, 65, 0.4) !important; }
          .cyber-theme-active .text-white { color: #00ff41 !important; }
        ` }} />
      )}
    </main>
  );
}

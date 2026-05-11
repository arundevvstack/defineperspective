"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, 
  Activity, 
  Trophy, 
  Zap, 
  ShieldAlert, 
  ChevronRight,
  Sparkles,
  LayoutDashboard,
  Brain,
  Terminal,
  ArrowRight,
  Minimize2,
  Video,
  PenLine,
  Search,
  Globe,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import NeuralSeoLayer from "@/components/neural-seo-layer";

// View Components
import MapView from "@/components/seo-hub/MapView";
import RankingsView from "@/components/seo-hub/RankingsView";
import YouTubeSyncView from "@/components/seo-hub/YouTubeSyncView";
import NeuralEditorView from "@/components/seo-hub/NeuralEditorView";
import LeadMagnetHubView from "@/components/seo-hub/LeadMagnetHubView";
import TacticalFeed from "@/components/seo-hub/TacticalFeed";
import ScanResultsModal from "@/components/seo-hub/ScanResultsModal";

export default function SeoHubPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("intelligence");
  const [activeNode, setActiveNode] = useState("Kochi, IN");
  const [isScanning, setIsScanning] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);
  const [scanResults, setScanResults] = useState<any[]>([]);

  const [globalStatus, setGlobalStatus] = useState("Ready: Waiting for command...");

  // Executive Route Guard
  useEffect(() => {
    const auth = localStorage.getItem("dp_studio_auth");
    if (auth !== "authorized") {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("dp_studio_auth");
    setGlobalStatus("Terminating Session...");
    setTimeout(() => router.push("/login"), 500);
  };

  const LOCATIONS = [
    "Kochi, IN",
    "Trivandrum, IN",
    "Bangalore, IN",
    "Mumbai, IN",
    "Chennai, IN",
    "Dubai, UAE",
    "London, UK",
    "Global"
  ];

  const runNeuralScan = async () => {
    setIsScanning(true);
    setGlobalStatus(`Scanning: Finding market opportunities in ${activeNode}...`);
    setShowScanModal(true);
    try {
      const res = await fetch(`/api/seo/analyze-gaps?node=${activeNode}`);
      const data = await res.json();
      setScanResults(data.trends || []);
      setGlobalStatus(`Success: Found ${data.trends?.length || 0} gaps in ${activeNode}.`);
    } catch (err) {
      console.error("Scan Error:", err);
      setGlobalStatus("Error: Could not complete scan.");
    } finally {
      setIsScanning(false);
    }
  };

  const TABS = [
    { id: "intelligence", label: "Market Insights", icon: Brain, desc: "Competitors & Trends" },
    { id: "rankings", label: "Rankings", icon: Trophy, desc: "Search Authority & Links" },
    { id: "editor", label: "Content Editor", icon: PenLine, desc: "Drafting & Publishing" },
    { id: "leads", label: "Leads & Growth", icon: Target, desc: "Lead Magnets & CRM" },
    { id: "sync", label: "Media Sync", icon: Video, desc: "YouTube Integration" },
  ];

  return (
    <main className="min-h-screen bg-obsidian text-white relative overflow-hidden font-sans">
      <NeuralSeoLayer />

      <ScanResultsModal 
        isOpen={showScanModal} 
        onClose={() => setShowScanModal(false)} 
        results={scanResults}
        isScanning={isScanning}
      />

      {/* Main Workspace: Full Width */}
      <section className="pt-10 pb-10 px-6 lg:px-10 h-screen flex flex-col gap-6">
        
        {/* Top Command Bar */}
        <header className="flex flex-col xl:flex-row items-center justify-between gap-8 p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shrink-0">
           <div className="flex items-center gap-8">
              <div className="space-y-1">
                 <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-primary-accent rounded-lg flex items-center justify-center font-black text-black tracking-tighter">DP</div>
                    <span className="text-xl font-blacker uppercase italic tracking-tighter leading-none">STUDIO_</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-accent animate-pulse" />
                    <p className="text-[9px] font-mono text-primary-accent uppercase tracking-widest leading-none">AI System Online</p>
                 </div>
              </div>
              <div className="h-10 w-[1px] bg-white/10 hidden xl:block" />
              
              {/* Horizontal Module Select */}
              <nav className="flex items-center gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/5">
                 {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "relative flex items-center gap-3 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all group",
                        activeTab === tab.id 
                          ? "bg-primary-accent text-black shadow-lg shadow-primary-accent/20" 
                          : "text-zinc-500 hover:text-white hover:bg-white/5"
                      )}
                    >
                       <tab.icon size={16} className={cn("transition-transform group-hover:scale-110", activeTab === tab.id ? "text-black" : "text-zinc-600 group-hover:text-primary-accent")} />
                       <span className="hidden md:block">{tab.label}</span>
                       {activeTab === tab.id && (
                          <motion.div layoutId="tab-glow" className="absolute inset-0 bg-primary-accent blur-xl opacity-20 -z-10" />
                       )}
                    </button>
                 ))}
              </nav>
           </div>

           <div className="flex items-center gap-8">
              <div className="hidden 2xl:flex items-center gap-8">
                 <div className="text-right">
                    <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Global Authority</span>
                    <span className="text-lg font-black text-primary-accent">98.4%</span>
                 </div>
                 
                 {/* Dynamic Node Selector */}
                 <div className="text-right group">
                    <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Active Node</span>
                    <select 
                      value={activeNode}
                      onChange={(e) => {
                        const newNode = e.target.value;
                        setActiveNode(newNode);
                        setGlobalStatus(`Success: AI Node synced to ${newNode}`);
                      }}
                      className="bg-transparent text-lg font-black text-white outline-none cursor-pointer border-none p-0 m-0 appearance-none hover:text-primary-accent transition-colors"
                    >
                      {LOCATIONS.map(loc => (
                        <option key={loc} value={loc} className="bg-obsidian text-sm">{loc}</option>
                      ))}
                    </select>
                 </div>

                 <div className="text-right">
                    <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Uptime</span>
                    <span className="text-lg font-black text-green-500">99.9%</span>
                 </div>
              </div>
              <button 
                onClick={runNeuralScan}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-primary-accent hover:text-black hover:border-transparent transition-all group"
              >
                 <Search size={16} className="group-hover:scale-110 transition-transform" /> 
                 <span className="hidden sm:block">Scan for Gaps</span>
              </button>

              <button 
                onClick={handleLogout}
                className="h-14 w-14 bg-white/5 border border-white/10 text-zinc-500 rounded-2xl flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 transition-all group"
                title="Terminate Session"
              >
                 <LogOut size={20} className="group-hover:scale-110 transition-transform" />
              </button>
           </div>
        </header>

        {/* Modular Grid Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
           
           {/* Left Primary Intelligence Panel (7 cols) */}
           <div className="lg:col-span-8 2xl:col-span-9 rounded-[3rem] bg-white/[0.01] border border-white/5 relative overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      className="h-full"
                    >
                       {activeTab === "intelligence" && <MapView setStatus={setGlobalStatus} city={activeNode} />}
                       {activeTab === "rankings" && <RankingsView setStatus={setGlobalStatus} city={activeNode} />}
                       {activeTab === "editor" && <NeuralEditorView setStatus={setGlobalStatus} />}
                       {activeTab === "leads" && <LeadMagnetHubView setStatus={setGlobalStatus} activeNode={activeNode} />}
                       {activeTab === "sync" && <YouTubeSyncView setStatus={setGlobalStatus} setActiveTab={setActiveTab} />}
                    </motion.div>
                 </AnimatePresence>
              </div>

              {/* Bottom Quick-Action Bar for current tab */}
              <div className="h-20 shrink-0 border-t border-white/5 bg-black/40 backdrop-blur-xl flex items-center px-10 justify-between">
                 <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
                    <span className="text-[9px] font-mono text-primary-accent uppercase tracking-widest">{globalStatus}</span>
                 </div>
                 <div className="flex items-center gap-6">
                    <span className="text-[8px] font-mono text-zinc-700 uppercase">Latency: 14ms</span>
                    <span className="text-[8px] font-mono text-zinc-700 uppercase">Buffer: Stable</span>
                 </div>
              </div>
           </div>

           {/* Right Secondary Intelligence Feed (4 cols) */}
           <div className="lg:col-span-4 2xl:col-span-3 flex flex-col gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col gap-6">
                 <div className="flex-1 overflow-hidden">
                    <TacticalFeed />
                 </div>
                 
                 {/* Live Node Stats Panel */}
                 <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-accent flex items-center gap-2">
                       <Zap size={12} /> Node Diagnostics_
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                       {[
                          { l: "Gap Volume", v: "High", c: "text-white" },
                          { l: "Risk Level", v: "Low", c: "text-green-500" },
                          { l: "AI Processing Load", v: "14%", c: "text-white" },
                          { l: "Auth Depth", v: "Max", c: "text-blue-500" }
                       ].map(s => (
                          <div key={s.l} className="p-4 rounded-2xl bg-black/40 border border-white/5">
                             <span className="block text-[8px] font-mono text-zinc-600 uppercase mb-1">{s.l}</span>
                             <span className={cn("text-xs font-black uppercase", s.c)}>{s.v}</span>
                          </div>
                       ))}
                    </div>
                    <div className="pt-4 border-t border-white/5">
                       <p className="text-[9px] text-zinc-500 leading-relaxed uppercase italic">
                          "Market incursion detected in Kerala/Ad-Sector. Counter-strategy drafted and pending review."
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Global Background FX */}
      <div className="fixed top-0 right-0 w-[1200px] h-[1200px] bg-primary-accent/[0.03] blur-[300px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/[0.02] blur-[250px] rounded-full pointer-events-none" />

      <style jsx global>{`
        footer {
          display: none !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(235, 30, 44, 0.2);
        }
      `}</style>
    </main>
  );
}

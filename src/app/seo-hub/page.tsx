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
  Video,
  PenLine,
  Search,
  Globe,
  LogOut,
  GitFork,
  Bot,
  FileSpreadsheet,
  ShieldCheck,
  FileCheck2,
  Cpu,
  Plug,
  Lock,
  BarChart3,
  Database
} from "lucide-react";
import { cn } from "@/lib/utils";
import { logoutAdmin } from "@/app/actions/auth";
import NeuralSeoLayer from "@/components/neural-seo-layer";

// View Components
import MapView from "@/components/seo-hub/MapView";
import RankingsView from "@/components/seo-hub/RankingsView";
import SearchPerformanceView from "@/components/seo-hub/SearchPerformanceView";
import KeywordGapView from "@/components/seo-hub/KeywordGapView";
import RankingDefenceView from "@/components/seo-hub/RankingDefenceView";
import AeoGeoView from "@/components/seo-hub/AeoGeoView";
import ContentPlannerView from "@/components/seo-hub/ContentPlannerView";
import ProtectedAssetsView from "@/components/seo-hub/ProtectedAssetsView";
import ChangeGovernanceView from "@/components/seo-hub/ChangeGovernanceView";
import DataSourcesView from "@/components/seo-hub/DataSourcesView";
import TechnicalSeoView from "@/components/seo-hub/TechnicalSeoView";
import YouTubeSyncView from "@/components/seo-hub/YouTubeSyncView";
import NeuralEditorView from "@/components/seo-hub/NeuralEditorView";
import LeadMagnetHubView from "@/components/seo-hub/LeadMagnetHubView";
import TacticalFeed from "@/components/seo-hub/TacticalFeed";
import ScanResultsModal from "@/components/seo-hub/ScanResultsModal";

export default function SeoHubPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("performance");
  const [activeNode, setActiveNode] = useState("Kochi, IN");
  const [isScanning, setIsScanning] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);
  const [scanResults, setScanResults] = useState<any[]>([]);

  const [globalStatus, setGlobalStatus] = useState("System Ready: Zero-Regression Protection Active");

  const handleLogout = async () => {
    setGlobalStatus("Terminating Session...");
    await logoutAdmin();
    router.push("/login");
  };

  const LOCATIONS = [
    "Kochi, IN",
    "Trivandrum, IN",
    "Bangalore, IN",
    "Mumbai, IN",
    "Delhi NCR, IN",
    "Chennai, IN",
    "Dubai, UAE",
    "Global"
  ];

  const runNeuralScan = async () => {
    setIsScanning(true);
    setGlobalStatus(`Scanning: Identifying verified keyword gaps for ${activeNode}...`);
    setShowScanModal(true);
    try {
      const res = await fetch("/api/seo/analyze-gaps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ node: activeNode }),
      });
      const data = await res.json();
      setScanResults(data.trends || []);
      setGlobalStatus(`Success: Analyzed ${data.trends?.length || 0} gaps for ${activeNode}.`);
    } catch (err) {
      console.error("Scan Error:", err);
      setGlobalStatus("Error: Could not complete gap analysis.");
    } finally {
      setIsScanning(false);
    }
  };

  const PRIMARY_MODULES = [
    { id: "performance", label: "Search Performance", icon: BarChart3, category: "Search Console" },
    { id: "keywords", label: "Keywords & Authority", icon: Trophy, category: "Intelligence" },
    { id: "competitors", label: "Competitors", icon: Brain, category: "Market" },
    { id: "gaps", label: "Keyword Gaps", icon: GitFork, category: "Strategy" },
    { id: "defence", label: "Ranking Defence", icon: ShieldAlert, category: "Protection" },
    { id: "aeo_geo", label: "AEO / LLM Visibility", icon: Bot, category: "AI Search" },
    { id: "planner", label: "Content Planner", icon: FileSpreadsheet, category: "Expansion" },
    { id: "protected", label: "Protected Assets", icon: Lock, category: "Constitution" },
    { id: "governance", label: "Governance & Audit", icon: FileCheck2, category: "Compliance" },
    { id: "technical", label: "Technical SEO", icon: Cpu, category: "Infrastructure" },
    { id: "integrations", label: "Data Sources", icon: Plug, category: "Integrations" },
    { id: "editor", label: "Content Editor", icon: PenLine, category: "Creation" },
    { id: "leads", label: "Leads & CRM", icon: Target, category: "Growth" },
    { id: "sync", label: "Media Sync", icon: Video, category: "YouTube" },
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
      <section className="pt-6 pb-6 px-4 lg:px-8 h-screen flex flex-col gap-4">
        
        {/* Top Command Bar */}
        <header className="flex flex-col xl:flex-row items-center justify-between gap-4 p-4 lg:p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shrink-0">
           <div className="flex items-center gap-6">
              <div className="space-y-1">
                 <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-primary-accent rounded-lg flex items-center justify-center font-black text-black tracking-tighter">DP</div>
                    <span className="text-xl font-blacker uppercase italic tracking-tighter leading-none">SEARCH INTELLIGENCE_</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest leading-none">Authority Guardian Online</p>
                 </div>
              </div>
              <div className="h-10 w-[1px] bg-white/10 hidden xl:block" />
              
              {/* Dynamic Status Badges */}
              <div className="hidden xl:flex items-center gap-6 font-mono text-xs">
                <div>
                  <span className="text-[8px] text-zinc-500 uppercase block">Protected Baseline</span>
                  <span className="font-bold text-white text-[11px]">229 URLs Registered</span>
                </div>
                <div>
                  <span className="text-[8px] text-zinc-500 uppercase block">First-Party Data</span>
                  <span className="font-bold text-emerald-400 text-[11px]">GSC Verified</span>
                </div>
                <div>
                  <span className="text-[8px] text-zinc-500 uppercase block">Simulation Mode</span>
                  <span className="font-bold text-amber-400 text-[11px]">Strictly Zero</span>
                </div>
              </div>
           </div>

           <div className="flex items-center gap-4">
              {/* Node Selector */}
              <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/5 font-mono">
                <span className="text-[9px] text-zinc-500 uppercase">GEO Node:</span>
                <select 
                  value={activeNode}
                  onChange={(e) => {
                    const newNode = e.target.value;
                    setActiveNode(newNode);
                    setGlobalStatus(`Synced to regional corridor ${newNode}`);
                  }}
                  className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer border-none p-0 appearance-none hover:text-primary-accent transition-colors"
                >
                  {LOCATIONS.map(loc => (
                    <option key={loc} value={loc} className="bg-obsidian text-xs">{loc}</option>
                  ))}
                </select>
              </div>

              <button 
                onClick={runNeuralScan}
                className="px-5 py-2.5 bg-primary-accent/10 border border-primary-accent/30 text-primary-accent rounded-xl font-bold uppercase tracking-widest text-[9px] flex items-center gap-2 hover:bg-primary-accent hover:text-black transition-all"
              >
                 <Search size={14} /> 
                 <span>Gap Sweep</span>
              </button>

              <button 
                onClick={handleLogout}
                className="h-10 w-10 bg-white/5 border border-white/10 text-zinc-500 rounded-xl flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 transition-all"
                title="Terminate Session"
              >
                 <LogOut size={16} />
              </button>
           </div>
        </header>

        {/* Horizontal Navigation Ribbon for 14 Core Modules */}
        <div className="overflow-x-auto pb-1 shrink-0">
          <nav className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/5 w-max">
            {PRIMARY_MODULES.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-[9px] font-mono uppercase tracking-wider transition-all whitespace-nowrap",
                  activeTab === tab.id 
                    ? "bg-primary-accent text-black font-bold shadow-lg shadow-primary-accent/20" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                <tab.icon size={13} className={cn(activeTab === tab.id ? "text-black" : "text-zinc-500")} />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Modular Grid Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
           
           {/* Left Primary Intelligence Panel (8 cols on lg, 9 cols on 2xl) */}
           <div className="lg:col-span-8 2xl:col-span-9 rounded-[2.5rem] bg-white/[0.01] border border-white/5 relative overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.01 }}
                      className="h-full"
                    >
                       {activeTab === "performance" && <SearchPerformanceView />}
                       {activeTab === "keywords" && <RankingsView setStatus={setGlobalStatus} city={activeNode} />}
                       {activeTab === "competitors" && <MapView setStatus={setGlobalStatus} city={activeNode} />}
                       {activeTab === "gaps" && <KeywordGapView />}
                       {activeTab === "defence" && <RankingDefenceView />}
                       {activeTab === "aeo_geo" && <AeoGeoView />}
                       {activeTab === "planner" && <ContentPlannerView />}
                       {activeTab === "protected" && <ProtectedAssetsView />}
                       {activeTab === "governance" && <ChangeGovernanceView />}
                       {activeTab === "technical" && <TechnicalSeoView />}
                       {activeTab === "integrations" && <DataSourcesView />}
                       {activeTab === "editor" && <NeuralEditorView setStatus={setGlobalStatus} />}
                       {activeTab === "leads" && <LeadMagnetHubView setStatus={setGlobalStatus} activeNode={activeNode} />}
                       {activeTab === "sync" && <YouTubeSyncView setStatus={setGlobalStatus} setActiveTab={setActiveTab} />}
                    </motion.div>
                 </AnimatePresence>
              </div>

              {/* Bottom Quick-Action Bar for current tab */}
              <div className="h-14 shrink-0 border-t border-white/5 bg-black/40 backdrop-blur-xl flex items-center px-8 justify-between">
                 <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">{globalStatus}</span>
                 </div>
                 <div className="flex items-center gap-6">
                    <span className="text-[8px] font-mono text-zinc-600 uppercase">Provenance: VERIFIED</span>
                    <span className="text-[8px] font-mono text-zinc-600 uppercase">Protection: ACTIVE</span>
                 </div>
              </div>
           </div>

           {/* Right Secondary Intelligence Feed (4 cols on lg, 3 cols on 2xl) */}
           <div className="lg:col-span-4 2xl:col-span-3 flex flex-col gap-4 overflow-hidden">
              <div className="flex-1 overflow-hidden">
                 <TacticalFeed />
              </div>
              
              {/* Verified Node Diagnostics Panel */}
              <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4">
                 <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400 flex items-center gap-2">
                    <ShieldCheck size={12} /> Authority Constitution_
                 </h4>
                 <div className="grid grid-cols-2 gap-3">
                    {[
                       { l: "Protected URLs", v: "229", c: "text-white" },
                       { l: "GSC Queries", v: "305", c: "text-emerald-400" },
                       { l: "Competitors", v: "6 Verified", c: "text-white" },
                       { l: "Autonomous Edits", v: "PROHIBITED", c: "text-red-400" }
                    ].map(s => (
                       <div key={s.l} className="p-3 rounded-xl bg-black/40 border border-white/5">
                          <span className="block text-[8px] font-mono text-zinc-600 uppercase mb-0.5">{s.l}</span>
                          <span className={cn("text-xs font-black uppercase", s.c)}>{s.v}</span>
                       </div>
                    ))}
                 </div>
                 <div className="pt-3 border-t border-white/5">
                    <p className="text-[8px] text-zinc-500 leading-relaxed uppercase">
                       "All existing URLs, slugs, canonicals, and titles are protected under the Zero-Regression Search Constitution."
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Global Background FX */}
      <div className="fixed top-0 right-0 w-[1200px] h-[1200px] bg-primary-accent/[0.02] blur-[300px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-emerald-500/[0.02] blur-[250px] rounded-full pointer-events-none" />

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

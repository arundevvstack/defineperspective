"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, TrendingUp, BarChart3, Target, Globe, 
  Layers, Cpu, Zap, AlertCircle, CheckCircle2, 
  ArrowUpRight, ArrowDownRight, Minus, Maximize2, 
  Activity, ZapOff, Fingerprint, Network, Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
interface SEOKeyword {
  keyword: string;
  position: number;
  change: number;
  volume: string;
  difficulty: number;
  location: string;
}

interface Competitor {
  domain: string;
  overlap: number;
  strength: number;
  status: "aggressive" | "stable" | "fading";
}

interface SEOSuggestion {
  id: string;
  type: "technical" | "content" | "authority";
  msg: string;
  impact: "high" | "med" | "low";
  status: "pending" | "optimizing";
}

// --- Components ---

const RadarScanner = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[80%] h-[80%] border border-cyan-500/20 rounded-full relative animate-pulse">
                <div className="absolute inset-0 border border-cyan-500/10 rounded-full scale-75" />
                <div className="absolute inset-0 border border-cyan-500/5 rounded-full scale-50" />
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-transparent rounded-full"
                />
            </div>
        </div>
    );
};

const KeywordTerminal = ({ keywords }: { keywords: SEOKeyword[] }) => {
  return (
    <div className="flex flex-col h-full font-mono">
      <div className="flex items-center justify-between mb-4 px-2">
        <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">SERP_RANKING_DATABASE</h3>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[8px] text-zinc-500">LIVE_SYNC</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-px">
        {keywords.map((k, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            key={i} 
            className="group flex items-center justify-between p-3 bg-white/5 border-l-2 border-transparent hover:border-cyan-500 hover:bg-cyan-500/10 transition-all cursor-crosshair"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-black text-zinc-300 group-hover:text-cyan-400 transition-colors uppercase">{k.keyword}</span>
              <div className="flex gap-3 text-[7px] text-zinc-600 uppercase tracking-widest">
                <span>VOL: {k.volume}</span>
                <span>DIFF: {k.difficulty}%</span>
                <span>LOC: {k.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-xl font-black text-white tabular-nums">#{k.position}</span>
                <span className={cn(
                  "text-[8px] font-bold flex items-center gap-1",
                  k.change > 0 ? "text-emerald-500" : k.change < 0 ? "text-rose-500" : "text-zinc-500"
                )}>
                  {k.change > 0 ? <ArrowUpRight size={8} /> : k.change < 0 ? <ArrowDownRight size={8} /> : <Minus size={8} />}
                  {Math.abs(k.change)}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CompetitorRadar = ({ competitors }: { competitors: Competitor[] }) => {
    return (
        <div className="flex flex-col h-full relative overflow-hidden">
            <RadarScanner />
            <div className="relative z-10 p-4">
                <h3 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em] mb-6">COMPETITOR_INTERCEPT_RADAR</h3>
                <div className="space-y-4">
                    {competitors.map((c, i) => (
                        <div key={i} className="flex flex-col gap-2 p-3 bg-black/40 border border-white/5 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-rose-500/5 to-transparent pointer-events-none" />
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black text-zinc-300 uppercase italic tracking-tighter">{c.domain}</span>
                                <span className={cn(
                                    "text-[7px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-widest",
                                    c.status === "aggressive" ? "border-rose-500/40 text-rose-500 bg-rose-500/10" :
                                    c.status === "stable" ? "border-cyan-500/40 text-cyan-400 bg-cyan-400/10" :
                                    "border-zinc-500/40 text-zinc-500"
                                )}>
                                    {c.status}
                                </span>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-[7px] text-zinc-600 uppercase">
                                    <span>KEYWORD_OVERLAP</span>
                                    <span>{c.overlap}%</span>
                                </div>
                                <div className="h-1 bg-white/5 w-full">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${c.overlap}%` }}
                                        className="h-full bg-cyan-500/40 shadow-[0_0_10px_rgba(0,229,255,0.3)]" 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const OptimizationProtocols = ({ suggestions }: { suggestions: SEOSuggestion[] }) => {
    return (
        <div className="flex flex-col h-full">
            <h3 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-4">OPTIMIZATION_PROTOCOLS</h3>
            <div className="flex-1 space-y-2 overflow-y-auto custom-scrollbar">
                {suggestions.map((s, i) => (
                    <div key={i} className="p-3 bg-white/5 border border-emerald-500/10 group hover:border-emerald-500/40 transition-all">
                        <div className="flex justify-between items-start mb-2">
                            <span className={cn(
                                "text-[7px] font-bold px-2 py-0.5 rounded uppercase tracking-widest",
                                s.type === "technical" ? "bg-cyan-500/10 text-cyan-400" :
                                s.type === "content" ? "bg-amber-500/10 text-amber-400" :
                                "bg-purple-500/10 text-purple-400"
                            )}>
                                {s.type}
                            </span>
                            <span className={cn(
                                "text-[7px] font-bold uppercase tracking-widest",
                                s.impact === "high" ? "text-rose-500" : "text-zinc-500"
                            )}>
                                IMPACT: {s.impact}
                            </span>
                        </div>
                        <p className="text-[10px] text-zinc-400 font-mono leading-relaxed mb-3">{s.msg}</p>
                        <button className="w-full py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[8px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-black transition-all">
                            EXECUTE_OPTIMIZATION
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SERPMap = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<any>(null);

    useEffect(() => {
        const initMap = async () => {
            if (typeof window === "undefined" || !mapContainerRef.current) return;
            
            try {
                const module = await import('maplibre-gl');
                const maplibregl = module.default || module;

                if (mapRef.current) return;

                mapRef.current = new maplibregl.Map({
                    container: mapContainerRef.current,
                    style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
                    center: [78.9629, 20.5937], // India
                    zoom: 3.5,
                    pitch: 45,
                    bearing: -10,
                    attributionControl: false
                });

                mapRef.current.on('load', () => {
                    // Map loaded
                });

            } catch (error) {
                console.error("Map initialization failed:", error);
            }
        };

        initMap();

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div className="relative w-full h-full bg-black overflow-hidden border border-white/5">
            <div ref={mapContainerRef} className="absolute inset-0 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
            
            {/* Map Overlay Stats */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
                <div className="glass p-3 border-cyan-500/30 bg-black/60">
                    <div className="text-[7px] text-cyan-400 font-mono uppercase tracking-widest mb-1">GLOBAL_VISIBILITY_INDEX</div>
                    <div className="text-2xl font-black text-white tabular-nums">92.4 <span className="text-[10px] text-emerald-500">+1.2%</span></div>
                </div>
            </div>

            <div className="absolute bottom-6 left-6 z-20 flex gap-4">
                 <div className="flex items-center gap-2 px-3 py-1 bg-black/80 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">TOP_3_NODES</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1 bg-black/80 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
                    <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">ACTIVE_TRACKING</span>
                 </div>
            </div>
        </div>
    );
};

// --- Main Page ---

export default function SEOTacticalConsole() {
  const [isBooted, setIsBooted] = useState(false);
  const [keywords] = useState<SEOKeyword[]>([
    { keyword: "AI Video Production Kerala", position: 1, change: 0, volume: "1.2K", difficulty: 45, location: "Global" },
    { keyword: "Best AI TVC India", position: 3, change: 2, volume: "850", difficulty: 62, location: "India" },
    { keyword: "Cinematic AI Ads Kochi", position: 1, change: 0, volume: "450", difficulty: 28, location: "Kerala" },
    { keyword: "AI Commercial Filmmaking", position: 8, change: -1, volume: "2.4K", difficulty: 75, location: "Global" },
    { keyword: "Top AI Video Studio", position: 5, change: 4, volume: "3.1K", difficulty: 82, location: "US/UK" },
    { keyword: "AI Video Automation", position: 12, change: 3, volume: "5.6K", difficulty: 88, location: "Global" },
  ]);

  const [competitors] = useState<Competitor[]>([
    { domain: "ai-media-global.com", overlap: 78, strength: 92, status: "aggressive" },
    { domain: "kerala-visuals.in", overlap: 45, strength: 65, status: "stable" },
    { domain: "nextgen-ads.co", overlap: 32, strength: 58, status: "fading" },
    { domain: "cinematic-neural.io", overlap: 85, strength: 88, status: "aggressive" },
  ]);

  const [suggestions] = useState<SEOSuggestion[]>([
    { id: "1", type: "technical", msg: "Canonical tag mismatch detected on /services/ai-video-production. Protocol mismatch risk.", impact: "high", status: "pending" },
    { id: "2", type: "content", msg: "LSI keyword density for 'Neural Rendering' is below authority threshold (0.8%).", impact: "med", status: "pending" },
    { id: "3", type: "authority", msg: "New backlink opportunity from 'TechCrunch AI Hub'. Domain Authority 92+.", impact: "high", status: "pending" },
  ]);

  if (!isBooted) {
    return (
      <div 
        onClick={() => setIsBooted(true)}
        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono text-cyan-400 cursor-pointer selection:bg-transparent overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-black/20" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 229, 255, .05) 25%, rgba(0, 229, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 229, 255, .05) 75%, rgba(0, 229, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 229, 255, .05) 25%, rgba(0, 229, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 229, 255, .05) 75%, rgba(0, 229, 255, .05) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center gap-12"
        >
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 border border-cyan-500/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-cyan-500/10 rounded-full border-dashed"
            />
            <Search size={72} className="absolute inset-0 m-auto text-cyan-400 animate-pulse" />
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-7xl font-black tracking-[0.4em] uppercase italic text-cyan-400 drop-shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              TACTICAL_SEO_CONSOLE
            </h1>
            <p className="text-[10px] md:text-xs opacity-50 tracking-[0.5em] uppercase">Global Search Authority Monitor // DP_AI_NODE_KERALA</p>
          </div>

          <button className="group relative px-16 py-5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_50px_rgba(0,229,255,0.2)] active:scale-95 overflow-hidden">
            <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">INITIALIZE_SEARCH_MATRIX_V6</span>
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-cyan-400 font-mono flex flex-col selection:bg-cyan-500 selection:text-black overflow-hidden h-screen">
      {/* Dynamic Global Styles for Tactical Look */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 229, 255, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 229, 255, 0.5); }
        .glass { background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(0, 229, 255, 0.1); }
        
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        .scanline-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent, rgba(0, 229, 255, 0.05), transparent);
            animation: scanline 8s linear infinite;
            pointer-events: none;
            z-index: 50;
        }
      `}} />

      <div className="scanline-effect" />

      {/* Header HUD */}
      <header className="h-20 border-b border-cyan-500/10 flex items-center justify-between px-8 bg-black/40 backdrop-blur-xl z-40">
        <div className="flex items-center gap-6">
          <div className="h-10 w-10 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <Target size={20} className="text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-black tracking-tighter uppercase text-white">TACTICAL_SEO_CONSOLE_V1</h1>
            <div className="flex gap-4 text-[8px] text-zinc-500 uppercase tracking-widest">
              <span className="flex items-center gap-1"><Globe size={10} /> NODE_INDIA_SOUTH</span>
              <span className="flex items-center gap-1"><Cpu size={10} /> NEURAL_PROCESSOR_ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex gap-12">
            {[
                { label: "DOMAIN_AUTH", val: "42", sub: "+2" },
                { label: "ORGANIC_TRAFFIC", val: "14.5K", sub: "+12%" },
                { label: "RANKING_NODES", val: "1,240", sub: "STABLE" }
            ].map(m => (
                <div key={m.label} className="flex flex-col items-end">
                    <span className="text-[8px] text-zinc-600 uppercase tracking-widest mb-1">{m.label}</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-white tabular-nums">{m.val}</span>
                        <span className="text-[9px] text-emerald-500 font-bold">{m.sub}</span>
                    </div>
                </div>
            ))}
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <main className="flex-1 flex flex-col xl:flex-row overflow-hidden relative">
        
        {/* Left Side: Keywords & Suggestions */}
        <aside className="w-full xl:w-[400px] flex flex-col border-r border-cyan-500/10 bg-black/20 z-10">
            <div className="flex-1 p-6 overflow-hidden flex flex-col gap-8">
                <div className="flex-1 overflow-hidden min-h-[300px]">
                    <KeywordTerminal keywords={keywords} />
                </div>
                <div className="h-[250px] border-t border-cyan-500/10 pt-6">
                    <OptimizationProtocols suggestions={suggestions} />
                </div>
            </div>
        </aside>

        {/* Center: Global Map & Live Feed */}
        <section className="flex-1 flex flex-col relative min-h-[400px]">
            <div className="flex-1 relative">
                <SERPMap />
                
                {/* Tactical Overlays */}
                <div className="absolute top-8 left-8 z-30 pointer-events-none">
                    <div className="flex flex-col gap-1 border-t-2 border-l-2 border-cyan-500/30 p-2 w-20 h-20">
                        <span className="text-[7px] text-zinc-700">COORD_LOCK</span>
                    </div>
                </div>
                <div className="absolute bottom-8 right-8 z-30 pointer-events-none">
                    <div className="flex flex-col items-end justify-end gap-1 border-b-2 border-r-2 border-cyan-500/30 p-2 w-20 h-20">
                        <span className="text-[7px] text-zinc-700">SECURE_SSL</span>
                    </div>
                </div>
            </div>

            {/* Bottom Stream Bar */}
            <div className="h-10 border-t border-cyan-500/10 bg-black/80 flex items-center px-6 overflow-hidden">
                <div className="flex items-center gap-3 bg-cyan-500/10 px-4 h-full border-r border-cyan-500/20">
                    <Activity size={14} className="animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest">LIVE_SERP_SIGNAL</span>
                </div>
                <div className="flex-1 px-6 text-[9px] font-mono text-cyan-400/60 uppercase tracking-widest truncate">
                    // [INTERCEPT] GOOGLE_BOT_CRAWL_DETECTED_ON_PAGE: /top-ai-tvc-production-india // [INDEX_LOCKED] // [RANK_UPDATE]
                </div>
                <div className="hidden md:flex gap-6 text-[8px] text-zinc-600 font-mono uppercase px-4">
                    <span>LATENCY: 14MS</span>
                    <span>PKT_LOSS: 0%</span>
                </div>
            </div>
        </section>

        {/* Right Side: Competitors & Analysis */}
        <aside className="w-full xl:w-96 flex flex-col border-l border-cyan-500/10 bg-black/20 z-10 p-6">
            <div className="flex-1 flex flex-col gap-8">
                <div className="flex-1">
                    <CompetitorRadar competitors={competitors} />
                </div>
                
                {/* Search Intent Module */}
                <div className="p-4 glass border-cyan-500/20 bg-black/60 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-500/20" />
                    <h3 className="text-[9px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                        <Fingerprint size={12} /> INTENT_ANALYZER
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "COMMERCIAL", val: "68%" },
                            { label: "INFORMATIONAL", val: "12%" },
                            { label: "TRANSACTIONAL", val: "15%" },
                            { label: "NAVIGATIONAL", val: "5%" }
                        ].map(i => (
                            <div key={i.label} className="flex flex-col gap-1">
                                <span className="text-[7px] text-zinc-600 uppercase">{i.label}</span>
                                <span className="text-xs font-black text-white tabular-nums">{i.val}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Network Health */}
                <div className="p-4 bg-black/40 border border-white/5 space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-[9px] text-zinc-500 uppercase font-mono tracking-widest">NETWORK_AUTHORITY</span>
                        <Network size={14} className="text-cyan-400" />
                    </div>
                    <div className="flex gap-1 h-8 items-end">
                        {[40, 60, 45, 80, 75, 90, 85, 95, 80, 85, 70, 75, 90].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                className="flex-1 bg-cyan-500/20 border-t border-cyan-500/40"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </aside>

      </main>

      {/* HUD Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  TrendingUp, 
  TrendingDown, 
  Brain, 
  Globe, 
  ArrowUpRight,
  RefreshCcw,
  Radar,
  Search,
  Link as LinkIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const RANKINGS = [
  { rank: 1, name: "Define Perspective (DP)", ai: 98, google: 94, trend: "up" },
  { rank: 2, name: "SpiderWorks (Kochi)", ai: 85, google: 91, trend: "up" },
  { rank: 3, name: "Originative Nest (TVM)", ai: 82, google: 78, trend: "neutral" },
  { rank: 4, name: "Quadcubes (Kochi)", ai: 78, google: 82, trend: "down" },
  { rank: 5, name: "Made in Space (Global)", ai: 72, google: 65, trend: "down" },
  { rank: 6, name: "TechBrains Kochi", ai: 68, google: 74, trend: "up" },
  { rank: 7, name: "Global SEO Dubai", ai: 65, google: 88, trend: "neutral" },
  { rank: 8, name: "Digital Era Calicut", ai: 62, google: 58, trend: "down" },
  { rank: 9, name: "Creative Mindset", ai: 59, google: 72, trend: "up" },
  { rank: 10, name: "Viral Kochi", ai: 55, google: 64, trend: "neutral" },
  { rank: 11, name: "Agency X Bangalore", ai: 52, google: 45, trend: "down" },
  { rank: 12, name: "DeepSearch AI", ai: 48, google: 38, trend: "up" },
  { rank: 13, name: "Pixel Media Kochi", ai: 45, google: 52, trend: "neutral" },
  { rank: 14, name: "Nexus Digital Dubai", ai: 42, google: 61, trend: "up" },
  { rank: 15, name: "The SEO Lab", ai: 38, google: 32, trend: "down" },
];

export default function RankingsView({ city, setStatus }: { city?: string, setStatus?: (s: string) => void }) {
  const [keyword, setKeyword] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResults, setSimResults] = useState<any>(null);
  const [backlinks, setBacklinks] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const fetchBacklinks = async () => {
    setIsScanning(true);
    setStatus?.("Links: Finding growth opportunities...");
    try {
      const res = await fetch('/api/seo/find-backlinks');
      const data = await res.json();
      if (data.opportunities) {
        setBacklinks(data.opportunities);
        setStatus?.(`Success: Found ${data.opportunities.length} potential link targets.`);
      }
    } catch (err) {
      console.error(err);
      setStatus?.("Error: Link scan failed.");
    } finally {
      setIsScanning(false);
    }
  };

  const simulateSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword) return;
    setIsSimulating(true);
    setSimResults(null);
    
    // Simulate a 2s data fetch
    setTimeout(() => {
      setSimResults({
        dp: Math.floor(Math.random() * 15) + 85,
        avg: Math.floor(Math.random() * 20) + 60,
        competitor: RANKINGS[1].name
      });
      setIsSimulating(false);
    }, 2000);
  };

  return (
    <div className="space-y-12">
      {/* Keyword Search Simulator (Real Function) */}
      <section className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary-accent/5 blur-[80px] -z-10" />
         <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="max-w-md">
               <h3 className="text-xl font-black uppercase mb-2">Authority Simulator</h3>
               <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest leading-relaxed">Enter a keyword to simulate real-time authority dominance across traditional and neural networks.</p>
            </div>
            <form onSubmit={simulateSearch} className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative flex-1 md:w-64">
                  <input 
                    type="text" 
                    placeholder="e.g. AI Video Ads"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono focus:border-primary-accent/50 outline-none"
                  />
               </div>
               <button 
                disabled={isSimulating}
                className="px-6 py-3 bg-primary-accent text-white rounded-xl font-black uppercase tracking-widest text-[9px] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
               >
                 {isSimulating ? <RefreshCcw size={14} className="animate-spin" /> : "Check Authority"}
               </button>
            </form>
         </div>

         <AnimatePresence>
           {simResults && (
             <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/5">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                   <span className="text-[8px] font-mono text-zinc-500 uppercase block mb-1">DP Authority for "{keyword}"</span>
                   <div className="text-2xl font-black text-primary-accent">{simResults.dp}%</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                   <span className="text-[8px] font-mono text-zinc-500 uppercase block mb-1">Market Average</span>
                   <div className="text-2xl font-black text-white">{simResults.avg}%</div>
                </div>
                <div className="p-4 rounded-xl bg-primary-accent/10 border border-primary-accent/20">
                   <span className="text-[8px] font-mono text-primary-accent uppercase block mb-1">Top Rival for Node</span>
                   <div className="text-xl font-black text-white truncate">{simResults.competitor}</div>
                </div>
             </motion.div>
           )}
         </AnimatePresence>
      </section>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-4">
          <thead>
            <tr className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              <th className="px-6 py-4">Rank</th>
              <th className="px-6 py-4">Entity</th>
              <th className="px-6 py-4">AI Score</th>
              <th className="px-6 py-4">Google Score</th>
              <th className="px-6 py-4 text-right">Trend</th>
            </tr>
          </thead>
          <tbody>
            {RANKINGS.map((item) => (
              <tr key={item.name} className={cn("bg-white/[0.02] hover:bg-white/[0.05] transition-colors border border-white/5", item.rank === 1 && "bg-primary-accent/5")}>
                <td className="px-6 py-4 first:rounded-l-[2rem]">
                   <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center font-black text-xs">
                     {item.rank}
                   </div>
                </td>
                <td className="px-6 py-4 font-black uppercase tracking-widest text-[11px]">{item.name}</td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-3">
                     <span className="font-black text-xs">{item.ai}</span>
                     <div className="h-1 w-16 bg-white/5 rounded-full overflow-hidden"><motion.div animate={{ width: `${item.ai}%` }} className="h-full bg-blue-500" /></div>
                   </div>
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-3">
                     <span className="font-black text-xs">{item.google}</span>
                     <div className="h-1 w-16 bg-white/5 rounded-full overflow-hidden"><motion.div animate={{ width: `${item.google}%` }} className="h-full bg-primary-accent" /></div>
                   </div>
                </td>
                <td className="px-6 py-4 text-right last:rounded-r-[2rem]">
                   {item.trend === "up" ? <TrendingUp className="text-green-500 ml-auto" size={14}/> : <TrendingDown className="text-red-500 ml-auto" size={14}/>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Backlink Opportunity Radar */}
      <section className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] -z-10" />
         <div className="flex items-center justify-between mb-10">
            <div>
               <h3 className="text-2xl font-blacker uppercase italic tracking-tighter mb-2">Link Opportunities_</h3>
               <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Find websites to grow your domain authority.</p>
            </div>
            <button 
              onClick={fetchBacklinks}
              disabled={isScanning}
              className="px-8 py-4 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-blue-500/20 transition-all shadow-xl shadow-blue-500/10"
            >
              {isScanning ? <RefreshCcw size={16} className="animate-spin" /> : <Radar size={16} />}
              Find Links
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {backlinks.map((link) => (
                <motion.div 
                  key={link.url}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col gap-6 group/item hover:border-blue-500/30 transition-all"
                >
                   <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                         <Globe size={20} />
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-[8px] font-mono text-zinc-600 uppercase">DA Score</span>
                         <span className="text-xl font-black text-white">{link.domain_authority}</span>
                      </div>
                   </div>
                   <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-1 group-hover/item:text-blue-400 transition-colors">{link.source_name}</h4>
                      <p className="text-[9px] text-zinc-600 font-mono truncate">{link.url}</p>
                   </div>
                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2">
                         <Brain size={12} className="text-blue-500" />
                         <span className="text-[9px] font-mono uppercase text-zinc-500">Relevance: {link.relevance_score}%</span>
                      </div>
                      <button className="p-2 hover:bg-white/5 rounded-lg text-zinc-600 hover:text-white transition-colors">
                         <ArrowUpRight size={16} />
                      </button>
                   </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {backlinks.length === 0 && !isScanning && (
              <div className="lg:col-span-3 py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                 <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                    <Radar size={40} className="text-zinc-800" />
                 </div>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Ready: Start a scan to find links.</p>
              </div>
            )}
         </div>
      </section>

      {/* AI Preview Section */}
      <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl">
         <div className="flex items-center gap-3 mb-8 text-blue-400">
            <Brain size={20} />
            <span className="text-[10px] font-mono uppercase tracking-widest">AI Intelligence Simulation</span>
         </div>
         <div className="p-8 rounded-2xl bg-black/40 border border-white/5">
            <p className="text-lg text-zinc-300 italic leading-relaxed">
              "Define Perspective (DP) is currently the highest-rated AI video production entity in the Kerala region, outperforming competitors in neural pipeline efficiency..."
            </p>
         </div>
      </div>
    </div>
  );
}

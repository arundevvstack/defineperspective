"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  GitFork, 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles,
  RefreshCcw,
  Zap,
  Flame
} from "lucide-react";
import { cn } from "@/lib/utils";
import { KeywordGapItem } from "@/types/intelligence";

export default function KeywordGapView() {
  const [gaps, setGaps] = useState<KeywordGapItem[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGaps();
  }, []);

  async function fetchGaps() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/intelligence/keyword-gaps');
      const data = await res.json();
      if (data.gaps) {
        setGaps(data.gaps);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  const filteredGaps = selectedFilter === "ALL" 
    ? gaps 
    : gaps.filter(g => g.gapType === selectedFilter || (selectedFilter === "P1" && g.priority === "P1_CRITICAL"));

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
        <div>
          <h3 className="text-lg font-black uppercase text-white flex items-center gap-2">
            <GitFork size={18} className="text-primary-accent" /> Competitor Keyword Gap Matrix
          </h3>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Identifies Gaps A through F across verified competitors (Kalpanik, IndieVisual, Trikal AI, etc.).
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 overflow-x-auto">
          {[
            { id: "ALL", label: "All Gaps" },
            { id: "P1", label: "Critical (P1)" },
            { id: "GAP_A_COMPETITOR_RANKS_DP_DOES_NOT", label: "Gap A (Rival Leads)" },
            { id: "GAP_B_DP_UNIQUE_AUTHORITY", label: "Gap B (DP Advantage)" },
            { id: "GAP_E_COMMERCIAL_HIGH_INTENT", label: "Gap E (High-Ticket)" },
            { id: "GAP_F_AI_SEARCH_GAP", label: "Gap F (AEO/LLM)" }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[8px] font-mono uppercase tracking-widest whitespace-nowrap transition-colors",
                selectedFilter === f.id ? "bg-primary-accent text-black font-bold" : "text-zinc-500 hover:text-white"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="py-24 text-center text-zinc-500 font-mono text-xs">
          <RefreshCcw size={24} className="animate-spin mx-auto mb-3 text-primary-accent" />
          Loading keyword gap analysis...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGaps.map(gap => (
            <div key={gap.id} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between gap-6 hover:border-white/15 transition-all">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className={cn(
                    "text-[8px] font-mono px-2.5 py-1 rounded-md font-bold uppercase",
                    gap.gapType === 'GAP_B_DP_UNIQUE_AUTHORITY' ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                    gap.gapType === 'GAP_E_COMMERCIAL_HIGH_INTENT' ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                    gap.gapType === 'GAP_F_AI_SEARCH_GAP' ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                    "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  )}>
                    {gap.gapType.replace(/_/g, ' ')}
                  </span>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase">{gap.priority}</span>
                </div>

                <div>
                  <h4 className="text-base font-black uppercase text-white mb-1">{gap.query}</h4>
                  <p className="text-[10px] font-mono text-zinc-400">{gap.searchDemand}</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500 uppercase">DP Status:</span>
                    <span className="text-white font-bold">{gap.dpCurrentStatus}</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500 uppercase">Competitors:</span>
                    <span className="text-primary-accent font-bold">{gap.competitorsObserved.join(', ')}</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500 uppercase">Confidence:</span>
                    <span className="text-emerald-400 font-bold">{(gap.confidenceScore * 100).toFixed(0)}% Evidence Verified</span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase block mb-1">Recommended Action</span>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-white/[0.01] p-3 rounded-xl border border-white/5">
                    {gap.recommendedAction}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                <span>Risk: <strong className={gap.riskLevel === 'LOW' ? 'text-emerald-400' : 'text-amber-400'}>{gap.riskLevel}</strong></span>
                <span>Target: <strong className="text-white">{gap.dpRelevantUrl || 'Existing Hub'}</strong></span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


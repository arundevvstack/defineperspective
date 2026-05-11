"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Network, 
  Sparkles, 
  MessageSquare, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CrossAnalysisProps {
  city?: string;
}

export default function CrossAnalysisView({ city }: CrossAnalysisProps) {
  const [isSyncing, setIsSyncing] = useState(true);
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    // Simulate complex cross-tab data merging
    const timer = setTimeout(() => {
      setReport({
        summary: `You are currently the dominant node in ${city || "the region"}. Your AI Authority is 98%, which is 24% higher than the market average. However, regional signals in the north indicate a 12% rise in competitor activity.`,
        actionPlan: [
          "Double down on 'AI Production' keywords to block SpiderWorks' growth.",
          "Sync your Kochi authority signals with the Dubai hub to expand market reach.",
          "Optimize semantic density for Gemini 1.5 Pro multimodal search."
        ],
        threatLevel: "Low - Defensive stance recommended",
        marketSentiment: "Elite - Define Perspective is the primary reference point."
      });
      setIsSyncing(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [city]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-10 rounded-[3rem] bg-gradient-to-br from-primary-accent/10 to-blue-900/10 border border-white/5 backdrop-blur-3xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8">
            <Network size={40} className="text-primary-accent/20 animate-pulse" />
         </div>
         <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black uppercase mb-4 flex items-center gap-4">
              <Sparkles className="text-primary-accent" /> Neural Cross-Analysis
            </h2>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              This engine merges rankings, regional signals, and threat data into a single, human-readable executive plan. No jargon, just clear tactical direction.
            </p>
         </div>
      </div>

      <AnimatePresence mode="wait">
        {isSyncing ? (
          <motion.div 
            key="sync"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="p-20 flex flex-col items-center justify-center text-center space-y-6"
          >
             <div className="h-16 w-16 border-4 border-primary-accent border-t-transparent animate-spin rounded-full" />
             <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">Cross-referencing regional nodes & threat vectors...</p>
          </motion.div>
        ) : (
          <motion.div 
            key="results"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
             {/* Simple English Summary */}
             <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8 text-primary-accent">
                   <MessageSquare size={18} />
                   <span className="text-[10px] font-mono uppercase tracking-widest font-black">Executive Briefing</span>
                </div>
                <p className="text-xl font-light leading-relaxed text-zinc-200 flex-1 italic">
                  "{report.summary}"
                </p>
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="space-y-1">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase">Market Sentiment</span>
                      <span className="block font-black text-xs text-white uppercase">{report.marketSentiment}</span>
                   </div>
                   <div className="h-10 w-10 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                      <ShieldCheck size={20} />
                   </div>
                </div>
             </div>

             {/* Action Plan */}
             <div className="p-10 rounded-[2.5rem] bg-black/40 border border-white/10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8 text-blue-500">
                   <Target size={18} />
                   <span className="text-[10px] font-mono uppercase tracking-widest font-black">Tactical Action Plan</span>
                </div>
                <div className="space-y-6 flex-1">
                   {report.actionPlan.map((step: string, idx: number) => (
                     <div key={idx} className="flex gap-4 group">
                        <div className="h-6 w-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-500 group-hover:border-primary-accent group-hover:text-primary-accent transition-colors">
                          {idx + 1}
                        </div>
                        <p className="text-sm font-light text-zinc-400 group-hover:text-white transition-colors">{step}</p>
                     </div>
                   ))}
                </div>
                <button className="w-full mt-12 py-4 bg-primary-accent text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary-accent/20">
                  Deploy Full Neural Update <Zap size={14} />
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

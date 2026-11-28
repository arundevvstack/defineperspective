"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileSpreadsheet, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  RefreshCcw,
  BookOpen,
  HelpCircle,
  MapPin,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ContentOpportunityItem } from "@/types/intelligence";

export default function ContentPlannerView() {
  const [opportunities, setOpportunities] = useState<ContentOpportunityItem[]>([]);
  const [selectedOpp, setSelectedOpp] = useState<ContentOpportunityItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  async function fetchOpportunities() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/intelligence/content-planner');
      const data = await res.json();
      if (data.opportunities) {
        setOpportunities(data.opportunities);
        if (data.opportunities.length > 0) {
          setSelectedOpp(data.opportunities[0]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleUpdateStatus = async (id: string, status: ContentOpportunityItem['reviewStatus']) => {
    try {
      const res = await fetch('/api/intelligence/content-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, reviewStatus: status })
      });
      const data = await res.json();
      if (data.opportunity) {
        setOpportunities(prev => prev.map(o => o.id === id ? data.opportunity : o));
        setSelectedOpp(data.opportunity);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans">
      {/* Opportunities List (5 cols) */}
      <div className="lg:col-span-5 space-y-4">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-black uppercase text-white flex items-center gap-2">
              <FileSpreadsheet size={16} className="text-primary-accent" /> Strategic Content Opportunities
            </h3>
            <p className="text-[9px] font-mono text-zinc-500 uppercase">Pre-vetted against 229 existing URLs</p>
          </div>
          <span className="text-[9px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-zinc-400">
            {opportunities.length} Briefs
          </span>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-zinc-500 font-mono text-xs">
            <RefreshCcw size={20} className="animate-spin mx-auto mb-2 text-primary-accent" />
            Loading strategic briefs...
          </div>
        ) : (
          <div className="space-y-3">
            {opportunities.map(opp => (
              <button
                key={opp.id}
                onClick={() => setSelectedOpp(opp)}
                className={cn(
                  "w-full p-5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3",
                  selectedOpp?.id === opp.id
                    ? "bg-primary-accent/10 border-primary-accent/40"
                    : "bg-black/40 border-white/5 hover:border-white/10"
                )}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[8px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 uppercase">
                    {opp.pageType}
                  </span>
                  <span className={cn(
                    "text-[8px] font-mono px-2 py-0.5 rounded font-bold uppercase",
                    opp.reviewStatus === 'APPROVED' ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                    opp.reviewStatus === 'PENDING_HUMAN_APPROVAL' ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                    "bg-white/5 text-zinc-400"
                  )}>
                    {opp.reviewStatus.replace(/_/g, ' ')}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white uppercase line-clamp-1">{opp.topic}</h4>
                  <p className="text-[9px] font-mono text-zinc-500 truncate">{opp.primaryKeyword}</p>
                </div>

                <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500 pt-2 border-t border-white/5">
                  <span>Score: <strong className="text-primary-accent">{opp.opportunityScore.compositeScore}/100</strong></span>
                  <span className="text-emerald-400">Cannibalization: {opp.cannibalizationRisk}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected Opportunity Brief Drilldown (7 cols) */}
      <div className="lg:col-span-7">
        {selectedOpp ? (
          <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
              <div>
                <span className="text-[8px] font-mono text-zinc-500 uppercase block mb-1">
                  Target URL: {selectedOpp.proposedUrl}
                </span>
                <h3 className="text-base font-black uppercase text-white leading-snug">
                  {selectedOpp.topic}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleUpdateStatus(selectedOpp.id, 'APPROVED')}
                  className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 rounded-xl text-[9px] font-mono uppercase font-bold transition-colors"
                >
                  Approve Brief
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedOpp.id, 'PENDING_HUMAN_APPROVAL')}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-zinc-400 hover:text-white rounded-xl text-[9px] font-mono uppercase transition-colors"
                >
                  Request Review
                </button>
              </div>
            </div>

            <div className="space-y-5 text-xs font-mono">
              <div>
                <span className="text-[9px] text-zinc-500 uppercase block mb-1">Primary Keyword & Intent</span>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-white font-bold">{selectedOpp.primaryKeyword}</span>
                  <span className="text-primary-accent text-[9px]">{selectedOpp.searchIntent}</span>
                </div>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 uppercase block mb-1">Editorial Brief & Content Angle</span>
                <p className="text-zinc-300 font-sans leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                  {selectedOpp.contentBrief}
                </p>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 uppercase block mb-2 flex items-center gap-1.5">
                  <HelpCircle size={12} className="text-blue-400" /> AEO Question Blocks (For Perplexity & Gemini Citation)
                </span>
                <div className="space-y-1.5">
                  {selectedOpp.aeoQuestionBlocks.map((q, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-black/50 border border-white/5 text-[9px] text-zinc-300">
                      ● {q}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 uppercase block mb-1 flex items-center gap-1.5">
                  <MapPin size={12} className="text-amber-400" /> GEO Targeting Corridor
                </span>
                <p className="text-zinc-400 text-[10px] bg-black/40 p-2.5 rounded-lg border border-white/5">
                  {selectedOpp.geoStrategy}
                </p>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 uppercase block mb-1">Required First-Party Proof Assets</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedOpp.requiredProofAssets.map(a => (
                    <span key={a} className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] uppercase font-bold">
                      ✓ {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 grid grid-cols-4 gap-2 text-center">
                <div>
                  <span className="text-[8px] text-zinc-600 uppercase block">Search Score</span>
                  <span className="text-sm font-black text-white">{selectedOpp.opportunityScore.searchScore}</span>
                </div>
                <div>
                  <span className="text-[8px] text-zinc-600 uppercase block">Commercial</span>
                  <span className="text-sm font-black text-emerald-400">{selectedOpp.opportunityScore.commercialScore}</span>
                </div>
                <div>
                  <span className="text-[8px] text-zinc-600 uppercase block">AEO Potential</span>
                  <span className="text-sm font-black text-blue-400">{selectedOpp.opportunityScore.aeoGeoScore}</span>
                </div>
                <div>
                  <span className="text-[8px] text-zinc-600 uppercase block">Risk Tier</span>
                  <span className="text-sm font-black text-emerald-400">{selectedOpp.opportunityScore.implementationRisk}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center py-20 text-zinc-600 font-mono text-xs">
            Select a content brief to inspect architecture and AEO question blocks.
          </div>
        )}
      </div>
    </div>
  );
}


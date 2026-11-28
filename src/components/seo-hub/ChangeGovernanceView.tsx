"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FileCheck2, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  AlertTriangle, 
  RefreshCcw,
  ShieldAlert,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChangeGovernanceProposal } from "@/types/intelligence";

export default function ChangeGovernanceView() {
  const [proposals, setProposals] = useState<ChangeGovernanceProposal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProposals();
  }, []);

  async function fetchProposals() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/intelligence/governance');
      const data = await res.json();
      if (data.proposals) {
        setProposals(data.proposals);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAction = async (actionId: string, action: 'APPROVE' | 'REJECT') => {
    try {
      const res = await fetch('/api/intelligence/governance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, actionId })
      });
      const data = await res.json();
      if (data.proposal) {
        setProposals(prev => prev.map(p => p.actionId === actionId ? data.proposal : p));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
        <div>
          <h3 className="text-lg font-black uppercase text-white flex items-center gap-2">
            <FileCheck2 size={18} className="text-primary-accent" /> Change Governance, Baselines & Rollback Audit
          </h3>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Enforces the Zero-Regression Constitution. High-risk optimizations strictly require administrator approval.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono uppercase font-bold">
            Zero Silent High-Risk Changes
          </span>
        </div>
      </div>

      {isLoading ? (
        <div className="py-24 text-center text-zinc-500 font-mono text-xs">
          <RefreshCcw size={24} className="animate-spin mx-auto mb-3 text-primary-accent" />
          Loading governance audit trail...
        </div>
      ) : (
        <div className="space-y-6">
          {proposals.map(prop => (
            <div key={prop.actionId} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "text-[8px] font-mono px-2.5 py-1 rounded-md font-bold uppercase",
                    prop.riskClassification === 'CRITICAL' ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                    prop.riskClassification === 'HIGH' ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  )}>
                    {prop.riskClassification} RISK
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase">{prop.actionType.replace(/_/g, ' ')}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-[9px] font-mono px-2.5 py-1 rounded-md font-bold uppercase",
                    prop.approvalStatus === 'APPROVED' ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                    prop.approvalStatus === 'REJECTED' ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                    "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  )}>
                    {prop.approvalStatus.replace(/_/g, ' ')}
                  </span>

                  {prop.approvalStatus === 'PENDING_REVIEW' && (
                    <div className="flex items-center gap-2 ml-2">
                      <button
                        onClick={() => handleAction(prop.actionId, 'APPROVE')}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-[9px] font-mono uppercase font-bold hover:bg-emerald-500/30 transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(prop.actionId, 'REJECT')}
                        className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-[9px] font-mono uppercase font-bold hover:bg-red-500/30 transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-[8px] text-zinc-500 uppercase block mb-1">Target Asset</span>
                  <span className="text-white font-bold">{prop.targetAsset}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[8px] text-zinc-500 uppercase block">Current Baseline State</span>
                    <p className="text-zinc-300 font-sans text-xs">{prop.originalState}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[8px] text-primary-accent uppercase block">Proposed Optimized State</span>
                    <p className="text-white font-sans text-xs">{prop.proposedState}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500 uppercase">Supporting Evidence:</span>
                    <span className="text-zinc-300 font-sans">{prop.evidence}</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500 uppercase">SEO Impact:</span>
                    <span className="text-emerald-400 font-sans">{prop.seoImpactAssessment}</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500 uppercase">Rollback Method:</span>
                    <span className="text-amber-400 font-mono">{prop.rollbackPlan}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-zinc-600">
                <span>Action ID: {prop.actionId}</span>
                <span>Timestamp: {prop.timestamp.split('T')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


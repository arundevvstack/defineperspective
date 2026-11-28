"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Lock, 
  RefreshCcw,
  ArrowDownRight,
  TrendingDown,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RankingDefenceAlert } from "@/types/intelligence";

export default function RankingDefenceView() {
  const [alerts, setAlerts] = useState<RankingDefenceAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAlerts();
  }, []);

  async function fetchAlerts() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/intelligence/ranking-defence');
      const data = await res.json();
      if (data.alerts) {
        setAlerts(data.alerts);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleUpdateStatus = async (id: string, newStatus: RankingDefenceAlert['status']) => {
    try {
      const res = await fetch('/api/intelligence/ranking-defence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      const data = await res.json();
      if (data.alert) {
        setAlerts(prev => prev.map(a => a.id === id ? data.alert : a));
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
            <ShieldAlert size={18} className="text-amber-400" /> Active Ranking Defence Radar
          </h3>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Early detection of position shifts, CTR decay, and competitor incursions for protected assets.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[9px] font-mono uppercase font-bold">
            {alerts.filter(a => a.status === 'ACTIVE').length} Active Threats
          </span>
        </div>
      </div>

      {isLoading ? (
        <div className="py-24 text-center text-zinc-500 font-mono text-xs">
          <RefreshCcw size={24} className="animate-spin mx-auto mb-3 text-primary-accent" />
          Loading ranking defence radar...
        </div>
      ) : (
        <div className="space-y-6">
          {alerts.map(alert => (
            <div key={alert.id} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6 hover:border-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "text-[8px] font-mono px-2.5 py-1 rounded-md font-bold uppercase",
                    alert.severity === 'CRITICAL' ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                    alert.severity === 'HIGH' ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                    "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  )}>
                    {alert.severity} SEVERITY
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase">{alert.alertType.replace(/_/g, ' ')}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Status:</span>
                  <select
                    value={alert.status}
                    onChange={(e) => handleUpdateStatus(alert.id, e.target.value as any)}
                    className="bg-black/50 border border-white/10 rounded-lg px-3 py-1 text-[9px] font-mono text-white outline-none focus:border-primary-accent"
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INVESTIGATING">INVESTIGATING</option>
                    <option value="ACTION_PROPOSED">ACTION_PROPOSED</option>
                    <option value="RESOLVED">RESOLVED</option>
                    <option value="DISMISSED">DISMISSED</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 space-y-3">
                  <div>
                    <h4 className="text-base font-black uppercase text-white">{alert.keyword}</h4>
                    <p className="text-[10px] font-mono text-zinc-500 truncate">{alert.affectedUrl}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase block">Likely Root Cause</span>
                      <p className="text-zinc-300 font-sans leading-relaxed">{alert.likelyCause}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase block">Proposed Non-Destructive Recovery Action</span>
                      <p className="text-emerald-400 font-sans leading-relaxed">{alert.proposedRecoveryAction}</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col justify-between gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 font-mono text-xs">
                  <div>
                    <span className="text-[8px] text-zinc-500 uppercase block mb-1">Position Tracking</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-amber-400">#{alert.currentPosition.toFixed(1)}</span>
                      <span className="text-zinc-500 text-[10px]">from #{alert.baselinePosition.toFixed(1)} baseline</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[8px] text-zinc-500 uppercase block mb-1">Human Approval Mandate</span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-primary-accent/10 text-primary-accent border border-primary-accent/20 font-bold uppercase">
                      {alert.requiresHumanApproval ? 'EXPLICIT APPROVAL REQUIRED' : 'SAFE AUTONOMOUS SUGGESTION'}
                    </span>
                  </div>

                  <div className="text-[8px] text-zinc-600">
                    Confidence: {(alert.confidence * 100).toFixed(0)}% • Observed: {alert.observedPeriod}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


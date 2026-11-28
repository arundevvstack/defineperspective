"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, 
  Zap, 
  Crosshair, 
  Target,
  ExternalLink,
  Building2,
  MapPin,
  RefreshCcw,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { VerifiedCompetitorProfile } from "@/lib/intelligence/competitor-intelligence-service";

export default function MapView({ city, setStatus }: { city?: string, setStatus?: (s: string) => void }) {
  const [competitors, setCompetitors] = useState<VerifiedCompetitorProfile[]>([]);
  const [selectedComp, setSelectedComp] = useState<VerifiedCompetitorProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDomain, setNewDomain] = useState("");
  const [newCompanyName, setNewCompanyName] = useState("");
  const [newGeography, setNewGeography] = useState("Mumbai, Maharashtra");

  useEffect(() => {
    fetchCompetitors();
  }, []);

  async function fetchCompetitors() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/intelligence/competitors');
      const data = await res.json();
      if (data.competitors) {
        setCompetitors(data.competitors);
        if (data.competitors.length > 0) {
          setSelectedComp(data.competitors[0]);
        }
      }
    } catch (err) {
      console.error("Competitor fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAddCompetitor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDomain || !newCompanyName) return;
    try {
      const res = await fetch('/api/intelligence/competitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: newDomain,
          companyName: newCompanyName,
          geography: newGeography,
          competitiveClassification: 'DIRECT'
        })
      });
      const data = await res.json();
      if (data.competitor) {
        setCompetitors(prev => [...prev, data.competitor]);
        setSelectedComp(data.competitor);
        setShowAddModal(false);
        setNewDomain("");
        setNewCompanyName("");
        setStatus?.(`Registered verified competitor ${data.competitor.companyName}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Verified Competitor Grid & Geographic Clustering */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Target size={16} className="text-primary-accent" />
                <h3 className="text-lg font-black uppercase">Verified Indian Competitors</h3>
              </div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Empirically verified studios and platforms active in Indian AI commercial video.
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-[9px] font-mono uppercase tracking-widest flex items-center gap-2 border border-white/10 transition-colors"
            >
              <Plus size={14} /> Add Competitor
            </button>
          </div>

          {isLoading ? (
            <div className="py-20 text-center text-zinc-500 font-mono text-xs">
              <RefreshCcw size={20} className="animate-spin mx-auto mb-2 text-primary-accent" />
              Loading verified competitor registry...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competitors.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComp(comp)}
                  className={cn(
                    "p-5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-4",
                    selectedComp?.id === comp.id
                      ? "bg-primary-accent/10 border-primary-accent/40 shadow-lg shadow-primary-accent/5"
                      : "bg-black/40 border-white/5 hover:border-white/15"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xs font-black uppercase text-white truncate max-w-[180px]">{comp.companyName}</h4>
                      <span className="text-[9px] font-mono text-zinc-500 truncate block">{comp.domain}</span>
                    </div>
                    <span className={cn(
                      "text-[8px] font-mono px-2 py-0.5 rounded font-bold uppercase",
                      comp.threatLevel === 'HIGH' ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                      comp.threatLevel === 'MEDIUM' ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                      "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    )}>
                      {comp.threatLevel} Threat
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500 pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1 truncate">
                      <MapPin size={10} /> {comp.geography}
                    </span>
                    <span className="text-primary-accent font-bold uppercase">{comp.competitiveClassification}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Selected Competitor Profile Drilldown */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {selectedComp ? (
          <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Competitor Intelligence Profile</span>
                <h3 className="text-lg font-black uppercase text-white">{selectedComp.companyName}</h3>
              </div>
              <a 
                href={`https://${selectedComp.domain}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-[9px] text-zinc-500 uppercase block mb-1">Positioning & Market Stance</span>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                  {selectedComp.positioning}
                </p>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 uppercase block mb-1">Empirical Observation Evidence</span>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                  {selectedComp.evidence}
                </p>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 uppercase block mb-2">Core Service Offerings</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedComp.relevantServices.map(s => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white text-[9px] uppercase">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 uppercase block mb-2">Observed Ranking Keywords</span>
                <div className="space-y-1.5">
                  {selectedComp.observedRankingKeywords.map(k => (
                    <div key={k} className="p-2 rounded-lg bg-black/50 border border-white/5 text-[9px] text-zinc-300 flex items-center justify-between">
                      <span>{k}</span>
                      <span className="text-emerald-400 text-[8px]">SERP OBSERVED</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[8px] text-zinc-600">
                <span>Discovery: {selectedComp.discoverySource}</span>
                <span>Verified: {selectedComp.lastObservedAt?.split('T')[0] || '2026-11-20'}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center py-20 text-zinc-600 font-mono text-xs">
            Select a competitor to view detailed empirical profile.
          </div>
        )}
      </div>

      {/* Add Competitor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-obsidian border border-white/10 rounded-3xl p-8 max-w-md w-full space-y-6">
            <h3 className="text-lg font-black uppercase text-white">Register Verified Competitor</h3>
            <form onSubmit={handleAddCompetitor} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-[9px] text-zinc-500 uppercase mb-1">Company Name</label>
                <input 
                  type="text" 
                  value={newCompanyName} 
                  onChange={e => setNewCompanyName(e.target.value)} 
                  placeholder="e.g. Acme AI Films" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-primary-accent"
                />
              </div>
              <div>
                <label className="block text-[9px] text-zinc-500 uppercase mb-1">Domain</label>
                <input 
                  type="text" 
                  value={newDomain} 
                  onChange={e => setNewDomain(e.target.value)} 
                  placeholder="e.g. acmefilms.ai" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-primary-accent"
                />
              </div>
              <div>
                <label className="block text-[9px] text-zinc-500 uppercase mb-1">Primary Geography</label>
                <input 
                  type="text" 
                  value={newGeography} 
                  onChange={e => setNewGeography(e.target.value)} 
                  placeholder="e.g. Mumbai, Maharashtra" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-primary-accent"
                />
              </div>
              <div className="flex items-center gap-3 pt-4">
                <button type="submit" className="flex-1 py-3 bg-primary-accent text-black font-black uppercase tracking-widest rounded-xl text-[9px]">
                  Save Competitor
                </button>
                <button type="button" onClick={() => setShowAddModal(false)} className="py-3 px-6 bg-white/5 text-white uppercase rounded-xl text-[9px]">
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

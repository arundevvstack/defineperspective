"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  AlertCircle, 
  ExternalLink, 
  RefreshCcw,
  Sparkles,
  Layers,
  FileCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ProtectedAsset } from "@/types/intelligence";

export default function ProtectedAssetsView() {
  const [assets, setAssets] = useState<ProtectedAsset[]>([]);
  const [filterTier, setFilterTier] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProtectedAssets();
  }, []);

  async function fetchProtectedAssets() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/intelligence/protected-assets');
      const data = await res.json();
      if (data.assets) {
        setAssets(data.assets);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleToggleLock = async (id: string, currentLock: boolean) => {
    try {
      const res = await fetch('/api/intelligence/protected-assets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isLocked: !currentLock })
      });
      const data = await res.json();
      if (data.asset) {
        setAssets(prev => prev.map(a => a.id === id ? data.asset : a));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredAssets = assets.filter(a => {
    const matchesTier = filterTier === "ALL" || a.protectionTier === filterTier;
    const matchesQuery = !searchQuery || a.url.toLowerCase().includes(searchQuery.toLowerCase()) || a.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTier && matchesQuery;
  });

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
        <div>
          <h3 className="text-lg font-black uppercase text-white flex items-center gap-2">
            <ShieldCheck size={18} className="text-emerald-400" /> Zero-Regression Protected Asset Registry
          </h3>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            {assets.length} URLs strictly locked against autonomous rewriting, canonical drift, or slug changes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search protected URLs..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="bg-black/50 border border-white/10 rounded-xl px-3 py-1.5 text-xs font-mono text-white outline-none focus:border-primary-accent w-48 md:w-64"
          />
        </div>
      </div>

      {/* Tier Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
        {["ALL", "FLAGSHIP_CORE", "PRIMARY_SERVICE", "REGIONAL_HUB", "EDITORIAL", "PORTFOLIO_CASE_STUDY"].map(tier => (
          <button
            key={tier}
            onClick={() => setFilterTier(tier)}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-[9px] font-mono uppercase tracking-widest whitespace-nowrap transition-colors",
              filterTier === tier ? "bg-primary-accent text-black font-bold" : "bg-black/40 text-zinc-500 hover:text-white border border-white/5"
            )}
          >
            {tier.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="py-24 text-center text-zinc-500 font-mono text-xs">
          <RefreshCcw size={24} className="animate-spin mx-auto mb-3 text-primary-accent" />
          Loading protected asset baseline registry...
        </div>
      ) : (
        <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-black/40">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead>
              <tr className="text-[9px] text-zinc-600 uppercase tracking-widest border-b border-white/5 bg-white/[0.01]">
                <th className="px-6 py-4">Lock</th>
                <th className="px-6 py-4">URL Path</th>
                <th className="px-6 py-4">Protection Tier</th>
                <th className="px-6 py-4">Canonical URL</th>
                <th className="px-6 py-4">GSC Impressions</th>
                <th className="px-6 py-4 text-right">Prohibited Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredAssets.slice(0, 50).map(asset => (
                <tr key={asset.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-3">
                    <button
                      onClick={() => handleToggleLock(asset.id, asset.isLocked)}
                      className={cn(
                        "p-1.5 rounded-lg border transition-colors",
                        asset.isLocked 
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                          : "bg-red-500/10 border-red-500/30 text-red-400"
                      )}
                      title={asset.isLocked ? "Asset is Locked (Protected)" : "Asset is Unlocked (Warning)"}
                    >
                      {asset.isLocked ? <Lock size={12} /> : <Unlock size={12} />}
                    </button>
                  </td>
                  <td className="px-6 py-3 font-sans font-bold text-white text-[11px] truncate max-w-xs">
                    {asset.url}
                  </td>
                  <td className="px-6 py-3">
                    <span className={cn(
                      "text-[8px] px-2 py-0.5 rounded font-bold uppercase",
                      asset.protectionTier === 'FLAGSHIP_CORE' ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                      asset.protectionTier === 'REGIONAL_HUB' ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                      "bg-white/5 text-zinc-400"
                    )}>
                      {asset.protectionTier.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-zinc-500 text-[10px] truncate max-w-[200px]">
                    {asset.canonicalUrl}
                  </td>
                  <td className="px-6 py-3 text-zinc-300 font-bold">
                    {asset.historicalImpressions > 0 ? `${asset.historicalImpressions} imp` : 'Baseline'}
                  </td>
                  <td className="px-6 py-3 text-right">
                    <span className="text-[8px] text-zinc-500 uppercase">
                      {asset.prohibitedAutonomousActions.length} Prohibitions Enforced
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


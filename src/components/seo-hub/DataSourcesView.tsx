"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Plug, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Database, 
  ExternalLink, 
  RefreshCcw,
  Lock,
  Key
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DataSourceStatus } from "@/types/intelligence";

export default function DataSourcesView() {
  const [sources, setSources] = useState<DataSourceStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDataSources();
  }, []);

  async function fetchDataSources() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/intelligence/data-sources');
      const data = await res.json();
      if (data.sources) {
        setSources(data.sources);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
        <div>
          <h3 className="text-lg font-black uppercase text-white flex items-center gap-2">
            <Plug size={18} className="text-emerald-400" /> Data Sources & API Integrations
          </h3>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Complete transparency of data origin. Zero fabricated metrics or mock databases.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono uppercase font-bold">
            {sources.filter(s => s.status === 'OPERATIONAL').length} Connected
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[9px] font-mono uppercase font-bold">
            {sources.filter(s => s.status === 'DATA_NOT_CONNECTED').length} Awaiting Provisioning
          </span>
        </div>
      </div>

      {isLoading ? (
        <div className="py-24 text-center text-zinc-500 font-mono text-xs">
          <RefreshCcw size={24} className="animate-spin mx-auto mb-3 text-primary-accent" />
          Checking data source operational states...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sources.map(source => (
            <div key={source.sourceId} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between gap-6 hover:border-white/10 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "text-[8px] font-mono px-2.5 py-1 rounded-md font-bold uppercase",
                    source.status === 'OPERATIONAL' ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                    source.status === 'DATA_NOT_CONNECTED' ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                    "bg-white/5 text-zinc-500 border border-white/10"
                  )}>
                    {source.status.replace(/_/g, ' ')}
                  </span>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase">{source.sourceType}</span>
                </div>

                <div>
                  <h4 className="text-sm font-black uppercase text-white mb-1">{source.displayName}</h4>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">{source.notes}</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs font-mono">
                  <span className="text-[8px] text-zinc-500 uppercase block">Required Credentials:</span>
                  <div className="space-y-1">
                    {source.requiredCredentials.map((c, i) => (
                      <div key={i} className="text-[9px] text-zinc-300 font-mono flex items-center gap-1.5">
                        <Key size={10} className="text-zinc-600" /> {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-zinc-600">
                <span>Cost Model: {source.costModel}</span>
                <span>Configured: {source.credentialsConfigured ? 'YES' : 'NO'}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


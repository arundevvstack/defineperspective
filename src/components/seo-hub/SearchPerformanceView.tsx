"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  BarChart2, 
  Search, 
  FileText, 
  Clock, 
  Database,
  ArrowUpRight,
  RefreshCcw,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchPerformanceData } from "@/types/intelligence";

export default function SearchPerformanceView() {
  const [data, setData] = useState<SearchPerformanceData | null>(null);
  const [windowDays, setWindowDays] = useState(28);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPerformance(windowDays);
  }, [windowDays]);

  async function fetchPerformance(days: number) {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/intelligence/search-performance?period=${days}d`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading || !data) {
    return (
      <div className="py-24 text-center text-zinc-500 font-mono text-xs">
        <RefreshCcw size={24} className="animate-spin mx-auto mb-3 text-primary-accent" />
        Loading verified Google Search Console performance data...
      </div>
    );
  }

  const { summary, topQueries, topPages, dailyTrend, provenance, dataLagNotice } = data;

  return (
    <div className="space-y-8 font-sans">
      {/* Provenance & Window Selector Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
        <div className="flex items-center gap-3">
          <Database size={16} className="text-emerald-400 shrink-0" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase text-white">{provenance.sourceProvider}</span>
              <span className="text-[8px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                {provenance.evidenceClassification}
              </span>
            </div>
            <p className="text-[9px] font-mono text-zinc-500">{dataLagNotice}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-black/40 p-1 rounded-xl border border-white/10 self-start md:self-auto">
          {[7, 28, 30].map(d => (
            <button
              key={d}
              onClick={() => setWindowDays(d)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[9px] font-mono uppercase tracking-widest transition-colors",
                windowDays === d ? "bg-primary-accent text-black font-bold" : "text-zinc-500 hover:text-white"
              )}
            >
              {d} Days
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Organic Clicks", value: summary.totalClicks.value, unit: "clicks", meta: summary.totalClicks.meta },
          { label: "Total Impressions", value: summary.totalImpressions.value, unit: "imp", meta: summary.totalImpressions.meta },
          { label: "Average CTR", value: summary.averageCtr.value, unit: "%", meta: summary.averageCtr.meta },
          { label: "Average Search Rank", value: summary.averagePosition.value, unit: "rank", meta: summary.averagePosition.meta }
        ].map(k => (
          <div key={k.label} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between gap-2">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{k.label}</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-white">{k.value !== null ? k.value : 'N/A'}</span>
              <span className="text-xs font-mono text-zinc-600 uppercase">{k.unit}</span>
            </div>
            <span className="text-[8px] font-mono text-emerald-400/80">
              ● {k.meta.status} ({k.meta.evidenceClassification})
            </span>
          </div>
        ))}
      </div>

      {/* Top Queries & Top Pages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Top Queries (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
              <Search size={14} className="text-primary-accent" /> Top Monitored Queries (GSC)
            </h4>
            <span className="text-[9px] font-mono text-zinc-500 uppercase">Showing Top {topQueries.length}</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/5 bg-black/40">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="text-[8px] text-zinc-600 uppercase border-b border-white/5 bg-white/[0.01]">
                  <th className="px-4 py-3">Query</th>
                  <th className="px-4 py-3">Clicks</th>
                  <th className="px-4 py-3">Imp</th>
                  <th className="px-4 py-3">CTR</th>
                  <th className="px-4 py-3 text-right">Avg Pos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {topQueries.slice(0, 15).map(q => (
                  <tr key={q.query} className="hover:bg-white/[0.02]">
                    <td className="px-4 py-2.5 font-sans font-bold text-white uppercase text-[11px] truncate max-w-xs">{q.query}</td>
                    <td className="px-4 py-2.5 text-emerald-400 font-bold">{q.clicks}</td>
                    <td className="px-4 py-2.5 text-zinc-400">{q.impressions}</td>
                    <td className="px-4 py-2.5 text-zinc-400">{q.ctr}%</td>
                    <td className="px-4 py-2.5 text-right font-black text-amber-400">#{q.avgPosition.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Landing Pages (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
              <FileText size={14} className="text-blue-400" /> Top Landing Pages
            </h4>
            <span className="text-[9px] font-mono text-zinc-500 uppercase">{topPages.length} Indexed</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/5 bg-black/40">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="text-[8px] text-zinc-600 uppercase border-b border-white/5 bg-white/[0.01]">
                  <th className="px-4 py-3">URL</th>
                  <th className="px-4 py-3">Clicks</th>
                  <th className="px-4 py-3 text-right">Avg Pos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {topPages.slice(0, 15).map(p => {
                  const pathOnly = p.pageUrl.replace(/^https?:\/\/(www\.)?defineperspective\.in/, '') || '/';
                  return (
                    <tr key={p.pageUrl} className="hover:bg-white/[0.02]">
                      <td className="px-4 py-2.5 font-mono text-zinc-300 text-[10px] truncate max-w-[180px]">{pathOnly}</td>
                      <td className="px-4 py-2.5 text-emerald-400 font-bold">{p.clicks}</td>
                      <td className="px-4 py-2.5 text-right text-zinc-400 font-bold">#{p.avgPosition.toFixed(1)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


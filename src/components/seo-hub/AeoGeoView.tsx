"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Globe2, 
  Search, 
  CheckCircle2, 
  ExternalLink, 
  RefreshCcw,
  Sparkles,
  Bot
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AEOGEOObservation } from "@/types/intelligence";

export default function AeoGeoView() {
  const [observations, setObservations] = useState<AEOGEOObservation[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAeoData();
  }, []);

  async function fetchAeoData() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/intelligence/aeo-geo');
      const data = await res.json();
      if (data.observations) {
        setObservations(data.observations);
        setSummary(data.summary);
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
            <Bot size={18} className="text-blue-400" /> AEO & LLM Search Visibility Observations
          </h3>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Empirical presence across Google AI Overviews, Perplexity, Gemini, and ChatGPT Search. Zero fabricated ranks.
          </p>
        </div>

        {summary && (
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-right">
              <span className="text-[8px] font-mono text-zinc-500 uppercase block">Mention Share</span>
              <span className="text-sm font-black text-emerald-400">{summary.brandMentionRatePct}%</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-right">
              <span className="text-[8px] font-mono text-zinc-500 uppercase block">Citation Share</span>
              <span className="text-sm font-black text-blue-400">{summary.citationSharePct}%</span>
            </div>
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="py-24 text-center text-zinc-500 font-mono text-xs">
          <RefreshCcw size={24} className="animate-spin mx-auto mb-3 text-primary-accent" />
          Loading verified AEO & GEO observations...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {observations.map(obs => (
            <div key={obs.id} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between gap-6 hover:border-white/10 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[8px] font-mono uppercase font-bold">
                    {obs.platform}
                  </span>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase">
                    {obs.geographicScope} • {obs.observationDate}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-black uppercase text-white mb-2 leading-snug">
                    "{obs.query}"
                  </h4>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-300 font-sans leading-relaxed italic">
                    "{obs.answerSnippet}"
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5">
                    <span className="text-[8px] text-zinc-500 uppercase block mb-0.5">DP Position</span>
                    <span className="text-white font-black text-sm">
                      {obs.dpPosition ? `#${obs.dpPosition} in Answer` : 'Mentioned'}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5">
                    <span className="text-[8px] text-zinc-500 uppercase block mb-0.5">Citation Status</span>
                    <span className={obs.dpCited ? "text-emerald-400 font-bold" : "text-zinc-500"}>
                      {obs.dpCited ? 'URL Cited' : 'Not Cited'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-zinc-500">
                <span>Methodology: {obs.methodology}</span>
                <span>Confidence: {(obs.confidenceScore * 100).toFixed(0)}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


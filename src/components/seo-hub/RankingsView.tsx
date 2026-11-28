"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  TrendingUp, 
  TrendingDown, 
  ShieldCheck, 
  Globe, 
  ArrowUpRight,
  RefreshCcw,
  Radar,
  Search,
  Lock,
  ExternalLink,
  Layers,
  Database
} from "lucide-react";
import { cn } from "@/lib/utils";
import { KeywordIntelligenceItem } from "@/types/intelligence";

export default function RankingsView({ city, setStatus }: { city?: string, setStatus?: (s: string) => void }) {
  const [keyword, setKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<KeywordIntelligenceItem | null | 'NOT_FOUND'>(null);
  const [keywords, setKeywords] = useState<KeywordIntelligenceItem[]>([]);
  const [backlinks, setBacklinks] = useState<any[]>([]);
  const [isLoadingKeywords, setIsLoadingKeywords] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    fetchVerifiedKeywords();
  }, []);

  const fetchVerifiedKeywords = async () => {
    setIsLoadingKeywords(true);
    try {
      const res = await fetch('/api/intelligence/keywords');
      const data = await res.json();
      if (data.keywords) {
        setKeywords(data.keywords);
      }
    } catch (err) {
      console.error('Error fetching keywords:', err);
    } finally {
      setIsLoadingKeywords(false);
    }
  };

  const fetchBacklinks = async () => {
    setIsScanning(true);
    setStatus?.("Links: Querying verified editorial publication targets...");
    try {
      const res = await fetch('/api/seo/find-backlinks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      if (data.opportunities) {
        setBacklinks(data.opportunities);
        setStatus?.(`Success: Found ${data.opportunities.length} legitimate publication targets.`);
      }
    } catch (err) {
      console.error(err);
      setStatus?.("Error: Link query failed.");
    } finally {
      setIsScanning(false);
    }
  };

  const handleQueryLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    setIsSearching(true);
    setSearchResult(null);

    const match = keywords.find(k => k.keyword.toLowerCase().includes(keyword.trim().toLowerCase()));
    if (match) {
      setSearchResult(match);
    } else {
      setSearchResult('NOT_FOUND');
    }
    setIsSearching(false);
  };

  return (
    <div className="space-y-12">
      {/* Verified GSC Query Inspector */}
      <section className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary-accent/5 blur-[80px] -z-10" />
         <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="max-w-md">
               <div className="flex items-center gap-2 mb-2">
                 <Database size={14} className="text-primary-accent" />
                 <h3 className="text-xl font-black uppercase">Verified Search Position Inspector</h3>
               </div>
               <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest leading-relaxed">
                 Look up actual Google Search Console performance and ranking URLs for any commercial query.
               </p>
            </div>
            <form onSubmit={handleQueryLookup} className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative flex-1 md:w-80">
                  <input 
                    type="text" 
                    placeholder="e.g. ai video production company"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono focus:border-primary-accent/50 outline-none text-white"
                  />
               </div>
               <button 
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 bg-primary-accent text-black rounded-xl font-black uppercase tracking-widest text-[9px] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
               >
                 {isSearching ? <RefreshCcw size={14} className="animate-spin" /> : <Search size={14} />}
                 Verify
               </button>
            </form>
         </div>

         <AnimatePresence>
            {searchResult && searchResult !== 'NOT_FOUND' && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t border-white/5">
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase block mb-1">GSC Rank Position</span>
                    <div className="text-2xl font-black text-primary-accent">#{searchResult.currentRankPosition?.toFixed(1)}</div>
                    <span className="text-[8px] font-mono text-zinc-600 uppercase">SOURCE-VERIFIED</span>
                 </div>
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase block mb-1">GSC Impressions (28d)</span>
                    <div className="text-2xl font-black text-white">{searchResult.impressions}</div>
                    <span className="text-[8px] font-mono text-zinc-600 uppercase">Clicks: {searchResult.clicks} ({searchResult.ctr}%)</span>
                 </div>
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase block mb-1">Commercial Tier</span>
                    <div className="text-sm font-black text-white uppercase">{searchResult.commercialTier}</div>
                    <span className="text-[8px] font-mono text-zinc-600 uppercase">{searchResult.searchIntent}</span>
                 </div>
                 <div className="p-4 rounded-xl bg-primary-accent/10 border border-primary-accent/20">
                    <span className="text-[8px] font-mono text-primary-accent uppercase block mb-1">Target Landing Page</span>
                    <div className="text-xs font-mono text-white truncate">{searchResult.targetUrl}</div>
                    <span className="text-[8px] font-mono text-primary-accent uppercase block mt-1">
                      {searchResult.isProtected ? 'PROTECTED ASSET' : 'STANDARD ASSET'}
                    </span>
                 </div>
              </motion.div>
            )}

            {searchResult === 'NOT_FOUND' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-xl bg-white/[0.02] border border-dashed border-white/10 text-center">
                <p className="text-xs font-mono text-zinc-500 uppercase">
                  DATA UNAVAILABLE: "{keyword}" has not yet recorded measurable Google Search Console impressions in the primary property.
                </p>
              </motion.div>
            )}
         </AnimatePresence>
      </section>

      {/* Verified Keywords Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
           <div>
              <h4 className="text-lg font-black uppercase">Verified Search Authority Registry</h4>
              <p className="text-[10px] font-mono text-zinc-500 uppercase">Data directly sourced from sc-domain:defineperspective.in. Zero simulated metrics.</p>
           </div>
           <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono uppercase">
                {keywords.length} Verified Queries
              </span>
           </div>
        </div>

        <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-white/[0.01]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest border-b border-white/5 bg-black/40">
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Search Query</th>
                <th className="px-6 py-4">GSC Position</th>
                <th className="px-6 py-4">Impressions</th>
                <th className="px-6 py-4">Clicks / CTR</th>
                <th className="px-6 py-4">Target Landing Page</th>
                <th className="px-6 py-4 text-right">Provenance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs font-mono">
              {isLoadingKeywords && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-zinc-600">
                    <RefreshCcw size={20} className="animate-spin mx-auto mb-2 text-primary-accent" />
                    Loading verified search console queries...
                  </td>
                </tr>
              )}
              {keywords.slice(0, 25).map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="px-6 py-4">
                    {item.isProtected ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-accent/10 border border-primary-accent/30 text-primary-accent text-[8px] font-bold uppercase">
                        <Lock size={10} /> Protected
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-zinc-500 text-[8px] uppercase">
                        Standard
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-sans font-bold text-white uppercase text-[11px]">
                    {item.keyword}
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "font-black text-sm",
                      (item.currentRankPosition || 99) <= 5 ? "text-emerald-400" :
                      (item.currentRankPosition || 99) <= 20 ? "text-blue-400" : "text-amber-400"
                    )}>
                      #{(item.currentRankPosition || 0).toFixed(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-300 font-bold">
                    {item.impressions}
                  </td>
                  <td className="px-6 py-4 text-zinc-400">
                    <span className="text-white font-bold">{item.clicks}</span> ({item.ctr}%)
                  </td>
                  <td className="px-6 py-4 text-zinc-500 truncate max-w-xs">
                    {item.targetUrl}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[8px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                      {item.provenance.evidenceClassification}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Editorial Backlink Radar */}
      <section className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] -z-10" />
         <div className="flex items-center justify-between mb-10">
            <div>
               <h3 className="text-2xl font-blacker uppercase italic tracking-tighter mb-2">Editorial Authority Targets_</h3>
               <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                 Legitimate press, trade publications, and regional ecosystem targets for organic editorial citations. Zero spam outreach.
               </p>
            </div>
            <button 
              onClick={fetchBacklinks}
              disabled={isScanning}
              className="px-8 py-4 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-blue-500/20 transition-all shadow-xl shadow-blue-500/10"
            >
              {isScanning ? <RefreshCcw size={16} className="animate-spin" /> : <Radar size={16} />}
              Query Editorial Targets
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {backlinks.map((link) => (
                <motion.div 
                  key={link.url}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between gap-6 group/item hover:border-blue-500/30 transition-all"
                >
                   <div>
                     <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                           <Globe size={20} />
                        </div>
                        <div className="flex flex-col items-end">
                           <span className="text-[8px] font-mono text-zinc-600 uppercase">DA Benchmark</span>
                           <span className="text-xl font-black text-white">{link.domain_authority}</span>
                        </div>
                     </div>
                     <h4 className="text-sm font-black uppercase tracking-widest mb-1 group-hover/item:text-blue-400 transition-colors">{link.source_name}</h4>
                     <p className="text-[9px] text-zinc-500 font-mono mb-2">{link.editorial_notes}</p>
                     <p className="text-[9px] text-zinc-600 font-mono truncate">{link.url}</p>
                   </div>
                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-[8px] font-mono uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {link.status}
                      </span>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-lg text-zinc-600 hover:text-white transition-colors">
                         <ExternalLink size={14} />
                      </a>
                   </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {backlinks.length === 0 && !isScanning && (
              <div className="lg:col-span-3 py-16 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                 <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <Radar size={32} className="text-zinc-600" />
                 </div>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                   Query legitimate Indian trade and media publication targets for authority building.
                 </p>
              </div>
            )}
         </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudyFilter({ caseStudies }: { caseStudies: any[] }) {
  const [search, setSearch] = useState('');
  const [geoFilter, setGeoFilter] = useState('');
  const [indFilter, setIndFilter] = useState('');

  // Extract all unique geos and industries for dropdowns
  const allGeos = Array.from(new Set(caseStudies.flatMap(cs => cs.displayGeos))).sort();
  const allInds = Array.from(new Set(caseStudies.flatMap(cs => cs.displayIndustries))).sort();

  const filtered = caseStudies.filter(cs => {
    const matchSearch = search ? (cs.title.toLowerCase().includes(search.toLowerCase()) || (cs.ai_summary || '').toLowerCase().includes(search.toLowerCase())) : true;
    const matchGeo = geoFilter ? cs.displayGeos.includes(geoFilter) : true;
    const matchInd = indFilter ? cs.displayIndustries.includes(indFilter) : true;
    return matchSearch && matchGeo && matchInd;
  });

  return (
    <div>
      {/* ── FILTER BAR ── */}
      <div className="mb-12 flex flex-col md:flex-row gap-4 items-center bg-white/[0.02] border border-white/5 p-4 rounded-2xl backdrop-blur-sm">
        <input 
          type="text" 
          placeholder="Search by keyword..." 
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/3 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-accent transition-colors placeholder:text-zinc-600"
        />
        <select 
          value={geoFilter}
          onChange={e => setGeoFilter(e.target.value)}
          className="w-full md:w-1/3 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-accent transition-colors appearance-none"
        >
          <option value="">All Regions</option>
          {allGeos.map((g: any) => <option key={g} value={g}>{g}</option>)}
        </select>
        <select 
          value={indFilter}
          onChange={e => setIndFilter(e.target.value)}
          className="w-full md:w-1/3 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-accent transition-colors appearance-none"
        >
          <option value="">All Industries</option>
          {allInds.map((i: any) => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>

      {/* ── GRID ── */}
      {filtered.length === 0 ? (
        <div className="p-12 border border-white/5 bg-white/[0.02] rounded-3xl text-center">
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">No matching case studies found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filtered.map((cs) => (
            <Link href={`/case-studies/${cs.slug}`} key={cs.slug} className="group flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-primary-accent/30 transition-all duration-500 hover:-translate-y-2">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black shrink-0">
                {cs.thumbnail_url ? (
                  <Image 
                    src={cs.thumbnail_url} 
                    alt={cs.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center">
                    <span className="text-zinc-800 font-bold text-2xl uppercase opacity-30">DP AI</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.displayIndustries.map((ind: string) => (
                    <span key={ind} className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-zinc-400 uppercase tracking-wider">{ind}</span>
                  ))}
                  {cs.displayGeos.map((geo: string) => (
                    <span key={geo} className="px-2 py-1 bg-primary-accent/10 rounded text-[10px] font-mono text-primary-accent uppercase tracking-wider">{geo}</span>
                  ))}
                </div>
                
                <h2 className="text-xl md:text-2xl font-black uppercase text-white mb-4 group-hover:text-primary-accent transition-colors leading-snug">
                  {cs.title}
                </h2>
                
                {cs.ai_summary && (
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                    {cs.ai_summary}
                  </p>
                )}
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    {new Date(cs.published_at || cs.created_at || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-accent group-hover:translate-x-2 transition-transform flex items-center gap-2">
                    Read Case Study &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

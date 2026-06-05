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
            <Link href={`/case-studies/${cs.slug}`} key={cs.slug} className="group flex flex-col h-full bg-neutral-900/20 border border-white/5 rounded-2xl overflow-hidden hover:bg-neutral-900/40 hover:border-white/10 hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full overflow-hidden bg-neutral-950 shrink-0">
                {cs.thumbnail_url ? (
                  <Image 
                    src={cs.thumbnail_url} 
                    alt={cs.title} 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
                  />
                ) : (
                  <div className="w-full aspect-video bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center">
                    <span className="text-zinc-800 font-semibold text-xl uppercase opacity-30 font-sans tracking-widest">DP AI</span>
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.displayIndustries.map((ind: string) => (
                    <span key={ind} className="text-[10px] font-sans font-medium text-zinc-400 uppercase tracking-[0.08em]">{ind}</span>
                  ))}
                  {cs.displayGeos.map((geo: string) => (
                    <span key={geo} className="text-[10px] font-sans font-medium text-primary-accent uppercase tracking-[0.08em] before:content-['•'] before:mr-2 before:text-zinc-600">{geo}</span>
                  ))}
                </div>
                
                <h2 className="text-xl font-sans font-semibold text-white mb-3 group-hover:text-primary-accent transition-colors leading-tight tracking-tight">
                  {cs.title}
                </h2>
                
                {cs.ai_summary && (
                  <p className="text-sm text-zinc-400 font-sans font-normal leading-[1.8] mb-6 line-clamp-3">
                    {cs.ai_summary}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

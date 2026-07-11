import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';

export default function CaseStudyHeroBanner({ caseStudy }: { caseStudy: any }) {
  const displayGeos = Array.from(new Set([caseStudy.geo, ...(caseStudy.geo_targets || [])])).filter(Boolean);
  const displayIndustries = Array.from(new Set([caseStudy.industry, ...(caseStudy.industries || [])])).filter(Boolean);
  
  const bgImage = caseStudy.hero_image_url || caseStudy.thumbnail_url || (caseStudy.gallery_images && caseStudy.gallery_images[0]) || '/placeholder.jpg';
  const year = caseStudy.published_at ? new Date(caseStudy.published_at).getFullYear() : (caseStudy.created_at ? new Date(caseStudy.created_at).getFullYear() : new Date().getFullYear());

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen lg:min-h-[85vh] lg:h-[85vh] border-b border-white/5 bg-obsidian relative overflow-hidden">
      
      {/* FULL WIDTH BACKGROUND IMAGE — 20% opacity */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-20">
        <Image 
          src={bgImage}
          alt={caseStudy.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-obsidian via-transparent to-transparent z-[1]" />

      {/* FULL WIDTH CENTERED CONTENT OVERLAY */}
      <div className="w-full max-w-6xl flex flex-col justify-center items-center text-center px-6 py-20 relative z-10">
        
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 flex flex-col items-center w-full mt-auto">
          
          {/* Eyebrow & Industry */}
          <div className="mb-6 flex flex-col items-center gap-4">
            <span className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] font-black">
              CASE STUDY // {(caseStudy.slug || '').slice(0, 2).toUpperCase()}
            </span>
            
            <div className="flex flex-wrap justify-center gap-2">
              {displayIndustries.map((ind, i) => (
                <span key={`ind-${i}`} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 font-medium tracking-widest uppercase backdrop-blur-md">
                  {ind as string}
                </span>
              ))}
            </div>
          </div>

          {/* Responsive Clamp Title Engine */}
          <div className="mb-6 w-full">
            <h1 
              className="font-black text-white leading-[0.9] tracking-tight drop-shadow-md break-words mx-auto"
              style={{
                fontSize: 'clamp(2.2rem, 4.4vw, 4.4rem)',
                textWrap: 'pretty',
                maxWidth: '100%'
              }}
            >
              {caseStudy.title}
            </h1>
          </div>

          {/* Subtitle / Executive Summary */}
          {caseStudy.ai_summary && (
            <p className="text-lg lg:text-xl text-zinc-300 opacity-90 max-w-xl mx-auto leading-relaxed font-light mb-10 line-clamp-3">
              {caseStudy.ai_summary}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* View Case Study */}
            <a href="#overview" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-black uppercase tracking-widest text-xs hover:scale-105 hover:bg-zinc-200 transition-all shadow-lg group">
              View Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Watch Video Button — pulls from DB or fallback */}
            {(caseStudy.youtube_url || caseStudy.external_video_url || 'https://youtu.be/L7aRxqziN8w') && (
              <a
                href={caseStudy.youtube_url || caseStudy.external_video_url || 'https://youtu.be/L7aRxqziN8w'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-full border border-white/15 backdrop-blur-md bg-white/5 hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300 shadow-lg"
              >
                {/* YouTube play icon ring */}
                <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-red-600 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_12px_rgba(220,38,38,0.6)]">
                  <Play size={10} fill="white" className="text-white ml-0.5" />
                </span>
                <span className="text-white font-black uppercase tracking-widest text-xs">Watch Film</span>
                {/* Inline YouTube icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 opacity-60 group-hover:opacity-100 transition-opacity">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            )}
          </div>

          {/* Info Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-auto pt-8 border-t border-white/10 w-full">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
               <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Client</span>
               <span className="text-xs font-black text-white uppercase tracking-wider">{caseStudy.client_name || 'Global Brand'}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
               <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Location</span>
               <span className="text-xs font-black text-white uppercase tracking-wider">{displayGeos[0] || 'Global'}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
               <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Year</span>
               <span className="text-xs font-black text-white uppercase tracking-wider">{year}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
               <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Services</span>
               <span className="text-xs font-black text-white uppercase tracking-wider">{caseStudy.category || 'AI Production'}</span>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}

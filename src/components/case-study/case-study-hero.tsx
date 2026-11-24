import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import { MasterCaseStudyData } from './case-study-types';

export default function CaseStudyMasterHero({ data }: { data: MasterCaseStudyData }) {
  const bgImage = data.heroImageUrl || data.thumbnailUrl || '/images/og-default.jpg';
  const displayIndustries = data.industries && data.industries.length > 0
    ? data.industries
    : (data.categoryBadge ? [data.categoryBadge] : []);

  const youtubeWatchUrl = data.youtubeId
    ? `https://www.youtube.com/watch?v=${data.youtubeId}`
    : data.videoUrl || null;

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen lg:min-h-[85vh] lg:h-[85vh] border-b border-white/5 bg-obsidian relative overflow-hidden">
      {/* Background Media with Ambient Fade */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-20">
        <Image
          src={bgImage}
          alt={data.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-obsidian via-transparent to-transparent z-[1]" />

      {/* Center Content Overlay */}
      <div className="w-full max-w-6xl flex flex-col justify-center items-center text-center px-6 py-20 relative z-10">
        <div className="flex flex-col items-center w-full mt-auto">
          {/* Eyebrow & Badges */}
          <div className="mb-6 flex flex-col items-center gap-4">
            <span className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] font-black">
              {data.eyebrow || `CASE STUDY // ${(data.categoryBadge || data.slug || '').toUpperCase()}`}
            </span>

            {displayIndustries.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {displayIndustries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-300 font-medium tracking-widest uppercase backdrop-blur-md"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Responsive Clamp Title Engine */}
          <div className="mb-6 w-full">
            <h1
              className="font-black text-white leading-[0.95] tracking-tight drop-shadow-md break-words mx-auto"
              style={{
                fontSize: 'clamp(2.2rem, 4.4vw, 4.4rem)',
                textWrap: 'pretty',
                maxWidth: '100%',
              }}
            >
              {data.title}
            </h1>
          </div>

          {/* Executive Subtitle */}
          {data.executiveSummary && (
            <p className="text-base md:text-xl text-zinc-300 opacity-90 max-w-2xl mx-auto leading-relaxed font-light mb-10 line-clamp-3">
              {data.executiveSummary}
            </p>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#overview"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-black uppercase tracking-widest text-xs hover:scale-105 hover:bg-zinc-200 transition-all shadow-lg group"
            >
              View Case Study{' '}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            {youtubeWatchUrl && (
              <a
                href={youtubeWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-full border border-white/15 backdrop-blur-md bg-white/5 hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300 shadow-lg"
              >
                <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-red-600 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_12px_rgba(220,38,38,0.6)]">
                  <Play size={10} fill="white" className="text-white ml-0.5" />
                </span>
                <span className="text-white font-black uppercase tracking-widest text-xs">
                  Watch Film
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-red-500 opacity-70 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            )}
          </div>

          {/* Quick Info Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-auto pt-8 border-t border-white/10 w-full">
            {data.clientName && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  Client / Series
                </span>
                <span className="text-xs font-black text-white uppercase tracking-wider">
                  {data.clientName}
                </span>
              </div>
            )}
            {data.location && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  Location
                </span>
                <span className="text-xs font-black text-white uppercase tracking-wider">
                  {data.location}
                </span>
              </div>
            )}
            {data.year && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  Year
                </span>
                <span className="text-xs font-black text-white uppercase tracking-wider">
                  {data.year}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                Studio
              </span>
              <span className="text-xs font-black text-white uppercase tracking-wider">
                DP AI Studio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

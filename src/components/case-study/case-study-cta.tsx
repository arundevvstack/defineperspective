import React from 'react';
import Link from 'next/link';

interface CaseStudyFinalCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  videoWatchUrl?: string | null;
}

export default function CaseStudyFinalCTA({
  title = 'Ready to Produce Your Brand’s Next AI Campaign?',
  description = 'Witness the convergence of generative neural synthesis and luxury fashion cinematography. Partner with DP AI Studio to produce broadcast-ready commercial films and visual campaigns.',
  buttonText = 'Inquire For Production',
  buttonLink = '/contact',
  videoWatchUrl,
}: CaseStudyFinalCTAProps) {
  return (
    <div className="mt-24 p-10 md:p-16 bg-obsidian border-2 border-primary-accent/30 rounded-[3rem] text-center shadow-[0_0_50px_rgba(251,44,54,0.08)] relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary-accent/5 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href={buttonLink}
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 hover:bg-zinc-200 transition-all shadow-xl"
          >
            {buttonText}
          </Link>
          {videoWatchUrl && (
            <a
              href={videoWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all shadow-lg"
            >
              Watch Full Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

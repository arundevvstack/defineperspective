import React from 'react';
import Image from 'next/image';
import { CaseStudyMediaFrame } from './case-study-types';

interface CaseStudyProductionEvidenceProps {
  title?: string;
  description?: string;
  rawFrame?: CaseStudyMediaFrame | null;
  finalFrame?: CaseStudyMediaFrame | null;
}

export default function CaseStudyProductionEvidence({
  title = 'Production Evidence: Synthesis & Finishing',
  description = 'Demonstrating human direction and precision finishing: Raw generative synthesis output versus the final color-graded, consistency-locked cinematic frame.',
  rawFrame,
  finalFrame,
}: CaseStudyProductionEvidenceProps) {
  if (!rawFrame && !finalFrame) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 bg-neutral-900/60 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
      {rawFrame && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl text-white font-black uppercase tracking-widest mb-2 font-mono text-sm">
              {title}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              {description}
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-950 group">
            <Image
              src={rawFrame.url}
              alt={rawFrame.alt || 'Raw Generative Output'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest text-zinc-300 rounded border border-white/10">
              {rawFrame.label || 'Raw AI Synthesis'}
            </div>
          </div>
          {rawFrame.caption && (
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              {rawFrame.caption}
            </p>
          )}
        </div>
      )}

      {finalFrame && (
        <div className="flex flex-col justify-end space-y-4">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-950 group">
            <Image
              src={finalFrame.url}
              alt={finalFrame.alt || 'Final Production Frame'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 right-3 bg-primary-accent/90 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest text-white rounded shadow-lg">
              {finalFrame.label || 'Final Graded Frame'}
            </div>
          </div>
          {finalFrame.caption && (
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              {finalFrame.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

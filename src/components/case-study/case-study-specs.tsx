import React from 'react';
import { CaseStudySpecItem } from './case-study-types';

export default function CaseStudyProductionSpecs({ specs }: { specs: CaseStudySpecItem[] }) {
  if (!specs || specs.length === 0) return null;

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 mb-16 backdrop-blur-md shadow-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-center space-y-1"
          >
            <span className="block text-[10px] md:text-[11px] text-primary-accent uppercase tracking-widest font-mono font-medium">
              {spec.label}
            </span>
            <strong className="text-sm md:text-base font-semibold text-white block break-words leading-snug">
              {spec.value}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}

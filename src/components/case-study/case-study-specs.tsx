import React from 'react';
import { CaseStudySpecItem } from './case-study-types';

export default function CaseStudyProductionSpecs({ specs }: { specs: CaseStudySpecItem[] }) {
  if (!specs || specs.length === 0) return null;

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 mb-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 backdrop-blur-md">
      {specs.map((spec, idx) => (
        <div key={idx} className="space-y-1.5">
          <span className="block text-[10px] text-primary-accent uppercase tracking-widest font-mono">
            {spec.label}
          </span>
          <strong className="text-sm font-semibold text-white block break-words">
            {spec.value}
          </strong>
        </div>
      ))}
    </div>
  );
}

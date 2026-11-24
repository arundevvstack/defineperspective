import React from 'react';
import { CaseStudyWorkflowStep } from './case-study-types';

export default function CaseStudyWorkflowTimeline({ steps }: { steps: CaseStudyWorkflowStep[] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="my-12 overflow-x-auto pb-4">
      <div className="min-w-[800px] flex items-center justify-between gap-4 p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
        {steps.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3 group relative">
            <div className="w-12 h-12 rounded-full border-2 border-primary-accent flex items-center justify-center bg-obsidian text-primary-accent font-black text-sm z-10 group-hover:bg-primary-accent group-hover:text-white transition-colors shadow-[0_0_15px_rgba(251,44,54,0.25)]">
              {idx + 1}
            </div>
            <span className="text-[10px] font-black tracking-widest uppercase text-zinc-300 text-center w-24 leading-tight">
              {item.title}
            </span>
            {item.description && (
              <span className="text-[9px] text-zinc-500 text-center max-w-[100px] leading-snug hidden md:block">
                {item.description}
              </span>
            )}
            {idx < steps.length - 1 && (
              <div className="absolute top-6 left-12 w-full h-[2px] bg-white/10 -z-0">
                <div className="h-full bg-primary-accent/40 w-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

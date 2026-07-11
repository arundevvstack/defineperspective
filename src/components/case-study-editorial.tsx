import React from 'react';

export default function EditorialLayout({ caseStudy, related, mediaStory }: { caseStudy: any, related: any[], mediaStory: string[] }) {
  const displayGeos = Array.from(new Set([caseStudy.geo, ...(caseStudy.geo_targets || [])])).filter(Boolean);
  const displayIndustries = Array.from(new Set([caseStudy.industry, ...(caseStudy.industries || [])])).filter(Boolean);

  // Fallbacks for synthesized content
  const overview = caseStudy.ai_summary || 'A cinematic enterprise production.';
  const challengeText = caseStudy.business_results ? 'Achieving unprecedented visual fidelity while driving measurable business impact.' : `Elevating the brand narrative for the ${caseStudy.industry || 'premium'} market.`;

  return (
    <div className="container mx-auto max-w-6xl px-6 md:px-12 relative z-10 space-y-40">
      
      {/* 1. OVERVIEW & 2. CHALLENGE */}
      <section id="overview" className="grid lg:grid-cols-2 gap-20 pt-20 border-t border-white/5">
        <div>
          <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] mb-6">01 // Overview</h3>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight drop-shadow-md">The Vision_</h2>
          <p className="text-xl text-zinc-300 font-light leading-relaxed opacity-90 max-w-lg">
            {overview}
          </p>
        </div>
        <div className="bg-white/[0.02] border border-white/5 p-12 rounded-[2rem] backdrop-blur-md shadow-2xl">
          <h3 className="text-[10px] font-mono text-amber-500 uppercase tracking-[0.4em] mb-6">02 // The Challenge</h3>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 leading-tight drop-shadow-md text-white">Strategic Objective</h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            {challengeText}
          </p>
        </div>
      </section>

      {/* 3. MARKET ANALYSIS */}
      <section className="bg-black border border-white/10 rounded-[3rem] p-12 lg:p-20 shadow-3xl">
        <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] mb-12">03 // Market Analysis</h3>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">Primary Sector</h4>
            <div className="flex flex-wrap gap-2">
              {displayIndustries.map((ind, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-mono uppercase tracking-widest">{ind as string}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">Target Demographics</h4>
            <div className="flex flex-wrap gap-2">
              {displayGeos.map((geo, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-mono uppercase tracking-widest">{geo as string}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">Client</h4>
            <p className="text-2xl font-black italic text-zinc-300">{caseStudy.client_name || 'Enterprise'}</p>
          </div>
        </div>
      </section>

      {/* 4. CREATIVE DIRECTION */}
      {caseStudy.cinematic_direction && (
        <section className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] mb-6">04 // Creative Direction</h3>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">Visual Logic_</h2>
          </div>
          <div className="lg:col-span-7 bg-white/5 p-12 border-l-4 border-primary-accent rounded-r-[2rem]">
            <p className="text-xl text-white font-light leading-loose uppercase tracking-widest opacity-90">
              {caseStudy.cinematic_direction}
            </p>
          </div>
        </section>
      )}

      {/* 5. WORKFLOW TIMELINE */}
      {caseStudy.workflows && caseStudy.workflows.length > 0 && (
        <section>
          <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] mb-16">05 // Pipeline Execution</h3>
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-accent/60 via-white/10 to-transparent hidden lg:block" />

            <div className="flex flex-col gap-0">
              {caseStudy.workflows.map((workflow: string, idx: number) => {
                // Split "01 — Title: Description" into parts
                const colonIdx = workflow.indexOf(':');
                const titlePart = colonIdx > -1 ? workflow.substring(0, colonIdx) : workflow;
                const descPart = colonIdx > -1 ? workflow.substring(colonIdx + 1).trim() : '';
                const stepNum = (idx + 1).toString().padStart(2, '0');

                return (
                  <div key={idx} className="flex gap-6 lg:gap-10 group">
                    {/* Step indicator */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-14 h-14 rounded-full border border-primary-accent/40 bg-black flex items-center justify-center z-10 group-hover:border-primary-accent group-hover:bg-primary-accent/10 transition-all duration-300">
                        <span className="text-xs font-black text-primary-accent font-mono">{stepNum}</span>
                      </div>
                      {idx < caseStudy.workflows.length - 1 && (
                        <div className="w-px flex-1 min-h-[2rem] bg-white/5 my-2 lg:hidden" />
                      )}
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 pb-10 ${idx < caseStudy.workflows.length - 1 ? 'border-b border-white/5' : ''}`}>
                      <div className="group-hover:translate-x-1 transition-transform duration-300">
                        <p className="text-[10px] font-mono text-primary-accent/60 uppercase tracking-widest mb-1">Step {stepNum}</p>
                        <h4 className="text-base font-black text-white uppercase tracking-wider mb-2 group-hover:text-primary-accent transition-colors duration-300">
                          {titlePart.replace(/^\d+\s*[—–-]\s*/, '')}
                        </h4>
                        {descPart && (
                          <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">{descPart}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

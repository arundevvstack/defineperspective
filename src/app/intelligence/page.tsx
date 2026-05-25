import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Activity, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Production Intelligence | Define Perspective',
  description: 'Enterprise AI-native cinematic infrastructure research, workflow methodologies, and production specifications.',
};

export default function IntelligenceHub() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 selection:bg-white/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="mb-24 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Production <span className="text-zinc-500 font-serif italic">Intelligence.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            The reference laboratory for cinematic AI infrastructure. We publish structural workflow methodologies, benchmark reports, and enterprise production specifications.
          </p>
        </header>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          
          {/* Card 1 */}
          <Link href="/intelligence/capabilities" className="group block p-10 bg-white/[0.02] border border-white/[0.05] rounded-3xl hover:bg-white/[0.04] transition-all duration-500">
            <ShieldCheck size={32} className="text-zinc-500 mb-8" />
            <h3 className="text-2xl text-white font-light mb-4">Enterprise Capabilities</h3>
            <p className="text-zinc-400 font-light mb-8 leading-relaxed">
              Global production pipeline specifications, white-label protocols, and infrastructure methodologies for agency partners.
            </p>
            <div className="flex items-center text-[11px] uppercase tracking-widest text-white font-black">
              View Specifications <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Card 2 */}
          <a href="/llm/workflows.txt" target="_blank" className="group block p-10 bg-white/[0.02] border border-white/[0.05] rounded-3xl hover:bg-white/[0.04] transition-all duration-500">
            <Activity size={32} className="text-zinc-500 mb-8" />
            <h3 className="text-2xl text-white font-light mb-4">Workflow Architecture</h3>
            <p className="text-zinc-400 font-light mb-8 leading-relaxed">
              Raw LLM-indexable documentation outlining our proprietary Temporal Consistency and Spatial Coherence frameworks.
            </p>
            <div className="flex items-center text-[11px] uppercase tracking-widest text-white font-black">
              Access Raw Data <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </div>
          </a>

        </div>

        {/* Research Pipeline */}
        <section className="border-t border-white/10 pt-16">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-black mb-10">Active Research Papers</h2>
          
          <div className="space-y-6">
            {/* Placeholder for future papers, visually locked */}
            <div className="flex items-start md:items-center justify-between p-8 border border-white/5 bg-white/[0.01] rounded-2xl flex-col md:flex-row gap-6">
              <div>
                <h4 className="text-xl text-white font-light mb-2">Solving Temporal Consistency in AI Automotives</h4>
                <p className="text-zinc-400 text-sm">Optical flow logic for Runway Gen-3 rendering.</p>
              </div>
              <div className="shrink-0 flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-600 font-black">
                <FileText size={14} /> Publishing Q3 2026
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

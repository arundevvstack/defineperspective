import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Cinematic Production | UAE & Dubai | Define Perspective',
  description: 'White-glove AI-native cinematic infrastructure for Dubai luxury brands, automotive campaigns, and enterprise hospitality groups.',
};

export default function UaeLandingPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 selection:bg-white/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Luxury Hero */}
        <section className="mb-32 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-500 font-black mb-8 justify-center md:justify-start">
              <Globe2 size={14} /> Dubai / UAE / GCC
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1]">
              Cinematic AI for <br className="hidden md:block"/>
              <span className="font-serif italic text-zinc-500">Luxury Brands.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl mb-12 mx-auto md:mx-0">
              We provide Dubai's most exclusive automotive, hospitality, and real estate brands with the AI-native infrastructure required to execute impossible visual campaigns.
            </p>
            <Link href="/contact" className="inline-flex h-16 md:h-20 px-10 md:px-14 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[11px] items-center gap-4 hover:bg-zinc-200 transition-all duration-500 shadow-2xl active:scale-95 group">
              Request VIP Consultation <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="flex-1 w-full relative">
             <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
               {/* Abstract placeholder for high-end automotive/luxury AI shot */}
               <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-zinc-800" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <p className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase">Luxury Render Pipeline</p>
               </div>
             </div>
          </div>
        </section>

        {/* Semantic Authority Matrix */}
        <section className="border-t border-white/10 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl text-white font-light mb-4">Unconstrained Execution</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Execute campaigns without the logistical friction of location scouting, talent visas, or massive crew overheads. Perfect for rapid UAE deployments.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-white font-light mb-4">Architectural Pre-Viz</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Transform CAD and architectural blueprints into photorealistic, temporally consistent luxury real estate commercials before ground is broken.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-white font-light mb-4">White-Glove Integration</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We operate as the invisible cinematic infrastructure layer for premier Dubai advertising agencies. Strict NDAs and secure data environments.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

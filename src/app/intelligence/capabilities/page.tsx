import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Capabilities | Define Perspective',
  description: 'White-label AI cinematic infrastructure capabilities for global agencies and luxury brands.',
};

export default function CapabilitiesMatrix() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 selection:bg-white/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <header className="mb-20 max-w-4xl">
          <Link href="/intelligence" className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-8 inline-block">
            ← Back to Intelligence
          </Link>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Enterprise <span className="font-serif italic text-zinc-500">Capabilities.</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
            Define Perspective operates as an AI-native cinematic infrastructure layer. We deploy proprietary workflows to execute global campaigns with mathematical precision and zero logistical risk.
          </p>
        </header>

        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 md:p-14">
            <h3 className="text-2xl text-white font-light mb-8 border-b border-white/10 pb-6">Agency White-Label Protocols</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex items-start gap-4">
                <CheckCircle className="text-zinc-600 shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-white font-light mb-1">Invisible Infrastructure</strong>
                  <p className="text-zinc-400 text-sm leading-relaxed">We operate under strict NDAs, powering your creative agency's AI deliverables invisibly. Your clients see your brand; we supply the execution.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-zinc-600 shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-white font-light mb-1">SOC2 Compliant Workflows</strong>
                  <p className="text-zinc-400 text-sm leading-relaxed">All generative models run in isolated enterprise environments ensuring your proprietary brand assets are never leaked to public training datasets.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 md:p-14">
            <h3 className="text-2xl text-white font-light mb-8 border-b border-white/10 pb-6">Production Specifications</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex items-start gap-4">
                <CheckCircle className="text-zinc-600 shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-white font-light mb-1">Temporal Consistency</strong>
                  <p className="text-zinc-400 text-sm leading-relaxed">Elimination of generative flickering via proprietary optical flow mapping and rigorous post-interpolation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-zinc-600 shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-white font-light mb-1">8K Broadcast Mastering</strong>
                  <p className="text-zinc-400 text-sm leading-relaxed">Deliverables mastered to global broadcast specifications (Rec.709/HDR10) with pristine audio synthesis.</p>
                </div>
              </li>
            </ul>
          </section>

        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Link href="/contact" className="inline-flex h-16 px-12 bg-white text-black rounded-2xl items-center text-[11px] uppercase font-black tracking-widest hover:bg-zinc-200 transition-all duration-500 shadow-2xl active:scale-95 group">
            Discuss Enterprise Integration <ArrowRight size={18} className="ml-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

      </div>
    </main>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, containerStagger, heroImageScale, durations, easing } from '@/lib/motion-tokens';
import Link from 'next/link';

interface CaseStudyClientProps {
  caseStudy: any;
  videoMeta: any;
  aiWorkflow: any;
  pipeline: any;
  relatedSlugs: string[];
}

export default function CaseStudyClient({ caseStudy, videoMeta, aiWorkflow, pipeline, relatedSlugs }: CaseStudyClientProps) {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerStagger}
      className="bg-black text-white min-h-screen font-sans"
    >
      {/* Hero Cinematic Section */}
      <motion.section 
        variants={heroImageScale}
        className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-neutral-900">
          {videoMeta?.contentUrl ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              fetchPriority="high"
              preload="auto"
              className="w-full h-full object-cover opacity-40"
              src={videoMeta.contentUrl}
            />
          ) : (
            <div className="w-full h-full bg-neutral-800 animate-pulse"></div>
          )}
        </div>
        <motion.div variants={fadeUpVariant} className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-zinc-400 uppercase tracking-widest text-sm mb-4">{caseStudy.client_industry}</p>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tighter">{caseStudy.title}</h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">{caseStudy.excerpt}</p>
        </motion.div>
      </motion.section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-24">
        
        {/* Main Editorial Content */}
        <motion.div variants={containerStagger} className="lg:col-span-8 space-y-32">
          
          {/* The Film */}
          <motion.section variants={fadeUpVariant}>
            <h2 className="text-3xl font-light mb-8 tracking-wide">The Final Film</h2>
            <div className="aspect-video w-full bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-2xl">
              {videoMeta?.embedUrl ? (
                <iframe 
                  src={videoMeta.embedUrl} 
                  className="w-full h-full" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : videoMeta?.contentUrl ? (
                <video controls preload="metadata" className="w-full h-full object-cover">
                  <source src={videoMeta.contentUrl} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-500">Video Asset Pending</div>
              )}
            </div>
          </motion.section>

          {/* Workflow & Challenges */}
          <motion.section variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-medium mb-6 text-white tracking-wide">Visual Storytelling</h3>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">{caseStudy.visual_storytelling}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6 text-white tracking-wide">Production Challenges</h3>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">{caseStudy.production_challenges}</p>
            </div>
          </motion.section>

          {/* Transcript Engine */}
          {caseStudy.transcript && (
            <motion.section variants={fadeUpVariant} className="bg-white/[0.02] p-12 rounded-2xl border border-white/[0.05] relative overflow-hidden backdrop-blur-2xl">
              <h3 className="text-lg font-medium mb-6 uppercase tracking-widest text-zinc-300 text-xs">Cinematic Script & Mapping</h3>
              <div className="prose prose-invert prose-p:text-zinc-400 font-light leading-relaxed max-w-none">
                <p className="whitespace-pre-wrap">{caseStudy.transcript}</p>
              </div>
            </motion.section>
          )}
        </motion.div>

        {/* Sidebar Luxury Specifications */}
        <motion.div variants={containerStagger} className="lg:col-span-4 space-y-8">
          
          {/* Production Workflow */}
          <motion.div variants={fadeUpVariant} className="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 mb-8 pb-4 border-b border-white/[0.05]">
              Production Specifications
            </h3>
            <ul className="space-y-6 text-zinc-400">
              {Object.entries(aiWorkflow || {}).map(([k, v]) => (
                <li key={k} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{k.replace('_', ' ')}</span>
                  <span className="text-white font-medium tracking-wide">{String(v)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Authority Mesh Linking */}
          <motion.div variants={fadeUpVariant} className="bg-white/[0.01] border border-white/[0.03] p-8 rounded-2xl">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-6 pb-4 border-b border-white/[0.05]">Semantic Authority Mesh</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.geo_tags?.map((tag: string) => (
                <Link key={tag} href={`/ai-video-production-${tag.toLowerCase().replace(/\s+/g, '-')}`} className="text-[10px] uppercase tracking-widest bg-white/[0.03] hover:bg-white/10 border border-white/[0.05] transition-colors px-4 py-2 rounded-full text-zinc-400">
                  {tag}
                </Link>
              ))}
              {relatedSlugs?.map((slug: string) => (
                <Link key={slug} href={`/${slug}`} className="text-[10px] uppercase tracking-widest bg-white/[0.03] hover:bg-white/10 border border-white/[0.05] transition-colors px-4 py-2 rounded-full text-zinc-400">
                  {slug.split('-').join(' ')}
                </Link>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Strategic Consultation CTA */}
      <motion.section variants={fadeUpVariant} className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-12 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-3xl">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-4">Ready to elevate your production?</h3>
            <p className="text-zinc-400 font-light text-lg">Discuss your cinematic infrastructure requirements with our strategy team.</p>
          </div>
          <Link href="/contact" className="shrink-0 h-16 md:h-20 px-10 md:px-14 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[11px] flex items-center gap-4 hover:bg-zinc-200 transition-all duration-500 shadow-2xl active:scale-95">
            Request Consultation <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
}

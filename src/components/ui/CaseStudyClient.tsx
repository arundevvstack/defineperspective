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
              className="w-full h-full object-cover opacity-40"
              src={videoMeta.contentUrl}
            />
          ) : (
            <div className="w-full h-full bg-neutral-800 animate-pulse"></div>
          )}
        </div>
        <motion.div variants={fadeUpVariant} className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-amber-500 uppercase tracking-widest text-sm mb-4">{caseStudy.client_industry}</p>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">{caseStudy.title}</h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-light">{caseStudy.excerpt}</p>
        </motion.div>
      </motion.section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Main Editorial Content */}
        <motion.div variants={containerStagger} className="lg:col-span-8 space-y-24">
          
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
                <video controls className="w-full h-full object-cover">
                  <source src={videoMeta.contentUrl} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-500">Video Asset Pending</div>
              )}
            </div>
          </motion.section>

          {/* Workflow & Challenges */}
          <motion.section variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-6 text-amber-500 tracking-wide">Visual Storytelling</h3>
              <p className="text-neutral-400 leading-relaxed text-lg font-light">{caseStudy.visual_storytelling}</p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6 text-amber-500 tracking-wide">Production Challenges</h3>
              <p className="text-neutral-400 leading-relaxed text-lg font-light">{caseStudy.production_challenges}</p>
            </div>
          </motion.section>

          {/* Transcript Engine */}
          {caseStudy.transcript && (
            <motion.section variants={fadeUpVariant} className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>
              <h3 className="text-xl font-medium mb-4 uppercase tracking-widest text-neutral-300 text-sm">Neural Transcript & Entity Mapping</h3>
              <div className="prose prose-invert prose-p:text-neutral-400 font-light leading-relaxed">
                <p className="whitespace-pre-wrap">{caseStudy.transcript}</p>
              </div>
            </motion.section>
          )}
        </motion.div>

        {/* Sidebar Neural HUD */}
        <motion.div variants={containerStagger} className="lg:col-span-4 space-y-12">
          
          {/* AI Workflow Proof */}
          <motion.div variants={fadeUpVariant} className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-8 rounded-lg shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              {/* Decorative Tech Element */}
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5"/>
                <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-widest text-amber-500 mb-6 border-b border-neutral-800 pb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Neural HUD: Production Workflow
            </h3>
            <ul className="space-y-6 text-neutral-400">
              {Object.entries(aiWorkflow || {}).map(([k, v]) => (
                <li key={k} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">{k.replace('_', ' ')}</span>
                  <span className="text-white font-medium tracking-wide">{String(v)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Authority Mesh Linking */}
          <motion.div variants={fadeUpVariant} className="bg-neutral-900/30 border border-neutral-800 p-8 rounded-lg">
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 border-b border-neutral-800 pb-4">Semantic Authority Mesh</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.geo_tags?.map((tag: string) => (
                <Link key={tag} href={`/ai-video-production-${tag.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs uppercase tracking-wider bg-neutral-800 hover:bg-amber-600 transition-colors px-4 py-2 rounded text-neutral-300">
                  {tag}
                </Link>
              ))}
              {relatedSlugs?.map((slug: string) => (
                <Link key={slug} href={`/${slug}`} className="text-xs uppercase tracking-wider bg-neutral-800 hover:bg-amber-600 transition-colors px-4 py-2 rounded text-neutral-300">
                  {slug.split('-').join(' ')}
                </Link>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}

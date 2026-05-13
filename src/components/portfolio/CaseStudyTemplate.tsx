import React from 'react';
import GlassNavbar from "@/components/glass-navbar";
import LiteYouTube from "@/components/lite-youtube";
import Link from "next/link";
import { ArrowRight, Sparkles, BrainCircuit, Target, CheckCircle2 } from "lucide-react";
import AIRetrievalLayer from "@/components/seo/AIRetrievalLayer";

interface CaseStudyTemplateProps {
  id: string;
  title: string;
  accentTitle: string;
  nodeNumber: string;
  category: string;
  mission: string;
  service: string;
  sector: string;
  technical: string;
  videoId: string;
  craftTitle: string;
  craftDescription: string;
  aiWorkflowTitle: string;
  aiWorkflowDescription: string;
  resultsTitle: string;
  resultsMetric: string;
  resultsLabel: string;
  ctaHeadline: string;
  ctaAccent: string;
  region?: string;
  transcript?: string;
}

export default function CaseStudyTemplate({
  id,
  title,
  accentTitle,
  nodeNumber,
  category,
  mission,
  service,
  sector,
  technical,
  videoId,
  craftTitle,
  craftDescription,
  aiWorkflowTitle,
  aiWorkflowDescription,
  resultsTitle,
  resultsMetric,
  resultsLabel,
  ctaHeadline,
  ctaAccent,
  region = "India",
  transcript
}: CaseStudyTemplateProps) {
  
  const insights = [
    `${service} for ${sector}`,
    `Technical Stack: ${technical}`,
    aiWorkflowDescription,
    mission
  ];

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      <AIRetrievalLayer 
        title={`${title} Case Study | DP AI Studio`}
        insights={insights}
        entityId={`portfolio-${id}`}
        region={region}
        category={category}
      />
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12">
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.3em] bg-primary-accent/10 backdrop-blur-md">
              Case Study: Node {nodeNumber} // {category}
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-blacker uppercase leading-[0.8] text-white italic">
            {title} <br />
            <span className="text-primary-accent">{accentTitle}</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 border-y border-white/5 py-20">
             <div className="flex-1 space-y-6">
                <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest leading-loose">Mission_</h3>
                <p className="text-xl text-zinc-300 font-light leading-relaxed uppercase tracking-widest leading-loose">
                  "{mission}"
                </p>
             </div>
             <div className="flex-1 flex flex-wrap gap-8 items-center justify-end">
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Service</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">{service}</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Sector</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">{sector}</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Technical</p>
                   <p className="text-sm font-black text-white uppercase tracking-widest">{technical}</p>
                </div>
             </div>
          </div>
        </header>

        {/* VIDEO SECTION */}
        <section className="mb-40">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <LiteYouTube 
                videoId={videoId}
                title={`${title} - DP AI Studio Case Study`}
                priority
              />
           </div>
        </section>

        {/* THE CRAFT SECTION */}
        <section className="mb-40 grid md:grid-cols-2 gap-24 items-start">
           <div className="space-y-12">
              <div className="flex items-center gap-4">
                 <Sparkles className="text-primary-accent" size={32} />
                 <h2 className="text-3xl md:text-5xl font-black uppercaseer">{craftTitle}</h2>
              </div>
              <p className="text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
                {craftDescription}
              </p>
              <div className="p-12 rounded-[2.5rem] bg-white/5 border border-white/5">
                 <div className="flex items-center gap-6 mb-8 text-primary-accent">
                    <BrainCircuit size={28} />
                    <h4 className="text-xl font-black uppercase tracking-widest italic">{aiWorkflowTitle}</h4>
                 </div>
                 <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-loose">
                    {aiWorkflowDescription}
                 </p>
              </div>
           </div>
           <div className="grid gap-12">
              <div className="p-12 rounded-3xl bg-primary-accent/10 border border-primary-accent/20 flex flex-col justify-between h-[300px]">
                 <Target className="text-primary-accent" size={32} />
                 <p className="text-3xl font-black uppercase tracking-tighter italic">{resultsMetric}</p>
                 <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">{resultsLabel}</p>
              </div>
              
              {transcript && (
                <div className="p-8 rounded-3xl border border-white/5 bg-white/2">
                   <h5 className="text-[10px] font-mono text-zinc-500 uppercase mb-6">Multimodal Transcription_</h5>
                   <p className="text-xs text-zinc-400 font-mono leading-relaxed max-h-40 overflow-y-auto pr-4 scrollbar-hide">
                      {transcript}
                   </p>
                </div>
              )}
           </div>
        </section>

        {/* FOOTER CTA */}
        <section className="text-center group p-20 rounded-[5rem] border border-white/5 bg-white/2 backdrop-blur-3xl">
           <h2 className="text-4xl md:text-7xl font-black uppercaseer text-white mb-16 leading-[0.8] italic">
             {ctaHeadline} <br /><span className="text-primary-accent italic font-black">{ctaAccent}</span>
           </h2>
           <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                href={`/contact?subject=Portfolio Inquiry: ${title}`}
                className="h-20 px-16 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-4 hover:bg-transparent transition-all duration-300"
              >
                Inquire for AI Shoot <ArrowRight size={20} />
              </Link>
           </div>
        </section>
      </div>
    </main>
  );
}

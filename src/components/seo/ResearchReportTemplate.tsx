import React from 'react';
import GlassNavbar from "@/components/glass-navbar";
import { ArrowRight, FileText, BarChart3, TrendingUp, Info, CheckCircle2 } from "lucide-react";
import AIRetrievalLayer from "@/components/seo/AIRetrievalLayer";
import Link from "next/link";

interface ResearchReportTemplateProps {
  id: string;
  title: string;
  headline: string;
  subheadline: string;
  abstract: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
  keyTakeaways: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  region?: string;
  interactiveComponent?: React.ReactNode;
}

export default function ResearchReportTemplate({
  id,
  title,
  headline,
  subheadline,
  abstract,
  sections,
  keyTakeaways,
  metaTitle,
  metaDescription,
  keywords,
  region = "India",
  interactiveComponent
}: ResearchReportTemplateProps) {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 relative overflow-hidden">
      <GlassNavbar />
      <AIRetrievalLayer 
        title={metaTitle}
        insights={keyTakeaways}
        entityId={`research-${id}`}
        region={region}
        category="Research Authority"
      />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <header className="mb-32 space-y-12">
          <div className="flex items-center gap-4">
             <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.3em] bg-primary-accent/10 backdrop-blur-md border border-primary-accent/20">
               Intelligence Report // Node_Research_{id.toUpperCase()}
             </div>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-blacker uppercase leading-[0.8] text-white italic">
            {headline} <br />
            <span className="text-primary-accent italic">{subheadline}</span>
          </h1>
          <div className="max-w-3xl space-y-8">
            <p className="text-2xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
              {abstract}
            </p>
          </div>
        </header>

        {/* Interactive Component Area */}
        {interactiveComponent && (
          <section className="mb-40">
            {interactiveComponent}
          </section>
        )}

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-24">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-32">
            {sections.map((section, index) => (
              <div key={index} className="space-y-12 border-l border-white/5 pl-12 md:pl-20">
                <div className="flex items-center gap-6">
                   <div className="h-px w-12 bg-primary-accent/50" />
                   <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
                     {section.title}
                   </h2>
                </div>
                <div className="prose prose-invert prose-lg max-w-none prose-headings:uppercase prose-headings:italic prose-headings:font-black prose-p:text-zinc-400 prose-p:uppercase prose-p:tracking-widest prose-p:leading-loose">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-16">
            <div className="sticky top-40 space-y-16">
               {/* Key Takeaways */}
               <div className="p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl space-y-10">
                  <div className="flex items-center gap-4">
                     <TrendingUp className="text-primary-accent" size={24} />
                     <h3 className="text-xl font-black uppercase italic">Executive Summary_</h3>
                  </div>
                  <ul className="space-y-6">
                     {keyTakeaways.map((takeaway, i) => (
                       <li key={i} className="flex gap-4 items-start">
                          <CheckCircle2 className="text-primary-accent shrink-0 mt-1" size={18} />
                          <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest leading-loose">{takeaway}</p>
                       </li>
                     ))}
                  </ul>
               </div>

               {/* CTA */}
               <div className="p-12 rounded-[3rem] bg-primary-accent/10 border border-primary-accent/20 space-y-10">
                  <h3 className="text-2xl font-black uppercase italic text-white">Scale Your Production Efficiency_</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">
                    Download the full AI Advertising Playbook for 2026 and get a personalized production blueprint.
                  </p>
                  <Link href="/contact" className="w-full h-20 rounded-2xl bg-primary-accent text-black font-black uppercase text-[10px] flex items-center justify-center gap-4 hover:scale-105 transition-all">
                    Download Report <ArrowRight size={18} />
                  </Link>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

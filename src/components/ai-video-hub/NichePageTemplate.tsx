import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import NeuralHero from "@/components/ai-video-hub/NeuralHero";
import NeuralPipeline from "@/components/ai-video-hub/NeuralPipeline";
import AIVideoComparison from "@/components/ai-video-hub/AIVideoComparison";
import BlueprintLeadMagnet from "@/components/ai-video-hub/BlueprintLeadMagnet";
import FAQSection from "@/components/faq-section";
import NeuralSeoLayer from "@/components/neural-seo-layer";
import { CheckCircle2, Play } from "lucide-react";
import Link from "next/link";

interface NichePageProps {
  title: string;
  headline: string;
  subheadline: string;
  description: string;
  contentTitle: string;
  contentBody: string;
}

export default function NichePageTemplate({ title, headline, subheadline, description, contentTitle, contentBody }: NichePageProps) {
  return (
    <main className="min-h-screen bg-obsidian text-white overflow-x-hidden theme-blue">
      <NeuralSeoLayer />
      <GlassNavbar />
      
      {/* Specialized Hero */}
      <section className="relative pt-40 pb-20 px-6 bg-obsidian overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-5xl space-y-12">
            <span className="text-primary-accent font-mono text-[10px] uppercase font-black underline decoration-2 underline-offset-8">
              Authority Node {" // "} {title}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] text-white">
              {headline}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 font-light uppercase leading-relaxed max-w-4xl">
              {subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-32 px-6 md:px-12 border-y border-white/5 bg-black/40">
         <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-10">
                  <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9]">
                     {contentTitle}
                  </h2>
                  <p className="text-lg md:text-xl text-zinc-400 font-light uppercase leading-relaxed">
                     {contentBody} DP AI Studio combines cinematic heritage with neural innovation to redefine visual storytelling.
                  </p>
                  <div className="pt-8">
                     <Link href="https://www.youtube.com/@DP.AI.Studio" target="_blank" className="text-primary-accent font-mono text-[10px] uppercase hover:underline flex items-center gap-3">
                        <Play size={12} fill="currentColor" /> Explore Our Neural Gallery_
                     </Link>
                  </div>
                  <div className="space-y-6">
                     {[
                       "Cinematic Neural Fidelity",
                       "High-Velocity Turnaround",
                       "Platform-Native Strategy"
                     ].map(point => (
                       <div key={point} className="flex gap-6 group">
                          <div className="h-10 w-10 rounded-xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-black transition-all">
                             <CheckCircle2 size={20} />
                          </div>
                          <span className="text-sm font-bold uppercase text-white">{point}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
                  <div className="aspect-video rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center">
                     <span className="text-[10px] font-mono text-zinc-700 uppercase">Cinematic Preview_</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <NeuralPipeline />
      <AIVideoComparison />
      <BlueprintLeadMagnet />
      <FAQSection />
    </main>
  );
}

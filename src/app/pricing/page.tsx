import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Video Production Pricing & Costs | DP AI Studio",
  description: "Understand the economics of AI video production vs traditional commercial shoots. See how DP AI Studio reduces enterprise production costs by up to 60%.",
};

export default function PricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "The Economics of AI Video Production",
        "description": "A comprehensive guide comparing the costs of traditional ad film production vs AI-generated commercials.",
        "author": {
          "@type": "Organization",
          "name": "DP AI Studio"
        },
        "about": {
          "@type": "Thing",
          "name": "Cost of AI Video Production"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does AI video production cost compared to traditional shoots?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI video production can reduce enterprise costs by 40-60%. It eliminates location fees, massive crew sizes, and expensive physical set constructions."
            }
          },
          {
            "@type": "Question",
            "name": "Is AI video cheaper for TV commercials?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, high-end TVC production using generative AI is significantly cheaper and faster, while maintaining 4K/8K broadcast fidelity."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GlassNavbar />
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/10 blur-[280px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <header className="mb-32 text-center flex flex-col items-center">
          <div className="px-6 py-2 rounded-full border border-primary-accent/30 text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] bg-primary-accent/10 mb-12">
            Enterprise Pricing Guide
          </div>
          <h1 className="text-5xl md:text-8xl font-blacker uppercase leading-[0.8] tracking-tighter mb-12 italic">
            Economics of <br />
            <span className="text-primary-accent">AI Video_</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl font-light uppercase tracking-widest leading-relaxed">
            Discover why enterprise brands are shifting to generative AI pipelines to slash production costs and accelerate time-to-market.
          </p>
        </header>

        <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic">Traditional vs <br /><span className="text-primary-accent">AI Costs_</span></h2>
            <div className="space-y-6">
               <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                 <h3 className="text-2xl font-black uppercase text-red-400 mb-4">Traditional Commercial</h3>
                 <ul className="space-y-3 font-mono text-xs text-zinc-400 uppercase tracking-widest">
                   <li>- Location Permits & Travel</li>
                   <li>- 50+ Crew Members</li>
                   <li>- Expensive Gear Rentals</li>
                   <li>- Weather Delays</li>
                 </ul>
               </div>
               <div className="p-8 rounded-3xl bg-primary-accent/10 border border-primary-accent/30">
                 <h3 className="text-2xl font-black uppercase text-primary-accent mb-4">DP AI Studio Pipeline</h3>
                 <ul className="space-y-3 font-mono text-xs text-white uppercase tracking-widest">
                   <li><CheckCircle2 size={14} className="inline text-primary-accent mr-2"/> Neural Rendering Studio</li>
                   <li><CheckCircle2 size={14} className="inline text-primary-accent mr-2"/> Lean Specialized AI Team</li>
                   <li><CheckCircle2 size={14} className="inline text-primary-accent mr-2"/> Zero Weather/Location Dependencies</li>
                   <li><CheckCircle2 size={14} className="inline text-primary-accent mr-2"/> Infinite Revision Loops via Latent Space</li>
                 </ul>
               </div>
            </div>
          </div>
          <LeadCaptureForm />
        </section>

        <section className="mb-32">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Enterprise Pricing <span className="text-primary-accent">Tiers_</span></h2>
             <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.4em]">Transparent Economics for Global Brands</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {/* Tier 1 */}
             <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors flex flex-col">
                <h3 className="text-2xl font-black uppercase text-white mb-4">Pilot AI Campaign</h3>
                <p className="text-zinc-400 text-sm font-light mb-8">Perfect for testing AI performance creatives on Meta/YouTube.</p>
                <div className="text-4xl font-black uppercase text-primary-accent mb-8 italic">Custom <span className="text-lg text-zinc-500 font-mono tracking-widest block not-italic mt-2">Starting Base</span></div>
                <ul className="space-y-4 mb-12 flex-1">
                   {["1x AI Hero Video", "3x A/B Variations", "AI Voiceover Integration", "Standard AI Rendering"].map((t, i) => (
                     <li key={i} className="flex gap-3 text-sm font-mono text-zinc-300 uppercase tracking-widest">
                       <CheckCircle2 size={16} className="text-primary-accent shrink-0" /> {t}
                     </li>
                   ))}
                </ul>
                <Link href="#lead-capture" className="h-14 rounded-full bg-white/10 flex items-center justify-center font-black uppercase text-xs hover:bg-primary-accent hover:text-black transition-colors">
                   Inquire Now
                </Link>
             </div>

             {/* Tier 2 */}
             <div className="p-10 bg-primary-accent/10 border-2 border-primary-accent rounded-[3rem] relative flex flex-col transform md:-translate-y-4 shadow-[0_0_50px_rgba(var(--primary-accent-rgb),0.1)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-primary-accent text-black font-black uppercase text-[9px] tracking-widest rounded-full">
                   Most Popular
                </div>
                <h3 className="text-2xl font-black uppercase text-white mb-4">Commercial Suite</h3>
                <p className="text-zinc-400 text-sm font-light mb-8">Full cinematic TVC replacement pipeline for regional campaigns.</p>
                <div className="text-4xl font-black uppercase text-primary-accent mb-8 italic">Custom <span className="text-lg text-zinc-500 font-mono tracking-widest block not-italic mt-2">Volume Based</span></div>
                <ul className="space-y-4 mb-12 flex-1">
                   {["Cinematic AI Brand Film", "Human Talent + AI VFX", "Custom Neural LoRAs", "Advanced Color Grading", "Priority Rendering"].map((t, i) => (
                     <li key={i} className="flex gap-3 text-sm font-mono text-white uppercase tracking-widest font-bold">
                       <CheckCircle2 size={16} className="text-primary-accent shrink-0" /> {t}
                     </li>
                   ))}
                </ul>
                <Link href="#lead-capture" className="h-14 rounded-full bg-primary-accent text-black flex items-center justify-center font-black uppercase text-xs hover:scale-105 transition-transform">
                   Start Campaign
                </Link>
             </div>

             {/* Tier 3 */}
             <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors flex flex-col">
                <h3 className="text-2xl font-black uppercase text-white mb-4">Global Enterprise</h3>
                <p className="text-zinc-400 text-sm font-light mb-8">Massive volume generation for global brand adaptation.</p>
                <div className="text-4xl font-black uppercase text-primary-accent mb-8 italic">Retainer <span className="text-lg text-zinc-500 font-mono tracking-widest block not-italic mt-2">Monthly Partnership</span></div>
                <ul className="space-y-4 mb-12 flex-1">
                   {["Unlimited A/B Variations", "Multi-language AI Lipsync", "Dedicated Neural Director", "Exclusive AI Model Training"].map((t, i) => (
                     <li key={i} className="flex gap-3 text-sm font-mono text-zinc-300 uppercase tracking-widest">
                       <CheckCircle2 size={16} className="text-primary-accent shrink-0" /> {t}
                     </li>
                   ))}
                </ul>
                <Link href="#lead-capture" className="h-14 rounded-full bg-white/10 flex items-center justify-center font-black uppercase text-xs hover:bg-primary-accent hover:text-black transition-colors">
                   Consult Partner
                </Link>
             </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-32">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-16 text-center">Frequently Asked <span className="text-primary-accent">Questions_</span></h2>
          <div className="max-w-4xl mx-auto space-y-8">
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h4 className="text-xl font-black uppercase text-white mb-4">How much does AI video production cost compared to traditional shoots?</h4>
                <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-xs">AI video production can reduce enterprise costs by 40-60%. It eliminates location fees, massive crew sizes, catering, and expensive physical set constructions, replacing them with high-fidelity neural environments.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h4 className="text-xl font-black uppercase text-white mb-4">Is AI video cheaper for TV commercials?</h4>
                <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-xs">Yes, high-end TVC production using generative AI is significantly cheaper and faster, while maintaining 4K/8K broadcast fidelity. The budget goes entirely into creative strategy and AI compute, rather than logistics.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h4 className="text-xl font-black uppercase text-white mb-4">Are there hidden rendering costs?</h4>
                <p className="text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-xs">No. Our project-based quotes include all GPU compute and cloud rendering costs necessary to achieve the final cinematic output.</p>
             </div>
          </div>
        </section>
      </div>
    </main>
  );
}

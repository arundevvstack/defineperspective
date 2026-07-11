import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production for SaaS Companies | DP AI Studio",
  description: "High-converting B2B SaaS explainer videos and product demos generated using cinematic AI workflows. Lower your CAC with infinite video testing.",
};

export default function SaasIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Video Production for B2B SaaS",
    "description": "High-fidelity AI explainer videos and product demos designed to lower SaaS Customer Acquisition Cost (CAC).",
    "about": {
      "@type": "Industry",
      "name": "Software as a Service (SaaS)"
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GlassNavbar />
      
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/10 blur-[280px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <header className="mb-32 text-center flex flex-col items-center">
          <div className="px-6 py-2 rounded-full border border-primary-accent/30 text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] bg-primary-accent/10 mb-12">
            B2B Industry Solution
          </div>
          <h1 className="text-5xl md:text-8xl font-blacker uppercase leading-[0.8] tracking-tighter mb-12 italic">
            AI Video for <br />
            <span className="text-primary-accent">SaaS Brands_</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl font-light uppercase tracking-widest leading-relaxed">
            Stop relying on boring screen recordings. Elevate your B2B marketing with cinematic AI explainer videos that drive enterprise pipeline.
          </p>
        </header>

        <section className="mb-32">
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-black uppercase text-white mb-4">Infinite A/B Testing</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed tracking-wide">
                  SaaS growth requires testing hooks. Our generative pipeline allows you to swap out intros, voiceovers, and messaging in minutes without reshooting.
                </p>
             </div>
             <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-black uppercase text-white mb-4">Abstract Concepts</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed tracking-wide">
                  Selling cybersecurity or API infrastructure? AI excels at visualizing abstract, invisible tech concepts through stunning generative motion graphics.
                </p>
             </div>
             <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-black uppercase text-white mb-4">Rapid Localization</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed tracking-wide">
                  Expand into EMEA or APAC instantly. We use AI lip-sync and neural voice cloning to adapt your core explainer video into 40+ languages seamlessly.
                </p>
             </div>
          </div>
        </section>
        
        <section className="mb-32">
           <LeadCaptureForm />
        </section>
      </div>
    </main>
  );
}

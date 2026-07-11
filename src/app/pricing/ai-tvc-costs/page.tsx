import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import LeadCaptureForm from "@/components/lead-capture-form";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI TV Commercial (TVC) Costs & Pricing | DP AI Studio",
  description: "Detailed breakdown of how much an AI-generated TV commercial costs compared to traditional physical production.",
};

export default function AITVCCostsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does an AI TV commercial cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enterprise AI TV commercials typically start between $15,000 and $50,000 depending on duration, VFX complexity, and the number of custom-trained neural actors. This represents a 40-60% savings compared to traditional shoots."
        }
      },
      {
        "@type": "Question",
        "name": "Are there hidden rendering fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. DP AI Studio provides flat project-based pricing that includes all GPU cloud compute, ComfyUI generation, and final post-production rendering."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GlassNavbar />
      
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/10 blur-[280px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <header className="mb-32 text-center flex flex-col items-center">
          <div className="px-6 py-2 rounded-full border border-primary-accent/30 text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] bg-primary-accent/10 mb-12">
            Pricing Breakdown
          </div>
          <h1 className="text-5xl md:text-8xl font-blacker uppercase leading-[0.8] tracking-tighter mb-12 italic">
            AI TVC <span className="text-primary-accent">Costs_</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl font-light uppercase tracking-widest leading-relaxed">
            Eliminate location fees, actor buyouts, and crew day rates. Invest your budget purely into screen value.
          </p>
        </header>

        <section className="mb-32 max-w-4xl mx-auto">
          <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 mb-16">
             <h2 className="text-3xl font-black uppercase italic mb-8">Base <span className="text-primary-accent">Commercial</span> Packages</h2>
             <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                   <div>
                      <h4 className="text-xl font-bold uppercase tracking-widest">15-Second TVC (Regional)</h4>
                      <p className="text-sm font-mono text-zinc-400 mt-2">1 Neural Actor, 2 Scenes</p>
                   </div>
                   <div className="text-2xl font-black text-primary-accent italic">Starting at $15k</div>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                   <div>
                      <h4 className="text-xl font-bold uppercase tracking-widest">30-Second Hero Film (National)</h4>
                      <p className="text-sm font-mono text-zinc-400 mt-2">Custom LoRA Training, VFX, Sound Design</p>
                   </div>
                   <div className="text-2xl font-black text-primary-accent italic">Starting at $25k</div>
                </div>
                <div className="flex justify-between items-end">
                   <div>
                      <h4 className="text-xl font-bold uppercase tracking-widest">60-Second Cinematic Epic</h4>
                      <p className="text-sm font-mono text-zinc-400 mt-2">Multi-Actor, Sci-Fi/Fantasy Sets, 4K Broadcast</p>
                   </div>
                   <div className="text-2xl font-black text-primary-accent italic">Custom Quote</div>
                </div>
             </div>
             
             <div className="mt-12 flex justify-center">
               <Link href="/calculators/ai-ad-film-budget-estimator" className="px-8 py-4 rounded-full bg-primary-accent/10 border border-primary-accent text-primary-accent font-black uppercase text-xs hover:bg-primary-accent hover:text-black transition-colors tracking-widest">
                  Try the Interactive Budget Estimator
               </Link>
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

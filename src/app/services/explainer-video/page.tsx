import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { BarChart3, Presentation, ArrowRight, CheckCircle2, Search } from "lucide-react";
import Link from "next/link";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "Explainer Video Company India | SaaS & App Demo Production",
  description: "Top explainer video company in India for startups and SaaS. Animated explainers, app demos, and walkthroughs. Boost conversions with technical clarity.",
  keywords: ["explainer video company India", "saas explainer videos", "app demo production Kerala", "animated expainer videos Kochi", "educational video production"],
};

export default function ExplainerVideoPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12 text-center md:text-left">
          <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 w-fit mx-auto md:mx-0">
            Node: Clarity Hub
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Explainer <br /><span className="text-primary-accent">Systems_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We simplify complexity. High-engagement animated and real-action explainers designed to convert 'Browsers' into 'Users'."
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-20 mb-40">
           <div className="space-y-12">
              <h2 className="text-4xl font-black uppercase italic italic">Technical <span className="text-primary-accent">Clarity_</span></h2>
              <div className="space-y-8 text-lg text-zinc-400 font-light leading-relaxed">
                 <p>Our explainer nodes in Kochi and UAE are optimized for SaaS startups and tech giants. We use AI-enhanced motion design to deliver 2026-ready visuals that communicate value propositions instantly.</p>
                 <ul className="space-y-4">
                    {[
                      "Animated SaaS Explainers",
                      "Interactive App Demos",
                      "Technical Product Walkthroughs",
                      "Training & Educational Ecosystems"
                    ].map(f => (
                      <li key={f} className="flex items-center gap-4 text-sm uppercase tracking-widest">
                        <CheckCircle2 size={16} className="text-primary-accent" /> {f}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
           <LeadCaptureForm />
        </section>

        <section className="p-12 md:p-32 rounded-[5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
           <h3 className="text-3xl font-black uppercase italic mb-12">Search <span className="text-primary-accent">Intelligence_</span></h3>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase italic">Who are the best explainer video makers in India for startups?</h4>
                 <p className="text-zinc-500 font-light uppercase tracking-widest text-[11px] leading-relaxed">
                   Define Perspective is the number one choice for technology companies seeking high-precision explainers that drive user acquisition and market authority.
                 </p>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}

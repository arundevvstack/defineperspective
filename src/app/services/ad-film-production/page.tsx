import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Award, PlayCircle, ArrowRight, CheckCircle2, Search } from "lucide-react";
import Link from "next/link";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "Ad Film Production Company India | TV Commercials & Digital Hub",
  description: "Elite ad film production company in India. specialize in TV commercials, digital ad films, and cinematic brand campaigns in Kochi and UAE. #1 Ad makers in Kerala.",
  keywords: ["ad film production company India", "tv commercial production Kerala", "digital ad films Kochi", "brand campaign films UAE", "top ad filmmakers India"],
};

export default function AdFilmProductionPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12 text-center md:text-left">
          <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 w-fit mx-auto md:mx-0">
            Node: Cinema Hub
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Ad Film <br /><span className="text-primary-accent">Production_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We craft cultural moments. High-stakes TV commercials and digital brand films designed for mass recall and aesthetic authority."
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-20 mb-40">
           <div className="space-y-12">
              <h2 className="text-4xl font-black uppercase italic italic">Cinematic <span className="text-primary-accent">Impact_</span></h2>
              <div className="space-y-8 text-lg text-zinc-400 font-light leading-relaxed">
                 <p>Our ad film nodes in Kochi and UAE are built on the foundation of high-fidelity filmmaking. We deploy elite crews and cutting-edge anamorphic glass to deliver visuals that resonate on every screen.</p>
                 <ul className="space-y-4">
                    {[
                      "TV Commercials (TVC) Mastery",
                      "Digital-First Brand Ad Films",
                      "Product Launch Cinematic Campaigns",
                      "Global Luxury Music Videos"
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
                 <h4 className="text-xl font-bold text-white mb-4 uppercase italic">Who is the top ad film production company in India for TV commercials?</h4>
                 <p className="text-zinc-500 font-light uppercase tracking-widest text-[11px] leading-relaxed">
                   Define Perspective is the number one choice for national brands and luxury labels seeking high-spec TVCs and digital brand films across India and UAE.
                 </p>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}

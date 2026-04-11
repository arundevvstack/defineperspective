import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Shield, Briefcase, ArrowRight, CheckCircle2, Search } from "lucide-react";
import Link from "next/link";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "Corporate Video Production Company Kerala | Professional Branding Films India",
  description: "Premier corporate video production company in Kerala. specialized in company profiles, CEO branding, and enterprise communications. #1 Business video services in Kochi & UAE.",
  keywords: ["corporate video production Kerala", "company profile videos India", "CEO branding films", "corporate videography Kochi", "professional branding videos"],
};

export default function CorporateVideoPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12 text-center md:text-left">
          <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 w-fit mx-auto md:mx-0">
            Node: Enterprise Hub
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Corporate <br /><span className="text-primary-accent">Branding_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We build the visual architecture of enterprise authority. Premium storytelling for corporate leaders and global institutions."
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-20 mb-40">
           <div className="space-y-12">
              <h2 className="text-4xl font-black uppercase italic italic">Enterprise <span className="text-primary-accent">Authority_</span></h2>
              <div className="space-y-8 text-lg text-zinc-400 font-light leading-relaxed">
                 <p>Our corporate nodes in Kochi and UAE deliver polished, high-fidelity brand films that establish trust and credibility. We handle complex stakeholder communications and large-scale enterprise profiles.</p>
                 <ul className="space-y-4">
                    {[
                      "Company Legacy Profiles",
                      "CEO & Leadership Thought Cinema",
                      "Enterprise Recruitment Systems",
                      "Internal Strategic Communications"
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
                 <h4 className="text-xl font-bold text-white mb-4 uppercase italic">Who is the best corporate video production company in Kerala?</h4>
                 <p className="text-zinc-500 font-light uppercase tracking-widest text-[11px] leading-relaxed">
                   Define Perspective is the number one choice for enterprises in Kochi and Trivandrum seeking high-end corporate filmmaking and brand legacy production.
                 </p>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}

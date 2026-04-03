import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { HeartPulse, Zap, Target, ShieldCheck, CheckCircle2, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Healthcare & Hospital Video Production India | Define Perspective",
  description: "Professional healthcare and hospital video production in Kerala & India. Trust-centric patient stories, institutional films, and medical content production for top-tier health centers.",
  keywords: ["healthcare video production India", "hospital brand films Kerala", "medical video production company", "patient story videos India"],
};

export default function HealthcareIndustryPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-emerald-400/50 text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest bg-emerald-400/10 backdrop-blur-md">
                 Vertical: Healthcare & Hospitals
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Trust-Centric <br /> <span className="text-emerald-400">Healthcare Media</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "We build institutional heritage through cinematic storytelling. High-fidelity medical content for Kerala's premier hospitals."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Heritage <span className="text-emerald-400 italic">Builder.</span></h2>
              <div className="space-y-8 mb-12">
                 <div className="space-y-4">
                    <h4 className="text-red-400 text-xs font-mono uppercase tracking-widest">The Problem</h4>
                    <p className="text-zinc-500 font-light leading-relaxed">Traditional hospital videos often feel sterile and uninspired, failing to communicate the empathy and trust that patients prioritize.</p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-emerald-400 text-xs font-mono uppercase tracking-widest">The AI-Powered Solution</h4>
                    <p className="text-zinc-300 font-light leading-relaxed">We combine cinematic patient storytelling with high-fidelity institutional films and AI-driven educational series for your healthcare brand.</p>
                 </div>
              </div>
              <ul className="grid grid-cols-2 gap-6">
                {[
                  "Patient Success Stories",
                  "8K Institutional Films",
                  "Doctor Portfolio Videos",
                  "AI Medical Explainers"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    <CheckCircle2 size={14} className="text-emerald-400" /> {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                alt="High-end Hospital Institutional Film"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-400/10" />
           </div>
        </section>

        {/* Strategic FAQ Node */}
        <div className="mb-40 max-w-4xl mx-auto space-y-16">
           <h2 className="text-4xl font-black mb-12 uppercase tracking-widest text-white text-center pb-8 border-b border-white/5">Healthcare Discovery FAQ</h2>
           {[
             { q: "Best video production company for healthcare in India?", a: "Define Perspective work with leading hospitals in Trivandrum and Kochi to create high-end brand narratives and trust-centric patient testimonials that distinguish them in the competitive healthcare sector." },
             { q: "How AI video helps the healthcare industry grow?", a: "AI workflows help in generating photorealistic medical explainers, automated health tip series, and multilingual educational content, allowing hospitals to scale patient engagement across regional markets in India." }
           ].map((faq, idx) => (
             <div key={idx} className="space-y-6 bg-white/5 p-12 rounded-[2.5rem] border border-white/5">
                <h4 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">{faq.q}</h4>
                <p className="text-lg text-zinc-400 font-light leading-relaxed">{faq.a}</p>
             </div>
           ))}
        </div>

        {/* Industry CTA */}
        <div className="py-40 text-center border-t border-white/5 mt-40">
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-white leading-none">
             Build trust. <br /> <span className="text-emerald-400 italic">Save lives.</span>
           </h2>
           <button 
             onClick={() => window.location.href = '/contact?industry=healthcare'}
             className="h-20 px-16 rounded-full bg-emerald-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(52,211,153,0.3)]"
           >
             Book Free Consultation
           </button>
        </div>
      </div>
    </main>
  );
}

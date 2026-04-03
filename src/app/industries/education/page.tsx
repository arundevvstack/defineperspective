import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { GraduationCap, Zap, Target, PlayCircle, CheckCircle2, Cpu } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Education & EdTech Video Production India | Define Perspective",
  description: "High-end education and EdTech video production in Kerala & India. Scaling learning content with AI-avatar presenters, course videos, and marketing ads for digital-first schools.",
  keywords: ["EdTech video production India", "educational video content company", "course video production Kerala", "AI avatars for edtech India"],
};

export default function EducationIndustryPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      {/* Background Effect */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-32 flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-indigo-400/50 text-[10px] font-mono font-black text-indigo-400 uppercase tracking-widest bg-indigo-400/10 backdrop-blur-md">
                 Vertical: Education & EdTech
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
             Scalable <br /> <span className="text-indigo-400">EdTech Content</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
             "We build high-velocity learning media. AI-integrated course production and viral school ad campaigns for India's digital-first educators."
           </p>
        </header>

        {/* Section 1: Strategic Hook */}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Scale Your <span className="text-indigo-400 italic">Curriculum.</span></h2>
              <div className="space-y-8 mb-12">
                 <div className="space-y-4">
                    <h4 className="text-red-400 text-xs font-mono uppercase tracking-widest">The Problem</h4>
                    <p className="text-zinc-500 font-light leading-relaxed">Traditional course filming is tedious and expensive, limiting the speed at which EdTech brands can scale their content libraries.</p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-indigo-400 text-xs font-mono uppercase tracking-widest">The AI-Powered Solution</h4>
                    <p className="text-zinc-300 font-light leading-relaxed">By integrating AI-avatars and automated post-production, we help EdTech brands across India generate high-quality learning content 10x faster.</p>
                 </div>
              </div>
              <ul className="grid grid-cols-2 gap-6">
                {[
                  "AI Avatar Presenters",
                  "Course Video Production",
                  "EdTech Growth Ads",
                  "Institutional Heritage Films"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    <CheckCircle2 size={14} className="text-indigo-400" /> {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="High-end EdTech Course Video Production"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-400/10" />
           </div>
        </section>

        {/* Strategic FAQ Node */}
        <div className="mb-40 max-w-4xl mx-auto space-y-16">
           <h2 className="text-4xl font-black mb-12 uppercase tracking-widest text-white text-center pb-8 border-b border-white/5">Education Visibility FAQ</h2>
           {[
             { q: "How AI video helps the education industry grow?", a: "AI video allows for instant content localization, 24/7 course updates with virtual presenters, and personalized learning experiences, making EdTech brands in India more competitive and scalable." },
             { q: "Best video production company for EdTech in India?", a: "Define Perspective are leaders in AI-powered learning media. We provide full-service production for schools, EdTech platforms, and individual tutors across Kerala and global markets." }
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
             Future-proof your <br /> <span className="text-indigo-400 italic">curriculum.</span>
           </h2>
           <button 
             onClick={() => window.location.href = '/contact?industry=education'}
             className="h-20 px-16 rounded-full bg-indigo-400 text-black font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(129,140,248,0.3)]"
           >
             Get EdTech Video Strategy
           </button>
        </div>
      </div>
    </main>
  );
}

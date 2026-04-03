import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Building2, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Real Estate & Builders Video Production India | Best Property Films Kerala | Define Perspective Studios",
  description: "Elite AI-powered video production for real estate and builders across India. Cinematic property walkthroughs, CGI units, and AI-enhanced real estate marketing reels in Kochi and Trivandrum.",
  keywords: ["real estate video production India", "best property films Kerala", "builder video ads Kochi", "AI real estate walkthroughs India"],
};

export default function RealEstateIndustryPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <GlassNavbar />
      
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-400/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
           <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="px-4 py-1.5 rounded-full border border-blue-400/50 text-[10px] font-mono font-black text-blue-400 uppercase tracking-widest bg-blue-400/10 backdrop-blur-md">
                 Vertical: Real Estate
              </div>
           </div>
           <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
             Real Estate <br /> <span className="text-blue-400 italic">Builders_</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
             "Sell units faster with AI-augmented property films. We build high-fidelity visual assets for India's leading builders."
           </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10 text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Property <span className="text-blue-400 italic font-black">Clarity.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                Static photos and generic walkthroughs no longer capture high-intent buyers. Our specialized real estate production in Kerala and Kochi utilizes cinematic FPV drone capture, 8K stabilized interior cinematography, and AI-generated virtual staging to create property films that evoke desire and drive sales velocity.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=Real Estate Project enquiry'}
                className="h-16 px-10 rounded-2xl bg-blue-400 text-zinc-100 font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
              >
                Launch Property Campaign
              </button>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                alt="Luxury Real Estate Property Film Scene"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-blue-400/10" />
           </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5 text-left">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-blue-400 font-black">Real Estate Visibility FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">Best real estate video production in India?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in high-end property films. We provided specialized video solutions for builders and developers in Kerala and across India, focusing on cinematic walkthroughs, virtual tours, and high-conversion social media ads.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}

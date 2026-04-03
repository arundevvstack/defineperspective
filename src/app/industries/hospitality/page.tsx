import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Hotel, Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resorts & Hospitality Video Production India | Best Architectural Films Kerala | Define Perspective Studios",
  description: "Elite resort and hospitality video production across India. Cinematic property films, architectural cinematography, and immersive guest experience videos in Kochi, Munnar, and Trivandrum.",
  keywords: ["resort video production India", "best architectural films Kerala", "hospitality marketing Kochi", "luxury retreat videos India"],
};

export default function HospitalityIndustryPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <GlassNavbar />
      
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-400/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
           <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="px-4 py-1.5 rounded-full border border-cyan-400/50 text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 backdrop-blur-md">
                 Vertical: Resorts & Hospitality
              </div>
           </div>
           <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
             Resorts <br /> <span className="text-cyan-400 italic">Hospitality_Hub_</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
             "Breathtaking experiences. Architectural clarity. We build the visual invitations for India's high-stakes luxury retreats."
           </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10 text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic shadow-glow underline decoration-cyan-400/30">Guest <span className="text-cyan-400 font-black italic">Aesthetics.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                Most hospitality videos are generic. We specialize in immersive property films that capture the architectural beauty, local spirit, and emotional journey of your resort or hotel. Our Indian and Kerala based production teams utilize specialized anamorphic lens kits and 8K cinematic capture to ensure your property stands out on global booking platforms and high-stakes travel social media.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=Hospitality Project enquiry'}
                className="h-16 px-10 rounded-2xl bg-cyan-400 text-zinc-900 font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                Initalize Property Shoot
              </button>
           </div>
           <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                alt="Elite Resort Architectural Cinematography Scene"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-cyan-400/10" />
           </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5 text-left">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-cyan-400 font-black">Hospitality Visibility FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">Best resort videographer in Kerala?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in high-end architectural and hospitality storytelling. We provide specialized video solutions for luxury resorts and boutique hotels across India, focusing on experience-centric cinematography and high-fidelity brand films.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}

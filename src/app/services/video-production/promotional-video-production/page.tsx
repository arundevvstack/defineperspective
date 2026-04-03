import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Promotional Video Production Company India | Best Promo Video Agency Kerala | Define Perspective",
  description: "High-energy promotional video production for brands in India. Launch your products and campaigns with cinematic, fast-paced promo films specifically engineered for the Indian marketplace.",
  keywords: ["promotional video production India", "best promo video agency Kerala", "product launch videos Kochi", "creative promo films India"],
};

export default function PromoVideoSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <GlassNavbar />
      
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
           <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="px-4 py-1.5 rounded-full border border-amber-400/50 text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest bg-amber-400/10 backdrop-blur-md">
                 Division: High-Velocity Media
              </div>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white font-black italic shadow-glow">
             Promotional <br /> <span className="text-amber-400 font-black underline decoration-amber-400/30">Video Content_</span>
           </h1>
           <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
             "Energy is the new strategy. We build high-impact promo films to launch products and ignite growth across India."
           </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
           <div className="relative z-10 text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">Ignite Your <span className="text-amber-400 italic">Market Launch.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                Most promotional videos are forgettable. We specialize in fast-paced, cinematic, and high-energy promo films that capture attention in the first second. Our Indian and Kerala based production teams utilize high-spec camera kits and next-gen editing to ensure that your product launch stands out in the competitive Indian marketplace.
              </p>
              <button 
                onClick={() => window.location.href = '/contact?subject=Promo Video Project enquiry'}
                className="h-16 px-10 rounded-2xl bg-amber-400 text-zinc-100 font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(251,191,36,0.3)]"
              >
                Initalize Promo Film
              </button>
           </div>
           <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1974&auto=format&fit=crop"
                alt="High-energy Promotional Video Filming"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-amber-400/10" />
           </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5 text-left">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-amber-400">Promo Visibility FAQ</h2>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">Best promo video production company in India?</h4>
                 <p className="text-zinc-400 font-light leading-relaxed">Define Perspective is a leader in high-impact promotional films. We provide specialized launch video services for brands in Kerala and across India, focusing on visual energy, cinematic quality, and massive audience engagement.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}

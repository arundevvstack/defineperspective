import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Video Production Company Kerala | Top Media Agency Kochi | Define Perspective",
  description:
    "Kerala's premier AI-powered video production and media agency. Helping Kerala's high-stakes brands and builders dominate with cinematic brand films and performance ads.",
  keywords: [
    "video production company Kerala",
    "best media agency Kochi",
    "Kerala videographer",
    "Cochin ad production",
  ],
};

export default function KeralaLocationPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <GlassNavbar />

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              State: Kerala
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            Kerala's <br />{" "}
            <span className="text-primary-accent italic">Visual_Edge_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            "From Kochi to Trivandrum. We build the visual high-fidelity for
            Kerala's most ambitious brands."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          <div className="relative z-10 text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Statewide <span className="text-primary-accent italic">Impact_</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              Define Perspective serves as a high-fidelity creative hub for
              Kerala's most visionary organizations. We provide specialized
              video and media production for real estate builders, hospitals,
              and D2C brands, focusing on cinematic quality and local resonance
              across the state.
            </p>
            <Link
              href="/contact?location=Kerala"
              className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
            >
              Launch Kerala Project
            </Link>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop"
              alt="Kerala Backwaters Perspective"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent font-black">
            Kerala Visibility FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best video production agency in Kerala?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed font-light uppercase tracking-tighter italic">
                Define Perspective is a leader in AI-integrated filmmaking. We
                provide specialized video and media production services for
                top-tier Kerala brands, focusing on cinematic quality and local
                market impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

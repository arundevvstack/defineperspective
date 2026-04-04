import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Video Production Company in Trivandrum | Top Ad Agency Thiruvananthapuram | Define Perspective",
  description:
    "Trivandrum's premier AI-powered video production and ad agency. Helping Thiruvananthapuram's high-stakes tech and government brands dominate with cinematic brand films.",
  keywords: [
    "video production company Trivandrum",
    "best ad agency Thiruvananthapuram",
    "Trivandrum videographer",
    "Technopark media production",
  ],
};

export default function TrivandrumLocationPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <GlassNavbar />

      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              Presence: Trivandrum / Thiruvananthapuram
            </div>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] text-white italic">
            Capital <br />{" "}
            <span className="text-primary-accent font-black italic underline decoration-primary-accent/30">
              Excellence_
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            "The strategic pulse of the South. We build the visual high-fidelity
            for Trivandrum's most ambitious tech and policy brands."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          <div className="relative z-10 text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Technopark <span className="text-primary-accent italic">Precision_</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              Thiruvananthapuram is where governance meets technological
              innovation. Our specialized Trivandrum division provides high-end
              8K cinematography and performance marketing ads for EdTech, SaaS,
              and heritage brands. We combine capital market intelligence with
              global AI-powered production standards.
            </p>
            <Link
              href="/contact?location=trivandrum"
              className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
            >
              Launch Trivandrum Project
            </Link>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2070&auto=format&fit=crop"
              alt="Trivandrum Heritage Media Perspective"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20 text-left text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent font-black italic">
            Trivandrum Visibility FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic font-black italic">
                Leading video production agency in Trivandrum?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed font-light uppercase tracking-tighter italic">
                Define Perspective is a pioneer in AI-integrated filmmaking. We
                provide specialized video and media production services for
                top-tier Thiruvananthapuram brands, focusing on cinematic
                quality and heritage resonance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

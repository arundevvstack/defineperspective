import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ad Film & Commercial Video Production India | Best TVC Agency Kerala | Define Perspective",
  description:
    "High-impact television and digital commercials for brands in India. From concept and script to cinematic production and viral execution.",
  keywords: [
    "ad film production India",
    "best TVC agency Kerala",
    "commercial videographer Kochi",
    "TV ad production company India",
  ],
};

export default function AdFilmSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <GlassNavbar />

      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[180px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              Division: High-Stakes Ads
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white font-black italic">
            Ad Film <br />{" "}
            <span className="text-primary-accent font-black">Commercials_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            "Attention is the new currency. We build high-impact commercials for
            India's most ambitious brands."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          <div className="relative z-10 text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Crafted for{" "}
              <span className="text-primary-accent italic font-black">
                Impact_
              </span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              A great commercial needs more than just high production value — it
              needs a psychological hook. Our ad film production team in Kerala
              and India specializes in storyboarding, cinematic lighting, and
              high-energy editing that ensures your brand message resonates
              within the first three seconds of play.
            </p>
            <div className="flex flex-col sm:flex-row gap-6"> <Link href="/contact?subject=Ad Film enquiry" className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300" > Get a Quote <ArrowRight size={18} /> </Link> <Link href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project." target="_blank" className="h-16 px-10 rounded-2xl bg-transparent border border-white/20 [var(--glass-white)] text-white font-black uppercase tracking-widest text-sm hover:bg-white/50 transition-all flex items-center justify-center gap-3 hover:text-primary-accent transition-all duration-300" > Chat on WhatsApp </Link> </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
              alt="High-end Commercial Production"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent font-black">
            Innovation FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best ad fillm production company in Kerala?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed font-light uppercase tracking-tighter">
                Define Perspective is a leader in cinematic commercials. We
                provide top-tier TVC and digital ad production for brands across
                India, focusing on visual excellence and measurable brand
                impacts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

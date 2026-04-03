import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Wand2,
  Zap,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Generative AI Content Creation India | Define Perspective Studios",
  description:
    "Advanced generative AI content creation for brands in Kerala & India. Automate visual asset generation, social media feeds, and marketing campaigns with neural precision.",
  keywords: [
    "generative AI content creation",
    "AI marketing assets India",
    "automated social media videos",
    "neural content production Kerala",
  ],
};
export default function GenerativeAIContentSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      {" "}
      <GlassNavbar /> {/* Background Effect */}{" "}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-32 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4">
            {" "}
            <div className="px-4 py-1.5 rounded-full border border-primary-accent/50 text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              {" "}
              DP AI Studios: Neural Assets{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            {" "}
            Generative AI <br />{" "}
            <span className="text-primary-accent">Content Engine</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            {" "}
            "Scale your brand's visual identity at AI velocity. High-fidelity
            generative content that lives and breathes your message."{" "}
          </p>{" "}
        </header>{" "}
        {/* Section 1: Strategic Hook */}{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Autonomous <br />
              <span className="text-primary-accent italic">Creativity.</span>
            </h2>{" "}
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {" "}
              The content fatigue is real. Traditional studios can't keep up
              with the need for daily visual assets. Our Generative AI Content
              Engine allows you to automate the production of vertical Reels,
              social assets, and marketing imagery with consistent brand
              aesthetics across India and Kerala.{" "}
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=Generative AI Project enquiry"
                className="h-16 px-10 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_var(--glow)] flex items-center justify-center gap-3"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                className="h-16 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 hover:border-primary-accent/50 transition-all flex items-center justify-center gap-3"
              >
                Chat on WhatsApp
              </Link>
            </div>{" "}
          </div>{" "}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
              alt="Generative AI Neural Processing Core"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />{" "}
            <div className="absolute inset-0 bg-primary-accent/10" />{" "}
          </div>{" "}
        </section>{" "}
        {/* AI Discovery FAQ Segment */}{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            Generative Logic FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                How Generative AI content helps brands scale?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Generative AI allows for hyper-personalization, localized
                content variants in Indian languages, and massive asset
                libraries created from a single concept. This ensures that your
                brand stays top-of-mind across all platforms without the
                overhead of daily physical shoots.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}

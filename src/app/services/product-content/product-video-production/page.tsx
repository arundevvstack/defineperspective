import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Package,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "Product Video Production Company India | Best Product Videographer Kerala | Define Perspective",
  description:
    "Elite product video production for consumer brands across India. Cinematic product close-ups, lifestyle films, and visual storytelling specifically designed for global and Indian E-commerce marketplaces.",
  keywords: [
    "product video production India",
    "best product videographer Kerala",
    "E-commerce video production Kochi",
    "luxury product films India",
  ],
};
export default function ProductVideoSubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      {" "}
      <GlassNavbar />{" "}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[180px] rounded-full pointer-events-none" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-40 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {" "}
            <div className="px-4 py-1.5 rounded-full border border-primary-accent/50 text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              {" "}
              Division: Product Precision{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            {" "}
            Product <br />{" "}
            <span className="text-primary-accent font-black italic shadow-glow">
              Production_
            </span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            {" "}
            "Breathtaking detail. Cinematic lighting. We build high-impact
            product films that sell at first glance."{" "}
          </p>{" "}
        </header>{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10 text-left">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Elevat Your{" "}
              <span className="text-primary-accent italic">Optic Hub.</span>
            </h2>{" "}
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {" "}
              Most product videos are static. We specialize in high-energy,
              cinematic product cinematography that highlights every texture,
              angle, and premium feature of your brand. Our Indian and Kerala
              based production studios use world-class camera systems and
              lighting to ensure that your product stands out on global
              marketplaces and luxury storefronts.{" "}
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=Product Video Project enquiry"
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
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
              alt="Elite Product Video Production Scene"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
            />{" "}
            <div className="absolute inset-0 bg-primary-accent/10" />{" "}
          </div>{" "}
        </section>{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/5 text-left">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            Product Logic FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best product video agency in India?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a leader in cinematic product
                cinematography. We provide specialized product video production
                for brands in Kerala and across India, focusing on visual
                excellence, luxury aesthetics, and measurable market impact.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}

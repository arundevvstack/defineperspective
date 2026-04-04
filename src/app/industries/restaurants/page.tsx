import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  UtensilsCrossed,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "Restaurants & Cafes Video Production India | Best Food Photographer Kerala | Define Perspective Studios",
  description:
    "Breathtaking food cinematography and social media visuals for restaurants and cafes across India. Specialized food videography studio in Kerala for high-conversion reels and menu films.",
  keywords: [
    "restaurant video production India",
    "best food photographer Kerala",
    "food cinematography Kochi",
    "cafe marketing videos India",
  ],
};
export default function RestaurantIndustryPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      {" "}
      <GlassNavbar />{" "}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-40 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {" "}
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              {" "}
              Vertical: Restaurants & Cafes{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            {" "}
            Restaurants <br />{" "}
            <span className="text-primary-accent italic underline decoration-primary-accent/30">
              Cafes_
            </span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            {" "}
            "Breathtaking visuals. Cinematic Lighting. We build thumb-stopping
            food narratives for India's high-stakes dining brands."{" "}
          </p>{" "}
        </header>{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10 text-left">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              The Optic{" "}
              <span className="text-primary-accent font-black italic">
                Flavor Hub.
              </span>
            </h2>{" "}
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {" "}
              Most food videos look flat. We specialize in macro-cinematography
              that captures the steam, texture, and soul of your dining
              experience. Our Indian and Kerala based production teams utilize
              specialized anamorphic lens kits and high-fidelity lighting to
              create food visuals that stop the scroll on Instagram and drive
              direct-conversion for delivery or dining bookings in Kerala and
              India.{" "}
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?subject=Restaurant Project enquiry"
                className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="https://wa.me/919496191684?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20Food Shoot."
                target="_blank"
                className="h-16 px-10 rounded-2xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/50 transition-all flex items-center justify-center gap-3 hover:text-primary-accent transition-all duration-300"
              >
                Chat on WhatsApp
              </Link>
            </div>{" "}
          </div>{" "}
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
              alt="Elite Food Cinematography Scene"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
            />{" "}
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
          </div>{" "}
        </section>{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20 text-left">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent font-black">
            Restaurant Visibility FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best food photographer in Kerala?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a leader in high-end food cinematography.
                We provide specialized video and photography services for
                restaurants and cafes across India, focusing on visual
                excellence, luxury aesthetics, and high-conversion social media
                assets.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}

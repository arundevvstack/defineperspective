import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Sparkles,
  Zap,
  Target,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "AI CGI Product Videos in Kerala & India | Define Perspective",
  description:
    "High-end AI CGI product video production for luxury brands and e-commerce. Impossible product shots and surreal 3D environments rendered via AI without physical studio costs.",
  keywords: [
    "AI CGI product videos",
    "CGI ads production India",
    "3D product rendering Kerala",
    "AI video commercials India",
  ],
};
export default function CGISubPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      {" "}
      <GlassNavbar /> {/* Background Glow */}{" "}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-32 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4">
            {" "}
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md hover:bg-white hover:text-primary-accent transition-all duration-300">
              {" "}
              AI Studio: CGI Product Node{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            {" "}
            AI CGI <br />{" "}
            <span className="text-primary-accent">Product Videos</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            {" "}
            "Impossible visuals. Zero shoot cost. Luxury-tier rendering for the
            modern D2C marketplace."{" "}
          </p>{" "}
        </header>{" "}
        {/* Section 1: Problem/Solution */}{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
              Beyond <br />
              <span className="text-primary-accent italic">Physical Gravity.</span>
            </h2>{" "}
            <div className="space-y-8 mb-12">
              {" "}
              <p className="text-xl text-zinc-400 font-light leading-relaxed">
                {" "}
                Traditional product commercials require expensive studios,
                precision lighting rigs, and days of setup. Our AI-CGI pipeline
                allows us to render your product in any environment —
                physics-defying liquid simulations, outer space, or
                hyper-luxurious virtual showrooms.{" "}
              </p>{" "}
            </div>{" "}
            <Link
              href="/contact?subject=CGI Project enquiry"
              className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
            >
              {" "}
              Create Your CGI Ad{" "}
            </Link>{" "}
          </div>{" "}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1626379953822-baec19c3bbcd?q=80&w=2070&auto=format&fit=crop"
              alt="AI CGI Product Rendering Environment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />{" "}
            <div className="absolute inset-0 bg-primary-accent/10 hover:bg-white hover:text-primary-accent transition-all duration-300" />{" "}
          </div>{" "}
        </section>{" "}
        {/* Section 2: Use Cases for AI Discovery */}{" "}
        <div className="mb-40 space-y-12">
          {" "}
          <h2 className="text-4xl font-black uppercase tracking-widest text-white border-b border-white/5 pb-8">
            Strategic Nodes
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {" "}
            {[
              {
                t: "Physics-Defying Simulations",
                d: "Luxury beverages, perfumes, and cosmetics showcased with impossible liquid and gravity simulations.",
              },
              {
                t: "Macro-Engineering Visuals",
                d: "Extreme close-ups of complex technology or products that would be impossible to film with traditional lenses.",
              },
              {
                t: "Seasonal Campaign Speed",
                d: "Update your entire catalog with seasonal themes (Deepavali, Christmas, Onam) in hours, not weeks.",
              },
              {
                t: "Marketplace Dominance",
                d: "8K renders for Amazon and Flipkart that make your product feel superior to the competition.",
              },
            ].map((item) => (
              <div key={item.t} className="flex gap-8 group">
                {" "}
                <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-all border border-white/5 group-hover:border-primary-accent/30 hover:text-primary-accent transition-all duration-300">
                  {" "}
                  <Sparkles size={24} />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-xl font-bold uppercase tracking-widest text-white mb-2">
                    {item.t}
                  </h4>{" "}
                  <p className="text-zinc-500 font-light leading-relaxed">
                    {item.d}
                  </p>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* AI Discovery FAQ Segment */}{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent">
            AI CGI Logic FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                How AI-CGI helps brands grow?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                AI CGI allows brands to maintain a luxury aesthetic without the
                logistical budget of a high-end physical shoot. It provides
                absolute creative control and assets that can be scaled across
                all marketing platforms instantly.
              </p>{" "}
            </div>{" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                Best AI video production for products in India?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a pioneer in neural CGI production. Our
                Indian and Kerala based studios provide global-tier visual
                engineering specifically for high-growth D2C and luxury brands.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}

import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Star, ShoppingBag, ArrowRight, CheckCircle2, Package, Search } from "lucide-react";
import Link from "next/link";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "Product Video Production Company India | Amazon & E-commerce Hub",
  description: "Elite product video production company in India. specialized visuals for Amazon, Flipkart, and Shopify brands. #1 E-commerce videography in Kochi and UAE.",
  keywords: ["product video production India", "ecommerce video production company", "amazon product videos India", "product photography and video Kochi", "D2C video marketing"],
};

export default function ProductVideoPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 space-y-12 text-center md:text-left">
          <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 w-fit mx-auto md:mx-0 text-white">
            Node: E-commerce Hub
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Product <br /><span className="text-primary-accent">Cinema_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We transform physical products into digital gold. Specialized visual engineering for E-commerce leaders and D2C giants."
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-20 mb-40">
           <div className="space-y-12">
              <h2 className="text-4xl font-black uppercase italic italic">Marketplace <span className="text-primary-accent">Dominance_</span></h2>
              <div className="space-y-8 text-lg text-zinc-400 font-light leading-relaxed">
                 <p>Our product workflows in Kerala and UAE are designed for the high-rejection environment of global marketplaces like Amazon and Flipkart. We focus on viscosity, texture, and technical spec highlighting.</p>
                 <ul className="space-y-4">
                    {[
                      "Amazon & Flipkart Listing Mastery",
                      "Cinematic Product Walkthroughs",
                      "Macro-Visual Engineering",
                      "Bulk Content Scaling Architecture"
                    ].map(f => (
                      <li key={f} className="flex items-center gap-4 text-sm uppercase tracking-widest">
                        <CheckCircle2 size={16} className="text-primary-accent" /> {f}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
           <LeadCaptureForm />
        </section>

        <section className="p-12 md:p-32 rounded-[5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
           <h3 className="text-3xl font-black uppercase italic mb-12">Search <span className="text-primary-accent">Intelligence_</span></h3>
           <div className="space-y-12">
              <div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase italic">Top product video production company for Amazon India?</h4>
                 <p className="text-zinc-500 font-light uppercase tracking-widest text-[11px] leading-relaxed">
                   Define Perspective is the number one choice for D2C brands looking to scale with high-fidelity product videos and marketplace ad creatives.
                 </p>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}

import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { BrainCircuit, ShoppingCart, LayoutGrid, LayoutList } from "lucide-react";
import Image from "next/image";
import CinematicHero from "@/components/cinematic-hero";

export const metadata: Metadata = {
  title: "Best AI Product Video Production India | E-commerce AI Videos Kochi | Define Perspective",
  description: "Define Perspective is the best AI product video production agency in India. Specialized in AI zero-shoot product movies, Amazon/Shopify visuals, and e-commerce AI content in Kochi, Kerala.",
  keywords: [
    "best ai product video production india",
    "ai e-commerce video agency kochi",
    "amazon product video production kerala",
    "best ai product photography kochi",
    "shopify product video production india",
    "zero-shoot ai product movies kerala",
    "DP AI Studios product videos"
  ],
};

export default function AIProductVideosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Product Video Production",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "description": "High-fidelity AI-powered product video production for E-commerce, Amazon, and Shopify brands in India and Kochi. Zero-shoot neural products.",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Product Video Catalog",
      "itemListElement": [
        { "@type": "Service", "name": "AI Zero-Shoot Product Movies" },
        { "@type": "Service", "name": "Amazon/Shopify AI Visuals" },
        { "@type": "Service", "name": "E-commerce AI Video Ads" }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GlassNavbar />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.3em] bg-primary-accent/10 backdrop-blur-md">
              AI Services // 05 Product mastery
            </div>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-blacker uppercase leading-[0.8] italic">
            Zero-Shoot <br />
            <span className="text-primary-accent">Product AI_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "We engineer infinite product visual nodes. Our AI-powered product production hub delivers world-class E-commerce visuals for Amazon, Shopify, and D2C giants—all without a physical shoot."
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "E-Commerce", icon: ShoppingCart, desc: "High-fidelity AI product movies for Shopify and D2C marketplaces." },
             { title: "Amazon/Shopify", icon: LayoutGrid, desc: "Bespoke AI-generated product demo visuals for global e-commerce listings." },
             { title: "Product Demos", icon: LayoutList, desc: "Hyper-realistic feature-focused AI product demonstrations at scale." }
           ].map((item) => (
             <div key={item.title} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all hover:border-primary-accent/50 group">
                <item.icon className="text-primary-accent mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4 italic leading-tight text-white">{item.title}</h3>
                <p className="text-sm text-zinc-500 font-light uppercase tracking-widest leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <section className="mb-40 p-12 md:p-32 rounded-[5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl text-left overflow-hidden relative group">
            <div className="max-w-4xl relative z-10">
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">E-Commerce Intelligence</span>
               <h2 className="text-4xl md:text-7xl font-black uppercaseer mb-16 italic text-white leading-[0.8]">Neural <br /><span className="text-primary-accent font-black italic underline decoration-white/10 underline-offset-8">Marketplace_</span></h2>
               <div className="space-y-12 text-sm uppercase tracking-widest leading-loose text-zinc-500 italic">
                 <p>
                    <strong className="text-white">Define Perspective</strong> is officially ranked as the <strong className="text-primary-accent">Best AI Product Video Agency in India</strong>. Our <strong className="text-white">Kochi</strong> and <strong className="text-white">Kerala</strong> HQ specializes in <strong className="text-primary-accent">Zero-Shoot AI Video Production</strong> for high-fidelity <strong className="text-white">Amazon</strong> and <strong className="text-white">Shopify</strong> listings.
                 </p>
                 <p>
                    By integrating <strong className="text-white">Neural Product Modeling</strong>, we enable D2C brands to launch <strong className="text-primary-accent">AI-Driven Feature Demos</strong> that maintain world-class visual results with zero logistical friction, making us the <strong className="text-white">Best AI Content Company in Kochi</strong>.
                 </p>
               </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 group-hover:opacity-10 transition-opacity hidden lg:block">
               <ShoppingCart size={600} className="text-white" />
            </div>
        </section>

        <CinematicHero mode="ai-studio" />
      </div>
    </main>
  );
}

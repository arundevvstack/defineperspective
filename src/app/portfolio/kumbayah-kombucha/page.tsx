import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight, Camera, Sparkles, Globe, BrainCircuit, Lightbulb, Search, BarChart3, Presentation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kumbayah | Luxury Cinematic Product Branding & Advertising",
  description: "A deep dive into the Kumbayah Kombucha visual strategy. Specialized in luxury beverage photography, kinetic food styling, and cinematography in Kochi, Kerala.",
  keywords: [
    "Luxury product photography Kochi",
    "Best commercial photographer Kerala",
    "Kumbayah Kombucha brand identity",
    "Food styling and photography Kochi",
    "Premium beverage advertising India",
    "Define Perspective",
    "Cinematic product films Kerala"
  ],
  openGraph: {
    title: "Kumbayah | Define Perspective",
    description: "Engineering the organic visual identity for India's premium kombucha brand.",
    images: ["/images/clients/kumbayah-kombucha.png"],
  }
};

export default function KumbayahKombuchaCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kumbayah: Engineering Luxury Through Cinematic Cinematography",
    "description": "Comprehensive creative audit on premium beverage branding and advertising photography in Kerala by Define Perspective.",
    "author": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    },
    "image": "https://defineperspective.in/images/clients/kumbayah-kombucha.png",
    "publisher": {
      "@type": "Organization",
      "name": "Define Perspective",
      "logo": {
        "@type": "ImageObject",
        "url": "https://defineperspective.in/logo.png"
      }
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 md:px-12 relative z-10">
        {/* --- HEADER SECTION --- */}
        <header className="mb-40 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="space-y-12">
            <h1 className="text-6xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.75] text-white italic drop-shadow-2xl">
              Kumbayah <br />
              <span className="text-primary-accent">Kombucha_</span>
            </h1>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
             <div className="space-y-4">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Market Challenge</span>
                <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-wider">
                  Breaking into the luxury FMCG market in India requires more than just a product—it requires an editorial visual narrative that commands attention.
                </p>
             </div>
             <div className="space-y-4">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Our Mandate</span>
                <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-wider">
                  Create a "Freshly Brewed" cinematic system that scales from digital social ads to high-fidelity physical billboards in Kochi.
                </p>
             </div>
             <div className="flex flex-wrap gap-4 items-end justify-start md:justify-end">
                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                   <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1">Sector</p>
                   <p className="text-xs font-black text-white uppercase tracking-widest">Premium FMCG</p>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                   <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1">Location</p>
                   <p className="text-xs font-black text-white uppercase tracking-widest">Kerala, India</p>
                </div>
             </div>
          </div>
        </header>

        {/* --- HERO MASTERPLATE --- */}
        <section className="mb-60 relative group">
           <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl transition-all duration-700 hover:border-primary-accent/30">
              <Image 
                src="/images/clients/kumbayah/product-splash.jpg"
                alt="Kumbayah Kombucha Premium Ad Photography Master"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-12 pointer-events-none">
                 <div className="mt-auto">
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">The Master Creative</h2>
                    <p className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.5em] mt-2">Node 01 // Cinematic Product Shot</p>
                 </div>
              </div>
           </div>
        </section>

        {/* --- STRATEGIC INTELLIGENCE (SEO TEXT RICH) --- */}
        <section className="mb-60 grid md:grid-cols-2 gap-32 items-center">
           <div className="space-y-12">
              <div className="flex items-center gap-4">
                 <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center">
                    <Search className="text-primary-accent" size={24} />
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Market Analysis_</h2>
              </div>
              <div className="space-y-8 text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest leading-loose">
                <p>
                  To position <span className="text-white font-bold">Kumbayah Kombucha</span> as the <span className="text-white font-bold">Best Luxury Beverage in Kochi</span>, we analyzed global beverage trends against local Kerala consumer behavior.
                </p>
                <p>
                  Our research indicated a gap in the <span className="text-white font-bold">Premium Health Drinks</span> sector for raw, authentic, yet highly polished visual storytelling. We pivoted away from traditional studio flat-lays toward <span className="text-primary-accent font-bold italic">Kinetic Liquid Styling</span>.
                </p>
              </div>
           </div>
           <div className="grid grid-cols-1 gap-8">
              <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl group hover:bg-white/[0.04] transition-all">
                 <Target className="text-primary-accent mb-6" size={32} />
                 <h4 className="text-lg font-black uppercase tracking-widest mb-4">Precision Targeting</h4>
                 <p className="text-sm text-zinc-400 uppercase tracking-widest leading-relaxed">Defining the aesthetic for high-net-worth fitness enthusiasts in Kerala and urban metros.</p>
              </div>
              <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl group hover:bg-white/[0.04] transition-all">
                 <Lightbulb className="text-primary-accent mb-6" size={32} />
                 <h4 className="text-lg font-black uppercase tracking-widest mb-4">Visual Logic</h4>
                 <p className="text-sm text-zinc-400 uppercase tracking-widest leading-relaxed">Utilizing 'Sun-Sync' lighting to replicate the natural tropical environment of the product's origin.</p>
              </div>
           </div>
        </section>

        {/* --- EXECUTION NODES --- */}
        <section className="mb-60">
           <div className="flex items-center gap-4 mb-20">
              <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center">
                 <Camera className="text-primary-accent" size={24} />
              </div>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">High-Velocity Execution_</h2>
           </div>

           <div className="grid md:grid-cols-12 gap-12 group">
              <div className="md:col-span-8 relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-black max-w-2xl mx-auto w-full">
                 <Image 
                   src="/images/clients/kumbayah/fashion-splash.jpg"
                   alt="Cinematic Fashion Lifestyle Shot for Kumbayah"
                   fill
                   className="object-contain md:object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
              </div>
              <div className="md:col-span-4 flex flex-col gap-12">
                 <div className="flex-1 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col justify-end">
                    <Sparkles className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Kinetic Capture</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">High-speed shutter orchestration for perfect liquid physics.</p>
                 </div>
                 <div className="flex-1 relative aspect-video rounded-[3rem] overflow-hidden border border-white/10">
                    <Image 
                      src="/images/clients/kumbayah/product-splash.jpg"
                      alt="Organic Beverage Macro Shot"
                      fill
                      className="object-cover"
                    />
                 </div>
              </div>
           </div>

           <div className="grid gap-12 mt-12">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-xl group max-w-4xl mx-auto w-full bg-black">
                 <Image 
                    src="/images/clients/kumbayah/triple-bottle.jpg"
                    alt="Product Lineup with Dynamic Splash"
                    fill
                    className="object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
           </div>
        </section>

        {/* --- OMNICHANNEL VISUAL SYSTEM --- */}
        <section className="mb-60 border-t border-white/5 pt-40">
           <div className="max-w-3xl mb-24">
              <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.5em] mb-4">Strategic Assets // OMNICHANNEL</h3>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">Engineering the <br /> Retail Identity_</h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed uppercase tracking-widest leading-loose">
                We didn't just stop at photography. We built a scalable identity system that maintains luxury fidelity across <span className="text-white">Point-of-Sale (POS)</span> terminals, branded retail refrigeration, and transit media fleets across Kochi.
              </p>
           </div>

           <div className="grid md:grid-cols-3 gap-12 group">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-primary-accent/20 transition-all shadow-2xl bg-black">
                 <Image src="/images/clients/kumbayah/fridge-mockup.png" alt="Custom Retail Fridge Mockup for Kumbayah" fill className="object-contain md:object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute top-8 right-8">
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[8px] font-mono text-white/60">POS DESIGN</div>
                 </div>
              </div>
              <div className="md:col-span-2 relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                 <Image src="/images/clients/kumbayah/van-marketing.jpg" alt="Kumbayah Delivery Fleet Branding" fill className="object-cover" />
                 <div className="absolute bottom-8 left-8">
                    <div className="bg-primary-accent px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">Transit Media Node</div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- BUSINESS IMPACT --- */}
        <section className="mb-60 py-32 rounded-[5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 text-primary-accent opacity-20">
              <BarChart3 size={120} />
           </div>
           <div className="container px-12 md:px-24">
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-20 drop-shadow-lg">Business <br /> Result_</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
                 <div className="space-y-4">
                    <p className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">125%</p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Sales Engagement</p>
                 </div>
                 <div className="space-y-4">
                    <p className="text-5xl md:text-7xl font-black text-primary-accent italic tracking-tighter">Prime</p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Shelf Authority</p>
                 </div>
                 <div className="space-y-4">
                    <p className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">Zero</p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Customer Friction</p>
                 </div>
                 <div className="space-y-4">
                    <p className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">8K</p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Delivery Fidelity</p>
                 </div>
              </div>
           </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="p-12 md:p-32 rounded-[5rem] border border-white/10 bg-white/5 backdrop-blur-3xl text-center relative overflow-hidden group shadow-3xl">
           <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
           <div className="relative z-10">
              <div className="flex justify-center mb-12">
                 <span className="px-6 py-2 rounded-full border border-primary-accent/30 bg-primary-accent/10 text-[10px] font-black uppercase text-primary-accent tracking-[0.5em]">
                    Now Available for 2026 Campaigns
                 </span>
              </div>
              <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter text-white mb-16 leading-[0.8] italic">
                Dominate <br /><span className="text-primary-accent italic font-black underline decoration-white/10 underline-offset-8">The Market.</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-10">
                 <Link 
                   href="/contact?subject=Portfolio Inquiry: Kumbayah-style Strategy"
                   className="h-24 px-20 rounded-3xl bg-primary-accent text-obsidian font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-4 group/btn"
                 >
                   Launch New Shoot <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                 </Link>
                 <Link 
                   href="/portfolio"
                   className="h-24 px-20 rounded-3xl border-2 border-white/10 bg-white/5 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-4"
                 >
                   Project Archives
                 </Link>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}

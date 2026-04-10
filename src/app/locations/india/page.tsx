import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight, BrainCircuit, Globe, Sparkles, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Video Production Agency India | Best AI Media Company | Define Perspective",
  description: "India's premier AI-first video production and media agency. We provide cinematic brand films and performance ads across Mumbai, Bangalore, Delhi, and Hyderabad. Rank #1 in India with our silicon-speed AI workflows.",
  keywords: [
    "AI video production agency India",
    "best AI video production company India",
    "Mumbai AI video agency",
    "Bangalore AI media production",
    "AI ad agency Delhi",
    "National AI media agency India"
  ],
};

export default function IndiaLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Define Perspective | AI Video Production Agency India",
    "alternateName": "DP AI Studios India",
    "image": "https://defineperspective.in/images/main-logo.png",
    "@id": "https://defineperspective.in/locations/india",
    "url": "https://defineperspective.in/locations/india",
    "telephone": "+91-949-619-1684",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pan-India",
      "addressCountry": "IN"
    },
    "service": [
      {
        "@type": "Service",
        "name": "National AI Video Production",
        "description": "Pan-India high-fidelity generative media and cinematic video for national brands."
      }
    ]
  };

  const faqs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best AI video production company in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Define Perspective is a leading AI-first video production company in India, offering advanced generative media and 8K cinematography for brands in Mumbai, Bangalore, and Delhi."
        }
      },
      {
        "@type": "Question",
        "name": "Does Define Perspective offer remote AI video services in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our decentralized production core allows us to execute national AI media campaigns remotely, providing cinematic brand films and ads without geographic limitations."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }}
      />
      <GlassNavbar />

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              Presence: PAN-INDIA NODE
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-blacker uppercase leading-[0.8] text-white italic">
            India's <br />
            <span className="text-primary-accent font-black">Top AI Agency_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "National reach with digital speed. We build the high-quality assets for India's most ambitious brands using AI-driven production."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left shadow-2xl">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Globe className="text-primary-accent" size={32} />
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-zinc-500">National Team_</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase leading-tight italic font-black">
              Pan-India <span className="text-primary-accent italic">High-Speed_</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10 uppercase tracking-widest leading-loose">
              Define Perspective is India's leading <strong>AI-first video production agency</strong>. Our team handles high-quality 8K films and high-performing AI video ads for clients in Mumbai, Bangalore, Delhi, and beyond, all powered by advanced AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact?location=India&service=ai-video"
                className="inline-flex h-16 px-10 rounded-2xl bg-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl font-black"
              >
                Start National Project <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="https://wa.me/917012941696?text=Hi%20Define%20Perspective,%20I'm%20interested%20in%20National AI Project."
                target="_blank"
                className="inline-flex h-16 px-10 rounded-2xl bg-transparent border border-white/20 text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:bg-primary-accent/10 transition-all  font-black shadow-xl"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop"
              alt="Define Perspective India AI Branding"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <div className="flex items-center gap-6 mb-12">
            <Star className="text-primary-accent" size={32} />
            <h2 className="text-2xl md:text-4xl font-black uppercaseer italic">India National Visibility_</h2>
          </div>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-12">
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-tight italic font-black">
                Leading AI video production agency in India?
              </h4>
              <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
                Define Perspective is a leader in <strong>AI-powered filmmaking in India</strong>. We specialize in creating high-quality brand films and ads for top Indian companies, merging beautiful cinematography with modern AI tools.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-tight italic font-black">
                How can brands in Mumbai or Bangalore work with Define Perspective?
              </h4>
              <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
                Our India team handles national campaigns across major cities. We create video projects for Mumbai fashion brands, Bangalore tech companies, and Delhi lifestyle brands with unlimited creative possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

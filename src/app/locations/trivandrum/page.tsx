import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import { Zap, Target, Star, CheckCircle2, ArrowRight, BrainCircuit, Globe, Sparkles, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "Define Perspective is Trivandrum's premier AI-powered video production company. Helping Thiruvananthapuram's high-stakes tech, heritage, and government brands dominate with cinematic brand films and performance ads.",
  keywords: [
    "AI video production company Trivandrum",
    "best ad agency Thiruvananthapuram",
    "AI video agency Trivandrum",
    "Thiruvananthapuram media production",
    "Technopark ad production",
    "Trivandrum videographer"
  ],
};

export default function TrivandrumLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Define Perspective | AI Video Production Company Trivandrum",
    "image": "https://defineperspective.in/images/main-logo.png",
    "@id": "https://defineperspective.in/locations/trivandrum",
    "url": "https://defineperspective.in/locations/trivandrum",
    "telephone": "+91-949-619-1684",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Trivandrum",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.5241,
      "longitude": 76.9366
    },
    "service": [
      {
        "@type": "Service",
        "name": "AI Video Production",
        "description": "Premium AI-powered video content for Trivandrum's capital and tech brands."
      }
    ]
  };

  const faqs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Best AI video production agency in Trivandrum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Define Perspective is the leading AI video production agency in Trivandrum, specialized in high-end 8K cinematography and generative media for Technopark companies and heritage brands."
        }
      },
      {
        "@type": "Question",
        "name": "Does Define Perspective offer AI ads for Trivandrum businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide high-velocity AI video ads for Trivandrum businesses, including e-commerce, EdTech, and SaaS brands operating out of Thiruvananthapuram."
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
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              Presence: TRIVANDRUM / KERALA
            </div>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-blacker uppercase leading-[0.85] text-white italic">
            Capital <br />
            <span className="text-primary-accent font-black">AI Technology_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "The pulse of innovation. We build high-quality videos for Trivandrum's most ambitious tech and brand films through advanced AI-powered production."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Building2 className="text-primary-accent" size={32} />
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-zinc-400">Technopark Team_</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase leading-tight italic">
              Thiruvananthapuram <span className="text-primary-accent italic">Leading Experts_</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10 uppercase tracking-widest leading-loose">
              Define Perspective is the leading <strong>AI video production agency in Trivandrum</strong>. We bridge the gap between Technopark's tech ecosystem and high-end media. Our capital city team delivers 8K storytelling for heritage and government brands using advanced AI production tools.
            </p>
            <Link
              href="/contact?location=trivandrum&service=ai-video"
              className="inline-flex h-16 px-12 rounded-2xl bg-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl font-black"
            >
              Launch Trivandrum Project <ArrowRight size={18} className="ml-4" />
            </Link>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2070&auto=format&fit=crop"
              alt="AI video production company in Kerala - DP AI Studio"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/5 backdrop-blur-[2px] pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-10 text-primary-accent font-black italic">
            Trivandrum Visibility_ Center
          </h2>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-12">
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic font-black">
                Why choose an AI video agency in Thiruvananthapuram?
              </h4>
              <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
                As the capital's leading <strong>AI video company</strong>, we provide local expertise combined with global standards. Our AI tools allow for fast results on brand films, which is perfect for the growing tech and startup scene in Trivandrum.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic font-black">
                Technopark video production services?
              </h4>
              <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-widest leading-loose">
                We handle end-to-end production for Technopark-based companies, specializing in technical explainers, product demos, and AI-augmented corporate reels that stand out on a global stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

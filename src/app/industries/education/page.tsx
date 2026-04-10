import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  GraduationCap,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "Education & EdTech Video Production India | Best AI E-learning Content Kerala | Define Perspective Studios",
  description:
    "High-velocity AI-powered video production for EdTech and educational institutions across India. Scale your training content with photorealistic AI avatar presenters and engaging digital lessons.",
  keywords: [
    "EdTech video production India",
    "AI e-learning content Kerala",
    "best educational videos Kochi",
    "AI avatar presenters India",
  ],
};
export default function EducationIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Education & EdTech Video Production",
    "description": "High-velocity AI-powered video production for EdTech and educational institutions in India. Photorealistic AI presenters and engaging lessons.",
    "provider": {
      "@type": "Organization",
      "name": "Define Perspective",
      "url": "https://defineperspective.in"
    }
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <header className="mb-40 flex flex-col gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-primary-accent/10 backdrop-blur-md">
              Vertical: Education & EdTech
            </div>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-blacker uppercase leading-[0.8] text-white italic">
            Education <br />
            <span className="text-primary-accent italic">EdTech_Hub_</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0 uppercase tracking-widest leading-loose">
            "Knowledge at the speed of AI. We build high-velocity learning media
            for India's high-stakes education sector."
          </p>
        </header>

        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group text-left shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase leading-tight italic">
              Future-Ready <span className="text-primary-accent font-black">Learning.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              Traditional educational production is slow and expensive. Our
              specialized EdTech wing in Kerala and India utilizes
              photorealistic AI avatar presenters and neural-accelerated editing
              to create engaging digital lessons in hours, not weeks. We help
              Indian platforms scale their course libraries with cinematic
              clarity and student-centric storytelling.
            </p>
            <Link
              href="/contact?subject=Education Project enquiry"
              className="inline-flex h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-white font-black items-center justify-center uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-primary-accent/10 font-black"
            >
              Launch Learning Campaign <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Engaging Digital E-learning Scene India"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-primary-accent/10 pointer-events-none" />
          </div>
        </section>

        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/20 text-left">
          <h2 className="text-2xl font-black uppercase mb-10 text-primary-accent font-black">
            Education Visibility FAQ
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best AI video production company for Education/EdTech?
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is recognized as the best AI video production company for the education and EdTech sector in India. 
                We combine neural-avatar generation with high-fidelity cinematic production to help universities, schools, and 
                educational platforms across Kerala and major Indian metros scale their training content with global authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

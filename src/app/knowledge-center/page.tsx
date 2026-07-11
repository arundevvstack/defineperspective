import type { Metadata } from "next";
import { MoveRight, PlaySquare, Building2, MapPin, Briefcase, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import GlassNavbar from "@/components/glass-navbar";

export const metadata: Metadata = {
  title: "AI Video Production Knowledge Center | DP AI Studios",
  description: "The official AI Video Production Knowledge Center from DP AI Studios.",
  alternates: {
    canonical: "https://defineperspective.in/knowledge-center"
  }
};

export default function KnowledgeCenterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "CollectionPage"],
    "@id": "https://defineperspective.in/knowledge-center/#webpage",
    "url": "https://defineperspective.in/knowledge-center",
    "name": "AI Video Production Knowledge Center | DP AI Studios",
    "description": "The official AI Video Production Knowledge Center from DP AI Studios.",
    "isPartOf": {
      "@id": "https://defineperspective.in/#organization"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://defineperspective.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Knowledge Center",
          "item": "https://defineperspective.in/knowledge-center"
        }
      ]
    }
  };

  // Section Data
  const coreServices = [
    { title: "AI Video Production", href: "/ai-video-production" },
    { title: "Video Production", href: "/video-production" },
    { title: "AI Video Production Company India", href: "/ai-video-production-company-india" },
    { title: "AI Video Production Services", href: "/ai-video-production-services" },
    { title: "Healthcare Video", href: "/services/healthcare-video" },
    { title: "Corporate Video", href: "/ai-corporate-video-production" },
    { title: "Explainer Video", href: "/services/explainer-video" },
    { title: "AI Film Narrative", href: "/services/ai-film-narrative" },
    { title: "AI Cinematic", href: "/services/ai-cinematic" },
  ];

  const industries = [
    { title: "Real Estate", href: "/industries/real-estate" },
    { title: "Healthcare", href: "/industries/healthcare" },
    { title: "Education", href: "/industries/education" },
    { title: "Fashion", href: null },
    { title: "Hospitality", href: "/industries/hospitality" },
    { title: "Restaurants", href: "/industries/restaurants" },
    { title: "Automotive", href: "/industries/automobile" },
    { title: "Manufacturing", href: null },
  ];

  const locations = [
    { title: "India", href: "/locations/india" },
    { title: "Kerala", href: "/locations/kerala" },
    { title: "Trivandrum", href: "/locations/trivandrum" },
    { title: "Kochi", href: "/locations/kochi" },
    { title: "Bangalore", href: "/ai-video-production-bangalore" },
    { title: "Mumbai", href: "/ai-video-production-mumbai" },
    { title: "Chennai", href: "/ai-video-production-chennai" },
    { title: "Hyderabad", href: "/ai-video-production-hyderabad" },
    { title: "Dubai", href: null },
  ];

  const caseStudies = [
    { title: "Best AI Corporate Video Production", href: "/case-studies/best-ai-corporate-video-production-company-in-india-dp-ai-studios-ai-film-dp-ai-studios" },
    { title: "Luxury Jewellery AI Ad Film", href: "/case-studies/best-ai-tvc-production-company-in-india-luxury-jewellery-ai-ad-film-dp-ai-studio-2" },
    { title: "Cinematic AI Commercial", href: "/case-studies/best-ai-tvc-production-in-india-cinematic-ai-commercial-2026-dp-ai-studios" },
  ];

  const portfolio = [
    { title: "Desert Queen", href: "/portfolio/desert-queen" },
    { title: "BB Serum TVC", href: "/portfolio/bb-serum-tvc" },
    { title: "Dotspace Commercial", href: "/portfolio/dotspace-commercial" },
    { title: "Swarna Kosa", href: "/portfolio/swarna-kosa" },
  ];

  const resources = [
    { title: "AI Guides", href: null },
    { title: "Learning Center", href: null },
    { title: "Prompt Library", href: null },
    { title: "Video SEO", href: null },
    { title: "FAQ", href: null },
  ];

  const renderCard = (item: { title: string, href: string | null }, icon: React.ReactNode) => {
    const isComingSoon = !item.href;
    
    return (
      <div key={item.title} className="p-6 rounded-2xl border border-white/5 bg-black/20 hover:bg-white/5 transition-all duration-300 group flex flex-col h-full">
        <div className="mb-4 text-primary-accent opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 transform origin-left">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-4 tracking-wide text-white group-hover:text-primary-accent transition-colors flex-grow">
          {item.title}
        </h3>
        
        {isComingSoon ? (
          <div className="mt-auto">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/10 bg-white/5 inline-block">
              Coming Soon
            </span>
          </div>
        ) : (
          <Link href={item.href!} className="mt-auto text-[10px] uppercase font-mono tracking-widest flex items-center gap-2 text-zinc-400 group-hover:text-primary-accent transition-colors">
            Explore <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    );
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GlassNavbar />
      <main className="min-h-screen bg-obsidian text-white pt-32 pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {/* Hero Section */}
          <section className="mb-24 pt-10 border-b border-white/5 pb-16">
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-8">
              Enterprise Knowledge Center
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-4xl leading-relaxed">
              The central authority for AI Video Production. Connect directly to our core services, industry solutions, and regional production hubs.
            </p>
          </section>

          {/* Section 1: Core Services */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <PlaySquare className="text-primary-accent w-8 h-8" />
              <h2 className="text-3xl font-black uppercase tracking-tight">Core Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((item) => renderCard(item, <PlaySquare size={24} />))}
            </div>
          </section>

          {/* Section 2: Industries */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <Building2 className="text-primary-accent w-8 h-8" />
              <h2 className="text-3xl font-black uppercase tracking-tight">Industries</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((item) => renderCard(item, <Building2 size={24} />))}
            </div>
          </section>

          {/* Section 3: Locations */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <MapPin className="text-primary-accent w-8 h-8" />
              <h2 className="text-3xl font-black uppercase tracking-tight">Locations</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((item) => renderCard(item, <MapPin size={24} />))}
            </div>
          </section>

          {/* Section 4 & 5: Case Studies and Portfolio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <section>
              <div className="flex items-center gap-4 mb-10">
                <Briefcase className="text-primary-accent w-8 h-8" />
                <h2 className="text-3xl font-black uppercase tracking-tight">Case Studies</h2>
              </div>
              <div className="flex flex-col gap-4">
                {caseStudies.map((item) => renderCard(item, <Briefcase size={20} />))}
              </div>
            </section>
            
            <section>
              <div className="flex items-center gap-4 mb-10">
                <Sparkles className="text-primary-accent w-8 h-8" />
                <h2 className="text-3xl font-black uppercase tracking-tight">Portfolio</h2>
              </div>
              <div className="flex flex-col gap-4">
                {portfolio.map((item) => renderCard(item, <Sparkles size={20} />))}
              </div>
            </section>
          </div>

          {/* Section 6: Resources */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <BookOpen className="text-primary-accent w-8 h-8" />
              <h2 className="text-3xl font-black uppercase tracking-tight">Resources</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {resources.map((item) => renderCard(item, <BookOpen size={24} />))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="p-16 rounded-[2rem] border border-primary-accent/20 bg-gradient-to-b from-primary-accent/10 to-transparent flex flex-col items-center text-center">
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">Ready to Scale Your Visuals?</h2>
            <p className="text-zinc-400 mb-10 max-w-2xl font-light text-lg">
              Deploy our neural production workflows for your brand. Connect with our experts to schedule a cinematic consultation.
            </p>
            <Link href="/contact" className="px-10 py-5 bg-primary-accent text-white font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white hover:text-primary-accent transition-all duration-300 shadow-[0_0_40px_rgba(255,51,102,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
              Initiate Project
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

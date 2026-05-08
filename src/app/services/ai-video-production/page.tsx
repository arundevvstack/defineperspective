import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  Cpu,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  Globe,
  Sparkles,
  Video,
  Clapperboard,
  MonitorPlay,
  PlayCircle,
  MessageCircle,
  Search,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/lead-capture-form";
import LiteYouTube from "@/components/lite-youtube";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "Define Perspective is the top-rated AI video production company in India, Kerala, & UAE. Specialized in AI ad films, social media reels, and cinematic AI storytelling in Kochi & Trivandrum.",
  keywords: [
    "AI Video Production Company India",
    "AI Video Production Kerala",
    "AI Video Production UAE",
    "AI Video Ads Agency",
    "AI Video Production Trivandrum / Kochi",
    "AI video ads production",
    "AI product video creation",
    "AI explainer video company",
    "best AI video production company for ads",
    "AI video production for ecommerce brands",
  ],
};

const aiSilos = [
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: ["Meta Ads (FB / IG)", "YouTube Ads", "Performance Creatives", "A/B Testing Variations"],
    seo: "AI-powered video ads designed for conversions & ROAS growth",
    icon: Zap,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: ["Reels / Shorts / TikTok", "Daily Content", "Trend-based Videos"],
    seo: "AI social media video production for viral reach & engagement",
    icon: Target,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: ["Neural AI Editing", "AI VFX & Motion", "AI Color Grading", "AI Enhancement Hub"],
    seo: "Advanced AI video editing & post-production services",
    icon: Cpu,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: ["E-commerce Videos", "Product Demos", "Amazon / Shopify Visuals"],
    seo: "AI product video production for e-commerce & D2C brands",
    icon: Sparkles,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: ["SaaS Explainers", "Educational Videos", "AI Avatar Videos"],
    seo: "AI explainer video company for startups & SaaS platforms",
    icon: BrainCircuit,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: ["Company Profiles", "Internal Communication", "Employer Branding"],
    seo: "AI corporate video production for modern businesses",
    icon: Shield,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: ["High-end AI Brand Films", "Premium Visual Narratives"],
    seo: "Cinematic AI video production with premium storytelling",
    icon: PlayCircle,
  },
  {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    services: ["Short Films", "Music Videos", "Narrative Content"],
    seo: "AI-powered film production & narrative storytelling",
    icon: Clapperboard,
  },
];

const locationBlocks = [
  {
    id: "india",
    city: "India",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "Positioned as the best AI video production company in India, Define Perspective integrates massive neural compute with cinematic vision. We deliver AI-led performance creatives for national brands, ensuring India stays at the forefront of the global AI media revolution.",
  },
  {
    id: "kerala",
    city: "Kerala",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "No.1 AI video production agency in Kerala. We use high-velocity AI pipelines to serve the state's growing startup and media ecosystem, delivering global-standard AI content from our specialized labs in God's Own Country.",
  },
  {
    id: "trivandrum",
    city: "Trivandrum",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "Top AI video production studio in Trivandrum, catering to the capital's tech and education sectors. Our AI nodes in Trivandrum are optimized for automated explainer production and SaaS-focused visual marketing.",
  },
  {
    id: "kochi",
    city: "Kochi",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "The elite choice for AI video production in Kochi. We operate at the intersection of heritage cinema and neural innovation, providing Kochi's commercial market with AI-integrated TVCs and digital brand films.",
  },
  {
    id: "uae",
    city: "UAE",
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    content: "Leading AI video production company in the UAE. Our Middle Eastern delivery hub focuses on luxury AI brand films and performance-driven ad creatives for the global luxury and tech markets in Dubai and beyond.",
  },
];

export default function AIVideoProductionLandingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI video production?",
        "acceptedAnswer": { "@type": "Answer", "text": "AI video production is the synthesis of cinematic filmmaking with advanced neural networks and generative AI. It allows for faster turnaround times, cost-efficient scaling, and hyper-personalized visual content." }
      },
      {
        "@type": "Question",
        "name": "Which is the best AI video production company in Kerala?",
        "acceptedAnswer": { "@type": "Answer", "text": "Define Perspective is recognized as the best AI video production company in Kerala and Kochi, providing high-fidelity AI ad films and brand content for national and global clients." }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 pb-40 px-6 md:px-12 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GlassNavbar />
      
      {/* AI Visual Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/10 blur-[280px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-white/5 blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* 🔥 HERO SECTION */}
        <header className="mb-48 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-12">
             <div className="px-6 py-2 rounded-full border border-primary-accent/30 text-[10px] font-mono font-black text-primary-accent uppercase tracking-[0.4em] bg-primary-accent/10 backdrop-blur-md">
               Node: Professional AI Video Hub
             </div>
          </div>
            AI Production <br />
            <span className="text-primary-accent">Services_</span>
          <p className="text-xl md:text-3xl text-zinc-300 font-light max-w-5xl leading-tight uppercase tracking-widest leading-loose mb-16">
            👉 India’s Leading <span className="text-white font-bold">AI Video Production</span> Company for Ads, Content & Brand Films. Scaling brands across <span className="text-white">India, Kerala, UAE, Trivandrum & Kochi</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <Link href="#lead-capture" className="h-24 px-16 rounded-3xl bg-primary-accent text-black font-black uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-6 hover:scale-105 transition-all shadow-2xl">
              Get Free AI Strategy <ArrowRight size={24} />
            </Link>
            <Link href="https://wa.me/917012941696" className="h-24 px-16 rounded-3xl bg-white/5 border border-white/20 text-white font-black uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-6 hover:bg-white/10 transition-all shadow-xl">
              Consult on WhatsApp <MessageCircle size={24} className="text-[#25D366]" />
            </Link>
          </div>
          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-40 grayscale">
             {["3X Velocty", "AI-First Workflows", "Data-Backed Creatives", "Performance Focused"].map(t => (
               <span key={t} className="text-[10px] uppercase font-mono tracking-widest flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-primary-accent" /> {t}
               </span>
             ))}
          </div>
        </header>

        {/* 🎥 SHOWREEL SECTION */}
        <section className="mb-48 relative">
           <div className="relative aspect-video rounded-[5rem] overflow-hidden border border-white/5 shadow-2xl">
              <LiteYouTube videoId="8p3_P0G_7S8" title="AI Video Production Hub Showreel" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-16 left-16 z-20">
                 <p className="text-4xl md:text-7xl font-black italic uppercase text-white tracking-tighter leading-none mix-blend-overlay">
                   AI Videos That Perform, <br />Convert & Scale.
                 </p>
              </div>
           </div>
        </section>

        {/* 🎞️ FEATURED PROJECT: LACRISPO */}
        <section className="mb-48">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group">
                 <LiteYouTube videoId="vGijXeVUS74" title="Lacrispo Snacks AI Commercial" />
                 <div className="absolute inset-0 bg-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <div className="space-y-10">
                 <div className="flex items-center gap-4">
                    <span className="px-4 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/20 text-[10px] font-black text-primary-accent uppercase tracking-widest">Featured Project</span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Client: Lacrispo Snacks</span>
                 </div>
                 <h2 className="text-4xl md:text-7xl font-black uppercase italic leading-tight tracking-tighter">
                    Lacrispo Snacks <br />
                    <span className="text-primary-accent">AI Commercial_</span>
                 </h2>
                 <p className="text-lg text-zinc-400 font-light leading-relaxed uppercase tracking-widest max-w-xl">
                    A professional project blending high-end food filming with advanced AI tools. This ad shows the future of snack marketing in Kerala.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                    <div>
                       <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Category</h4>
                       <p className="text-sm font-bold uppercase tracking-tight">AI Commercial / Theatre Ad</p>
                    </div>
                    <div>
                       <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Visual Style</h4>
                       <p className="text-sm font-bold uppercase tracking-tight">Luxury Food Cinematic</p>
                    </div>
                 </div>
                 <Link href="/contact" className="h-20 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 hover:scale-105 transition-all w-fit shadow-xl mt-12">
                    Inquire for Similar Project <ArrowRight size={18} />
                 </Link>
              </div>
           </div>
        </section>

        {/* 💰 LEAD CAPTURE SECTION */}
        <section id="lead-capture" className="mb-48 grid lg:grid-cols-2 gap-32 items-center">
           <div className="space-y-16">
              <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.8] mb-12">
                 The AI <br /><span className="text-primary-accent font-blacker">Advantage_</span>
              </h2>
              <div className="space-y-10">
                 {[
                   { t: "Fast Turnaround", d: "High-quality video assets ready in hours, not weeks." },
                   { t: "Easy to Scale", d: "Generate thousands of ad versions for testing instantly." },
                   { t: "Cost-Effective", d: "Top agency quality at a fraction of traditional production costs." },
                   { t: "Modern Look", d: "Next-gen visual quality powered by our advanced AI tools." }
                 ].map((node, i) => (
                   <div key={i} className="flex gap-8 group">
                      <div className="h-14 w-14 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-black transition-all">
                         <Cpu size={28} />
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-xl font-black uppercase italic text-white group-hover:text-primary-accent transition-colors">{node.t}</h4>
                         <p className="text-sm text-zinc-400 uppercase tracking-widest leading-relaxed font-light">{node.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <LeadCaptureForm />
        </section>

        {/* 📊 SERVICE BLOCKS (SEO OPTIMIZED) */}
        <section className="mb-48">
           <div className="text-center mb-32">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-8">Our AI <span className="text-primary-accent">Services_</span></h2>
              <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">Expert Video Solutions From Our AI Lab</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {aiSilos.map((silo, idx) => (
                <div key={`${silo.title}-${idx}`} className="p-12 rounded-[4rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary-accent/30 transition-all group flex flex-col">
                   <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary-accent mb-12 group-hover:scale-110 transition-transform">
                      <silo.icon size={32} />
                   </div>
                   <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-8 group-hover:text-primary-accent transition-colors">
                      {silo.title}
                   </h3>
                   <ul className="space-y-4 mb-12 flex-1">
                      {silo.services.map((s) => (
                        <li key={s} className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest leading-loose flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary-accent opacity-30 shrink-0" />
                           {s}
                        </li>
                      ))}
                   </ul>
                   <div className="pt-8 border-t border-white/5">
                      <p className="text-[10px] font-black italic uppercase text-zinc-400 tracking-widest">
                         {silo.seo}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 🌍 LOCATION SEO (CRITICAL) */}
        <section className="mb-48 space-y-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-center mb-24 leading-none">Our Global <br /><span className="text-primary-accent">Presence_</span></h2>
            <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[5rem] overflow-hidden">
               {locationBlocks.map(loc => (
                 <div key={loc.id} className="p-16 bg-obsidian hover:bg-white/[0.02] transition-colors group">
                    <div className="flex items-center gap-6 mb-8">
                       <div className="h-1 w-10 bg-primary-accent group-hover:w-20 transition-all duration-500" />
                       <h3 className="text-3xl font-black uppercase text-white italic tracking-tighter group-hover:text-primary-accent transition-colors">
                          {loc.title}
                       </h3>
                    </div>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12 uppercase tracking-widest text-[13px]">
                       {loc.content}
                    </p>
                    <Link href="/contact" className="flex items-center gap-4 text-[10px] font-mono text-zinc-700 uppercase tracking-widest group-hover:text-white transition-colors">
                       Get in Touch <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform" />
                    </Link>
                 </div>
               ))}
               <div className="p-20 bg-primary-accent/10 flex flex-col justify-center items-center text-center space-y-12 group hover:bg-primary-accent transition-all duration-700">
                  <BrainCircuit size={160} className="text-primary-accent group-hover:text-black transition-colors" />
                  <h4 className="text-6xl font-blacker uppercase text-white group-hover:text-black leading-[0.8] italic">AI <br />Leadership</h4>
                  <div className="flex gap-4">
                     {["Kochi", "Dubai", "Trivandrum"].map(c => <span key={c} className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] uppercase font-mono text-white/50 group-hover:text-black group-hover:border-black/20">{c} Hub</span>)}
                  </div>
               </div>
            </div>
        </section>

        {/* 🤖 AI SEARCH (FAQ SECTION) */}
        <section className="mb-48 p-12 md:p-32 rounded-[5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Cpu size={300} />
           </div>
           
           <div className="max-w-4xl relative z-10">
              <h2 className="text-4xl md:text-[6rem] font-black uppercase italic mb-24 leading-none text-white">Common <br /><span className="text-primary-accent">Questions_</span></h2>
              
              <div className="space-y-16">
                 {[
                   { q: "What is AI video production?", a: "AI video production is the process of generating or enhancing visual content using neural networks and generative media models. It allows for cinematic quality at 3x speed and significantly lower budgets." },
                   { q: "How does AI video production work?", a: "We integrate proprietary neural pipelines with human cinematography. AI handles the scaling, complex visual synthesis, and high-velocity editing while our creative directors ensure brand-aligned storytelling." },
                   { q: "How much does AI video production cost in India?", a: "AI production is highly cost-efficient. We offer packages that start 40-60% lower than traditional high-end production houses, while maintaining 'Tier-1' visual fidelity." },
                   { q: "Which is the best AI video production company in Kerala?", a: "Define Perspective is the #1 AI video production agency in Kerala and Kochi, known for our 'AI Labs' that serve national and international brands with cutting-edge visual tech." },
                   { q: "Can AI videos be used for ads?", a: "Absolutely. In fact, AI videos often outperform traditional ads because we can generate hundreds of variations for A/B testing, allowing algorithms to find the winning creative path." },
                   { q: "Is AI video better than traditional production?", a: "It's different. While traditional production is great for specific organic captures, AI is vastly superior for performance ads, high-frequency social content, and scalable product videos." }
                 ].map((faq, i) => (
                   <div key={i} className="space-y-6 pb-16 border-b border-white/5 last:border-0 group/faq">
                      <h4 className="text-2xl font-bold text-white uppercase tracking-tight italic group-hover/faq:text-primary-accent transition-colors flex items-center gap-8">
                         <span className="text-primary-accent opacity-20 text-sm font-mono shrink-0">FAQ_0{i+1}</span>
                         {faq.q}
                      </h4>
                      <p className="pl-14 text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-[11px]">
                         {faq.a}
                      </p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🎯 FINAL CTA */}
        <section className="text-center relative py-40">
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none text-white">
              <span className="text-[25rem] font-black uppercase tracking-tighter">NEURAL</span>
           </div>
           
           <div className="relative z-10 space-y-20">
              <h2 className="text-5xl md:text-[9rem] font-black uppercase leading-[0.8] italic text-white tracking-tighter">
                Ready to Scale <br />with <span className="text-primary-accent">AI Video?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-10">
                 <Link href="#lead-capture" className="h-24 px-20 rounded-full bg-primary-accent text-black font-black uppercase tracking-[0.3em] text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-6">
                   Book Free AI Strategy <ArrowRight size={28} />
                 </Link>
                 <Link href="/contact" className="h-24 px-20 rounded-full bg-transparent border-2 border-primary-accent text-white font-black uppercase tracking-[0.3em] text-sm hover:bg-primary-accent hover:text-black transition-all shadow-xl flex items-center justify-center gap-6">
                   Get Custom Quote <ArrowRight size={28} />
                 </Link>
              </div>
              <div className="flex justify-center items-center gap-16 opacity-30 mt-20">
                 {["Trivandrum Lab", "Kochi Lab", "UAE Office", "Global Delivery"].map(t => (
                   <span key={t} className="text-[9px] uppercase font-mono tracking-widest">{t}</span>
                 ))}
              </div>
           </div>
        </section>

      </div>

      {/* 🏙️ Sticky CTA */}
      <div className="fixed bottom-10 right-10 z-[100]">
         <Link href="#lead-capture" className="h-20 w-20 md:h-24 md:w-64 rounded-full bg-primary-accent text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 shadow-[0_0_60px_rgba(var(--primary-accent-rgb),0.5)] hover:scale-105 transition-all">
            <span className="hidden md:block">Get AI Audit</span>
            <Cpu size={28} />
         </Link>
      </div>
    </main>
  );
}

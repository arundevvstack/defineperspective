"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Plus, Users, Globe, BarChart3, Star, Building2, Zap, Target, Activity, 
  MessageCircle, ArrowRight, Shield, Cpu, Play, CheckCircle2, 
  BrainCircuit, Rocket, Camera, Video, Sparkles, Layout, Lightbulb,
  MousePointer2, Phone, Mail
} from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";
import FAQSection from "@/components/faq-section";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const SectionHeader = ({ tag, title, subtitle, align = "center", h2 = false }: any) => {
  const TitleTag = h2 ? "h2" : "h3";
  return (
    <div className={cn("mb-16 md:mb-24", align === "center" ? "text-center" : "text-left")}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-[10px] font-mono tracking-[0.4em] uppercase text-primary-accent mb-6 block font-bold"
      >
        {tag}
      </motion.span>
      <TitleTag className="text-4xl md:text-6xl lg:text-[6rem] font-black text-white uppercase leading-tight md:leading-[0.85] tracking-tighter">
        {title}
      </TitleTag>
      {subtitle && (
        <p className={cn(
          "mt-8 text-zinc-400 font-normal text-sm md:text-lg max-w-3xl leading-relaxed uppercase tracking-widest",
          align === "center" ? "mx-auto" : ""
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default function ArunDevvContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  const faqs = [
    {
      question: "Who is Arun Devv?",
      answer: "Arun Devv is a Senior Content Strategist, Content Architect, and AI Video Creator with over 20 years of experience. He specializes in building high-impact brand stories using a fusion of cinematic filmmaking and advanced AI production workflows."
    },
    {
      question: "What does Arun Devv specialize in?",
      answer: "His expertise covers AI Video Production, Brand Storytelling, Commercial Ad Filmmaking, Content Architecture, and Performance Creative Direction. He is known for creating scalable content ecosystems for luxury brands and tech startups."
    },
    {
      question: "Is Arun Devv available for AI video production in Kerala?",
      answer: "Yes, Arun Devv operates primarily out of Kerala with dedicated studio hubs in Kochi and Trivandrum, serving clients across Ernakulam and the entire state with premium AI filmmaking services."
    },
    {
      question: "Does Arun Devv work with brands across India?",
      answer: "Absolutely. While based in Kerala, Arun Devv works with premium brands and startups across India, including major metros like Bangalore, Chennai, Mumbai, and Hyderabad."
    },
    {
      question: "What industries does Arun Devv work with?",
      answer: "He works across diverse sectors including Luxury Goods, Real Estate, Tech Startups, Healthcare, Hospitality, and Personal Branding for high-net-worth individuals."
    },
    {
      question: "Can Arun Devv create cinematic AI commercials?",
      answer: "Yes, he is a pioneer in Cinematic AI filmmaking, combining traditional high-end cinematography with generative AI pipelines to create broadcast-quality TV commercials."
    },
    {
      question: "Does Arun Devv provide content strategy for startups?",
      answer: "Yes, he specializes in building 'Content Engines' for startups—systems that allow them to scale their visual presence rapidly while maintaining premium brand authority."
    },
    {
      question: "Is Arun Devv available in Trivandrum and Kochi?",
      answer: "Yes, Arun Devv manages production teams and studio operations in both Trivandrum and Kochi, providing local accessibility with national-level production quality."
    }
  ];

  const services = [
    { title: "AI Video Production", desc: "Next-gen neural filmmaking for high-velocity brand growth.", icon: Cpu },
    { title: "Brand Films", desc: "Cinematic narratives that define market authority and legacy.", icon: Play },
    { title: "Commercial Ads", desc: "High-conversion TVCs and digital ads designed for ROI.", icon: Rocket },
    { title: "Content Strategy", desc: "Architecting the blueprint for your brand's digital dominance.", icon: Layout },
    { title: "YouTube Growth", desc: "Premium long-form content engineered for retention and scale.", icon: Video },
    { title: "Social Campaigns", desc: "Viral visual systems for Instagram, TikTok, and modern social.", icon: Sparkles },
    { title: "Luxury Product Ads", desc: "Impeccable visual mastery for high-end product positioning.", icon: Star },
    { title: "Cinematic Photography", desc: "High-fidelity brand imagery that captures the soul of a business.", icon: Camera },
    { title: "Startup Branding", desc: "Identity systems for the next generation of unicorn brands.", icon: Lightbulb },
    { title: "Personal Branding", desc: "Positioning founders as industry leaders through high-end media.", icon: Users },
    { title: "Performance Creative", desc: "Ads that don't just look good, but drive measurable results.", icon: BarChart3 },
    { title: "Viral Visual Systems", desc: "Engineering content designed to penetrate culture and go viral.", icon: Zap }
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arun Devv",
    "jobTitle": "Senior Content Strategist & AI Video Creator",
    "description": "Best Content Architect and AI Video Creator in India, specializing in cinematic storytelling and scalable brand systems.",
    "url": "https://defineperspective.in/arun-devv",
    "sameAs": [
      "https://instagram.com/defineperspective/",
      "https://linkedin.com/company/defineperspective"
    ],
    "knowsAbout": ["AI Video Production", "Content Strategy", "Cinematic Filmmaking", "Brand Architecture"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Trivandrum",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://defineperspective.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Arun Devv",
        "item": "https://defineperspective.in/arun-devv"
      }
    ]
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-obsidian text-white selection:bg-primary-accent selection:text-white overflow-x-hidden font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <GlassNavbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/arun-devv/arun-4.jpg" 
            alt="Arun Devv - Best AI Video Creator in India"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] md:text-xs font-mono tracking-[0.5em] uppercase text-primary-accent mb-8 block font-black">
              Elite Content Architect {" // "} AI Filmmaker
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-12">
              Arun Devv — <br />
              <span className="text-primary-accent italic">Brand Stories_</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 font-light max-w-4xl mx-auto uppercase tracking-widest leading-relaxed mb-16">
              20+ years of expertise in content strategy, cinematic storytelling, and AI-powered video production across Kerala, South India, and India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href="/contact" 
                className="group h-20 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-6 hover:bg-primary-accent hover:text-white transition-all shadow-2xl active:scale-95"
              >
                Book a Project <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link 
                href="/portfolio" 
                className="group h-20 px-12 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-6 hover:bg-white/10 transition-all backdrop-blur-xl"
              >
                View Portfolio <Play size={18} className="text-primary-accent" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-500">Explore Authority</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary-accent to-transparent" />
        </motion.div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-24 md:py-40 px-6 bg-black border-y border-white/5 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
            {[
              { label: "Experience", value: "20+ Yrs", icon: Star },
              { label: "Content strategy", value: "Expert", icon: Target },
              { label: "AI Production", value: "Lead", icon: Cpu },
              { label: "Ad Direction", value: "Senior", icon: Video }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <stat.icon size={24} className="text-primary-accent mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 md:py-40 px-6 bg-obsidian relative">
        <div className="container mx-auto">
          <SectionHeader 
            h2 
            tag="Core Offerings" 
            title={<>High-Impact <br /><span className="text-primary-accent italic">Creative Systems_</span></>}
            subtitle="Engineered for brands requiring national-level authority and scalable growth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary-accent/30 transition-all group hover:bg-white/[0.04]"
              >
                <service.icon size={32} className="text-primary-accent mb-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-black uppercase text-white mb-4 tracking-tighter">{service.title}</h3>
                <p className="text-sm text-zinc-400 font-light uppercase tracking-widest leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 md:py-60 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 rounded-full blur-[200px] pointer-events-none" />
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 group shadow-2xl"
            >
              <Image 
                src="/images/arun-devv/arun-5.jpg" 
                alt="Arun Devv - Content Architect Kerala"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10">
                <span className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.3em] block mb-2">Philosophy</span>
                <h3 className="text-xl font-bold uppercase text-white">Visionary Architecture</h3>
              </div>
            </motion.div>

            <div className="space-y-12">
              <SectionHeader 
                h2 
                align="left"
                tag="The Profile" 
                title={<>Arun Devv: <br /><span className="text-primary-accent italic">The Architect_</span></>}
              />
              <div className="space-y-8 text-xl md:text-2xl text-zinc-300 font-light leading-relaxed uppercase tracking-tight">
                <p>
                  Known for combining <span className="text-white font-bold">cinematic filmmaking</span>, psychology-driven storytelling, and AI-powered production workflows, Arun Devv helps businesses create high-converting visual ecosystems.
                </p>
                <p>
                  As the <span className="text-white font-bold">Best AI Video Creator in India</span> and a pioneer in Kerala's media landscape, his work bridges the gap between traditional craft and future-tech efficiency.
                </p>
                <p className="text-lg text-zinc-500 tracking-widest font-mono">
                  EXPERTISE: AI FILMMAKING // BRAND POSITIONING // ADVERTISING PSYCHOLOGY // VIRAL SYSTEMS // CINEMATOGRAPHY
                </p>
              </div>
              
              <Link 
                href="/contact" 
                className="inline-flex h-20 px-12 rounded-2xl bg-primary-accent text-black font-black uppercase tracking-widest text-xs items-center gap-6 hover:bg-white hover:shadow-2xl transition-all"
              >
                Connect for Strategy <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BRANDS WORK WITH ARUN DEVV */}
      <section className="py-24 md:py-40 px-6 bg-obsidian border-y border-white/5">
        <div className="container mx-auto">
          <SectionHeader 
            h2 
            tag="Strategic Value" 
            title={<>Why Brands Work <br />With <span className="text-primary-accent italic">Arun Devv_</span></>}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Strategy First Approach", d: "Content built on deep brand architecture, not just aesthetics.", i: Target },
              { t: "AI Enhanced Production", d: "Next-gen pipelines for 10x velocity and high-fidelity output.", i: Cpu },
              { t: "Cinematic Quality", d: "Hollywood-standard visuals tailored for modern digital consumption.", i: Camera },
              { t: "Business Creativity", d: "Creativity designed to move the needle on your bottom line.", i: BarChart3 },
              { t: "Psychology Centric", d: "Deep understanding of audience behavior and neural triggers.", i: BrainCircuit },
              { t: "Scalable Engines", d: "Building systems that continue to deliver value long-term.", i: Layout }
            ].map((item, i) => (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-[3rem] bg-black/40 border border-white/5 hover:border-primary-accent/20 transition-all"
              >
                <item.i size={28} className="text-primary-accent mb-8" />
                <h4 className="text-lg md:text-xl font-bold uppercase text-white mb-4 tracking-tighter">{item.t}</h4>
                <p className="text-sm text-zinc-500 font-light uppercase tracking-widest leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCKS (Semantic) */}
      <section className="py-24 md:py-60 px-6 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-40">
            {/* Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight tracking-tighter mb-8">
                  Best AI Video Creator <br />in <span className="text-primary-accent">Kerala_</span>
                </h2>
                <div className="h-1 w-20 bg-primary-accent mb-8" />
              </div>
              <div className="lg:col-span-7">
                <p className="text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest">
                  Operating from the heart of **Trivandrum and Kochi**, Arun Devv has established himself as the premier authority in **AI filmmaking**. His studio hubs provide end-to-end production for brands seeking to dominate the South Indian market with high-fidelity, futuristic video content.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight tracking-tighter mb-8 text-right">
                  AI Ad Film <br />Director <span className="text-primary-accent">India_</span>
                </h2>
                <div className="h-1 w-20 bg-primary-accent ml-auto mb-8" />
              </div>
              <div className="lg:col-span-7 lg:order-1">
                <p className="text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest text-right">
                  With a national portfolio spanning **Mumbai, Bangalore, and Chennai**, Arun's expertise in **AI commercial production** ensures that every brand film is not only a visual masterpiece but a strategic asset designed for the modern performance-driven advertising landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 md:py-40 px-6 bg-obsidian border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader 
            h2 
            tag="Knowledge Base" 
            title={<>Common <span className="text-primary-accent italic">Questions_</span></>}
          />
          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5"
              >
                <h3 className="text-lg md:text-xl font-bold text-white uppercase mb-4 flex items-center gap-6">
                  <span className="h-2 w-2 rounded-full bg-primary-accent" /> {faq.question}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-60 px-6 bg-black relative">
        <div className="container mx-auto max-w-5xl text-center">
          <SectionHeader 
            tag="Initialize" 
            title={<>Build Your <br /><span className="text-primary-accent italic">Legacy Now_</span></>}
            subtitle="Are you ready to architect a high-performance visual ecosystem for your brand?"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
            <Link 
              href="/contact" 
              className="h-24 px-16 rounded-[2.5rem] bg-primary-accent text-black font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-6 hover:scale-105 transition-all shadow-2xl shadow-primary-accent/20"
            >
              Start Consultation <ArrowRight size={24} />
            </Link>
            <a 
              href="https://wa.me/917012941696" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-24 px-16 rounded-[2.5rem] bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-6 hover:bg-white/10 transition-all backdrop-blur-xl"
            >
              WhatsApp <MessageCircle size={24} className="text-[#25D366]" />
            </a>
          </div>
        </div>
      </section>

      {/* STICKY CONTACT TRIGGER */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-10 right-10 z-[100] hidden md:block"
      >
        <Link 
          href="/contact"
          className="group flex items-center gap-4 bg-primary-accent p-2 pl-8 rounded-full shadow-2xl hover:scale-105 transition-all"
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-black">Start Project</span>
          <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors">
            <ArrowRight size={20} className="text-primary-accent group-hover:text-black transition-colors" />
          </div>
        </Link>
      </motion.div>

      <WhatsAppChat />
    </main>
  );
}

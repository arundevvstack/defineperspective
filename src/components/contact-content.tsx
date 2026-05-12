"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Mail, Phone, MapPin, MessageCircle, Globe, Zap, 
  Activity, Star, Shield, Trophy, Layout, ChevronRight, CheckCircle, Loader2
} from "lucide-react";
import dynamic from "next/dynamic";
import GlassNavbar from "@/components/glass-navbar";
import { cn } from "@/lib/utils";

// Dynamic import for the FAQ section to optimize initial load
const FAQSection = dynamic(() => import("@/components/faq-section"), { ssr: false });

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    whatsapp: "",
    projectType: "Media & AI Video Production",
    budget: "Strategic: ₹5 Lakhs+",
    vision: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Using Formspree for automatic "Success Mail Notification" to Admin
    // And background delivery so user doesn't have to manually 'Send' in a client.
    try {
      const response = await fetch("https://formspree.io/f/defineperspective.in@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `INTAKE_NOTIFICATION: ${formData.projectType} from ${formData.brand}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.error("Submission failed, fallback to mailto");
    }

    // Direct Fallback if Background Submission fails
    const subject = encodeURIComponent(`Project: ${formData.projectType} - ${formData.brand}`);
    const body = encodeURIComponent(
      `Project Details:\n` +
      `Name: ${formData.name}\n` +
      `Brand: ${formData.brand}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Type: ${formData.projectType}\n` +
      `Budget: ${formData.budget}\n` +
      `Vision: ${formData.vision}`
    );
    window.location.href = `mailto:defineperspective.in@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-16 rounded-[4rem] bg-white/[0.05] border border-primary-accent/30 backdrop-blur-3xl flex flex-col items-center justify-center text-center gap-10 min-h-[600px] relative overflow-hidden"
      >
         <div className="absolute top-0 left-0 w-full h-[2px] bg-primary-accent shadow-[0_0_20px_rgba(var(--primary-accent-rgb),1)]" />
         <div className="h-24 w-24 rounded-full bg-primary-accent flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary-accent-rgb),0.3)]">
            <CheckCircle size={48} className="text-black" strokeWidth={3} />
         </div>
         <div className="space-y-4">
            <h3 className="text-4xl font-black uppercase tracking-tighter text-white">Notification Sent</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400 max-w-sm mx-auto leading-relaxed">
               Project intake synchronized. <br />
               <span className="text-primary-accent">Success Mail Notification</span> triggered to the strategy hub.
            </p>
         </div>
         <button 
           onClick={() => setIsSuccess(false)}
           className="h-16 px-12 bg-white text-black rounded-2xl text-[10px] uppercase font-black tracking-widest hover:bg-primary-accent hover:scale-105 transition-all shadow-xl"
         >
            New Transmission
         </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-8 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-accent to-transparent opacity-50" />
      
      <div className="mb-14">
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white">Project Intake</h3>
        <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">Status: Ready to Scale Your Vision</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
               <label className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.2em] ml-1 block">Your Name</label>
               <input 
                 type="text" 
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 placeholder="Enter Name" 
                 required
                 disabled={isSubmitting}
                 className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent focus:bg-white/[0.08] transition-all placeholder:text-zinc-800 text-white disabled:opacity-50" 
               />
            </div>
            <div className="space-y-4">
               <label className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.2em] ml-1 block">Company / Brand</label>
               <input 
                 type="text" 
                 name="brand"
                 value={formData.brand}
                 onChange={handleChange}
                 placeholder="Brand Name" 
                 required
                 disabled={isSubmitting}
                 className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent focus:bg-white/[0.08] transition-all placeholder:text-zinc-800 text-white disabled:opacity-50" 
               />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
               <label className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.2em] ml-1 block">Enterprise Email</label>
               <input 
                 type="email" 
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder="hq@yourbrand.com" 
                 required
                 disabled={isSubmitting}
                 className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent focus:bg-white/[0.08] transition-all placeholder:text-zinc-800 text-white disabled:opacity-50" 
               />
            </div>
            <div className="space-y-4">
               <label className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.2em] ml-1 block">WhatsApp Gateway</label>
               <input 
                 type="tel" 
                 name="whatsapp"
                 value={formData.whatsapp}
                 onChange={handleChange}
                 placeholder="+91 000 000 0000" 
                 required
                 disabled={isSubmitting}
                 className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent focus:bg-white/[0.08] transition-all placeholder:text-zinc-800 text-white disabled:opacity-50" 
               />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
               <label className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.2em] ml-1 block">Project Type</label>
               <select 
                 name="projectType"
                 value={formData.projectType}
                 onChange={handleChange}
                 disabled={isSubmitting}
                 className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent focus:bg-white/[0.08] transition-all text-zinc-400 appearance-none cursor-pointer disabled:opacity-50"
               >
                  <option className="bg-obsidian">Media & AI Video Production</option>
                  <option className="bg-obsidian">TV Commercial / Ad Film</option>
                  <option className="bg-obsidian">Cinematic Brand Narrative</option>
               </select>
            </div>
            <div className="space-y-4">
               <label className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.2em] ml-1 block">Estimated Budget</label>
               <select 
                 name="budget"
                 value={formData.budget}
                 onChange={handleChange}
                 disabled={isSubmitting}
                 className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent focus:bg-white/[0.08] transition-all text-zinc-400 appearance-none cursor-pointer disabled:opacity-50"
               >
                  <option className="bg-obsidian">Strategic: ₹5 Lakhs+</option>
                  <option className="bg-obsidian">Standard: ₹2 - 5 Lakhs</option>
                  <option className="bg-obsidian">Growth: Below ₹2 Lakhs</option>
               </select>
            </div>
        </div>

        <div className="space-y-4">
            <label className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.2em] ml-1 block">Strategy Intake / Vision</label>
            <textarea 
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              rows={4}
              placeholder="Detail your requirements for global Media Production or AI Video Production services."
              disabled={isSubmitting}
              className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-6 text-sm focus:outline-none focus:border-primary-accent focus:bg-white/[0.08] transition-all placeholder:text-zinc-800 resize-none text-white lg:min-h-[160px] disabled:opacity-50" 
            />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={cn(
            "group w-full h-24 rounded-3xl bg-primary-accent text-white font-black uppercase tracking-normal text-sm transition-all shadow-2xl flex items-center justify-center gap-6 hover:shadow-primary-accent/20 active:scale-95 disabled:opacity-100",
            !isSubmitting && "hover:scale-[1.03]"
          )}
        >
            {isSubmitting ? (
              <>INITIALIZING Bio-Sync... <Loader2 className="animate-spin" size={24} /></>
            ) : (
              <>Get Proposal Within 24 Hours <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" /></>
            )}
        </button>
      </form>
    </motion.div>
  );
}

export default function ContactContent() {
  return (
    <main className="min-h-screen bg-obsidian text-white relative overflow-hidden font-sans selection:bg-primary-accent selection:text-white">


      <GlassNavbar />
      
      {/* Section 1: Project Intake & Connectivity */}
      <section className="pt-48 px-6 md:px-12 relative pb-48 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-fixed">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
           <div className="hidden md:block absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary-accent/40 blur-[250px] rounded-full" />
           <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-blue-500/10 blur-[200px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl">
           <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* Left Column: Connections & Brand Identity Studio */}
              <div className="lg:col-span-5 space-y-16 lg:space-y-32 w-full">
                 
                 <div className="space-y-16">
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-xs font-mono text-zinc-600 uppercase tracking-[0.5em] mb-12 flex items-center gap-4 italic font-bold"
                    >
                       Contact Define Perspective <Mail size={14} className="text-primary-accent" />
                    </motion.h2>
                    
                    <div className="space-y-16">
                        <a href="mailto:defineperspective.in@gmail.com" className="flex gap-8 group">
                           <div className="h-20 w-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-accent transition-all shadow-xl">
                              <Mail size={32} />
                           </div>
                           <div className="flex flex-col justify-center">
                              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1 font-bold">Email Gateway</span>
                              <h4 className="text-sm md:text-base font-medium uppercase tracking-widest text-zinc-400 group-hover:text-primary-accent transition-colors break-all">defineperspective.in@gmail.com</h4>
                           </div>
                        </a>

                        <a href="tel:+917012941696" className="flex gap-8 group">
                           <div className="h-20 w-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-accent transition-all shadow-xl">
                              <Phone size={32} />
                           </div>
                           <div className="flex flex-col justify-center">
                              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1 font-bold">Talk With Us</span>
                              <h4 className="text-sm md:text-base font-medium uppercase tracking-widest text-zinc-400 group-hover:text-primary-accent transition-colors">+91 701 294 1696</h4>
                           </div>
                        </a>

                        <a href="https://wa.me/917012941696" target="_blank" className="flex gap-8 group">
                           <div className="h-20 w-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#25D366] transition-all shadow-xl">
                              <MessageCircle size={32} />
                           </div>
                           <div className="flex flex-col justify-center">
                              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1 font-bold">WhatsApp Now</span>
                              <h4 className="text-sm md:text-base font-medium uppercase tracking-widest text-zinc-400 group-hover:text-[#25D366] transition-colors">+91 701 294 1696</h4>
                           </div>
                        </a>
                    </div>
                 </div>

                 {/* Geographical Presence (SEO Power Hub) */}
                 <div className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden group hover:bg-white/[0.04] transition-all">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary-accent/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
                       Region Specialization <Globe size={14} />
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="space-y-6">
                          <span className="text-[11px] text-zinc-400 uppercase font-mono block mb-2 font-bold underline decoration-primary-accent decoration-2 underline-offset-8">Kerala Studio (India)</span>
                          <p className="text-xs text-zinc-400 font-light leading-relaxed uppercase tracking-widest">
                            <span className="text-white font-bold block mb-1">Kochi Studio:</span> Industrial Video Production Center <br />
                            <span className="text-white font-bold block mb-1 mt-3">Trivandrum Studio:</span> AI Media Research & VFX Lab
                          </p>
                       </div>
                       <div className="space-y-6">
                          <span className="text-[11px] text-zinc-400 uppercase font-mono block mb-2 font-bold underline decoration-primary-accent decoration-2 underline-offset-8">Global Studio (UAE)</span>
                          <p className="text-xs text-zinc-400 font-light leading-relaxed uppercase tracking-widest">
                            <span className="text-white font-bold block mb-1">Dubai Studio:</span> Creative Strategy & Luxury Content Hub
                          </p>
                       </div>
                    </div>
                    <div className="mt-12 pt-10 border-t border-white/10">
                       <p className="text-[9px] text-zinc-600 font-mono uppercase leading-relaxed tracking-wider">
                          Recognized as the <span className="text-zinc-400 font-bold">top AI video production company in Kerala and India</span>. Servicing major brands across the Globe with unified Media & AI workflows.
                       </p>
                    </div>
                 </div>

              </div>

              {/* Right Column: Intake Form Unit */}
              <div className="lg:col-span-7 w-full">
                 <ContactForm />
              </div>

           </div>
        </div>
      </section>

      {/* Section 2: Branding Branding & Entity Studio (SEO H2/H3 Injection) */}
      <section className="py-48 px-6 md:px-12 relative overflow-visible border-y border-white/5 bg-black/40">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary-accent/10 blur-[200px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl">
           <div className="text-center md:text-left max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center md:justify-start gap-6 mb-12"
              >
                 <div className="h-[2px] w-16 bg-primary-accent" />
                 <span className="text-xs font-mono tracking-[0.6em] uppercase text-primary-accent font-black">Kochi • Dubai • Trivandrum</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-bold uppercase tracking-tighter leading-[0.8] mb-16 text-center md:text-left"
              >
                <span className="text-primary-accent tracking-[-0.05em]">Define <br /> Perspective_</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                 <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-3xl text-zinc-400 font-light leading-snug uppercase tracking-tighter text-center md:text-left"
                 >
                    Building high-conversion visual systems for <span className="text-white font-bold">India and UAE</span>. Fusing cinematic craft with AI logic.
                 </motion.p>
                 <div className="space-y-8">
                    <p className="text-sm md:text-lg text-zinc-400 font-light uppercase tracking-widest leading-relaxed">
                       Operating as the premier <span className="text-white">AI video production studio in Kochi and Trivandrum</span>. Delivering results through cognitive content engineering across <span className="text-white">Kerala, India, and global markets</span>.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                       <span className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">#MediaProductionKerala</span>
                       <span className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">#AIVideoIndia</span>
                       <span className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">#DubaiCreativeStudio</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* AI Readiness Context Hub (SEO & AI READABLE) */}
      <section className="py-8 px-6 md:px-12 bg-white/[0.03] border-b border-white/5 relative z-20">
         <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 text-[9px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 leading-none">
               <div className="flex items-center gap-2 leading-none">
                  <Zap size={14} className="text-primary-accent shrink-0" />
                  <span>Best AI Video Production Kerala</span>
               </div>
               <div className="flex items-center gap-2 leading-none">
                  <Activity size={14} className="text-primary-accent shrink-0" />
                  <span>Top Media Marketing Agency India</span>
               </div>
               <div className="flex items-center gap-2 leading-none">
                  <Globe size={14} className="text-primary-accent shrink-0" />
                  <span>Elite Film Production UAE</span>
               </div>
               <div className="flex-grow hidden lg:block h-[1px] bg-white/5" />
               <div className="italic text-zinc-600 leading-none">
                  Global Intake Studio // 2026 // Active
               </div>
            </div>
         </div>
      </section>

      {/* Section 3: Strategic Support (FAQ) */}
      <FAQSection />

      {/* Structured Data (Schema.org) - Intensive Local & Global SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MediaAgency",
            "name": "Define Perspective",
            "alternateName": "Define Perspective AI Video Production Studio",
            "image": "https://defineperspective.in/logo.png",
            "url": "https://defineperspective.in",
            "telephone": "+91-7012941696",
            "email": "defineperspective.in@gmail.com",
            "areaServed": ["IN", "AE", "US", "GB"],
            "description": "Leading AI video production company in Kerala & India. Specializing in high-end media production, cinematic brand films, and generative AI content in Kochi, Trivandrum, and Dubai.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar",
              "addressLocality": "Trivandrum",
              "addressRegion": "Kerala",
              "postalCode": "695003",
              "addressCountry": "IN"
            },
            "contactPoint": [
               {
                  "@type": "ContactPoint",
                  "contactType": "Kochi Media Studio",
                  "areaServed": "Kochi",
                  "telephone": "+91-7012941696"
               },
               {
                  "@type": "ContactPoint",
                  "contactType": "Dubai Strategy Studio",
                  "areaServed": "United Arab Emirates",
                  "telephone": "+91-7012941696"
               }
            ]
          }),
        }}
      />
    </main>
  );
}

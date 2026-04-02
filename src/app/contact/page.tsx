"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Target, Globe, ArrowRight } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import AIDiscoveryAgent from "@/components/ai-discovery-agent";

function ContactForm() {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const sub = searchParams.get("subject");
    if (sub) setSubject(sub);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email submission with subject
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    const mailSubject = encodeURIComponent(subject || "New Project Requirement");
    const mailBody = encodeURIComponent(
      `Name/Brand: ${data.name}\nGoal: ${data.goal}\nLanguage: ${data.language}\nBudget: ${data.budget}\n\nVision: ${data.vision}`
    );
    
    window.location.href = `mailto:mail@defineperspective.in?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-1">Name & Brand</label>
            <input 
              name="name"
              type="text" 
              required
              placeholder="Who are we telling the story for?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-cyan-400/50 transition-all placeholder:text-zinc-700" 
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-1">Primary Goal</label>
            <select name="goal" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-cyan-400/50 transition-all appearance-none cursor-pointer">
                <option className="bg-obsidian">Drive Sales</option>
                <option className="bg-obsidian">Brand Awareness</option>
                <option className="bg-obsidian">Simplify a Product</option>
                <option className="bg-obsidian">360° Retainer</option>
            </select>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-1">Language Focus</label>
            <select name="language" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-cyan-400/50 transition-all appearance-none cursor-pointer">
                <option className="bg-obsidian">English</option>
                <option className="bg-obsidian">Malayalam</option>
                <option className="bg-obsidian">Multilingual</option>
                <option className="bg-obsidian">Other</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-1">Budget Range</label>
            <select name="budget" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-cyan-400/50 transition-all appearance-none cursor-pointer">
                <option className="bg-obsidian">Standard Production</option>
                <option className="bg-obsidian">Premium / Corporate</option>
                <option className="bg-obsidian">Enterprise / Long-term</option>
            </select>
          </div>
      </div>

      <div className="space-y-3">
          <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-1">Drafting Subject / Requirement</label>
          <input 
            type="text" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Requirement Category"
            className="w-full bg-cyan-400/5 border border-cyan-400/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-cyan-400/50 transition-all text-cyan-400 font-bold" 
          />
      </div>

      <div className="space-y-3">
          <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-1">Describe Your Vision</label>
          <textarea 
            name="vision"
            rows={4}
            placeholder="A simple thought or a link—let us know what you need."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-cyan-400/50 transition-all placeholder:text-zinc-700 resize-none" 
          />
      </div>

      <button type="submit" className="w-full h-16 rounded-2xl bg-primary-accent text-primary-accent-fg font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl flex items-center justify-center gap-4">
          Request a Quote <ArrowRight size={18} />
      </button>
      
      <p className="text-center text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
          Priority Mail Gateway Active
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      <div className="container relative z-10 mx-auto max-w-6xl">
        <header className="mb-24 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-6xl font-black md:text-9xl tracking-tighter uppercase mb-8"
           >
             Get a Quote <br /> <span className="text-cyan-400">Within 24 Hours</span>
           </motion.h1>
           <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-4xl mx-auto">
             "Our creative team is ready to help you with your next video. We work with clients in Kerala and around the world."
           </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
           {/* Direct Channels & Hubs */}
           <div className="lg:col-span-5 space-y-16">
              <div>
                 <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-10">Direct Channels</h2>
                 <div className="space-y-8">
                    <div className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                       <div className="h-14 w-14 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                          <Mail size={24} />
                       </div>
                       <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Email Node</span>
                          <span className="text-xl font-bold">mail@defineperspective.in</span>
                       </div>
                    </div>
                    <div className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                       <div className="h-14 w-14 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                          <Phone size={24} />
                       </div>
                       <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Phone / WhatsApp</span>
                          <span className="text-xl font-bold">+91 871 400 5550</span>
                       </div>
                    </div>
                 </div>
                 <p className="mt-8 text-[10px] font-mono text-zinc-600 italic uppercase tracking-[0.2em] px-4">
                    Response Guarantee: Brief/Quote within 24 business hours.
                 </p>
              </div>

              <div>
                 <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-10">Strategic Hubs</h2>
                 <div className="space-y-8">
                    <div className="p-6 rounded-2xl border-l-[3px] border-cyan-400 bg-white/5 space-y-3">
                       <h3 className="font-bold uppercase tracking-widest text-white">Trivandrum (Head Office)</h3>
                       <p className="text-sm text-zinc-500 leading-relaxed">
                          Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar, Pin: 695003
                       </p>
                    </div>
                    <div className="p-6 rounded-2xl border-l-[3px] border-zinc-800 bg-white/5 space-y-3 hover:border-cyan-400/50 transition-all cursor-crosshair">
                       <h3 className="font-bold uppercase tracking-widest text-zinc-400">Kochi</h3>
                       <p className="text-sm text-zinc-600 leading-relaxed uppercase tracking-widest text-[10px]">
                          Digital Production & AI Innovation Wing
                       </p>
                    </div>
                    <div className="p-6 rounded-2xl border-l-[3px] border-zinc-800 bg-white/5 space-y-3 hover:border-cyan-400/50 transition-all cursor-crosshair">
                       <h3 className="font-bold uppercase tracking-widest text-zinc-400">Chennai</h3>
                       <p className="text-sm text-zinc-600 leading-relaxed uppercase tracking-widest text-[10px]">
                          Regional Media & Photography Studio
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Brief-First Contact Form */}
           <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl relative"
              >
                 <div className="mb-12">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-4">Start Your Project</h2>
                    <p className="text-zinc-500 text-sm font-light">
                       Tell us about your brand and what you want to achieve. We'll get back to you with a custom plan.
                    </p>
                 </div>

                 <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-zinc-500 uppercase tracking-widest font-mono text-xs">Loading Form...</div>}>
                   <ContactForm />
                 </Suspense>
              </motion.div>
           </div>
        </div>
      </div>

      <AIDiscoveryAgent />
    </main>
  );
}

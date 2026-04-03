"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Mail, Phone, ArrowRight, MessageCircle } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import WhatsAppChat from "@/components/whatsapp-chat";

function ContactForm() {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const sub = searchParams.get("subject");
    if (sub) setSubject(sub);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary-accent/50 transition-all placeholder:text-zinc-700 text-white" 
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-1">Primary Goal</label>
            <select name="goal" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary-accent/50 transition-all appearance-none cursor-pointer text-white">
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
            <select name="language" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary-accent/50 transition-all appearance-none cursor-pointer text-white">
                <option className="bg-obsidian">English</option>
                <option className="bg-obsidian">Malayalam</option>
                <option className="bg-obsidian">Multilingual</option>
                <option className="bg-obsidian">Other</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-1">Budget Range</label>
            <select name="budget" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary-accent/50 transition-all appearance-none cursor-pointer text-white">
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
            className="w-full bg-primary-accent/5 border border-primary-accent/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary-accent/50 transition-all text-primary-accent font-bold" 
          />
      </div>

      <div className="space-y-3">
          <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-1">Describe Your Vision</label>
          <textarea 
            name="vision"
            rows={4}
            placeholder="A simple thought or a link—let us know what you need."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary-accent/50 transition-all placeholder:text-zinc-700 resize-none text-white" 
          />
      </div>

      <button type="submit" className="w-full h-16 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl flex items-center justify-center gap-4">
          Request a Quote <ArrowRight size={18} />
      </button>
      
      <p className="text-center text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
          Priority Mail Gateway Active
      </p>
    </form>
  );
}

export default function ContactContent() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 px-6 md:px-12 relative overflow-hidden">
      <GlassNavbar />
      
      <div className="container relative z-10 mx-auto max-w-6xl">
        <header className="mb-24 text-center py-12">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-6xl font-black md:text-9xl tracking-tighter uppercase mb-8 leading-none"
           >
             Define <br /> <span className="text-primary-accent italic shadow-glow">Perspective_</span>
           </motion.h1>
           <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto uppercase tracking-widest">
             "Our creative team is ready to scale your vision. Response guaranteed within 24 node hours."
           </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
           <div className="lg:col-span-5 space-y-16">
              <div>
                 <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-10">Direct Channels</h2>
                 <div className="space-y-8">
                    <a href="mailto:mail@defineperspective.in" className="group flex items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:border-primary-accent/30">
                       <div className="h-16 w-16 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform shadow-2xl">
                          <Mail size={24} />
                       </div>
                       <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Email Node</span>
                          <span className="text-xl font-bold">mail@defineperspective.in</span>
                       </div>
                    </a>
                    <a href="https://wa.me/919496191684" target="_blank" className="group flex items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:border-primary-accent/30">
                       <div className="h-16 w-16 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform shadow-2xl">
                          <MessageCircle size={24} />
                       </div>
                       <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Phone / WhatsApp</span>
                          <span className="text-xl font-bold">+91 949 619 1684</span>
                       </div>
                    </a>
                 </div>
              </div>

              <div>
                 <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-10">Strategic Hubs</h2>
                 <div className="space-y-8">
                    <div className="p-8 rounded-3xl border-l-[3px] border-primary-accent bg-white/5 space-y-3">
                       <h3 className="font-bold uppercase tracking-widest text-white">Trivandrum (Head Office)</h3>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed uppercase tracking-tighter">
                          Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar, Pin: 695003
                       </p>
                    </div>
                    <div className="p-8 rounded-3xl border-l-[3px] border-white/10 bg-white/5 group hover:border-primary-accent transition-all cursor-crosshair">
                       <h3 className="font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Kochi Node</h3>
                       <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
                          Digital Production & AI Innovation Wing
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-12 md:p-16 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl relative"
              >
                 <div className="mb-12">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-4">Start Your Project_</h2>
                    <p className="text-zinc-500 text-xs font-light uppercase tracking-widest leading-relaxed">
                       Provide your brand trajectory and project vision. We'll deploy a strategic brief within 24 hours.
                    </p>
                 </div>

                 <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-zinc-500 uppercase tracking-widest font-mono text-xs animate-pulse">Establishing Secure Node...</div>}>
                   <ContactForm />
                 </Suspense>
              </motion.div>
           </div>
        </div>
      </div>

      <WhatsAppChat />
    </main>
  );
}

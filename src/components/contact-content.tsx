"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";

const Instagram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const Youtube = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 10.15 10.15 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"/><path d="m10 15 5-3-5-3z"/>
  </svg>
);
const Linkedin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const Facebook = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

function ContactForm() {
  return (
    <form className="space-y-8 p-12 rounded-[3.5rem] bg-white/5 border border-white/5 backdrop-blur-3xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
             <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-2 block">Full Name</label>
             <input 
               type="text" 
               name="user_name"
               placeholder="John Doe" 
               className="w-full h-16 bg-transparent border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent/50 transition-all placeholder:text-zinc-700 text-white" 
             />
          </div>
          <div className="space-y-3">
             <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-2 block">Company / Brand</label>
             <input 
               type="text" 
               name="brand"
               placeholder="Global Tech Inc." 
               className="w-full h-16 bg-transparent border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent/50 transition-all placeholder:text-zinc-700 text-white" 
             />
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
             <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-2 block">Enterprise Email</label>
             <input 
               type="email" 
               name="user_email"
               placeholder="hq@brand.com" 
               className="w-full h-16 bg-transparent border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent/50 transition-all placeholder:text-zinc-700 text-white" 
             />
          </div>
          <div className="space-y-3">
             <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-2 block">Phone Connectivity</label>
             <input 
               type="tel" 
               name="contact"
               placeholder="+91 000 000 0000" 
               className="w-full h-16 bg-transparent border border-white/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-primary-accent/50 transition-all placeholder:text-zinc-700 text-white" 
             />
          </div>
      </div>

      <div className="space-y-3">
          <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-2 block">Project Scale / Vision</label>
          <textarea 
            name="vision"
            rows={4}
            placeholder="A simple thought or a link—let us know what you need."
            className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary-accent/50 transition-all placeholder:text-zinc-700 resize-none text-white" 
          />
      </div>

      <button type="submit" className="w-full h-16 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-widest text-sm transition-all shadow-xl flex items-center justify-center gap-4 hover:scale-105 active:scale-95">
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
        <header className="mb-24 py-12 text-left">
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="text-4xl md:text-[6.6rem] font-black tracking-tighter uppercase mb-8 leading-none"
           >
             Define <br /> <span className="text-primary-accent italic">Perspective_</span>
           </motion.h1>
           <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-3xl uppercase tracking-widest">
             "Our creative team is ready to scale your vision. Response guaranteed within 24 node hours."
           </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 pb-40">
           <div className="lg:col-span-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                 <div className="space-y-16">
                    <div className="space-y-12">
                       <div className="flex gap-8 group cursor-pointer">
                          <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-accent group-hover:text-white transition-all">
                             <Mail size={24} />
                          </div>
                          <div>
                             <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">Direct Logic</span>
                             <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-200 group-hover:text-primary-accent transition-colors">mail@defineperspective.in</h4>
                          </div>
                       </div>

                       <div className="flex gap-8 group cursor-pointer">
                          <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-accent group-hover:text-white transition-all">
                             <Phone size={24} />
                          </div>
                          <div>
                             <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">Inbound Voice</span>
                             <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-200 group-hover:text-primary-accent transition-colors">+91 949 619 1684</h4>
                          </div>
                       </div>

                       <div className="flex gap-8 group cursor-pointer">
                          <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-accent group-hover:text-white transition-all">
                             <MapPin size={24} />
                          </div>
                          <div>
                             <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">Spatial Hub</span>
                             <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-200 leading-relaxed">
                                Second Floor, TC.4/1224/4, <br /> Kuravankonam, Kowdiar, Trivandrum <br /> Kerala 695003
                             </h4>
                          </div>
                       </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex gap-10">
                       <a href="https://instagram.com/defineperspective/" target="_blank" className="text-zinc-600 hover:text-white transition-colors"><Instagram size={20} /></a>
                       <a href="https://youtube.com/@DefinePerspective" target="_blank" className="text-zinc-600 hover:text-white transition-colors"><Youtube size={20} /></a>
                       <a href="https://linkedin.com/company/defineperspective" target="_blank" className="text-zinc-600 hover:text-white transition-colors"><Linkedin size={20} /></a>
                       <a href="https://facebook.com/defineperspectiveofficial/" target="_blank" className="text-zinc-600 hover:text-white transition-colors"><Facebook size={20} /></a>
                    </div>
                 </div>

                 <div>
                    <ContactForm />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}

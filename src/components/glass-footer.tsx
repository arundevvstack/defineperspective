"use client";

import Image from "next/image";
import { 
  MapPin, Mail, Phone 
} from "lucide-react";

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

export default function GlassFooter() {
  return (
    <footer className="py-32 px-6 md:px-12 border-t border-[var(--border-subtle)] bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="lg:col-span-1">
             <div className="flex items-center m-0 p-0 mb-10">
                 <Image 
                   src="/images/main-logo.png" 
                   alt="Define Perspective Logo" 
                   width={260} 
                   height={94} 
                   className="object-contain m-0 p-0"
                 />
             </div>
             <div className="space-y-6 text-sm text-zinc-500 font-light leading-relaxed mb-10">
                <div className="flex items-start gap-4">
                   <MapPin size={18} className="text-cyan-400 shrink-0" />
                   <span>Define Perspective, Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar, Thrivandrum, Pin: 695003</span>
                </div>
                <div className="flex items-center gap-4">
                   <Mail size={18} className="text-cyan-400 shrink-0" />
                   <span>mail@defineperspective.in</span>
                </div>
                <div className="flex items-center gap-4">
                   <Phone size={18} className="text-cyan-400 shrink-0" />
                   <span>+91 871 400 5550</span>
                </div>
             </div>
             <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest italic leading-relaxed">
                "Define your brand. Define your future. Define Perspective."
             </p>
          </div>

          <div className="lg:col-span-1">
             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Service Pillars</h4>
             <ul className="flex flex-col gap-4 text-sm text-zinc-500 font-light">
                <li onClick={() => window.location.href = '/services/video-production'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">Video Production</li>
                <li onClick={() => window.location.href = '/services/ai-media-production'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">AI Media Production</li>
                <li onClick={() => window.location.href = '/services/cgi-virtual-production'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">AI CGI & Virtual Prod</li>
                <li onClick={() => window.location.href = '/services/product-content'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">Product Content</li>
                <li onClick={() => window.location.href = '/services/performance-marketing'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">Performance Video Ads</li>
                <li onClick={() => window.location.href = '/services/video-strategy'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">Video Strategy & Consulting</li>
             </ul>
          </div>

          <div className="lg:col-span-1">
             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Strategic Locations</h4>
             <ul className="flex flex-col gap-4 text-sm text-zinc-500 font-light">
                <li onClick={() => window.location.href = '/locations/trivandrum'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">Trivandrum • HQ</li>
                <li onClick={() => window.location.href = '/locations/kochi'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">Kochi • AI Lab</li>
                <li onClick={() => window.location.href = '/locations/kerala'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">Kerala • Full Coverage</li>
                <li onClick={() => window.location.href = '/locations/india'} className="hover:text-cyan-400 cursor-pointer transition uppercase tracking-widest text-[10px]">India • Remote Nodes</li>
             </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col">
             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Social Ecosystem</h4>
             <div className="grid grid-cols-3 gap-4">
                <a 
                  href="https://www.instagram.com/defineperspective/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-400/30"
                >
                   <Instagram size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/@DefinePerspective" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-400/30"
                >
                   <Youtube size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/define-perspective" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-400/30"
                >
                   <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/defineperspectiveofficial/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-400/30"
                >
                   <Facebook size={20} />
                </a>
             </div>
          </div>

        </div>

        <div className="mt-40 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 text-[10px] font-mono text-zinc-600 tracking-[0.3em] uppercase">
           <span>Defining the Perspective © 2026. All rights reserved.</span>
           <span className="hidden md:inline">Nodes: TRV • COK • MAA {" // "} Latency: 1ms</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, Mail, Phone, Activity 
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
const Whatsapp = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default function GlassFooter() {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-[var(--border-subtle)] bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-6 lg:gap-16">
          <div className="col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
             <div className="flex items-center justify-center lg:justify-start m-0 p-0 mb-8">
                 <Image 
                   src="/images/main-logo.png" 
                   alt="Define Perspective Logo" 
                   width={260} 
                   height={94} 
                   className="object-contain m-0 p-0"
                 />
             </div>
             <div className="space-y-5 text-sm text-zinc-500 font-light leading-relaxed mb-8 w-full max-w-sm">
                <div className="flex items-start justify-center lg:justify-start gap-4">
                   <MapPin size={18} className="text-primary-accent shrink-0 mt-1" />
                   <span>Define Perspective, Second Floor, TC.4/1224/4, Kuravankonam, Kowdiar, Thrivandrum, Pin: 695003</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                   <Mail size={18} className="text-primary-accent shrink-0" />
                   <span>defineperspective.in@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                   <Phone size={18} className="text-primary-accent shrink-0" />
                   <span>+91 701 294 1696</span>
                </div>
             </div>
             <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest italic leading-relaxed">
                "Define your brand. Define your future. Define Perspective."
             </p>
          </div>

          <div className="col-span-1 flex flex-col items-start text-left">
             <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-6 text-primary-accent">Resources</h4>
              <ul className="flex flex-col items-start gap-4 text-sm text-zinc-500 font-light">
                 <li><Link href="/blogs" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">Blogs</Link></li>
                 <li><Link href="/analysis" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">Website Analysis</Link></li>
              </ul>
          </div>

          <div className="col-span-1 flex flex-col items-start text-left">
             <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-6 text-primary-accent">AI Pillars</h4>
             <ul className="flex flex-col items-start gap-4 text-sm text-zinc-500 font-light">
                <li><Link href="/services/ai-video-ads" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">AI Video Ads</Link></li>
                <li><Link href="/services/ai-social-media-videos" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">Social Media AI</Link></li>
                <li><Link href="/services/ai-product-videos" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">Product AI Videos</Link></li>
                <li><Link href="/services/ai-video-production" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">AI Brand films</Link></li>
                <li><Link href="/services/ai-cinematic-production" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">Cinematic AI</Link></li>
                <li><Link href="/services/ai-video-marketing" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">AI Video Marketing</Link></li>
             </ul>
          </div>

          <div className="col-span-1 flex flex-col items-start text-left">
             <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-6 text-primary-accent">Services</h4>
             <ul className="flex flex-col items-start gap-4 text-sm text-zinc-500 font-light">
                <li><Link href="/services/ecommerce-video-production" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">E-commerce</Link></li>
                <li><Link href="/services/real-estate-video" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">Real Estate</Link></li>
                <li><Link href="/services/saas-explainer-video" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">SaaS & Tech</Link></li>
                <li><Link href="/services/healthcare-video" className="hover:text-primary-accent transition uppercase tracking-widest text-[10px]">Healthcare</Link></li>
             </ul>
          </div>

          <div className="col-span-1 flex flex-col items-start text-left">
             <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-6">Socials</h4>
             <div className="flex flex-wrap gap-3 items-start justify-start">
                <a 
                  href="https://www.instagram.com/defineperspective/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-primary-accent transition-all border border-white/10"
                >
                   <Instagram size={16} />
                </a>
                <a 
                  href="https://www.youtube.com/@DefinePerspective" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-primary-accent transition-all border border-white/10"
                >
                   <Youtube size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/define-perspective" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-primary-accent transition-all border border-white/10"
                >
                   <Linkedin size={16} />
                </a>
                <a 
                  href="https://wa.me/917012941696" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-primary-accent transition-all border border-white/10"
                >
                   <Whatsapp size={16} />
                </a>
             </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-[10px] font-mono text-zinc-600 tracking-[0.3em] uppercase">
           <div className="flex flex-col md:flex-row gap-8 items-center">
              <span>Define Perspective © 2026. All rights reserved.</span>
              <span className="flex items-center gap-2">
                 <Activity size={10} className="text-primary-accent animate-pulse" />
                 Total Visitors: 14,528+
              </span>
           </div>
        </div>
      </div>
    </footer>
  );
}

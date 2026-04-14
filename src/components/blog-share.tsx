"use client";

import { useState, useEffect } from "react";
import { Share2, Link as LinkIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Instagram = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Linkedin = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Whatsapp = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

interface BlogShareProps {
  title: string;
  url?: string;
}

export default function BlogShare({ title, url }: BlogShareProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);

  useEffect(() => {
    setCurrentUrl(url || window.location.href);
  }, [url]);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
  };

  const copyToClipboard = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(currentUrl);
    setShowCopyTooltip(true);
    setTimeout(() => setShowCopyTooltip(false), 2000);
  };

  return (
    <>
      {/* Desktop Sticky Share Sidebar */}
      <div className="hidden lg:flex flex-col gap-6 p-10 rounded-[3rem] bg-white/2 border border-white/5 backdrop-blur-sm sticky top-40 h-fit w-fit">
         <div className="flex flex-col items-center gap-4">
            <div className="p-3 rounded-xl bg-primary-accent/10 text-primary-accent mb-2">
              <Share2 size={20} />
            </div>
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-6 [writing-mode:vertical-lr] rotate-180">Spread Domain_</span>
         </div>

         <div className="flex flex-col gap-3">
            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/30 transition-all border border-white/5 group" title="Share on WhatsApp">
               <Whatsapp size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1877F2]/20 hover:border-[#1877F2]/30 transition-all border border-white/5 group" title="Share on Facebook">
               <Facebook size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#0077B5]/20 hover:border-[#0077B5]/30 transition-all border border-white/5 group" title="Share on LinkedIn">
               <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <button onClick={copyToClipboard} className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all border border-white/5 group relative" title="Copy Link">
               <LinkIcon size={18} className="group-hover:scale-110 transition-transform" />
               <AnimatePresence>
                 {showCopyTooltip && (
                   <motion.div initial={{ opacity: 0, scale: 0.8, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.8, x: 10 }} className="absolute left-full ml-4 px-3 py-2 rounded-lg bg-primary-accent text-white text-[10px] font-mono uppercase whitespace-nowrap">
                     Copied_
                   </motion.div>
                 )}
               </AnimatePresence>
            </button>
         </div>
      </div>

      {/* Mobile Horizontal Share Bar */}
      <div className="lg:hidden mt-20 flex flex-col gap-6 p-8 rounded-[2.5rem] bg-white/2 border border-white/5 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Share2 size={16} className="text-primary-accent" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Spread Knowledge_</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 h-14 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#25D366]/20 transition-all border border-white/5">
            <Whatsapp size={20} />
          </a>
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 h-14 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1877F2]/20 transition-all border border-white/5">
            <Facebook size={20} />
          </a>
          <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 h-14 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#0077B5]/20 transition-all border border-white/5">
            <Linkedin size={20} />
          </a>
          <button onClick={copyToClipboard} className="flex-1 h-14 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 relative">
            <LinkIcon size={20} />
            <AnimatePresence>
               {showCopyTooltip && (
                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute bottom-full mb-4 px-3 py-2 rounded-lg bg-primary-accent text-white text-[10px] font-mono uppercase">
                   Copied_
                 </motion.div>
               )}
             </AnimatePresence>
          </button>
        </div>
      </div>
    </>
  );
}

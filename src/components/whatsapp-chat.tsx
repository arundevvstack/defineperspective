"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhatsAppChat() {
  const whatsappNumber = "917012941696";
  const message = "Hi Define Perspective, I'm interested in discussing a project.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl transition-all group hover:scale-110 active:scale-95"
      )}
    >
      <MessageCircle size={32} strokeWidth={2.5} />
      <span className="absolute -top-12 right-0 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] px-4 py-2 rounded-full font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hover:text-primary-accent transition-all duration-300">
        Chat with us
      </span>
    </motion.a>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhatsAppChat() {
  const whatsappNumber = "919496191684";
  const message = "Hi Define Perspective, I'm interested in discussing a project.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 50px rgba(34, 197, 94, 0.5)"
      }}
      whileTap={{ scale: 0.9 }}
      className={cn(
        "fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_30px_rgba(34, 197, 94, 0.3)] transition-all group"
      )}
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:animate-none" />
      <MessageCircle size={32} strokeWidth={2.5} />
      <span className="absolute -top-12 right-0 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] px-4 py-2 rounded-full font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  );
}

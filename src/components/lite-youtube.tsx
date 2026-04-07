"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  aspectRatio?: "video" | "vertical";
  priority?: boolean;
}

export default function LiteYouTube({ videoId, title, className, aspectRatio = "video", priority = false }: LiteYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Using hqdefault or maxresdefault for thumbnails
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={cn("absolute inset-0 w-full h-full border-0", className)}
      />
    );
  }

  return (
    <div 
      className={cn(
        "relative cursor-pointer group/yt overflow-hidden",
        aspectRatio === "vertical" ? "aspect-[9/16]" : "aspect-video",
        className
      )}
      onClick={() => setIsLoaded(true)}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover/yt:scale-110 grayscale group-hover/yt:grayscale-0"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading={priority ? undefined : "lazy"}
        priority={priority}
        onError={(e: any) => {
          // Fallback if maxresdefault doesn't exist
          e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />
      
      {/* Play Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover/yt:bg-black/0 transition-colors flex items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border-2 border-primary-accent text-white flex items-center justify-center scale-90 group-hover/yt:scale-110 transition-transform shadow-2xl">
          <Play size={24} fill="currentColor" className="text-primary-accent" />
        </div>
      </div>
      
      {/* SEO Title */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
        <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">{title}</span>
      </div>
    </div>
  );
}

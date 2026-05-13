"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  description?: string;
  transcript?: string;
  uploadDate?: string;
  thumbnailUrl?: string;
  className?: string;
  aspectRatio?: "video" | "vertical";
  priority?: boolean;
  isPlaying?: boolean;
  onTogglePlay?: (playing: boolean) => void;
}

export default function LiteYouTube({ 
  videoId, 
  title, 
  description = "Cinematic AI video production by DP AI Studio.",
  transcript,
  uploadDate = "2024-01-01",
  thumbnailUrl,
  className, 
  aspectRatio = "video", 
  priority = false,
  isPlaying: externalIsPlaying,
  onTogglePlay
}: LiteYouTubeProps) {
  const [internalIsPlaying, setInternalIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbUrl, setThumbUrl] = useState(thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  const isPlaying = externalIsPlaying !== undefined ? externalIsPlaying : internalIsPlaying;

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onTogglePlay) {
      onTogglePlay(true);
    } else {
      setInternalIsPlaying(true);
    }
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": [thumbUrl],
    "uploadDate": uploadDate,
    "duration": "PT2M", // Default placeholder
    "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
    "embedUrl": `https://www.youtube.com/embed/${videoId}`,
    "transcript": transcript,
    "publisher": {
      "@type": "Organization",
      "name": "Define Perspective | DP AI Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://defineperspective.in/images/main-logo.png"
      }
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* 🎬 Multimodal AI Indexing Node */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      
      {isPlaying ? (
        <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-10 h-10 border-4 border-primary-accent border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
            className={cn("w-full h-full border-0 relative z-0", !isLoaded && "opacity-0")}
          />
        </div>
      ) : (
        <div 
          className={cn(
            "relative cursor-pointer group/yt overflow-hidden",
            aspectRatio === "vertical" ? "aspect-[9/16]" : "aspect-video"
          )}
          onClick={handlePlay}
        >
          <Image
            src={thumbUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover/yt:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={priority ? undefined : "lazy"}
            priority={priority}
            onError={() => {
              setThumbUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
            }}
          />
          
          <div className="absolute inset-0 bg-black/20 group-hover/yt:bg-black/0 transition-colors flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border-2 border-primary-accent text-white flex items-center justify-center scale-90 group-hover/yt:scale-110 transition-transform shadow-2xl">
              <Play size={24} fill="currentColor" className="text-primary-accent" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">{title}</span>
          </div>
        </div>
      )}
      
      {/* 🧩 Semantic Context Node (sr-only) */}
      {transcript && (
        <div className="sr-only" aria-hidden="true">
          <h3>Video Transcript: {title}</h3>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  );
}

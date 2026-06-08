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
    <>
      <div className={cn(
        "relative w-full h-full overflow-hidden print:hidden", 
        aspectRatio === "vertical" ? "aspect-[9/16]" : "aspect-video",
        className
      )}>
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
            className="relative cursor-pointer group/yt w-full h-full"
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
                if (!thumbUrl.includes("hqdefault.jpg")) {
                  setThumbUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
                }
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

      {/* PDF Print "Video-Enabled" Fallback */}
      <div className="hidden print:flex flex-col w-full break-inside-avoid my-8 border-2 border-zinc-200 rounded-2xl overflow-hidden bg-white">
        {/* Large Thumbnail with Play Button Overlay */}
        <div className="relative w-full aspect-video bg-zinc-100 border-b-2 border-zinc-200">
          <img src={thumbUrl} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-2xl">
              <Play size={48} fill="currentColor" className="text-white ml-2" />
            </div>
          </div>
        </div>
        
        {/* Metadata and QR Block */}
        <div className="flex items-center gap-6 p-6">
          <div className="flex-shrink-0 bg-white p-2 border-2 border-zinc-200 rounded-xl shadow-sm">
            <img 
              src={`https://quickchart.io/qr?text=${encodeURIComponent(`https://youtu.be/${videoId}`)}&size=150&margin=1`} 
              alt="Video QR Code" 
              className="w-24 h-24 object-contain" 
            />
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <h4 className="font-black text-2xl text-black uppercase tracking-tight">{title}</h4>
            <div className="flex items-center gap-2 mb-1">
              <Play size={16} fill="currentColor" className="text-red-600" />
              <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Watch Film</span>
            </div>
            <a href={`https://youtu.be/${videoId}`} className="text-sm font-mono text-blue-600 underline underline-offset-4 font-semibold break-all">
              https://youtu.be/{videoId}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

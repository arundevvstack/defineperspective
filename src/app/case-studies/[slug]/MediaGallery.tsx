"use client";

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/ui/lightbox';

export default function MediaGallery({ images, title }: { images: string[], title: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="relative aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => {
              setPhotoIndex(idx);
              setLightboxOpen(true);
            }}
          >
            <Image 
              src={src} 
              alt={`${title} - Gallery Image ${idx + 1}`} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>

      <Lightbox 
        images={images}
        isOpen={lightboxOpen}
        initialIndex={photoIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

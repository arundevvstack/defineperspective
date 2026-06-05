"use client";

import { useState, useRef } from 'react';
import { motion, Reorder } from 'framer-motion';
import { updateMedia, MediaUpdates } from '@/app/actions/media-manager';
import { supabase } from '@/lib/supabase';
import { Upload, X, GripVertical, Image as ImageIcon, Film, Save, Check, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function MediaManager({ caseStudy }: { caseStudy: any }) {
  const [activeTab, setActiveTab] = useState<'hero' | 'gallery' | 'bts' | 'video'>('hero');
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  
  // Local state for edits
  const [heroImage, setHeroImage] = useState(caseStudy.hero_image_url || null);
  const [galleryImages, setGalleryImages] = useState<string[]>(caseStudy.gallery_images || []);
  const [btsImages, setBtsImages] = useState<string[]>(caseStudy.bts_images || []);
  
  const [videoUrl, setVideoUrl] = useState(caseStudy.video_url || '');
  const [youtubeUrl, setYoutubeUrl] = useState(caseStudy.youtube_url || '');
  const [externalVideoUrl, setExternalVideoUrl] = useState(caseStudy.external_video_url || '');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadTarget, setUploadTarget] = useState<'hero' | 'gallery' | 'bts'>('hero');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
      const path = `${caseStudy.slug}/${uploadTarget}/${fileName}`;
      
      const { error } = await supabase.storage.from('case-study-assets').upload(path, file);
      if (!error) {
        const { data: { publicUrl } } = supabase.storage.from('case-study-assets').getPublicUrl(path);
        
        if (uploadTarget === 'hero') {
          setHeroImage(publicUrl);
        } else if (uploadTarget === 'gallery') {
          setGalleryImages(prev => [...prev, publicUrl]);
        } else if (uploadTarget === 'bts') {
          setBtsImages(prev => [...prev, publicUrl]);
        }
      }
    }
  };

  const triggerUpload = (target: 'hero' | 'gallery' | 'bts') => {
    setUploadTarget(target);
    if (fileInputRef.current) {
      fileInputRef.current.multiple = target !== 'hero';
      fileInputRef.current.click();
    }
  };

  const removeImage = (target: 'hero' | 'gallery' | 'bts', urlToRemove: string) => {
    if (!confirm('Remove this image?')) return;
    if (target === 'hero') setHeroImage(null);
    if (target === 'gallery') setGalleryImages(prev => prev.filter(url => url !== urlToRemove));
    if (target === 'bts') setBtsImages(prev => prev.filter(url => url !== urlToRemove));
  };

  const handleSave = async () => {
    setIsSaving(true);
    const updates: MediaUpdates = {
      hero_image_url: heroImage,
      gallery_images: galleryImages,
      bts_images: btsImages,
      video_url: videoUrl,
      youtube_url: youtubeUrl,
      external_video_url: externalVideoUrl
    };
    
    const res = await updateMedia(caseStudy.slug, updates);
    setIsSaving(false);
    
    if (res.success) {
      setHasSaved(true);
      setTimeout(() => setHasSaved(false), 2000);
    } else {
      alert('Failed to save media: ' + res.error);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col min-h-screen bg-black">
      <input 
        type="file" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={handleUpload} 
        accept="image/*" 
      />

      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full flex flex-col overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-neutral-800 bg-neutral-950">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Link href={`/case-studies/${caseStudy.slug}`} className="text-neutral-500 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h2 className="text-2xl font-bold text-white tracking-tight">Media Manager</h2>
            </div>
            <p className="text-sm text-neutral-400 mt-1">
              Editing: <span className="text-white font-medium">{caseStudy.title}</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded font-mono uppercase tracking-widest font-black">
              SECURE ADMIN NODE
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex px-8 border-b border-neutral-800 bg-neutral-950/50 overflow-x-auto">
          {[
            { id: 'hero', label: 'Hero Image', icon: ImageIcon },
            { id: 'gallery', label: 'Gallery Images', icon: ImageIcon },
            { id: 'bts', label: 'BTS Images', icon: ImageIcon },
            { id: 'video', label: 'Video Links', icon: Film }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-5 text-sm uppercase tracking-widest border-b-2 whitespace-nowrap transition-all ${activeTab === tab.id ? 'border-amber-500 text-amber-500 font-bold' : 'border-transparent text-neutral-500 hover:text-neutral-300'}`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto p-8 bg-neutral-900 min-h-[500px]">
          {activeTab === 'hero' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Hero Background Image</h3>
                <button onClick={() => triggerUpload('hero')} className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-200 rounded font-bold text-xs uppercase tracking-wider transition-colors shadow-lg">
                  <Upload className="w-4 h-4" /> Replace Hero
                </button>
              </div>
              {heroImage ? (
                <div className="relative aspect-video bg-black rounded-2xl overflow-hidden group border border-neutral-800 shadow-xl">
                  <Image src={heroImage} alt="Hero" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button onClick={() => removeImage('hero', heroImage)} className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-red-600 transition-colors shadow-2xl flex items-center gap-2">
                      <X className="w-5 h-5" /> Remove Hero Image
                    </button>
                  </div>
                </div>
              ) : (
                <div className="aspect-video border-2 border-dashed border-neutral-700 rounded-2xl flex flex-col gap-4 items-center justify-center text-neutral-500">
                  <ImageIcon className="w-12 h-12 text-neutral-600" />
                  <p className="text-sm">No hero image. The page will fallback to the thumbnail or video.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Gallery Images</h3>
                <button onClick={() => triggerUpload('gallery')} className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-200 rounded font-bold text-xs uppercase tracking-wider transition-colors shadow-lg">
                  <Upload className="w-4 h-4" /> Add Images
                </button>
              </div>
              
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-center gap-3">
                <GripVertical className="w-5 h-5 text-amber-500" />
                <p className="text-xs text-amber-500 uppercase tracking-widest font-semibold">Drag and drop images to reorder them in the gallery</p>
              </div>

              {galleryImages.length > 0 ? (
                <Reorder.Group axis="y" values={galleryImages} onReorder={setGalleryImages} className="space-y-3">
                  {galleryImages.map((url, index) => (
                    <Reorder.Item key={url} value={url} className="flex items-center gap-6 p-4 bg-neutral-950 border border-neutral-800 rounded-xl cursor-grab active:cursor-grabbing hover:border-neutral-700 transition-colors shadow-lg">
                      <GripVertical className="w-6 h-6 text-neutral-600" />
                      <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center text-neutral-500 font-mono text-xs">
                        {index + 1}
                      </div>
                      <div className="relative w-32 h-20 bg-black rounded-lg overflow-hidden shrink-0 border border-neutral-800">
                        <Image src={url} alt="Gallery" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-neutral-400 truncate font-mono bg-neutral-900 p-2 rounded inline-block">{url.split('/').pop()}</p>
                      </div>
                      <button onClick={() => removeImage('gallery', url)} className="p-3 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              ) : (
                <div className="py-20 text-center text-neutral-500 text-sm border-2 border-dashed border-neutral-800 rounded-2xl flex flex-col items-center gap-4">
                  <ImageIcon className="w-12 h-12 text-neutral-700" />
                  <p>No gallery images have been uploaded yet.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'bts' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Behind The Scenes (BTS) Images</h3>
                <button onClick={() => triggerUpload('bts')} className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-200 rounded font-bold text-xs uppercase tracking-wider transition-colors shadow-lg">
                  <Upload className="w-4 h-4" /> Add Images
                </button>
              </div>
              
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-center gap-3">
                <GripVertical className="w-5 h-5 text-amber-500" />
                <p className="text-xs text-amber-500 uppercase tracking-widest font-semibold">Drag and drop images to reorder them in the BTS gallery</p>
              </div>

              {btsImages.length > 0 ? (
                <Reorder.Group axis="y" values={btsImages} onReorder={setBtsImages} className="space-y-3">
                  {btsImages.map((url, index) => (
                    <Reorder.Item key={url} value={url} className="flex items-center gap-6 p-4 bg-neutral-950 border border-neutral-800 rounded-xl cursor-grab active:cursor-grabbing hover:border-neutral-700 transition-colors shadow-lg">
                      <GripVertical className="w-6 h-6 text-neutral-600" />
                      <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center text-neutral-500 font-mono text-xs">
                        {index + 1}
                      </div>
                      <div className="relative w-32 h-20 bg-black rounded-lg overflow-hidden shrink-0 border border-neutral-800">
                        <Image src={url} alt="BTS" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-neutral-400 truncate font-mono bg-neutral-900 p-2 rounded inline-block">{url.split('/').pop()}</p>
                      </div>
                      <button onClick={() => removeImage('bts', url)} className="p-3 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              ) : (
                <div className="py-20 text-center text-neutral-500 text-sm border-2 border-dashed border-neutral-800 rounded-2xl flex flex-col items-center gap-4">
                  <ImageIcon className="w-12 h-12 text-neutral-700" />
                  <p>No behind the scenes images have been uploaded yet.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'video' && (
            <div className="space-y-8">
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 space-y-8 shadow-lg">
                <div className="flex items-center gap-3 text-amber-500 bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                  <Film className="w-6 h-6 shrink-0" />
                  <p className="text-sm font-semibold">Video links take priority over the hero image. Provide only one primary video source.</p>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-bold text-white uppercase tracking-widest">Direct MP4 URL</label>
                  <p className="text-xs text-neutral-500 mb-2">Ideal for auto-playing background loops.</p>
                  <input 
                    type="url" 
                    value={videoUrl} 
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://.../video.mp4"
                    className="w-full bg-black border border-neutral-800 text-white px-5 py-4 rounded-xl text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-white uppercase tracking-widest">YouTube URL</label>
                  <p className="text-xs text-neutral-500 mb-2">Automatically parsed and rendered with LiteYouTube for optimal performance.</p>
                  <input 
                    type="url" 
                    value={youtubeUrl} 
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="w-full bg-black border border-neutral-800 text-white px-5 py-4 rounded-xl text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-bold text-white uppercase tracking-widest">External URL (Fallback / Vimeo)</label>
                  <p className="text-xs text-neutral-500 mb-2">Used as a fallback iframe if YouTube or MP4 are not provided.</p>
                  <input 
                    type="url" 
                    value={externalVideoUrl} 
                    onChange={(e) => setExternalVideoUrl(e.target.value)}
                    placeholder="https://vimeo.com/..."
                    className="w-full bg-black border border-neutral-800 text-white px-5 py-4 rounded-xl text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Live updates via Next.js ISR Cache Revalidation
            </p>
          </div>
          <button 
            onClick={handleSave} 
            disabled={isSaving}
            className="flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
          >
            {isSaving ? (
              <span className="animate-pulse flex items-center gap-2">Committing...</span>
            ) : hasSaved ? (
              <><Check className="w-5 h-5" /> Updates Live</>
            ) : (
              <><Save className="w-5 h-5" /> Push to Production</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

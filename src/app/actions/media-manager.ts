"use server";

import { supabaseAdmin } from '@/lib/supabase-admin';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { verifySession } from '@/lib/session';

export type MediaUpdates = {
  hero_image_url?: string | null;
  gallery_images?: string[];
  bts_images?: string[];
  video_url?: string | null;
  youtube_url?: string | null;
  external_video_url?: string | null;
};

export async function updateMedia(slug: string, updates: MediaUpdates) {
  try {
    // 0. Server-side Authentication Check
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('dp_admin_session');
    
    const session = verifySession(sessionCookie?.value);
    
    if (!session || session.role !== 'admin') {
      console.warn(`[media-manager] Unauthorized attempt to edit media for slug: ${slug}`);
      return { success: false, error: 'Unauthorized: Valid admin session required' };
    }

    // 1. Validate that ONLY media fields are being updated. 
    // We intentionally ignore any other fields to prevent SEO regressions.
    const safeUpdates = {
      ...(updates.hero_image_url !== undefined && { hero_image_url: updates.hero_image_url }),
      ...(updates.gallery_images !== undefined && { gallery_images: updates.gallery_images }),
      ...(updates.bts_images !== undefined && { bts_images: updates.bts_images }),
      ...(updates.video_url !== undefined && { video_url: updates.video_url }),
      ...(updates.youtube_url !== undefined && { youtube_url: updates.youtube_url }),
      ...(updates.external_video_url !== undefined && { external_video_url: updates.external_video_url }),
    };

    // 2. Perform the update
    const { data, error } = await supabaseAdmin
      .from('case_studies')
      .update(safeUpdates)
      .eq('slug', slug)
      .select('id')
      .single();

    if (error) {
      console.error('[media-manager] DB Update failed:', error.message);
      return { success: false, error: error.message };
    }

    // 3. Revalidate paths to update the frontend instantly without affecting static generation logic
    revalidatePath(`/case-studies/${slug}`);
    revalidatePath('/case-studies');

    return { success: true };
  } catch (err: any) {
    console.error('[media-manager] Action failed:', err.message);
    return { success: false, error: err.message || 'Unknown error' };
  }
}

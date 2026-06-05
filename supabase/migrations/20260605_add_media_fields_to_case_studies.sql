-- Add new media columns to the case_studies table
ALTER TABLE case_studies
ADD COLUMN IF NOT EXISTS hero_image_url TEXT,
ADD COLUMN IF NOT EXISTS gallery_images JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS bts_images JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS video_url TEXT,
ADD COLUMN IF NOT EXISTS youtube_url TEXT;

-- Create the storage bucket for case study assets
INSERT INTO storage.buckets (id, name, public) 
VALUES ('case-study-assets', 'case-study-assets', true)
ON CONFLICT (id) DO NOTHING;

-- Set up RLS policies for public read access to the bucket
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'case-study-assets');

-- Enable admin inserts to the bucket
CREATE POLICY "Admin Insert"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'case-study-assets');

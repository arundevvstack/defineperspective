-- Add new taxonomy JSONB arrays to the case_studies table
ALTER TABLE case_studies
ADD COLUMN IF NOT EXISTS geo_targets JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS industries JSONB DEFAULT '[]';

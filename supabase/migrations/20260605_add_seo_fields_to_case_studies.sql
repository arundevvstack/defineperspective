ALTER TABLE case_studies
ADD COLUMN seo_title TEXT,
ADD COLUMN seo_description TEXT,
ADD COLUMN focus_keywords TEXT[] DEFAULT '{}',
ADD COLUMN og_title TEXT,
ADD COLUMN og_description TEXT;

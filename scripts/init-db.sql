-- AI SEO Intelligence Ecosystem - Neural Database Schema
-- Execute this in the Supabase SQL Editor

-- 1. Content Pages (The actual AI-generated editorial)
CREATE TABLE IF NOT EXISTS content_pages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT,
    meta_title TEXT,
    meta_description TEXT,
    keywords TEXT[],
    schema_json JSONB,
    status TEXT DEFAULT 'draft', -- draft, review, published
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Keyword Clusters (Topical Authority)
CREATE TABLE IF NOT EXISTS keyword_clusters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic TEXT NOT NULL,
    volume INTEGER,
    difficulty INTEGER,
    priority TEXT DEFAULT 'medium',
    last_scanned TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Entity Graph (Semantic Relationships)
CREATE TABLE IF NOT EXISTS entity_graph (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_name TEXT UNIQUE NOT NULL,
    type TEXT, -- Brand, Service, Person, Location
    region TEXT,
    authority_score INTEGER DEFAULT 50,
    metadata JSONB DEFAULT '{}'::jsonb,
    last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- 4. AI Trends (Real-time Search Signals)
CREATE TABLE IF NOT EXISTS ai_trends (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    region TEXT,
    keyword TEXT UNIQUE,
    momentum INTEGER, -- 1-100
    status TEXT DEFAULT 'emerging',
    detected_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. YouTube Sync (Media-to-Search Pipeline)
CREATE TABLE IF NOT EXISTS youtube_sync (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    youtube_video_id TEXT UNIQUE NOT NULL,
    title TEXT,
    transcript TEXT,
    generated_article_id UUID REFERENCES content_pages(id),
    synced_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. SEO Audit Logs
CREATE TABLE IF NOT EXISTS seo_audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_slug TEXT NOT NULL,
    seo_score INTEGER,
    readability_score INTEGER,
    ai_spam_score INTEGER,
    schema_status TEXT,
    issues JSONB,
    scanned_at TIMESTAMPTZ DEFAULT NOW()
);

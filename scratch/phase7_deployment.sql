-- ==============================================================================
-- DP AI STUDIOS - PHASE 7: ENTERPRISE SEMANTIC DATABASE & VECTOR ARCHITECTURE
-- ==============================================================================
-- ⚠️ WARNING: Run this strictly in the Supabase SQL Editor.
-- This script safely enables pgvector, migrates JSONB tags into relational 
-- taxonomy, and establishes the Retrieval Chunk engine for RAG.

-- ==============================================================================
-- 1. EXTENSIONS & DEPENDENCIES
-- ==============================================================================
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. STRICT RELATIONAL TAXONOMY GRAPH
-- ==============================================================================

-- 2.1 Taxonomy: Industries
CREATE TABLE IF NOT EXISTS taxonomy_industries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2.2 Taxonomy: GEO Nodes
CREATE TABLE IF NOT EXISTS taxonomy_geo_nodes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    region TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2.3 Taxonomy: Workflows & AI Models
CREATE TABLE IF NOT EXISTS taxonomy_workflows (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT CHECK (category IN ('Model', 'Pipeline', 'Hardware', 'Software')),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2.4 Taxonomy: Entity Tags (Concepts, Cinematic Styles)
CREATE TABLE IF NOT EXISTS taxonomy_entity_tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT DEFAULT 'Concept',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 3. RELATIONAL JUNCTION TABLES (MANY-TO-MANY BINDING)
-- ==============================================================================

CREATE TABLE IF NOT EXISTS case_study_industries (
    case_study_id UUID REFERENCES case_studies(id) ON DELETE CASCADE,
    industry_id UUID REFERENCES taxonomy_industries(id) ON DELETE CASCADE,
    PRIMARY KEY (case_study_id, industry_id)
);

CREATE TABLE IF NOT EXISTS case_study_geo_nodes (
    case_study_id UUID REFERENCES case_studies(id) ON DELETE CASCADE,
    geo_node_id UUID REFERENCES taxonomy_geo_nodes(id) ON DELETE CASCADE,
    PRIMARY KEY (case_study_id, geo_node_id)
);

CREATE TABLE IF NOT EXISTS insight_workflows (
    insight_id UUID REFERENCES insights(id) ON DELETE CASCADE,
    workflow_id UUID REFERENCES taxonomy_workflows(id) ON DELETE CASCADE,
    PRIMARY KEY (insight_id, workflow_id)
);

-- ==============================================================================
-- 4. THE AI WORKFLOW DATABASE
-- ==============================================================================
CREATE TABLE IF NOT EXISTS ai_workflow_pipelines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workflow_name TEXT UNIQUE NOT NULL,
    tools_array TEXT[] DEFAULT '{}',
    model_stack TEXT[] DEFAULT '{}',
    cinematic_goal TEXT,
    render_pipeline JSONB DEFAULT '{}'::jsonb,
    compute_profile TEXT,
    visual_signature TEXT,
    workflow_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 5. TRANSCRIPT ENTITY ENGINE
-- ==============================================================================
CREATE TABLE IF NOT EXISTS transcript_entities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_id UUID NOT NULL, -- references case_studies or insights
    source_type TEXT CHECK (source_type IN ('case_study', 'insight', 'video')),
    entity_id UUID REFERENCES taxonomy_entity_tags(id) ON DELETE CASCADE,
    mention_count INTEGER DEFAULT 1,
    context_snippet TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 6. RETRIEVAL CHUNKS (THE RAG VECTOR ENGINE)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS retrieval_chunks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_type TEXT NOT NULL CHECK (source_type IN ('case_study', 'insight', 'faq', 'geo_node')),
    source_id UUID NOT NULL,
    chunk_index INTEGER NOT NULL,
    content TEXT NOT NULL,
    embedding vector(1536),
    semantic_confidence FLOAT,
    geo_node_ids UUID[] DEFAULT '{}',
    industry_ids UUID[] DEFAULT '{}',
    entity_ids UUID[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 7. ADVANCED INDEXING STRATEGY
-- ==============================================================================

-- 7.1 HNSW Vector Index (Optimized for text-embedding-3-small and Cosine Distance)
CREATE INDEX IF NOT EXISTS idx_retrieval_chunks_embedding 
ON retrieval_chunks USING hnsw (embedding vector_cosine_ops);

-- 7.2 pg_trgm Indexes for Fuzzy Text Search
CREATE INDEX IF NOT EXISTS idx_retrieval_chunks_content_trgm 
ON retrieval_chunks USING GIN (content gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_case_studies_title_trgm 
ON case_studies USING GIN (title gin_trgm_ops);

-- 7.3 Array / JSONB Indexes
CREATE INDEX IF NOT EXISTS idx_retrieval_chunks_geo_nodes 
ON retrieval_chunks USING GIN (geo_node_ids);

CREATE INDEX IF NOT EXISTS idx_retrieval_chunks_industry_ids 
ON retrieval_chunks USING GIN (industry_ids);

-- ==============================================================================
-- 8. MATERIALIZED AUTHORITY MESH VIEW
-- ==============================================================================
-- Precomputes heavy semantic relationships for instant Next.js edge delivery
CREATE MATERIALIZED VIEW IF NOT EXISTS mv_active_authority_mesh AS
SELECT 
    cs.id AS case_study_id,
    cs.slug AS case_study_slug,
    cs.title,
    array_agg(DISTINCT ti.slug) AS industry_slugs,
    array_agg(DISTINCT tg.slug) AS geo_slugs
FROM case_studies cs
LEFT JOIN case_study_industries csi ON cs.id = csi.case_study_id
LEFT JOIN taxonomy_industries ti ON csi.industry_id = ti.id
LEFT JOIN case_study_geo_nodes csg ON cs.id = csg.case_study_id
LEFT JOIN taxonomy_geo_nodes tg ON csg.geo_node_id = tg.id
WHERE cs.published = true
GROUP BY cs.id, cs.slug, cs.title;

CREATE UNIQUE INDEX IF NOT EXISTS idx_mv_authority_mesh_id ON mv_active_authority_mesh(case_study_id);

-- Refresh function to be called via Edge Function / Webhook
CREATE OR REPLACE FUNCTION refresh_authority_mesh()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY mv_active_authority_mesh;
END;
$$;

-- ==============================================================================
-- 9. VECTOR SEARCH RPC FUNCTION (WITH METADATA FILTERING)
-- ==============================================================================
CREATE OR REPLACE FUNCTION match_retrieval_chunks(
    query_embedding vector(1536),
    match_threshold float,
    match_count int,
    filter_source_type text DEFAULT NULL,
    filter_geo_id uuid DEFAULT NULL,
    filter_industry_id uuid DEFAULT NULL
)
RETURNS TABLE (
    id uuid,
    source_type text,
    source_id uuid,
    content text,
    similarity float
)
LANGUAGE plpgsql STABLE
AS $$
BEGIN
    RETURN QUERY
    SELECT
        rc.id,
        rc.source_type,
        rc.source_id,
        rc.content,
        1 - (rc.embedding <=> query_embedding) AS similarity
    FROM retrieval_chunks rc
    WHERE 1 - (rc.embedding <=> query_embedding) > match_threshold
      AND (filter_source_type IS NULL OR rc.source_type = filter_source_type)
      AND (filter_geo_id IS NULL OR filter_geo_id = ANY(rc.geo_node_ids))
      AND (filter_industry_id IS NULL OR filter_industry_id = ANY(rc.industry_ids))
    ORDER BY rc.embedding <=> query_embedding
    LIMIT match_count;
END;
$$;

-- ==============================================================================
-- 10. BACKFILL MIGRATION LOGIC (JSONB -> RELATIONAL)
-- ==============================================================================
-- Example Logic: Migrating JSONB geo_tags from case_studies into taxonomy & junction tables
DO $$
DECLARE
    row RECORD;
    tag TEXT;
    geo_uuid UUID;
BEGIN
    FOR row IN SELECT id, geo_tags FROM case_studies WHERE geo_tags IS NOT NULL AND array_length(geo_tags, 1) > 0 LOOP
        FOREACH tag IN ARRAY row.geo_tags LOOP
            -- Upsert into Taxonomy
            INSERT INTO taxonomy_geo_nodes (slug, name, region) 
            VALUES (lower(regexp_replace(tag, '[^a-zA-Z0-9]+', '-', 'g')), tag, 'Unmapped')
            ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
            RETURNING id INTO geo_uuid;
            
            -- Insert into Junction Table
            INSERT INTO case_study_geo_nodes (case_study_id, geo_node_id) 
            VALUES (row.id, geo_uuid)
            ON CONFLICT DO NOTHING;
        END LOOP;
    END LOOP;
END;
$$;

-- ==============================================================================
-- 11. EDGE FUNCTION EVENT QUEUE SUPPORT
-- ==============================================================================
-- Create a table to queue rows for Edge Function embedding generation
CREATE TABLE IF NOT EXISTS edge_embedding_queue (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_type TEXT NOT NULL,
    source_id UUID NOT NULL,
    status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Trigger to queue a new case study for embedding extraction
CREATE OR REPLACE FUNCTION queue_case_study_for_embedding()
RETURNS TRIGGER AS $$
BEGIN
    -- Only queue if transcript or excerpt changes
    IF (TG_OP = 'INSERT') OR 
       (TG_OP = 'UPDATE' AND (NEW.transcript IS DISTINCT FROM OLD.transcript OR NEW.excerpt IS DISTINCT FROM OLD.excerpt)) THEN
        INSERT INTO edge_embedding_queue (source_type, source_id)
        VALUES ('case_study', NEW.id);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_queue_case_study_embedding ON case_studies;
CREATE TRIGGER trg_queue_case_study_embedding
    AFTER INSERT OR UPDATE ON case_studies
    FOR EACH ROW
    EXECUTE FUNCTION queue_case_study_for_embedding();

-- End of Phase 7 Migration Package
-- ==============================================================================

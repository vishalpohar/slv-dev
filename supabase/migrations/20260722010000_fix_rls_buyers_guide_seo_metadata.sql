-- ============================================================
-- Fix: Enable RLS on buyers_guide and seo_metadata tables
-- Resolves Supabase Security Advisor errors:
--   - rls_disabled_in_public_public_buyers_guide
--   - rls_disabled_in_public_public_seo_metadata
-- ============================================================

-- ──────────────────────────────────────────────────────────
-- 1. buyers_guide — enable RLS + policies
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.buyers_guide ENABLE ROW LEVEL SECURITY;

-- Public visitors can read published guides
DROP POLICY IF EXISTS "Public can view published buyers_guide" ON public.buyers_guide;
CREATE POLICY "Public can view published buyers_guide"
  ON public.buyers_guide FOR SELECT
  TO public
  USING (is_published = true);

-- Staff (admin/editor) can do everything
DROP POLICY IF EXISTS "Staff can manage buyers_guide" ON public.buyers_guide;
CREATE POLICY "Staff can manage buyers_guide"
  ON public.buyers_guide FOR ALL
  TO authenticated
  USING (public.is_staff(auth.uid()))
  WITH CHECK (public.is_staff(auth.uid()));

-- ──────────────────────────────────────────────────────────
-- 2. seo_metadata — enable RLS + policies
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.seo_metadata ENABLE ROW LEVEL SECURITY;

-- Anyone (including anon) can read SEO metadata (needed for page rendering)
DROP POLICY IF EXISTS "Public can read seo_metadata" ON public.seo_metadata;
CREATE POLICY "Public can read seo_metadata"
  ON public.seo_metadata FOR SELECT
  TO public
  USING (true);

-- Staff (admin/editor) can insert/update/delete SEO metadata
DROP POLICY IF EXISTS "Staff can manage seo_metadata" ON public.seo_metadata;
CREATE POLICY "Staff can manage seo_metadata"
  ON public.seo_metadata FOR ALL
  TO authenticated
  USING (public.is_staff(auth.uid()))
  WITH CHECK (public.is_staff(auth.uid()));

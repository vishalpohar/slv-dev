-- ============================================================
-- SLV Admin Panel — Storage Buckets + Admin RLS Policies
-- ============================================================

-- ──────────────────────────────────────────────────────────
-- 1. Storage Buckets
-- ──────────────────────────────────────────────────────────
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  (
    'project-media',
    'project-media',
    true,
    52428800, -- 50 MB
    ARRAY['image/jpeg','image/jpg','image/png','image/webp','image/gif','video/mp4','video/webm','video/mov']
  ),
  (
    'brochures',
    'brochures',
    true,
    20971520, -- 20 MB
    ARRAY['application/pdf']
  )
ON CONFLICT (id) DO NOTHING;

-- ──────────────────────────────────────────────────────────
-- 2. Storage RLS — project-media bucket
-- ──────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Public read project-media" ON storage.objects;
CREATE POLICY "Public read project-media"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'project-media');

DROP POLICY IF EXISTS "Admin/editor can upload project-media" ON storage.objects;
CREATE POLICY "Admin/editor can upload project-media"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'project-media'
    AND public.is_staff(auth.uid())
  );

DROP POLICY IF EXISTS "Admin/editor can update project-media" ON storage.objects;
CREATE POLICY "Admin/editor can update project-media"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'project-media'
    AND public.is_staff(auth.uid())
  );

DROP POLICY IF EXISTS "Admin/editor can delete project-media" ON storage.objects;
CREATE POLICY "Admin/editor can delete project-media"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'project-media'
    AND public.is_staff(auth.uid())
  );

-- ──────────────────────────────────────────────────────────
-- 3. Storage RLS — brochures bucket
-- ──────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Public read brochures" ON storage.objects;
CREATE POLICY "Public read brochures"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'brochures');

DROP POLICY IF EXISTS "Admin/editor can upload brochures" ON storage.objects;
CREATE POLICY "Admin/editor can upload brochures"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'brochures'
    AND public.is_staff(auth.uid())
  );

DROP POLICY IF EXISTS "Admin/editor can update brochures" ON storage.objects;
CREATE POLICY "Admin/editor can update brochures"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'brochures'
    AND public.is_staff(auth.uid())
  );

DROP POLICY IF EXISTS "Admin/editor can delete brochures" ON storage.objects;
CREATE POLICY "Admin/editor can delete brochures"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'brochures'
    AND public.is_staff(auth.uid())
  );

-- ──────────────────────────────────────────────────────────
-- 4. RLS — projects table (admin CRUD)
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view published projects" ON public.projects;
CREATE POLICY "Public can view published projects"
  ON public.projects FOR SELECT
  TO public
  USING (is_published = true);

DROP POLICY IF EXISTS "Staff can view all projects" ON public.projects;
CREATE POLICY "Staff can view all projects"
  ON public.projects FOR SELECT
  TO authenticated
  USING (public.is_staff(auth.uid()));

DROP POLICY IF EXISTS "Staff can insert projects" ON public.projects;
CREATE POLICY "Staff can insert projects"
  ON public.projects FOR INSERT
  TO authenticated
  WITH CHECK (public.is_staff(auth.uid()));

DROP POLICY IF EXISTS "Staff can update projects" ON public.projects;
CREATE POLICY "Staff can update projects"
  ON public.projects FOR UPDATE
  TO authenticated
  USING (public.is_staff(auth.uid()));

DROP POLICY IF EXISTS "Admin can delete projects" ON public.projects;
CREATE POLICY "Admin can delete projects"
  ON public.projects FOR DELETE
  TO authenticated
  USING (public.has_role('admin'::app_role, auth.uid()));

-- ──────────────────────────────────────────────────────────
-- 5. RLS — leads table (admin read/update, public insert)
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Staff can view leads" ON public.leads;
CREATE POLICY "Staff can view leads"
  ON public.leads FOR SELECT
  TO authenticated
  USING (public.is_staff(auth.uid()));

DROP POLICY IF EXISTS "Staff can update leads" ON public.leads;
CREATE POLICY "Staff can update leads"
  ON public.leads FOR UPDATE
  TO authenticated
  USING (public.is_staff(auth.uid()));

DROP POLICY IF EXISTS "Admin can delete leads" ON public.leads;
CREATE POLICY "Admin can delete leads"
  ON public.leads FOR DELETE
  TO authenticated
  USING (public.has_role('admin'::app_role, auth.uid()));

-- ──────────────────────────────────────────────────────────
-- 6. RLS — gallery table
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view published gallery" ON public.gallery;
CREATE POLICY "Public can view published gallery"
  ON public.gallery FOR SELECT
  TO public
  USING (is_published = true);

DROP POLICY IF EXISTS "Staff can manage gallery" ON public.gallery;
CREATE POLICY "Staff can manage gallery"
  ON public.gallery FOR ALL
  TO authenticated
  USING (public.is_staff(auth.uid()))
  WITH CHECK (public.is_staff(auth.uid()));

-- ──────────────────────────────────────────────────────────
-- 7. RLS — user_roles table (admin read-only from client)
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own role" ON public.user_roles;
CREATE POLICY "Users can view their own role"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Admin can manage roles" ON public.user_roles;
CREATE POLICY "Admin can manage roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role('admin'::app_role, auth.uid()))
  WITH CHECK (public.has_role('admin'::app_role, auth.uid()));

-- ──────────────────────────────────────────────────────────
-- 8. RLS — profiles table
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (id = auth.uid());

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid());

DROP POLICY IF EXISTS "Staff can view all profiles" ON public.profiles;
CREATE POLICY "Staff can view all profiles"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (public.is_staff(auth.uid()));

-- ──────────────────────────────────────────────────────────
-- 9. RLS — testimonials, blog_posts, buyers_guide (staff CRUD)
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view published testimonials" ON public.testimonials;
CREATE POLICY "Public can view published testimonials"
  ON public.testimonials FOR SELECT
  TO public
  USING (is_published = true);

DROP POLICY IF EXISTS "Staff can manage testimonials" ON public.testimonials;
CREATE POLICY "Staff can manage testimonials"
  ON public.testimonials FOR ALL
  TO authenticated
  USING (public.is_staff(auth.uid()))
  WITH CHECK (public.is_staff(auth.uid()));

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view published blog_posts" ON public.blog_posts;
CREATE POLICY "Public can view published blog_posts"
  ON public.blog_posts FOR SELECT
  TO public
  USING (is_published = true);

DROP POLICY IF EXISTS "Staff can manage blog_posts" ON public.blog_posts;
CREATE POLICY "Staff can manage blog_posts"
  ON public.blog_posts FOR ALL
  TO authenticated
  USING (public.is_staff(auth.uid()))
  WITH CHECK (public.is_staff(auth.uid()));

-- ──────────────────────────────────────────────────────────
-- 10. job_openings / job_applications — staff management
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.job_openings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view open jobs" ON public.job_openings;
CREATE POLICY "Public can view open jobs"
  ON public.job_openings FOR SELECT
  TO public
  USING (is_open = true);

DROP POLICY IF EXISTS "Staff can manage job_openings" ON public.job_openings;
CREATE POLICY "Staff can manage job_openings"
  ON public.job_openings FOR ALL
  TO authenticated
  USING (public.is_staff(auth.uid()))
  WITH CHECK (public.is_staff(auth.uid()));

ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Staff can view job_applications" ON public.job_applications;
CREATE POLICY "Staff can view job_applications"
  ON public.job_applications FOR SELECT
  TO authenticated
  USING (public.is_staff(auth.uid()));

DROP POLICY IF EXISTS "Staff can update job_applications" ON public.job_applications;
CREATE POLICY "Staff can update job_applications"
  ON public.job_applications FOR UPDATE
  TO authenticated
  USING (public.is_staff(auth.uid()));

-- ============================================================
-- Auto-assign admin role on user signup & backfill existing users
-- ============================================================

-- 1. Enable RLS insert for authenticated users on user_roles if missing
DROP POLICY IF EXISTS "Users can insert their initial role" ON public.user_roles;
CREATE POLICY "Users can insert their initial role"
  ON public.user_roles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- 2. Update handle_new_user trigger function to auto-assign admin role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Create profile
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  )
  ON CONFLICT (id) DO NOTHING;

  -- Auto assign admin role to new user
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'admin'::public.app_role)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$;

-- 3. Backfill all existing users in auth.users with admin role if not assigned
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
ON CONFLICT (user_id) DO NOTHING;

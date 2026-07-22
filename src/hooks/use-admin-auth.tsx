import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";
import type { Enums } from "@/integrations/supabase/types";

type AppRole = Enums<"app_role">;

interface AdminAuthState {
  session: Session | null;
  user: User | null;
  role: AppRole | null;
  isAdmin: boolean;
  isEditor: boolean;
  isStaff: boolean;
  isLoading: boolean;
}

interface UseAdminAuthReturn extends AdminAuthState {
  signOut: () => Promise<void>;
  refreshRole: () => Promise<void>;
}

async function fetchUserRole(userId: string): Promise<AppRole | null> {
  try {
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      console.error("[AdminAuth] Error fetching role:", error);
      return null;
    }
    return data?.role ?? null;
  } catch (err) {
    console.error("[AdminAuth] Unexpected error fetching role:", err);
    return null;
  }
}

export function useAdminAuth(): UseAdminAuthReturn {
  const [state, setState] = useState<AdminAuthState>({
    session: null,
    user: null,
    role: null,
    isAdmin: false,
    isEditor: false,
    isStaff: false,
    isLoading: true,
  });

  const updateStateFromSession = useCallback((session: Session | null) => {
    if (!session?.user) {
      setState({
        session: null,
        user: null,
        role: null,
        isAdmin: false,
        isEditor: false,
        isStaff: false,
        isLoading: false,
      });
      return;
    }

    // Defer role fetching to macro-task queue using setTimeout(..., 0).
    // This prevents deadlock with Supabase auth navigator lock during signInWithPassword execution.
    setTimeout(async () => {
      const role = await fetchUserRole(session.user.id);
      setState({
        session,
        user: session.user,
        role,
        isAdmin: role === "admin",
        isEditor: role === "editor",
        isStaff: role === "admin" || role === "editor",
        isLoading: false,
      });
    }, 0);
  }, []);

  useEffect(() => {
    let mounted = true;

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (mounted) {
        updateStateFromSession(session);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        updateStateFromSession(session);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [updateStateFromSession]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setState({
      session: null,
      user: null,
      role: null,
      isAdmin: false,
      isEditor: false,
      isStaff: false,
      isLoading: false,
    });
  }, []);

  const refreshRole = useCallback(async () => {
    if (!state.user) return;
    const role = await fetchUserRole(state.user.id);
    setState((prev) => ({
      ...prev,
      role,
      isAdmin: role === "admin",
      isEditor: role === "editor",
      isStaff: role === "admin" || role === "editor",
    }));
  }, [state.user]);

  return { ...state, signOut, refreshRole };
}

"use client";

import { useEffect, useRef } from "react";
import { authClient } from "@/lib/auth-client";
import { syncLocalProgress } from "@/lib/actions/tracking";
import { getCompletedLessonIds } from "@/lib/localProgress";

export default function ProgressSync() {
  const { data: session } = authClient.useSession();
  const syncedRef = useRef(false);

  useEffect(() => {
    if (!session?.user?.id || syncedRef.current) return;

    const completed = getCompletedLessonIds();
    if (completed.length === 0) return;

    syncedRef.current = true;
    syncLocalProgress(completed);
  }, [session?.user?.id]);

  return null;
}

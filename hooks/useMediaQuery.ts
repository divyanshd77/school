"use client";

import { useSyncExternalStore } from "react";

/**
 * matchMedia without SSR/client HTML mismatch.
 * Pass `getServerSnapshot` to match your layout intent:
 * - `(min-width: 1280px)` → false (assume narrow until client)
 * - `(max-width: 767px)` → true (assume mobile-first for images/video)
 */
export function useMediaQuery(
  query: string,
  getServerSnapshot: () => boolean = () => false
): boolean {
  return useSyncExternalStore(
    (onChange) => {
      if (typeof window === "undefined") return () => {};
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    getServerSnapshot
  );
}

"use client";

import { useEffect, useRef } from "react";

const STORAGE_KEY = "conoce-zapotlanejo-cookie-consent";
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityFn;
  }
}

export default function ClarityAnalytics() {
  const hasLoaded = useRef(false);

  useEffect(() => {
    function loadClarity() {
      if (!clarityId || hasLoaded.current) return;
      if (window.localStorage.getItem(STORAGE_KEY) !== "analytics") return;
      if (document.getElementById("clarity-script")) return;

      hasLoaded.current = true;
      window.clarity = window.clarity || function clarityQueue(...args: unknown[]) {
        window.clarity!.q = window.clarity!.q || [];
        window.clarity!.q.push(args);
      };

      const script = document.createElement("script");
      script.id = "clarity-script";
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${clarityId}`;
      document.head.appendChild(script);
    }

    loadClarity();
    window.addEventListener("cookie-consent-change", loadClarity);

    return () => {
      window.removeEventListener("cookie-consent-change", loadClarity);
    };
  }, []);

  return null;
}

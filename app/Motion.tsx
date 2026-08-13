"use client";

import { useEffect } from "react";

export default function Motion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const reveal = document.querySelector(".reveal-copy");
    if (!reveal) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        reveal.classList.add("is-visible");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -22% 0px", threshold: 0.18 },
    );

    observer.observe(reveal);

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

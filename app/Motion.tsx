"use client";

import { useEffect } from "react";

export default function Motion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let disposed = false;
    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, scrollTriggerModule]) => {
        if (disposed) return;

        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const context = gsap.context(() => {
          gsap.from(".hero-copy > *", {
            y: 28,
            opacity: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: "power3.out",
          });

          gsap.from(".hero-photo-frame", {
            scale: 0.88,
            opacity: 0,
            rotation: 2,
            duration: 1.25,
            ease: "power3.out",
          });

          gsap.to(".reveal-copy .word", {
            opacity: 1,
            stagger: 0.025,
            ease: "none",
            scrollTrigger: {
              trigger: ".reveal-copy",
              start: "top 78%",
              end: "bottom 48%",
              scrub: true,
            },
          });

          const media = gsap.matchMedia();
          media.add("(min-width: 901px)", () => {
            ScrollTrigger.create({
              trigger: ".story-layout",
              start: "top 12%",
              end: "bottom 86%",
              pin: ".story-sticky",
              pinSpacing: false,
            });
          });

          gsap.utils.toArray<HTMLElement>(".story-card").forEach((card) => {
            const image = card.querySelector("img");
            gsap.fromTo(
              card,
              { scale: 0.9, opacity: 0.38 },
              {
                scale: 1,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 86%",
                  end: "center 54%",
                  scrub: true,
                },
              },
            );
            if (image) {
              gsap.fromTo(
                image,
                { scale: 1.12 },
                {
                  scale: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                },
              );
            }
          });

          cleanup = () => {
            media.revert();
            context.revert();
          };
        });
      },
    );

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return null;
}

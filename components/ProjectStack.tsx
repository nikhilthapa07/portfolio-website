"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ProjectStack({ children }: { children: ReactNode }) {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const bodies = Array.from(
      stack.querySelectorAll<HTMLElement>(".proj-body"),
    );

    const equalize = () => {
      bodies.forEach((body) => {
        body.style.minHeight = "";
      });
      if (window.innerWidth <= 760) return;

      const bar = 64;
      const available = window.innerHeight - bar - 40;
      let tallest = 0;
      bodies.forEach((body) => {
        tallest = Math.max(tallest, body.offsetHeight);
      });
      if (available > 260) tallest = Math.min(tallest, available);
      bodies.forEach((body) => {
        body.style.minHeight = `${tallest}px`;
      });
    };

    equalize();
    window.addEventListener("resize", equalize);
    document.fonts?.ready.then(equalize);

    return () => {
      window.removeEventListener("resize", equalize);
    };
  }, []);

  return (
    <div className="stack" ref={stackRef}>
      {children}
    </div>
  );
}

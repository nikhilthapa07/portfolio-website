"use client";

import { useEffect, useRef } from "react";

export default function VisitorCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      cursor.classList.add("on");
    };

    const hide = () => cursor.classList.remove("on");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <span className="cursor you" aria-hidden="true" ref={cursorRef}>
      <span className="cur-in">
        <span className="lbl">you</span>
      </span>
    </span>
  );
}

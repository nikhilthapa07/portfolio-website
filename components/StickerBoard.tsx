"use client";

import { useEffect, useRef } from "react";
import { skillGroups } from "@/data/portfolio";
import { useToast } from "./ToastProvider";

export default function StickerBoard() {
  const boardRef = useRef<HTMLDivElement>(null);
  const tidyRef = useRef<HTMLButtonElement>(null);
  const toast = useToast();

  useEffect(() => {
    const board = boardRef.current;
    const tidyButton = tidyRef.current;
    if (!board || !tidyButton) return;

    const stickers = Array.from(
      board.querySelectorAll<HTMLElement>(".sticker"),
    );
    const cleanups: Array<() => void> = [];
    let z = 5;

    stickers.forEach((sticker) => {
      let offsetX = 0;
      let offsetY = 0;
      let startX = 0;
      let startY = 0;
      let boardRect: DOMRect;
      let base = { left: 0, top: 0, right: 0, bottom: 0 };
      let dragging = false;

      const onDown = (event: PointerEvent) => {
        dragging = true;
        sticker.setPointerCapture(event.pointerId);
        sticker.classList.remove("tidy");
        sticker.classList.add("drag");
        sticker.style.zIndex = String(++z);

        offsetX = parseFloat(sticker.style.getPropertyValue("--dx")) || 0;
        offsetY = parseFloat(sticker.style.getPropertyValue("--dy")) || 0;
        startX = event.clientX - offsetX;
        startY = event.clientY - offsetY;

        const rect = sticker.getBoundingClientRect();
        boardRect = board.getBoundingClientRect();
        base = {
          left: rect.left - offsetX,
          top: rect.top - offsetY,
          right: rect.right - offsetX,
          bottom: rect.bottom - offsetY,
        };
      };

      const onMove = (event: PointerEvent) => {
        if (!dragging) return;
        const padding = 8;
        let nextX = event.clientX - startX;
        let nextY = event.clientY - startY;

        nextX = Math.max(
          boardRect.left - base.left + padding,
          Math.min(boardRect.right - base.right - padding, nextX),
        );
        nextY = Math.max(
          boardRect.top - base.top + padding,
          Math.min(boardRect.bottom - base.bottom - padding, nextY),
        );

        sticker.style.setProperty("--dx", `${nextX}px`);
        sticker.style.setProperty("--dy", `${nextY}px`);
      };

      const onUp = () => {
        dragging = false;
        sticker.classList.remove("drag");
      };

      sticker.addEventListener("pointerdown", onDown);
      sticker.addEventListener("pointermove", onMove);
      sticker.addEventListener("pointerup", onUp);
      sticker.addEventListener("pointercancel", onUp);

      cleanups.push(() => {
        sticker.removeEventListener("pointerdown", onDown);
        sticker.removeEventListener("pointermove", onMove);
        sticker.removeEventListener("pointerup", onUp);
        sticker.removeEventListener("pointercancel", onUp);
      });
    });

    const tidy = () => {
      stickers.forEach((sticker) => {
        sticker.classList.add("tidy");
        sticker.style.setProperty("--dx", "0px");
        sticker.style.setProperty("--dy", "0px");
      });
      toast("All tidy");
    };

    tidyButton.addEventListener("click", tidy);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      tidyButton.removeEventListener("click", tidy);
    };
  }, [toast]);

  return (
    <>
      <div className="tk-board dots" id="board" ref={boardRef}>
        {skillGroups.map((group) => (
          <div className="tk-row" key={group.label}>
            <span className="tk-label">{group.label}</span>
            {group.items.map((item) => (
              <span className={`sticker k-${group.tone}`} key={item}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="tk-foot">
        <p>Made a mess? That&apos;s the fun part.</p>
        <button
          className="btn btn-ghost"
          type="button"
          id="tidy"
          ref={tidyRef}
          style={{ height: 42, fontSize: 15 }}
        >
          Tidy up
        </button>
      </div>
    </>
  );
}

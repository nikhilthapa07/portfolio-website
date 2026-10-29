"use client";

import { useEffect, useRef } from "react";

type Blink = {
  x: number;
  y: number;
  rgb: string;
  peak: number;
  t0: number;
  dur: number;
};

type Fall = {
  x: number;
  y: number;
  shape: number[][];
  rgb: string;
  peak: number;
  t0: number;
  step: number;
  steps: number;
};

const STEP = 22;
const SIZE = 4;
const COLORS = ["63,162,255", "139,143,255", "69,211,156", "255,212,71"];
const SHAPES = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
];

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let last = 0;
    let nextFall = 0;

    let blinks: Blink[] = [];
    let falls: Fall[] = [];
    const dots = document.createElement("canvas");

    const random = (a: number, b: number) => a + Math.random() * (b - a);
    const pick = <T,>(items: T[]) => items[(Math.random() * items.length) | 0];

    function tint() {
      return Math.random() < 0.18
        ? { rgb: pick(COLORS), peak: random(0.45, 0.7) }
        : { rgb: "255,255,255", peak: random(0.18, 0.38) };
    }

    function cell(x: number, y: number, rgb: string, alpha: number) {
      if (alpha <= 0) return;
      ctx!.fillStyle = `rgba(${rgb},${alpha.toFixed(3)})`;
      ctx!.fillRect(x * STEP + 9, y * STEP + 9, SIZE, SIZE);
    }

    function base() {
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, width, height);
      ctx!.drawImage(dots, 0, 0, width, height);
    }

    function drawStill() {
      base();
      const count = Math.round((cols * rows) / 90);
      for (let i = 0; i < count; i += 1) {
        const color = tint();
        cell(
          (Math.random() * cols) | 0,
          (Math.random() * rows) | 0,
          color.rgb,
          color.peak * 0.8,
        );
      }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      cols = Math.ceil(width / STEP) + 1;
      rows = Math.ceil(height / STEP) + 1;

      dots.width = canvas!.width;
      dots.height = canvas!.height;
      const dotCtx = dots.getContext("2d");
      if (!dotCtx) return;
      dotCtx.scale(dpr, dpr);
      dotCtx.fillStyle = "rgba(255,255,255,.075)";
      for (let x = 0; x < cols; x += 1) {
        for (let y = 0; y < rows; y += 1) {
          dotCtx.beginPath();
          dotCtx.arc(x * STEP + 11, y * STEP + 11, 1.15, 0, 6.2832);
          dotCtx.fill();
        }
      }

      blinks = blinks.filter((blink) => blink.x < cols && blink.y < rows);
      if (reduce) drawStill();
    }

    function frame(time: number) {
      raf = requestAnimationFrame(frame);
      if (time - last < 33) return;
      last = time;
      base();

      const target = Math.round((cols * rows) / 65);
      for (let i = 0; i < 3 && blinks.length < target; i += 1) {
        const color = tint();
        blinks.push({
          x: (Math.random() * cols) | 0,
          y: (Math.random() * rows) | 0,
          rgb: color.rgb,
          peak: color.peak,
          t0: time,
          dur: random(900, 2800),
        });
      }

      blinks = blinks.filter((blink) => {
        const progress = (time - blink.t0) / blink.dur;
        if (progress >= 1) return false;
        cell(
          blink.x,
          blink.y,
          blink.rgb,
          blink.peak * Math.sin(Math.PI * progress),
        );
        return true;
      });

      if (time > nextFall && falls.length < 4) {
        const color =
          Math.random() < 0.45
            ? { rgb: pick(COLORS), peak: 0.6 }
            : { rgb: "255,255,255", peak: 0.42 };
        falls.push({
          x: (Math.random() * (cols - 4)) | 0,
          y: (Math.random() * rows * 0.6) | 0,
          shape: pick(SHAPES),
          rgb: color.rgb,
          peak: color.peak,
          t0: time,
          step: random(200, 320),
          steps: 5 + ((Math.random() * 5) | 0),
        });
        nextFall = time + random(1400, 3200);
      }

      falls = falls.filter((fall) => {
        const elapsed = (time - fall.t0) / fall.step;
        const stepIndex = Math.floor(elapsed);
        if (stepIndex >= fall.steps) return false;
        const alpha =
          fall.peak *
          Math.min(1, elapsed) *
          Math.min(1, (fall.steps - elapsed) / 2);
        fall.shape.forEach(([dx, dy]) => {
          cell(fall.x + dx, fall.y + dy + stepIndex, fall.rgb, alpha);
          cell(
            fall.x + dx,
            fall.y + dy + stepIndex - 1,
            fall.rgb,
            alpha * 0.28,
          );
        });
        return true;
      });
    }

    function onVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf && !reduce) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);

    if (!reduce) {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas id="bgfx" ref={canvasRef} aria-hidden="true" />;
}

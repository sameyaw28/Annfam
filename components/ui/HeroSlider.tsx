"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  src: string;
  eyebrow: string;
  caption: string;
};

const slides: Slide[] = [
  {
    src: "/uploads/slide-1.jpg",
    eyebrow: "Our team",
    caption: "Obuasi · Ghana",
  },
  {
    src: "/uploads/slide-2.jpg",
    eyebrow: "Community",
    caption: "Obuasi · Ghana",
  },
  {
    src: "/uploads/slide-3.jpg",
    eyebrow: "School outreach",
    caption: "Obuasi · Ghana",
  },
  {
    src: "/uploads/slide-4.jpg",
    eyebrow: "In the field",
    caption: "Obuasi · Ghana",
  },
];

const AUTOPLAY_MS = 5000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const go = useCallback(
    (next: number) => setIndex(((next % slides.length) + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, index]);

  const active = slides[index];

  return (
    <div
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-line bg-surface shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="ANNFAM Foundation in the field"
    >
      {/* Sliding track — scrolls horizontally to the active slide */}
      <div
        className={`flex h-full w-full ${
          reduceMotion ? "" : "transition-transform duration-700 ease-out"
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={slide.src} className="relative h-full w-full shrink-0 grow-0 basis-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={`${slide.eyebrow} — ${slide.caption}`}
              aria-hidden={i !== index}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-brand/10" />

      {/* Prev / next */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink opacity-0 shadow-md outline-none transition duration-200 ease-out hover:bg-white focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-brand/35 group-hover:opacity-100 active:scale-95"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink opacity-0 shadow-md outline-none transition duration-200 ease-out hover:bg-white focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-brand/35 group-hover:opacity-100 active:scale-95"
      >
        <ChevronRight size={18} />
      </button>

      {/* Caption + dots */}
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
        <div className="text-white">
          <p className="text-xs uppercase tracking-[0.18em] opacity-80">
            {active.eyebrow}
          </p>
          <p className="mt-1 font-display text-xl">{active.caption}</p>
        </div>

        <div className="flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 w-2.5 rounded-full outline-none transition-colors duration-300 ease-out focus-visible:ring-2 focus-visible:ring-white/70 ${
                i === index ? "bg-white" : "bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { EventPhoto } from "@/data/events";

/**
 * Photo viewer built on the native <dialog> element.
 *
 * `showModal()` gives us top-layer rendering, ::backdrop, an inert background,
 * focus trapping, Escape-to-close, and focus restoration to the trigger — the
 * genuinely hard parts of an accessible modal — for free, with no dependency.
 *
 * Motion: CSS transitions only, never a JS animation loop, so the global
 * prefers-reduced-motion block in globals.css neutralises it automatically.
 */
export function PhotoLightbox({
  photos,
  title,
  index,
  onIndexChange,
  onClose,
}: {
  photos: EventPhoto[];
  title: string;
  index: number;
  onIndexChange: (next: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const count = photos.length;

  // Negative-safe wrap, matching the modulo idiom in HeroSlider.
  const go = useCallback(
    (next: number) => onIndexChange(((next % count) + count) % count),
    [count, onIndexChange]
  );

  // Open on mount, and make sure the dialog is closed if we unmount while open.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  // showModal() does not lock background scroll — same pattern as Navbar.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(index - 1);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [go, index]);

  const photo = photos[index];
  if (!photo) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-label={`Photos from ${title}`}
      // Escape fires `cancel`, which closes the dialog natively — tell the
      // parent, or its state drifts out of sync with the DOM.
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        // Clicking the backdrop targets the dialog element itself.
        if (e.target === dialogRef.current) onClose();
      }}
      className="max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
      style={{ width: "100vw", height: "100dvh" }}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center p-4 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photos"
          className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-ink/60 text-white transition duration-150 ease-out hover:bg-ink/80 hover:scale-[1.02] active:scale-[0.98]"
        >
          <X size={20} />
        </button>

        <div className="relative flex h-full w-full max-w-5xl items-center justify-center">
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink/60 text-white transition duration-150 ease-out hover:bg-ink/80 sm:left-4"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink/60 text-white transition duration-150 ease-out hover:bg-ink/80 sm:right-4"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        <div className="mt-4 w-full max-w-3xl shrink-0 text-center text-white">
          <p className="text-sm leading-body text-white/85">{photo.alt}</p>
          <p
            aria-live="polite"
            className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60"
          >
            {index + 1} / {count}
          </p>
        </div>
      </div>
    </dialog>
  );
}

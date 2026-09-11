"use client";

import { useState } from "react";
import { ExternalLink, Images, MapPin } from "lucide-react";
import type { Event } from "@/data/events";
import { formatEventRange } from "@/lib/date";
import { PhotoLightbox } from "@/components/ui/PhotoLightbox";
import { cn } from "@/lib/cn";

/**
 * A past event in the gallery grid.
 *
 * The view affordance is chosen from the data, not from a prop: once photos
 * are added to `gallery`, the card switches from linking out to the Google
 * Photos album to opening the in-page lightbox — with no code change.
 *
 * The affordance uses the stretched-link pattern (`after:absolute after:inset-0`)
 * so the whole card is clickable while the accessible name stays "View 8 photos
 * from …" rather than the card's entire text content.
 */
export function EventCard({ event }: { event: Event }) {
  const [openAt, setOpenAt] = useState<number | null>(null);

  const hasGallery = event.gallery.length > 0;
  const hasAlbum = !hasGallery && Boolean(event.externalAlbumUrl);
  const interactive = hasGallery || hasAlbum;

  return (
    <>
      {/* `group` drives the image zoom; `relative` anchors the stretched link. */}
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm",
          interactive &&
            "transition duration-250 ease-spring hover:-translate-y-1 hover:shadow-lg focus-within:shadow-ring"
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${event.coverImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
          <div className="absolute inset-0 mix-blend-multiply bg-brand/5" />

          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm">
            {event.category}
          </span>
        </div>

        <div className="p-7">
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
            {formatEventRange(event.date, event.endDate)}
          </p>
          <h3 className="mt-3 font-display text-2xl text-ink">{event.title}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-ink-muted">
            <MapPin size={12} />
            {event.venue ? `${event.venue} · ${event.location}` : event.location}
          </p>
          <p className="mt-3 text-sm leading-body text-ink-muted">
            {event.summary}
          </p>

          {hasGallery && (
            <button
              type="button"
              onClick={() => setOpenAt(0)}
              className={affordanceClass}
            >
              View {event.gallery.length} photos
              <Images size={16} />
              <span className="sr-only"> from {event.title}</span>
            </button>
          )}

          {hasAlbum && (
            <a
              href={event.externalAlbumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={affordanceClass}
            >
              View album on Google Photos
              <ExternalLink size={16} />
              <span className="sr-only"> for {event.title}</span>
            </a>
          )}
        </div>
      </article>

      {openAt !== null && (
        <PhotoLightbox
          photos={event.gallery}
          title={event.title}
          index={openAt}
          onIndexChange={setOpenAt}
          onClose={() => setOpenAt(null)}
        />
      )}
    </>
  );
}

// The trailing `after:` rules stretch the hit area over the whole card.
// The focus ring is suppressed here and rendered by the card's `focus-within`
// instead — otherwise the global :focus-visible rule in globals.css would draw
// a second ring around this sliver of inline text.
const affordanceClass =
  "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors duration-150 hover:text-brand-deep " +
  "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:shadow-none";

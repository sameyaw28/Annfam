import { Clock, MapPin } from "lucide-react";
import type { Event } from "@/data/events";
import { formatEventRange } from "@/lib/date";
import { EventDateBadge } from "@/components/ui/EventDateBadge";
import { cn } from "@/lib/cn";

/**
 * A scheduled event, laid out as a wide horizontal row — deliberately
 * different from the past-event grid so the two lists never read as one.
 */
export function UpcomingEventCard({ event }: { event: Event }) {
  const showStatus = event.status === "postponed" || event.status === "cancelled";

  return (
    <article className="group grid gap-0 overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition duration-250 ease-spring hover:-translate-y-1 hover:shadow-lg md:grid-cols-12">
      <div className="relative aspect-[16/9] overflow-hidden md:col-span-4 md:aspect-auto lg:col-span-3">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${event.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
        <div className="absolute inset-0 mix-blend-multiply bg-brand/5" />
        {/* On mobile the row stacks, so the badge moves inline below. */}
        <EventDateBadge
          date={event.date}
          endDate={event.endDate}
          className="absolute left-4 top-4 hidden md:inline-flex"
        />
      </div>

      <div className="p-7 md:col-span-8 md:p-8 lg:col-span-9">
        <div className="flex flex-wrap items-center gap-3">
          <EventDateBadge
            date={event.date}
            endDate={event.endDate}
            className="md:hidden"
          />
          <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
            {event.category}
          </span>
          {showStatus && (
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold capitalize",
                event.status === "cancelled"
                  ? "bg-ink/5 text-ink-muted line-through"
                  : "bg-accent-soft text-ink"
              )}
            >
              {event.status}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-2xl text-ink md:text-3xl">
          {event.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            {event.venue ? `${event.venue} · ${event.location}` : event.location}
          </span>
          {event.time && (
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {event.time}
            </span>
          )}
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-body text-ink-muted md:text-base">
          {event.summary}
        </p>

        <p className="mt-5 text-sm font-semibold text-brand">
          {formatEventRange(event.date, event.endDate)}
        </p>
      </div>
    </article>
  );
}

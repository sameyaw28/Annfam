import { eventDayParts, formatEventRange } from "@/lib/date";
import { cn } from "@/lib/cn";

type Size = "sm" | "lg";

/**
 * The day/month/year stack used on event cards and the homepage band.
 * Renders as a <time> so the machine-readable date travels with it.
 */
export function EventDateBadge({
  date,
  endDate,
  size = "sm",
  className,
}: {
  date: string;
  endDate?: string;
  size?: Size;
  className?: string;
}) {
  const { day, month, year } = eventDayParts(date);

  return (
    <time
      dateTime={date}
      aria-label={formatEventRange(date, endDate)}
      className={cn(
        "inline-flex flex-col items-center justify-center rounded-2xl border border-line bg-surface/95 text-center shadow-sm backdrop-blur-sm",
        size === "sm" ? "h-16 w-16" : "h-24 w-24",
        className
      )}
    >
      <span
        className={cn(
          "font-display leading-none bg-brand-gradient bg-clip-text text-transparent",
          size === "sm" ? "text-2xl" : "text-4xl"
        )}
      >
        {day}
      </span>
      <span
        className={cn(
          "font-semibold uppercase tracking-[0.14em] text-ink",
          size === "sm" ? "mt-1 text-[0.625rem]" : "mt-1.5 text-xs"
        )}
      >
        {month}
      </span>
      <span
        className={cn(
          "uppercase tracking-[0.1em] text-ink-muted",
          size === "sm" ? "text-[0.5rem]" : "text-[0.625rem]"
        )}
      >
        {year}
      </span>
    </time>
  );
}

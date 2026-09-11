import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Shown when a list has nothing in it. This is not a rare edge case — the
 * upcoming list is empty whenever the calendar is between events — so it is
 * built to read as a finished state, not a gap.
 *
 * The call to action is brand, never accent: the fixed navbar Donate button is
 * always in the viewport and owns the page's single accent element.
 */
export function EmptyEventsPanel({
  title,
  lede,
  actionLabel,
  actionHref,
  className,
}: {
  title: string;
  lede: string;
  actionLabel: string;
  actionHref: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-bg p-10 text-center md:p-14",
        className
      )}
    >
      <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand">
        <CalendarDays size={22} />
      </span>
      <p className="mt-5 font-display text-2xl text-ink">{title}</p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-body text-ink-muted">
        {lede}
      </p>
      <Link
        href={actionHref}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors duration-150 hover:text-brand-deep"
      >
        {actionLabel}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

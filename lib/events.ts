/**
 * Event data access — the single seam between the site and its data source.
 *
 * Nothing else in the app imports `@/data/events` except for the `Event` type.
 * When the admin backend lands, only the four function bodies below change:
 * they query the database instead of reading the static array. No component
 * signature changes, because they are already async.
 *
 * ---------------------------------------------------------------------------
 * Why the filtering lives here and NOT as derived exports in `data/events.ts`:
 *
 *   // data/events.ts — DO NOT DO THIS
 *   const now = new Date();
 *   export const upcomingEvents = events.filter((e) => e.date >= now);
 *
 * A server component with no dynamic API is statically rendered at build time,
 * and `new Date()` is not a dynamic API that Next tracks — so it has no idea
 * the page depends on the clock and freezes the HTML. `export const revalidate`
 * does not rescue it either: ISR re-runs the *page component*, but an ES module
 * namespace is evaluated once per process, so a module-scope constant sticks
 * until a redeploy or a cold start. Cold starts are non-deterministic, so it
 * presents as a flaky bug.
 *
 * These functions read the clock on every invocation instead.
 * ---------------------------------------------------------------------------
 */

import { cache } from "react";
import { events, type Event } from "@/data/events";
import { todayKey } from "@/lib/date";

/**
 * An event is past only once its last day has fully elapsed — strictly `<`,
 * so an event happening today still counts as upcoming.
 */
function isPast(event: Event, today: string): boolean {
  return (event.endDate ?? event.date) < today;
}

/** Soonest first. Cancelled events are hidden from the upcoming list. */
export const getUpcomingEvents = cache(async (): Promise<Event[]> => {
  const today = todayKey();
  return events
    .filter((e) => !isPast(e, today) && e.status !== "cancelled")
    .sort((a, b) => a.date.localeCompare(b.date));
});

/** Most recent first. Cancelled events are kept — history is history. */
export const getPastEvents = cache(async (): Promise<Event[]> => {
  const today = todayKey();
  return events
    .filter((e) => isPast(e, today))
    .sort((a, b) => b.date.localeCompare(a.date));
});

/** The next event on the calendar, or null when nothing is scheduled. */
export const getNextEvent = cache(async (): Promise<Event | null> => {
  const upcoming = await getUpcomingEvents();
  return upcoming[0] ?? null;
});

/** The most recent past event — the homepage fallback when nothing is upcoming. */
export const getLatestPastEvent = cache(async (): Promise<Event | null> => {
  const past = await getPastEvents();
  return past[0] ?? null;
});

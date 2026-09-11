/**
 * Date helpers for event scheduling.
 *
 * Every event date in this codebase is a plain "YYYY-MM-DD" string, never a
 * Date object. Zero-padded ISO dates compare lexicographically in exact
 * chronological order, so ordering and past/future checks never construct a
 * Date at all — which makes timezone and parse-mode bugs structurally
 * impossible. (`new Date("2026-07-17")` parses as UTC midnight, but
 * `new Date("2026-07-17T18:00")` parses as local time; that inconsistency is
 * the classic source of off-by-one-day bugs.)
 *
 * Date objects appear here only for *formatting*, and always from a noon-UTC
 * anchor so no formatter can roll the calendar day.
 */

/** Ghana is UTC+0 year-round with no DST. */
export const SITE_TZ = "Africa/Accra";

/**
 * Today's calendar day in the foundation's timezone, as "YYYY-MM-DD".
 *
 * The explicit timeZone matters even at UTC+0: without it, a developer running
 * `npm run dev` on a laptop set to America/New_York would see the past/upcoming
 * boundary flip at 8pm local instead of midnight in Accra.
 */
export function todayKey(now: Date = new Date()): string {
  // formatToParts over .format() — immune to ICU locale pattern drift.
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: SITE_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  return `${get("year")}-${get("month")}-${get("day")}`;
}

/**
 * Noon-UTC anchor for an ISO day. Belt-and-braces: even if a formatter below
 * ever loses its explicit timeZone, a ±12h shift cannot change the day.
 */
function anchor(iso: string): Date {
  return new Date(`${iso}T12:00:00Z`);
}

const LONG_MONTH = new Intl.DateTimeFormat("en-GB", {
  timeZone: "UTC",
  month: "long",
});
const SHORT_MONTH = new Intl.DateTimeFormat("en-GB", {
  timeZone: "UTC",
  month: "short",
});

/** "2025-06-10" → "10 June 2025" */
export function formatEventDate(iso: string): string {
  const d = anchor(iso);
  return `${d.getUTCDate()} ${LONG_MONTH.format(d)} ${d.getUTCFullYear()}`;
}

/**
 * Formats a single day or an inclusive range, collapsing repeated parts:
 *   ("2026-05-18", "2026-05-20") → "18–20 May 2026"
 *   ("2026-05-28", "2026-06-02") → "28 May – 2 June 2026"
 *   ("2025-12-30", "2026-01-02") → "30 December 2025 – 2 January 2026"
 */
export function formatEventRange(iso: string, endIso?: string): string {
  if (!endIso || endIso === iso) return formatEventDate(iso);

  const start = anchor(iso);
  const end = anchor(endIso);

  const sameYear = start.getUTCFullYear() === end.getUTCFullYear();
  const sameMonth = sameYear && start.getUTCMonth() === end.getUTCMonth();

  if (sameMonth) {
    return `${start.getUTCDate()}–${end.getUTCDate()} ${LONG_MONTH.format(end)} ${end.getUTCFullYear()}`;
  }
  if (sameYear) {
    return `${start.getUTCDate()} ${LONG_MONTH.format(start)} – ${end.getUTCDate()} ${LONG_MONTH.format(end)} ${end.getUTCFullYear()}`;
  }
  return `${formatEventDate(iso)} – ${formatEventDate(endIso)}`;
}

/**
 * Split parts for the date badge.
 *
 * Deliberately independent of "today": the badge renders inside a client
 * component, and a value derived from the current date would differ between
 * the server-rendered HTML (which ISR can serve up to an hour stale) and the
 * client's first render, producing a hydration mismatch. The year is always
 * shown — it is genuinely useful across a list spanning several years.
 */
export function eventDayParts(iso: string): {
  day: string;
  month: string;
  year: string;
} {
  const d = anchor(iso);
  return {
    day: String(d.getUTCDate()),
    month: SHORT_MONTH.format(d).toUpperCase(),
    year: String(d.getUTCFullYear()),
  };
}

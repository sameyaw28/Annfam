/**
 * Event content.
 *
 * This module is a dumb array — deliberately. No `new Date()`, no filtering,
 * no sorting, no derived exports. It is the shape of a `select * from events`
 * row set, which is what lets the admin backend replace it later by rewriting
 * `lib/events.ts` alone, with no component changes.
 *
 * All date logic lives in `lib/events.ts`. See the note there on why deriving
 * upcoming/past at module scope silently breaks under static rendering.
 *
 * Every field is a JSON primitive: `Event` objects cross the server → client
 * boundary into EventCard/PhotoLightbox, and Date objects do not serialize.
 */

export type EventCategory =
  | "Outreach"
  | "Health"
  | "Education"
  | "Community"
  | "Fundraiser";

export type EventStatus = "scheduled" | "confirmed" | "cancelled" | "postponed";

export type EventPhoto = {
  src: string;
  /** Required — gallery photos are content, not decoration. */
  alt: string;
  width?: number;
  height?: number;
};

export type Event = {
  slug: string;
  title: string;
  /** "YYYY-MM-DD" in Africa/Accra. Never a Date object. */
  date: string;
  /** Inclusive last day. Omit for single-day events. */
  endDate?: string;
  /** Display-only, e.g. "6:00 PM – 9:00 PM". Never parsed. */
  time?: string;
  /** Short, for the card meta line: "Obuasi, Ghana". */
  location: string;
  /** The specific place: "Anyinam Methodist JHS". */
  venue?: string;
  category: EventCategory;
  summary: string;
  coverImage: string;
  /** Empty until photos are added. Drives the card's view affordance. */
  gallery: EventPhoto[];
  /** Google Photos album — the fallback while `gallery` is empty. */
  externalAlbumUrl?: string;
  status: EventStatus;
};

export const events: Event[] = [
  // ---------------------------------------------------------------------
  // Upcoming
  // Both are listed undated on the foundation's 2026 timeline. The dates
  // below are PLACEHOLDERS chosen to keep them in the future.
  // TODO: confirm both dates with the foundation before publishing.
  // ---------------------------------------------------------------------
  {
    slug: "community-health-screening",
    title: "Community Health Screening",
    date: "2026-11-14", // TODO: PLACEHOLDER — confirm actual date
    time: "8:00 AM – 3:00 PM",
    location: "Obuasi, Ghana",
    category: "Health",
    summary:
      "Free screening for blood pressure, blood sugar, and general wellness, run with local health workers and open to everyone in the community.",
    coverImage: "/uploads/slide-1.jpg",
    gallery: [],
    status: "scheduled",
  },
  {
    slug: "prison-outreach",
    title: "Prison Outreach — Cell but not Hell",
    date: "2026-12-05", // TODO: PLACEHOLDER — confirm actual date
    location: "Kumasi, Ghana",
    venue: "In collaboration with the KSP “Cell but not Hell” project",
    category: "Outreach",
    summary:
      "A visit bringing essentials, encouragement, and practical support to inmates, in partnership with the KSP “Cell but not Hell” project.",
    coverImage: "/uploads/slide-2.jpg",
    gallery: [],
    status: "scheduled",
  },

  // ---------------------------------------------------------------------
  // Past
  // ---------------------------------------------------------------------
  {
    slug: "aga-school-world-literacy-day",
    title: "World Literacy Day at AGA School",
    date: "2026-09-08",
    location: "Obuasi, Ghana",
    venue: "AGA School",
    category: "Education",
    summary:
      "Marking World Literacy Day with a donation of books to the school library, strengthening the reading culture for every pupil who uses it.",
    coverImage: "/uploads/slide-3.jpg",
    gallery: [],
    status: "confirmed",
  },
  {
    slug: "st-joseph-world-menstrual-day",
    title: "World Menstrual Day at St. Joseph School",
    date: "2026-05-28",
    location: "Obuasi, Ghana",
    venue: "St. Joseph School",
    category: "Health",
    summary:
      "An education and dignity session for World Menstrual Day, followed by a needs assessment to shape how we support the school going forward.",
    coverImage: "/uploads/slide-4.jpg",
    gallery: [],
    status: "confirmed",
  },
  {
    slug: "holy-trinity-scholarship-audit",
    title: "Scholarship Scheme Audit — Holy Trinity School",
    date: "2026-05-18",
    endDate: "2026-05-20",
    location: "Obuasi, Ghana",
    venue: "Holy Trinity School",
    category: "Education",
    summary:
      "Three days reviewing every scholarship placement at Holy Trinity — checking progress with each student and confirming that funds reach the classroom.",
    coverImage: "/uploads/slide-1.jpg",
    gallery: [],
    status: "confirmed",
  },
  {
    slug: "anyinam-methodist-jhs",
    title: "ANNFAM Foundation visits Anyinam Methodist JHS",
    date: "2025-06-10",
    location: "Obuasi, Ghana",
    venue: "Anyinam Methodist JHS",
    category: "Education",
    summary:
      "A morning with the pupils and teachers of Anyinam Methodist JHS — sharing encouragement, learning what the school needs most, and celebrating together.",
    coverImage: "/uploads/slide-2.jpg",
    gallery: [],
    externalAlbumUrl: "https://photos.app.goo.gl/UFdTYYXr9XH1Ftmv8",
    status: "confirmed",
  },
  {
    slug: "memiriwa-health-screening",
    title: "Free Health Screening for Memiriwa No.2 and its environs",
    date: "2025-04-12", // TODO: PLACEHOLDER — no date recorded; confirm with the foundation
    location: "Memiriwa No.2, Ghana",
    venue: "With the Obuasi West Municipal Health Directorate",
    category: "Health",
    summary:
      "A free community health screening organised with the Obuasi West Municipal Health Directorate, bringing checks and advice to residents of Memiriwa No.2 and the surrounding villages.",
    coverImage: "/uploads/slide-3.jpg",
    gallery: [],
    externalAlbumUrl: "https://photos.app.goo.gl/3gf38vDt6QpYmRbh6",
    status: "confirmed",
  },
  {
    slug: "patmos-childrens-home",
    title: "ANNFAM Foundation visits the Patmos Children's Home",
    date: "2025-02-22", // TODO: PLACEHOLDER — no date recorded; confirm with the foundation
    location: "Ghana",
    venue: "Patmos Children's Home",
    category: "Outreach",
    summary:
      "Time spent with the children and caregivers at Patmos Children's Home — delivering supplies, sharing a meal, and listening to what the home needs next.",
    coverImage: "/uploads/slide-4.jpg",
    gallery: [],
    externalAlbumUrl: "https://photos.app.goo.gl/witJz5wPU4X2bS6u9",
    status: "confirmed",
  },
];

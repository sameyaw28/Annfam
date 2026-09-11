import type { Metadata } from "next";
import { EventsHeroSection } from "@/components/sections/EventsHeroSection";
import { UpcomingEventsSection } from "@/components/sections/UpcomingEventsSection";
import { EventGallerySection } from "@/components/sections/EventGallerySection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { DonationSection } from "@/components/sections/DonationSection";

export const metadata: Metadata = {
  title: "Events — ANNFAM Foundation",
  description:
    "Upcoming screenings, school visits, and outreach from ANNFAM Foundation — plus a photo record of the events we have already held across Obuasi and beyond.",
};

/**
 * Hourly ISR. Without this the page is rendered once at build time and events
 * never cross the past/upcoming boundary until the next deploy. See the note
 * in lib/events.ts.
 */
export const revalidate = 3600;

export default function EventsPage() {
  return (
    <>
      <EventsHeroSection />
      <UpcomingEventsSection />
      <EventGallerySection />
      <ImpactSection />
      <DonationSection />
    </>
  );
}

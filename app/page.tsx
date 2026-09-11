import { HeroSection } from "@/components/sections/HeroSection";
import { CeoSection } from "@/components/sections/CeoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NextEventSection } from "@/components/sections/NextEventSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { DonationSection } from "@/components/sections/DonationSection";

/** Hourly ISR — keeps the next-event band current. See lib/events.ts. */
export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CeoSection />
      <AboutSection />
      <NextEventSection />
      <ImpactSection />
      <DonationSection />
    </>
  );
}

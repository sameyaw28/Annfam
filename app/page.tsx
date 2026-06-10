import { HeroSection } from "@/components/sections/HeroSection";
import { CeoSection } from "@/components/sections/CeoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { DonationSection } from "@/components/sections/DonationSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CeoSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <DonationSection />
    </>
  );
}

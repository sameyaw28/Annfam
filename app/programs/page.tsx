import type { Metadata } from "next";
import { ProgramsHeroSection } from "@/components/sections/ProgramsHeroSection";
import { AllProgramsSection } from "@/components/sections/AllProgramsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { DonationSection } from "@/components/sections/DonationSection";

export const metadata: Metadata = {
  title: "Programs — ANNFAM Foundation",
  description:
    "Our active programs across education, health, sustainability, and community — designed and led locally, funded through long-term partnerships.",
};

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHeroSection />
      <AllProgramsSection />
      <ImpactSection />
      <DonationSection />
    </>
  );
}

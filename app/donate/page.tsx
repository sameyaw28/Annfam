import type { Metadata } from "next";
import { DonateHeroSection } from "@/components/sections/DonateHeroSection";
import { WhyDonateSection } from "@/components/sections/WhyDonateSection";
import { DonationOptionsSection } from "@/components/sections/DonationOptionsSection";
import { DonationFormSection } from "@/components/sections/DonationFormSection";
import { MoreWaysSection } from "@/components/sections/MoreWaysSection";

export const metadata: Metadata = {
  title: "Donate — ANNFAM Foundation",
  description:
    "Your gift funds community-led programs in education, health, and sustainability. Pay with Mobile Money or card, transparently reported, and matched cedi-for-cedi through June 30.",
};

export default function DonatePage() {
  return (
    <>
      <DonateHeroSection />
      <WhyDonateSection />
      <DonationOptionsSection />
      <DonationFormSection />
      <MoreWaysSection />
    </>
  );
}

import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { StorySection } from "@/components/sections/StorySection";
import { DeputyCeoSection } from "@/components/sections/DeputyCeoSection";
import { TeamSection } from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "About — ANNFAM Foundation",
  description:
    "We partner with local leaders to fund programs that work — measured in lives, not logos. Meet the team and learn how the foundation began.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionSection />
      <VisionSection />
      <StorySection />
      <DeputyCeoSection />
      <TeamSection />
    </>
  );
}

import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/ContactHeroSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — ANNFAM Foundation",
  description:
    "Questions about our programs, partnership ideas, or press inquiries — get in touch and a real person will reply within two business days.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactSection />
    </>
  );
}

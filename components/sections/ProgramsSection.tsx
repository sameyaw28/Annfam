import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { featuredPrograms } from "@/data/programs";

export function ProgramsSection() {
  return (
    <Section id="programs" variant="canvas">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Programs"
            title="Where your support goes."
            lede="Each program is designed and led locally, then funded through long-term partnerships."
          />
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-brand transition-colors duration-150 hover:text-brand-deep md:self-end"
          >
            View all programs
            <ArrowRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((program, i) => (
            <Reveal key={program.slug} delay={i * 80}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

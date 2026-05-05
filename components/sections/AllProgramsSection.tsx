import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { allPrograms } from "@/data/programs";

export function AllProgramsSection() {
  return (
    <Section id="all-programs" variant="canvas">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Active programs"
            title="A focused portfolio, by design."
            lede="Six initiatives across four categories — funded transparently, led locally, and measured against outcomes that matter."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPrograms.map((program, i) => (
            <Reveal key={program.slug} delay={(i % 3) * 80}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "240K+", label: "Lives reached" },
  { value: "$28M", label: "Funds deployed" },
  { value: "84", label: "Communities served" },
  { value: "11", label: "Years on the ground" },
];

export function ImpactSection() {
  return (
    <Section id="impact" variant="surface">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Impact"
            title="Numbers that mean something."
            lede="Every figure below represents a community-led program funded transparently."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-sm md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="group h-full bg-surface p-10 text-center transition-colors duration-200 hover:bg-brand-soft md:p-12">
                <p className="font-display text-5xl md:text-6xl bg-brand-gradient bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-ink-muted">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

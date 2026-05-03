import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/ui/TeamCard";
import { team } from "@/data/team";

export function TeamSection() {
  return (
    <Section id="team" variant="canvas">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="People"
            title="The team behind the work."
            lede="A small team in three time zones, supported by partners who lead programs on the ground."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.slug} delay={i * 80}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Compass, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  "Integrity in everything we do.",
  "Dignity and respect for every person we serve.",
  "Collaboration with communities, partners, and government.",
  "Service that creates lasting, measurable change.",
];

export function MissionSection() {
  return (
    <Section id="mission" variant="surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20">
          <Reveal className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Mission
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              Bridging the gap to a more equitable society.
            </h2>
            <p className="mt-7 text-base md:text-lg leading-body text-ink-muted">
              We are committed to bridging the gap between the less endowed
              and the privileged members of our society. Every person deserves
              access to education, healthcare, and other essential services —
              regardless of their socioeconomic background.
            </p>
            <p className="mt-5 text-base md:text-lg leading-body text-ink-muted">
              Through partnerships with other organizations, businesses, and
              government agencies, we empower individuals and communities,
              promote social justice, and address systemic inequalities —
              creating lasting change for those who have been historically
              marginalized.
            </p>

            <ul className="mt-9 space-y-4">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-base text-ink">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={120}>
            <MissionVisual />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function MissionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-gradient opacity-15 blur-3xl"
      />
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-brand-gradient p-10 shadow-lg md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(40% 50% at 80% 20%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div className="relative flex h-full flex-col justify-between text-white">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm">
            <Compass size={26} />
          </span>
          <div>
            <p className="font-display text-3xl md:text-4xl tracking-display">
              Together, a brighter future.
            </p>
            <p className="mt-4 max-w-sm text-sm md:text-base text-white/85 leading-body">
              Empowering individuals and communities — promoting social
              justice, addressing systemic inequalities, and improving lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

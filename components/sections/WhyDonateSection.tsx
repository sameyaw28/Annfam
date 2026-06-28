import { HandCoins, LineChart, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    icon: HandCoins,
    title: "92 pesewas of every cedi goes to programs",
    body: "We keep overhead under 8% by design. Independently audited every year — and we publish the books.",
  },
  {
    icon: Users,
    title: "Local leaders decide where it lands",
    body: "We don't parachute. Every program is led by the people closest to the work, who know what their community needs.",
  },
  {
    icon: LineChart,
    title: "You see the outcomes, not just outputs",
    body: "Quarterly impact reports tied to lives changed — graduations, wells drilled, mothers reached — not vanity metrics.",
  },
];

export function WhyDonateSection() {
  return (
    <Section id="why" variant="surface">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why give to ANNFAM"
            title="Trust earned, not assumed."
            lede="When you give, you're not buying t-shirts or filling marketing budgets. You're funding the work, and you'll know exactly how it landed."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-8 shadow-sm transition duration-250 ease-spring hover:-translate-y-1 hover:shadow-lg">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                  <reason.icon size={22} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-body text-ink-muted">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

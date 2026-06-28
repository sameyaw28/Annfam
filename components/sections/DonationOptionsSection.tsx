import { BookOpen, Droplets, HeartPulse, Sprout } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const options = [
  {
    amount: "₵50",
    icon: BookOpen,
    title: "A term of textbooks",
    body: "Outfits one Lighthouse Scholar with the books and supplies they need to start the term.",
  },
  {
    amount: "₵100",
    icon: Droplets,
    title: "A month of clean water",
    body: "Funds maintenance and chlorination for one Clear Waters well — serving roughly 200 people.",
  },
  {
    amount: "₵200",
    icon: HeartPulse,
    title: "A safe delivery",
    body: "Covers prenatal care and a midwife-attended birth through the Safe Mothers Network.",
  },
  {
    amount: "₵500",
    icon: Sprout,
    title: "A farmer's full season",
    body: "Seeds, tools, and training so a Rooted Farms cooperative member can triple their yield.",
  },
];

export function DonationOptionsSection() {
  return (
    <Section id="options" variant="canvas">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What your gift does"
            title="Pick a level. See the lives it changes."
            lede="These aren't suggested amounts — they're the actual unit cost of one human outcome, costed out by our program teams on the ground."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option, i) => (
            <Reveal key={option.amount} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-sm transition duration-250 ease-spring hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <option.icon size={20} />
                </span>
                <p className="mt-6 font-display text-4xl tracking-display text-ink">
                  {option.amount}
                </p>
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm leading-body text-ink-muted">
                  {option.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

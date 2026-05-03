import { ArrowRight, GraduationCap, HeartPulse, Sprout, Users } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { Icon: GraduationCap, title: "Education", text: "Scholarships and learning resources for underserved students." },
  { Icon: HeartPulse, title: "Health", text: "Mobile clinics and clean-water programs in rural communities." },
  { Icon: Users, title: "Community", text: "Local leadership grants that fund grassroots initiatives." },
  { Icon: Sprout, title: "Sustainability", text: "Climate-resilient agriculture and renewable energy projects." },
];

export function AboutSection() {
  return (
    <Section id="about" variant="surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-20">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Our mission
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Lasting change starts with the people closest to it.
            </h2>
            <p className="mt-7 text-base md:text-lg leading-body text-ink-muted">
              Since 2014 we&apos;ve partnered with community leaders across four
              continents — funding the programs they design, on the timelines
              they set. We measure success in lives, not logos.
            </p>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors duration-150 hover:text-brand-deep"
            >
              Learn more about us
              <ArrowRight
                size={16}
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {pillars.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-line bg-bg p-7 transition duration-250 ease-spring hover:-translate-y-1 hover:border-brand/20 hover:bg-surface hover:shadow-lg">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-display text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-body text-ink-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

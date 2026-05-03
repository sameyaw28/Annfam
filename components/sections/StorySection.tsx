import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const milestones = [
  { year: "2014", text: "Founded with the first scholarship cohort of 12 students." },
  { year: "2017", text: "Launched the first international program in Lagos." },
  { year: "2020", text: "Crossed 100 community partnerships across four continents." },
  { year: "2024", text: "$28M deployed, 240k+ lives reached, fully transparent." },
];

export function StorySection() {
  return (
    <Section id="story" variant="surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-20">
          <Reveal className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Our story
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              How it began.
            </h2>
            <div className="mt-7 space-y-5 text-base md:text-lg leading-body text-ink-muted">
              <p>
                In 2014, two friends — Ada and Fola — pooled four thousand
                dollars to fund a single after-school reading program in their
                hometown. They had no plan to start a foundation. They just
                wanted the kids on their block to have books.
              </p>
              <p>
                Eleven years later, ANNFAM Foundation supports 84 community-led
                programs across four continents. The work has scaled. The
                principle hasn&apos;t: we still listen first, fund what local
                leaders propose, and measure success only in the lives changed.
              </p>
              <p>
                We don&apos;t put our logo on classroom walls. We don&apos;t
                fly in for ribbon cuttings. The communities we partner with do
                the work. We just make sure they have what they need to keep
                doing it.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <StoryVisual />
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-bg p-6 transition duration-250 ease-spring hover:-translate-y-1 hover:bg-surface hover:shadow-lg">
                <p className="font-display text-3xl bg-brand-gradient bg-clip-text text-transparent">
                  {m.year}
                </p>
                <p className="mt-3 text-sm leading-body text-ink-muted">
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function StoryVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand-gradient opacity-15 blur-3xl"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&h=1250&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent" />
        <div className="absolute inset-0 mix-blend-multiply bg-brand/10" />

        <div className="absolute left-6 right-6 bottom-6 text-white">
          <p className="text-xs uppercase tracking-[0.18em] opacity-80">
            Founding · 2014
          </p>
          <p className="mt-2 font-display text-2xl">
            From one program on one block.
          </p>
        </div>
      </div>
    </div>
  );
}

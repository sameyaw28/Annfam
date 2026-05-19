import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const milestones = [
  { year: "1975", text: "A Form 1 student passes the Common Entrance Exam as the only successful candidate — but cannot afford secondary school." },
  { year: "1977", text: "Master Danso intervenes, opening the door to Obuasi Secondary Technical School." },
  { year: "O-Level", text: "A Government Scholarship sees the five-year course through to completion." },
  { year: "Today", text: "ANNFAM Foundation pays that helping hand forward — for the next child waiting." },
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
              The helping hand that started it all.
            </h2>
            <div className="mt-7 space-y-5 text-base md:text-lg leading-body text-ink-muted">
              <p>
                The central figure in the ANNFAM story isn&apos;t an Annan at
                all — it&apos;s the late Mr. Danso, headmaster of St.
                Joseph&apos;s Middle School (B Stream). In 1975, a Form 1
                student there passed the Common Entrance Examination as the
                only successful candidate at the school. His single mother
                could not afford to send him on to secondary school. He sat
                out that year. And the next.
              </p>
              <p>
                In 1977 he succeeded again, with a very good score, and faced
                the same wall. Master Danso had been watching quietly. One day
                he called the boy into his office and said,{" "}
                <span className="text-ink">
                  &ldquo;Thomas, I am going to send you to Obuasi Secondary
                  Technical School to talk to the headmaster about your case
                  — perhaps he can offer some assistance.&rdquo;
                </span>
              </p>
              <p>
                The headmaster, Mr. B. E. Godwyll, was so moved that he offered
                admission to Form 1 and arranged a Government Scholarship for
                the full five-year course. That single intervention — one
                teacher who refused to let a child slip through the cracks — is
                the reason ANNFAM Foundation exists today. We give the same
                helping hand to the next child waiting.
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
            Our origin · 1977
          </p>
          <p className="mt-2 font-display text-2xl">
            One teacher&apos;s quiet intervention.
          </p>
        </div>
      </div>
    </div>
  );
}

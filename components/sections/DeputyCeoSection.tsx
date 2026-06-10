import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function DeputyCeoSection() {
  return (
    <Section id="leadership" variant="canvas">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20">
          <Reveal className="lg:col-span-6">
            <DeputyCeoVisual />
          </Reveal>

          <Reveal className="lg:col-span-6" delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Leadership
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              A word from our Deputy CEO.
            </h2>

            <span
              aria-hidden
              className="mt-7 grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand"
            >
              <Quote size={22} />
            </span>

            <div className="mt-6 space-y-5 text-base md:text-lg leading-body text-ink-muted">
              <p>
                I&apos;m Agyapong Akwasi Samuel, Deputy CEO of ANNFAM Foundation.
                There are so many instances where people are doing everything
                right and still get hit by circumstances they cannot control — a
                single mother caring for three or more children who need medical
                care, a brilliant but needy student, the girl child denied an
                education, and so on.
              </p>
              <p>
                As Deputy CEO, I see to it that as we feel for the needy, our
                arms actually reach out to them. I am the bridge between strategy
                and execution. In other words, I don&apos;t set the vision alone
                — I make sure it actually happens.
              </p>
              <p>
                We&apos;ve already reached out to communities, schools,
                orphanages and prisons. We also organised a health screening and
                menstrual hygiene donation at Anyinam Methodist. We look forward
                to attaining the target we&apos;ve set for this year and beyond.
              </p>
              <p className="text-ink">Thank you.</p>
            </div>

            <div className="mt-9 border-t border-line pt-6">
              <p className="font-display text-xl tracking-display text-ink">
                Agyapong Akwasi Samuel
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Deputy CEO, ANNFAM Foundation
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function DeputyCeoVisual() {
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
            backgroundImage: "url('/uploads/deputy-ceo.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent" />
        <div className="absolute inset-0 mix-blend-multiply bg-brand/10" />

        <div className="absolute left-6 right-6 bottom-6 text-white">
          <p className="text-xs uppercase tracking-[0.18em] opacity-80">
            Office of the Deputy CEO
          </p>
          <p className="mt-2 font-display text-2xl">Agyapong Akwasi Samuel</p>
        </div>
      </div>
    </div>
  );
}

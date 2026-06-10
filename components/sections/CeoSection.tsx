import { Quote, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function CeoSection() {
  return (
    <Section id="ceo-welcome" variant="soft">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-20">
          <Reveal className="lg:col-span-5">
            <CeoPortrait />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Message from our CEO
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              Welcome to ANNFAM Foundation.
            </h2>

            <span
              aria-hidden
              className="mt-7 grid h-12 w-12 place-items-center rounded-2xl bg-surface text-brand shadow-sm"
            >
              <Quote size={22} />
            </span>

            <div className="mt-6 space-y-5 text-base md:text-lg leading-body text-ink-muted">
              <p>
                At ANNFAM Foundation, we believe that every young person deserves
                the opportunity, support, and encouragement needed to thrive and
                make meaningful contributions to society. Our mission is centred
                on empowering lives through youth development, education,
                mentorship, health advocacy, and community outreach initiatives
                that create lasting impact.
              </p>
              <p>
                Since our inception, we have remained committed to serving
                communities with compassion, excellence, and purpose. From
                organising educational and health campaigns to supporting
                vulnerable groups and promoting leadership among young people,
                our goal is to inspire hope and drive positive change.
              </p>
              <p>
                As CEO, I am honoured to work alongside a passionate team and
                dedicated partners who share the vision of building a future
                where individuals are empowered to reach their full potential. We
                believe that sustainable development begins with people, and
                together, we can create opportunities that transform lives.
              </p>
              <p>
                Thank you for visiting our website and for your interest in
                ANNFAM Foundation. We invite you to join us in making a
                difference through collaboration, support, and service to
                humanity.
              </p>
            </div>

            <div className="mt-9 border-t border-line/70 pt-6">
              <p className="font-display text-xl tracking-display text-ink">
                Dr. Esther Ehu Annan
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Chief Executive Officer, ANNFAM Foundation
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function CeoPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:sticky lg:top-28 lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand-gradient opacity-15 blur-3xl"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-brand-soft shadow-lg">
        {/* Placeholder — shown until the photo is added. */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-surface text-brand shadow-sm">
            <UserRound size={36} />
          </span>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            CEO portrait coming soon
          </p>
        </div>

        {/* Photo layer — covers the placeholder once /uploads/ceo.jpg exists. */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/uploads/ceo.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
        <div className="absolute inset-0 mix-blend-multiply bg-brand/10" />

        <div className="absolute left-6 right-6 bottom-6 text-white">
          <p className="text-xs uppercase tracking-[0.18em] opacity-80">
            Office of the CEO
          </p>
          <p className="mt-2 font-display text-2xl">Dr. Esther Ehu Annan</p>
        </div>
      </div>
    </div>
  );
}

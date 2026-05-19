import { Telescope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function VisionSection() {
  return (
    <Section id="vision" variant="canvas">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
            <VisionVisual />
          </Reveal>

          <Reveal className="order-1 lg:order-2 lg:col-span-6" delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Vision
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              Equal opportunity to unearth every God-given potential.
            </h2>
            <p className="mt-7 text-base md:text-lg leading-body text-ink-muted">
              We envision a world where the less endowed and the vulnerable in
              society are given equal opportunities — where the gap between the
              less endowed and the privileged is bridged, and every individual
              has access to basic needs such as education, healthcare, and
              food.
            </p>
            <p className="mt-5 text-base md:text-lg leading-body text-ink-muted">
              Through our programs and initiatives, we aim to create equal
              opportunities for all individuals regardless of their
              socio-economic status — committed to making a positive impact and
              ending the cycle of poverty.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function VisionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-soft blur-2xl"
      />
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-surface p-10 shadow-md md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 90%, rgba(108,99,255,0.10) 0%, rgba(108,99,255,0) 65%), radial-gradient(50% 50% at 90% 10%, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0) 65%)",
          }}
        />
        <div className="relative flex h-full flex-col justify-between">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand">
            <Telescope size={26} />
          </span>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Our promise
            </p>
            <p className="mt-3 font-display text-3xl md:text-4xl tracking-display text-ink">
              Equal access.
              <br />
              Full potential.
              <br />
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                For all.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

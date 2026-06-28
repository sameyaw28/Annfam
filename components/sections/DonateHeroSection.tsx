import { ArrowDown, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function DonateHeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg pt-36 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 55% at 14% 10%, rgba(108,99,255,0.14) 0%, rgba(108,99,255,0) 60%), radial-gradient(50% 55% at 86% 26%, rgba(79,70,229,0.10) 0%, rgba(79,70,229,0) 65%)",
        }}
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="animate-hero-in text-sm font-semibold uppercase tracking-[0.18em] text-brand"
            style={{ animationDelay: "0ms" }}
          >
            Give with confidence
          </p>
          <h1
            className="animate-hero-in mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-display"
            style={{ animationDelay: "100ms" }}
          >
            Your gift becomes{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              someone&apos;s next chapter.
            </span>
          </h1>
          <p
            className="animate-hero-in mx-auto mt-7 max-w-2xl text-base md:text-lg leading-body text-ink-muted"
            style={{ animationDelay: "200ms" }}
          >
            Every cedi funds a community-led program — a scholarship, a clean
            well, a midwife&apos;s training. No overhead games. No vague
            promises. Just direct, measurable change.
          </p>

          <div
            className="animate-hero-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Button href="#give" variant="primary" size="lg">
              Give now
              <ArrowDown size={18} />
            </Button>
            <Button href="#why" variant="secondary" size="lg">
              See where it goes
            </Button>
          </div>

          <div
            className="animate-hero-in mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-ink-muted shadow-sm"
            style={{ animationDelay: "400ms" }}
          >
            <ShieldCheck size={14} className="text-brand" />
            501(c)(3) · tax-deductible · Charity Navigator 4-star rated
          </div>
        </div>
      </Container>
    </section>
  );
}

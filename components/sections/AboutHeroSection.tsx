import { Container } from "@/components/ui/Container";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg pt-36 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 12% 8%, rgba(108,99,255,0.12) 0%, rgba(108,99,255,0) 60%), radial-gradient(50% 50% at 88% 22%, rgba(79,70,229,0.10) 0%, rgba(79,70,229,0) 65%)",
        }}
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="animate-hero-in text-sm font-semibold uppercase tracking-[0.18em] text-brand"
            style={{ animationDelay: "0ms" }}
          >
            About us
          </p>
          <h1
            className="animate-hero-in mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-display"
            style={{ animationDelay: "100ms" }}
          >
            A foundation built on{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              trust, transparency, and community.
            </span>
          </h1>
          <p
            className="animate-hero-in mx-auto mt-7 max-w-2xl text-base md:text-lg leading-body text-ink-muted"
            style={{ animationDelay: "200ms" }}
          >
            For over a decade we&apos;ve partnered with local leaders to fund
            programs that actually work — measured in lives, not logos. This is
            who we are, and why we do it.
          </p>
        </div>
      </Container>
    </section>
  );
}

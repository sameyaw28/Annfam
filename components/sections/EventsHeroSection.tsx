import { Container } from "@/components/ui/Container";

export function EventsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg pt-36 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 55% at 18% 12%, rgba(108,99,255,0.12) 0%, rgba(108,99,255,0) 60%), radial-gradient(45% 50% at 82% 28%, rgba(79,70,229,0.10) 0%, rgba(79,70,229,0) 65%)",
        }}
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="animate-hero-in text-sm font-semibold uppercase tracking-[0.18em] text-brand"
            style={{ animationDelay: "0ms" }}
          >
            Events &amp; activities
          </p>
          <h1
            className="animate-hero-in mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-display"
            style={{ animationDelay: "100ms" }}
          >
            Every visit,{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              screening, and donation
            </span>{" "}
            — as it happened.
          </h1>
          <p
            className="animate-hero-in mx-auto mt-7 max-w-2xl text-base md:text-lg leading-body text-ink-muted"
            style={{ animationDelay: "200ms" }}
          >
            We show up in schools, clinics, and homes across Obuasi and beyond.
            Here is what is coming next, and a record of where we have already
            been.
          </p>
        </div>
      </Container>
    </section>
  );
}

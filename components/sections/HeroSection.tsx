import { ArrowRight, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroSlider } from "@/components/ui/HeroSlider";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 12% 8%, rgba(108,99,255,0.12) 0%, rgba(108,99,255,0) 60%), radial-gradient(50% 50% at 92% 18%, rgba(79,70,229,0.10) 0%, rgba(79,70,229,0) 65%)",
        }}
      />

      <Container className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-6 animate-hero-in">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-muted shadow-sm"
            style={{ animationDelay: "0ms" }}
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-soft text-brand">
              <HeartHandshake size={12} />
            </span>
            ANNFAM Foundation · est. 2014
          </div>

          <h1
            className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-display"
            style={{ animationDelay: "100ms" }}
          >
            Building futures,
            <br />
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              one community at a time.
            </span>
          </h1>

          <p
            className="mt-7 max-w-lg text-base md:text-lg leading-body text-ink-muted"
            style={{ animationDelay: "200ms" }}
          >
            We partner with local leaders to fund programs in education,
            health, and community development — building lasting change where
            it matters most.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <Button href="/donate" variant="accent" size="lg">
              Donate Today
              <ArrowRight size={18} />
            </Button>
            <Button href="/events" variant="secondary" size="lg">
              Explore Events
            </Button>
          </div>

          <div
            className="mt-12 flex items-center gap-5 text-xs text-ink-muted"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
              ].map((src, i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-bg bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </div>
            <p>
              <span className="font-semibold text-ink">12,400+</span> donors and
              volunteers worldwide
            </p>
          </div>
        </div>

        <div
          className="animate-hero-in lg:col-span-5 lg:col-start-8"
          style={{ animationDelay: "200ms" }}
        >
          <HeroIllustration />
        </div>
      </Container>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-gradient opacity-20 blur-3xl"
      />

      <HeroSlider />
    </div>
  );
}

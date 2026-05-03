import { ArrowRight, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
            <Button href="/programs" variant="secondary" size="lg">
              Explore Programs
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

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-line bg-surface shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
        <div className="absolute inset-0 mix-blend-multiply bg-brand/10" />

        <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between gap-4">
          <div className="text-white">
            <p className="text-xs uppercase tracking-[0.18em] opacity-80">
              In the field
            </p>
            <p className="mt-1 font-display text-xl">Lagos · Nigeria</p>
          </div>
          <div className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink shadow-md">
            Live Program
          </div>
        </div>
      </div>

      <div className="absolute -left-6 top-10 hidden md:block rounded-2xl border border-line bg-surface p-4 shadow-lg max-w-[200px]">
        <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold">
          Year on year
        </p>
        <p className="mt-1 font-display text-2xl">+38%</p>
        <p className="text-xs text-ink-muted leading-snug">
          Children supported through scholarships
        </p>
      </div>

      <div className="absolute -right-4 bottom-12 hidden md:flex items-center gap-3 rounded-2xl border border-line bg-surface p-3 pr-5 shadow-lg">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
          <HeartHandshake size={20} />
        </span>
        <div className="text-xs">
          <p className="font-semibold text-ink">$2.4M raised</p>
          <p className="text-ink-muted">across 14 programs</p>
        </div>
      </div>
    </div>
  );
}

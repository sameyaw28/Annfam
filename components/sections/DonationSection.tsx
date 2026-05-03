import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function DonationSection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 md:px-16 md:py-24 shadow-lg">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(40% 60% at 85% 20%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%), radial-gradient(50% 60% at 10% 90%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 70%)",
              }}
            />

            <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                  Your support changes lives
                </p>
                <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl text-white">
                  Give once. Change a future.
                </h2>
                <p className="mt-6 max-w-xl text-base md:text-lg leading-body text-white/85">
                  Every gift goes directly to community-led programs. Tax-deductible,
                  fully transparent, and matched by our partners until June 30.
                </p>
                <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
                  <ShieldCheck size={14} />
                  501(c)(3) · Charity Navigator 4-star rated
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                <Button href="/donate" variant="accent" size="lg" className="w-full lg:w-auto">
                  Donate Today
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href="/contact"
                  variant="ghost"
                  size="lg"
                  className="w-full border border-white/15 bg-white/10 text-white hover:bg-white/20 hover:text-white lg:w-auto"
                >
                  Talk to our team
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

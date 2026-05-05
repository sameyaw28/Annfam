import { ArrowRight, Building2, Mail, Repeat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const ways = [
  {
    icon: Building2,
    title: "Employer matching",
    body: "Many employers double or triple charitable gifts. Check yours and we'll handle the paperwork.",
    cta: "Find your match",
    href: "/contact?topic=match",
  },
  {
    icon: Repeat,
    title: "Planned giving",
    body: "Wills, trusts, and donor-advised funds. Leave a legacy that funds programs for decades.",
    cta: "Talk to our team",
    href: "/contact?topic=planned",
  },
  {
    icon: Mail,
    title: "Stocks, crypto, & wires",
    body: "We accept appreciated assets, ACH, and international wires. Often the most tax-efficient way to give.",
    cta: "Get instructions",
    href: "/contact?topic=assets",
  },
];

export function MoreWaysSection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              More ways to give
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              However you give, your impact compounds.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-body text-ink-muted">
              A single gift is powerful. A recurring one is transformational. A
              planned one builds a future you may never see — but generations
              will live in.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((way, i) => (
            <Reveal key={way.title} delay={i * 80}>
              <a
                href={way.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-sm transition duration-250 ease-spring hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:shadow-ring"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                  <way.icon size={22} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {way.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-body text-ink-muted">
                  {way.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors duration-150 group-hover:text-brand-deep">
                  {way.cta}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

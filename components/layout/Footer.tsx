import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";

const columns = [
  {
    title: "Sitemap",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Donate", href: "/donate" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Annual Report", href: "#" },
      { label: "Financials", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const socials = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl text-white"
            >
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-md"
              >
                A
              </span>
              <span className="font-semibold">ANNFAM Foundation</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-body text-white/70">
              Building futures, one community at a time. We invest in
              education, health, and community programs that change lives.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition duration-150 ease-out hover:text-white hover:border-white/40 hover:bg-white/5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Newsletter
            </h4>
            <p className="mt-5 text-sm text-white/70">
              Monthly updates from the field. No spam.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="h-11 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none transition duration-150 ease-out focus:border-white/40"
              />
              <button
                type="submit"
                className="h-11 rounded-full bg-white px-5 text-sm font-semibold text-ink transition duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ANNFAM Foundation. All rights reserved.</p>
          <p>EIN 00-0000000 · Tax-deductible 501(c)(3) non-profit</p>
        </div>
      </Container>
    </footer>
  );
}

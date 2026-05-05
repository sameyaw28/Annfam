"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@annfam.org",
    href: "mailto:hello@annfam.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (415) 555-0142",
    href: "tel:+14155550142",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "548 Market Street, Suite 220\nSan Francisco, CA 94104",
    href: "https://maps.google.com/?q=548+Market+Street+San+Francisco",
  },
];

const socials = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const valid =
    name.trim().length > 0 &&
    /\S+@\S+\.\S+/.test(email) &&
    message.trim().length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setSubmitted(true);
  }

  return (
    <Section id="contact" variant="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-line bg-bg p-7 shadow-sm md:p-10"
            >
              {submitted ? (
                <ThankYou
                  name={name}
                  onReset={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                />
              ) : (
                <>
                  <h2 className="font-display text-2xl tracking-display text-ink md:text-3xl">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted">
                    We answer every note personally.
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <FormField label="Full name" htmlFor="contact-name">
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ada Nwosu"
                        required
                        className={inputClass}
                      />
                    </FormField>
                    <FormField label="Email" htmlFor="contact-email">
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className={inputClass}
                      />
                    </FormField>
                  </div>

                  <FormField
                    label="Message"
                    htmlFor="contact-message"
                    className="mt-6"
                  >
                    <textarea
                      id="contact-message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us a bit about why you're reaching out…"
                      required
                      className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-muted/70 transition-colors duration-150 focus:border-brand focus:outline-none focus:shadow-ring"
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={!valid}
                    className={cn(
                      "mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-sm",
                      "transition duration-150 ease-out",
                      "hover:bg-brand-hover hover:scale-[1.02] hover:shadow-md active:scale-[0.98]",
                      "focus-visible:outline-none focus-visible:shadow-ring",
                      "disabled:opacity-60 disabled:pointer-events-none disabled:hover:scale-100"
                    )}
                  >
                    Send message
                    <ArrowRight size={16} />
                  </button>

                  <p className="mt-4 text-xs text-ink-muted">
                    By sending, you agree we may reply to the email above. We
                    never share your details.
                  </p>
                </>
              )}
            </form>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-line bg-surface p-8 shadow-sm">
                <h3 className="font-display text-xl tracking-display text-ink">
                  Reach us directly
                </h3>
                <ul className="mt-6 space-y-5">
                  {channels.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.label === "Office" ? "_blank" : undefined}
                        rel={c.label === "Office" ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                          <c.icon size={18} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                            {c.label}
                          </span>
                          <span className="mt-1 block whitespace-pre-line text-sm font-medium leading-snug text-ink transition-colors duration-150 group-hover:text-brand">
                            {c.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-start gap-3 rounded-xl bg-brand-soft p-4 text-sm text-ink">
                  <Clock size={16} className="mt-0.5 shrink-0 text-brand" />
                  <span>
                    <span className="font-semibold">Mon–Fri, 9am–5pm PT.</span>
                    <span className="block text-ink-muted">
                      We reply to most messages within two business days.
                    </span>
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-line bg-surface p-8 shadow-sm">
                <h3 className="font-display text-xl tracking-display text-ink">
                  Follow our work
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Quarterly impact reports, field stories, and program
                  updates.
                </p>
                <div className="mt-5 flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition duration-150 ease-out hover:-translate-y-0.5 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:shadow-ring"
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

const inputClass =
  "h-12 w-full rounded-xl border border-line bg-surface px-4 text-base text-ink placeholder:text-ink-muted/70 transition-colors duration-150 focus:border-brand focus:outline-none focus:shadow-ring";

function FormField({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-ink"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ThankYou({ name, onReset }: { name: string; onReset: () => void }) {
  const first = name.trim().split(" ")[0] || "friend";
  return (
    <div className="py-6 text-center">
      <span className="grid h-14 w-14 place-items-center mx-auto rounded-2xl bg-brand-soft text-brand">
        <CheckCircle2 size={28} />
      </span>
      <h3 className="mt-6 font-display text-2xl tracking-display text-ink md:text-3xl">
        Got it, {first}.
      </h3>
      <p className="mx-auto mt-4 max-w-md text-base leading-body text-ink-muted">
        Your message is on its way. A real person will reply within two business
        days — usually sooner.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-sm font-semibold text-brand transition-colors duration-150 hover:text-brand-deep"
      >
        Send another
      </button>
    </div>
  );
}

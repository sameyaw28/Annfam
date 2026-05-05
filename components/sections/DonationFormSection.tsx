"use client";

import { useState } from "react";
import { CheckCircle2, Heart, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const PRESETS = [25, 60, 120, 250] as const;
type Frequency = "once" | "monthly";

export function DonationFormSection() {
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [preset, setPreset] = useState<number | null>(60);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const amount = preset ?? Number(custom || 0);
  const valid = amount > 0 && name.trim().length > 0 && /\S+@\S+\.\S+/.test(email);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setSubmitted(true);
  }

  return (
    <Section id="give" variant="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Make your gift
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              Three minutes. One real outcome.
            </h2>
            <p className="mt-6 text-base md:text-lg leading-body text-ink-muted">
              Choose what works for you. Every gift is tax-deductible, processed
              securely, and matched dollar-for-dollar by our partners through
              June 30.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-ink-muted">
              <li className="flex items-start gap-3">
                <Lock size={16} className="mt-0.5 shrink-0 text-brand" />
                Encrypted, PCI-compliant processing.
              </li>
              <li className="flex items-start gap-3">
                <Heart size={16} className="mt-0.5 shrink-0 text-brand" />
                You&apos;ll receive a receipt and your first impact update within 30 days.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" />
                Cancel or change a recurring gift any time, no questions.
              </li>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-line bg-bg p-7 shadow-sm md:p-10"
            >
              {submitted ? (
                <ThankYou
                  amount={amount}
                  frequency={frequency}
                  name={name}
                  onReset={() => setSubmitted(false)}
                />
              ) : (
                <>
                  <FrequencyToggle value={frequency} onChange={setFrequency} />

                  <Field label="Amount" htmlFor="amount" className="mt-7">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {PRESETS.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => {
                            setPreset(p);
                            setCustom("");
                          }}
                          className={cn(
                            "h-12 rounded-xl border text-sm font-semibold transition duration-150 ease-out focus-visible:outline-none focus-visible:shadow-ring",
                            preset === p
                              ? "border-brand bg-brand-soft text-brand"
                              : "border-line bg-surface text-ink hover:border-brand hover:text-brand"
                          )}
                          aria-pressed={preset === p}
                        >
                          ${p}
                        </button>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-3 rounded-xl border border-line bg-surface px-4 focus-within:border-brand focus-within:shadow-ring">
                      <span className="text-sm font-semibold text-ink-muted">$</span>
                      <input
                        id="amount"
                        type="number"
                        inputMode="decimal"
                        min={1}
                        placeholder="Other amount"
                        value={custom}
                        onChange={(e) => {
                          setCustom(e.target.value);
                          setPreset(null);
                        }}
                        className="h-12 w-full bg-transparent text-base text-ink placeholder:text-ink-muted/70 focus:outline-none"
                      />
                    </div>
                  </Field>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <Input
                        id="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ada Nwosu"
                        required
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                      />
                    </Field>
                  </div>

                  <Field
                    label="Message (optional)"
                    htmlFor="message"
                    className="mt-6"
                    hint="Dedicate your gift, or tell us what moved you."
                  >
                    <textarea
                      id="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="In honor of…"
                      className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-muted/70 transition-colors duration-150 focus:border-brand focus:outline-none focus:shadow-ring"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={!valid}
                    className={cn(
                      "mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-white shadow-sm",
                      "transition duration-200 ease-spring",
                      "hover:bg-accent-hover hover:shadow-cta hover:scale-[1.02] active:scale-[0.98]",
                      "focus-visible:outline-none focus-visible:shadow-ring",
                      "disabled:opacity-60 disabled:pointer-events-none disabled:hover:scale-100"
                    )}
                  >
                    <Heart size={18} />
                    {amount > 0
                      ? `Donate $${amount}${frequency === "monthly" ? " / month" : ""}`
                      : "Donate"}
                  </button>

                  <p className="mt-4 text-center text-xs text-ink-muted">
                    Secured by Stripe · You&apos;ll receive a tax receipt by email.
                  </p>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function FrequencyToggle({
  value,
  onChange,
}: {
  value: Frequency;
  onChange: (v: Frequency) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Donation frequency"
      className="grid grid-cols-2 gap-1 rounded-full border border-line bg-surface p-1"
    >
      {(["once", "monthly"] as const).map((opt) => (
        <button
          key={opt}
          role="tab"
          type="button"
          aria-selected={value === opt}
          onClick={() => onChange(opt)}
          className={cn(
            "h-10 rounded-full text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:shadow-ring",
            value === opt
              ? "bg-brand-gradient text-white shadow-sm"
              : "text-ink-muted hover:text-ink"
          )}
        >
          {opt === "once" ? "One-time" : "Monthly"}
        </button>
      ))}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label
          htmlFor={htmlFor}
          className="text-sm font-semibold text-ink"
        >
          {label}
        </label>
        {hint && <span className="text-xs text-ink-muted">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-12 w-full rounded-xl border border-line bg-surface px-4 text-base text-ink placeholder:text-ink-muted/70 transition-colors duration-150 focus:border-brand focus:outline-none focus:shadow-ring"
    />
  );
}

function ThankYou({
  amount,
  frequency,
  name,
  onReset,
}: {
  amount: number;
  frequency: Frequency;
  name: string;
  onReset: () => void;
}) {
  const first = name.trim().split(" ")[0] || "friend";
  return (
    <div className="text-center">
      <span className="grid h-14 w-14 place-items-center mx-auto rounded-2xl bg-brand-soft text-brand">
        <CheckCircle2 size={28} />
      </span>
      <h3 className="mt-6 font-display text-3xl tracking-display text-ink">
        Thank you, {first}.
      </h3>
      <p className="mx-auto mt-4 max-w-md text-base leading-body text-ink-muted">
        Your gift of <span className="font-semibold text-ink">${amount}</span>
        {frequency === "monthly" ? " per month " : " "}
        is on its way to the field. We&apos;ll send a receipt and your first
        impact update within 30 days.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-sm font-semibold text-brand transition-colors duration-150 hover:text-brand-deep"
      >
        Make another gift
      </button>
    </div>
  );
}

import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition duration-150 ease-out " +
  "hover:scale-[1.02] active:scale-[0.98] " +
  "focus-visible:outline-none focus-visible:shadow-ring " +
  "disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-hover hover:shadow-md",
  secondary:
    "bg-surface text-ink border border-line hover:border-brand hover:text-brand",
  accent:
    "bg-accent text-white text-base font-semibold shadow-sm hover:bg-accent-hover hover:shadow-cta",
  ghost: "bg-transparent text-ink hover:bg-brand-soft",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

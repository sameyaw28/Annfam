import { cn } from "@/lib/cn";

type Variant = "canvas" | "surface" | "soft" | "dark";

export function Section({
  id,
  variant = "canvas",
  className,
  children,
}: {
  id?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  const variants: Record<Variant, string> = {
    canvas: "bg-bg",
    surface: "bg-surface",
    soft: "bg-brand-soft",
    dark: "bg-ink text-white",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32",
        variants[variant],
        className
      )}
    >
      {children}
    </section>
  );
}

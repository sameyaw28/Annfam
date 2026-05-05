import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-sm font-semibold uppercase tracking-[0.14em]",
            invert ? "text-white/70" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl",
          invert ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-7 text-base md:text-lg leading-body",
            invert ? "text-white/80" : "text-ink-muted"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

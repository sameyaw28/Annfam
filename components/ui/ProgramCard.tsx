import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Program } from "@/data/programs";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs#${program.slug}`}
      className="group block rounded-2xl border border-line bg-surface shadow-sm transition duration-250 ease-spring hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:shadow-ring"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${program.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
        <div className="absolute inset-0 mix-blend-multiply bg-brand/5" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm">
          {program.category}
        </span>
      </div>

      <div className="p-7">
        <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
          <MapPin size={12} />
          {program.location}
        </p>
        <h3 className="mt-3 font-display text-2xl text-ink">{program.title}</h3>
        <p className="mt-3 text-sm leading-body text-ink-muted">
          {program.summary}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors duration-150 group-hover:text-brand-deep">
          Learn more
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

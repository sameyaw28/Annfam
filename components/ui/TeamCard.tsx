import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition duration-250 ease-spring hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${member.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/0 to-transparent" />
        <div className="absolute inset-0 mix-blend-multiply bg-brand/5" />
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          {member.role}
        </p>
        <h3 className="mt-2 font-display text-xl text-ink">{member.name}</h3>
        <p className="mt-3 text-sm leading-body text-ink-muted">{member.bio}</p>
      </div>
    </article>
  );
}

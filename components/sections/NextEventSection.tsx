import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EventDateBadge } from "@/components/ui/EventDateBadge";
import { formatEventRange } from "@/lib/date";
import { getLatestPastEvent, getNextEvent } from "@/lib/events";

/**
 * The next scheduled event, on the homepage.
 *
 * When nothing is upcoming — which is the normal state between events — this
 * falls back to the most recent past event rather than rendering nothing.
 * Disappearing would put AboutSection and ImpactSection (both `surface`)
 * directly against each other and break the page's band alternation.
 */
export async function NextEventSection() {
  const next = await getNextEvent();
  const event = next ?? (await getLatestPastEvent());

  if (!event) return null;

  const isUpcoming = next !== null;

  return (
    <Section id="next-event" variant="canvas">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-12">
          <Reveal className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <EventDateBadge
                date={event.date}
                endDate={event.endDate}
                size="lg"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                  {isUpcoming ? "Next event" : "Latest event"}
                </p>
                <p className="mt-1.5 text-sm text-ink-muted">
                  {formatEventRange(event.date, event.endDate)}
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-3xl md:text-4xl lg:text-5xl">
              {event.title}
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} />
                {event.venue
                  ? `${event.venue} · ${event.location}`
                  : event.location}
              </span>
              {event.time && (
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {event.time}
                </span>
              )}
            </div>

            <p className="mt-7 max-w-lg text-base md:text-lg leading-body text-ink-muted">
              {event.summary}
            </p>

            <div className="mt-10">
              {/* Primary, never accent — the fixed navbar Donate button is
                  always in the viewport and owns the page's one accent. */}
              <Button href="/events" variant="primary" size="lg">
                {isUpcoming ? "See all events" : "See past events"}
                <ArrowRight size={18} />
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
            <NextEventVisual
              image={event.coverImage}
              category={event.category}
              location={event.location}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function NextEventVisual({
  image,
  category,
  location,
}: {
  image: string;
  category: string;
  location: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand-gradient opacity-15 blur-3xl"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent" />
        <div className="absolute inset-0 mix-blend-multiply bg-brand/10" />

        <div className="absolute left-6 right-6 bottom-6 text-white">
          <p className="text-xs uppercase tracking-[0.18em] opacity-80">
            {category} · {location}
          </p>
        </div>
      </div>
    </div>
  );
}

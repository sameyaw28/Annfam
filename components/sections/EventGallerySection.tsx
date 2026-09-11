import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EventCard } from "@/components/ui/EventCard";
import { EmptyEventsPanel } from "@/components/ui/EmptyEventsPanel";
import { getPastEvents } from "@/lib/events";

export async function EventGallerySection() {
  const past = await getPastEvents();

  return (
    <Section id="gallery" variant="canvas">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Past events"
            title="Where we've already been."
            lede="A record of the schools, clinics, and homes we have visited — and the people who made each one possible."
          />
        </Reveal>

        {past.length > 0 ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {past.map((event, i) => (
              <Reveal key={event.slug} delay={(i % 3) * 80}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-16">
            <EmptyEventsPanel
              title="Nothing here yet."
              lede="Photos and write-ups from our outreach will appear here as soon as the first event wraps up."
              actionLabel="See what's coming up"
              actionHref="#upcoming"
              // This section sits on the canvas background, so the panel needs
              // the elevated surface to read as a panel rather than a bare rule.
              className="bg-surface"
            />
          </Reveal>
        )}
      </Container>
    </Section>
  );
}

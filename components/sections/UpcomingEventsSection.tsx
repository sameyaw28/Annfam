import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { UpcomingEventCard } from "@/components/ui/UpcomingEventCard";
import { EmptyEventsPanel } from "@/components/ui/EmptyEventsPanel";
import { getUpcomingEvents } from "@/lib/events";

export async function UpcomingEventsSection() {
  const upcoming = await getUpcomingEvents();

  return (
    <Section id="upcoming" variant="surface">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Upcoming"
            title="What's next on the calendar."
            lede="Screenings, school visits, and outreach already scheduled. Everyone is welcome — reach out if you would like to join us or lend a hand."
          />
        </Reveal>

        {upcoming.length > 0 ? (
          <ol className="mt-16 space-y-6">
            {upcoming.map((event, i) => (
              <li key={event.slug}>
                {/* (i % 3) restarts the stagger so a long list never leaves
                    later items waiting seconds to appear. */}
                <Reveal delay={(i % 3) * 80}>
                  <UpcomingEventCard event={event} />
                </Reveal>
              </li>
            ))}
          </ol>
        ) : (
          <Reveal className="mt-16">
            <EmptyEventsPanel
              title="No events scheduled right now."
              lede="We are planning the next round of visits and screenings. Get in touch to hear about them first, or look through what we have already done below."
              actionLabel="Get in touch"
              actionHref="/contact"
            />
          </Reveal>
        )}
      </Container>
    </Section>
  );
}

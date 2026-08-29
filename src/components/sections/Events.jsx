import SectionHeading from '../SectionHeading'
import { events } from '../../data/events.json'

export default function Events() {
  return (
    <section id="etkinlikler" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Geleneksel Etkinliklerimiz"
        title="Etkinliklerimiz"
        subtitle="Yıl boyunca düzenlediğimiz, sektörü ve öğrencileri buluşturan öncü organizasyonlarımız."
        index="04"
      />

      <div className="mt-4">
        {events.map((event, i) => (
          <div
            key={event.slug}
            className="grid grid-cols-1 gap-4 border-t border-line py-10 first:border-t-0 sm:grid-cols-[3rem_1fr_1.2fr] sm:gap-8"
          >
            <span className="font-display text-xl text-ink-dim">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {event.name}
                </h3>
                {event.flagship && (
                  <span className="kicker border border-primary px-2 py-0.5 text-primary">
                    Amiral Etkinlik
                  </span>
                )}
              </div>
              <p className="kicker mt-2 text-primary">{event.subtitle}</p>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-ink-dim">
                {event.description}
              </p>
              <p className="mt-4 text-xs font-semibold text-ink-dim">
                Düzenleyen: {event.organizer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

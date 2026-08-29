import SectionHeading from '../SectionHeading'
import { achievements } from '../../data/achievements.json'

export default function Achievements() {
  return (
    <section id="projeler" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Gurur Tablomuz"
        title="Projelerimiz & Başarılarımız"
        subtitle="Üyelerimizin geliştirdiği yazılım ve donanım projeleri, TÜBİTAK destekli çalışmalarımız ve TEKNOFEST derecelerimiz."
        index="06"
      />

      <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <div
            key={item.title}
            className={`border-t border-line py-8 sm:py-10 ${
              i < 2 ? 'sm:border-t' : ''
            }`}
          >
            <div className="flex items-baseline justify-between">
              <span className="kicker text-accent">{item.category}</span>
              <span className="font-display text-sm text-ink-dim">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-dim">
              {item.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold">
              <span className="text-ink">{item.result}</span>
              <span className="text-ink-dim">{item.team}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

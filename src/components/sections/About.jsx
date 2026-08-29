import about from '../../data/about.json'
import { aboutPillars } from '../../data/home.json'

export default function About() {
  const paragraphs = about.story.split(/\n\s*\n/)

  return (
    <section id="hakkimizda" className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="kicker">{about.kicker}</span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-dim">{about.intro}</p>
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-dim">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <span className="kicker mt-16 block">Odak Alanlarımız</span>

        <div className="mt-6 grid border-t border-line sm:grid-cols-3">
          {aboutPillars.map((p, i) => (
            <div
              key={p.title}
              className={`border-t border-line py-7 first:border-t-0 sm:border-t-0 sm:py-0 sm:pt-7 sm:pl-8 ${
                i > 0 ? 'sm:border-l' : ''
              }`}
            >
              <span className="font-display text-2xl text-ink-dim">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

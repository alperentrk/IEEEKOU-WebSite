import { site } from '../../data/site.json'
import { aboutPillars } from '../../data/home.json'

export default function About() {
  return (
    <section id="hakkimizda" className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="kicker">Misyonumuz</span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {site.fullName}
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-dim">
              {site.mission}
            </p>
          </div>

          <div>
            {aboutPillars.map((p, i) => (
              <div
                key={p.title}
                className="grid grid-cols-[3rem_1fr] gap-6 border-t border-line py-7 first:border-t-0 lg:grid-cols-[4rem_1fr]"
              >
                <span className="font-display text-2xl text-ink-dim">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-dim">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

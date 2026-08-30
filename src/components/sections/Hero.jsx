import { hero } from '../../data/home.json'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
      <h1 className="animate-rise max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
        {hero.headline}
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <p className="animate-rise max-w-xl text-lg leading-relaxed text-ink-dim">
          {hero.paragraph}
        </p>

        <div className="animate-rise flex flex-wrap gap-4">
          <a
            href="#komiteler"
            className="bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dim"
          >
            {hero.primaryButtonLabel}
          </a>
          <a
            href="#iletisim"
            className="border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {hero.secondaryButtonLabel}
          </a>
        </div>
      </div>

      <div className="animate-rise mt-16 grid grid-cols-2 border-y border-line sm:grid-cols-4">
        {hero.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-2 py-6 sm:px-6 ${
              i > 0 ? 'border-l border-line' : ''
            }`}
          >
            <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {stat.value}
            </div>
            <div className="kicker mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

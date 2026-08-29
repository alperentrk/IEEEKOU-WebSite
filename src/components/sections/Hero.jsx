const stats = [
  ['15.', 'PİTEK Günleri'],
  ['3', 'Aktif Komite'],
  ['2', 'Teknik Takım'],
  ['1000+', 'Topluluk Üyesi'],
]

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
      <div className="animate-rise kicker mb-8 flex items-center gap-3">
        <span className="h-px w-8 bg-accent" />
        Kocaeli Üniversitesi IEEE Öğrenci Kolu
      </div>

      <h1 className="animate-rise max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
        Mühendisliğin geleceğini birlikte inşa ediyoruz.
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <p className="animate-rise max-w-xl text-lg leading-relaxed text-ink-dim">
          Mühendislik ve teknoloji alanlarında öğrencilerin akademik, teknik
          ve kariyer gelişimini destekliyor; sektörel buluşmalar ve projeler
          üretiyoruz.
        </p>

        <div className="animate-rise flex flex-wrap gap-4">
          <a
            href="#komiteler"
            className="bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dim"
          >
            Komitelerimizi Keşfet
          </a>
          <a
            href="#iletisim"
            className="border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Bize Katıl
          </a>
        </div>
      </div>

      <div className="animate-rise mt-16 grid grid-cols-2 border-y border-line sm:grid-cols-4">
        {stats.map(([value, label], i) => (
          <div
            key={label}
            className={`px-2 py-6 sm:px-6 ${
              i > 0 ? 'border-l border-line' : ''
            }`}
          >
            <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {value}
            </div>
            <div className="kicker mt-2">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { committees, technicalTeams } from '../../data/groups.json'

function Row({ n, title, tagline, description, url }) {
  const Wrapper = url ? 'a' : 'div'
  const wrapperProps = url ? { href: url, target: '_blank', rel: 'noreferrer' } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group grid grid-cols-[3rem_1fr] items-start gap-4 border-t border-line py-8 first:border-t-0 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-8 ${
        url ? 'cursor-pointer' : ''
      }`}
    >
      <span className="font-display text-xl text-ink-dim">{n}</span>
      <div>
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            {title}
          </h3>
          {tagline && <span className="kicker text-accent">{tagline}</span>}
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-dim">
          {description}
        </p>
      </div>
      {url && (
        <ArrowUpRight
          size={22}
          className="hidden text-ink-dim transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent sm:block"
        />
      )}
    </Wrapper>
  )
}

export default function Committees() {
  return (
    <section id="komiteler" className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Alt Kollarımız"
          title="Komitelerimiz & Teknik Takımlarımız"
          subtitle="Farklı mühendislik alanlarında derinleşen komitelerimiz ve proje üreten teknik takımlarımızla tanışın."
          index="03"
        />

        <div className="mt-14">
          <h3 className="kicker mb-2">Teknik Takımlarımız</h3>
          <div>
            {technicalTeams.map((team, i) => (
              <Row
                key={team.slug}
                n={String(i + 1).padStart(2, '0')}
                title={team.name}
                tagline={team.tagline}
                description={team.description}
                url={team.url || undefined}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="kicker mb-2">Komitelerimiz</h3>
          <div>
            {committees.map((c, i) => (
              <Row
                key={c.slug}
                n={String(i + 1).padStart(2, '0')}
                title={`${c.name} — ${c.fullName}`}
                tagline={`Öncü Etkinlik: ${c.flagshipEvent}`}
                description={c.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

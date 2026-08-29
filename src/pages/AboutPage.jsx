import about from '../data/about.json'

export default function AboutPage() {
  const paragraphs = about.story.split(/\n\s*\n/)

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <span className="kicker">{about.kicker}</span>
      <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
        {about.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
        {about.intro}
      </p>

      <div className="mt-14 max-w-2xl space-y-6 border-t border-line pt-10">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-ink-dim">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

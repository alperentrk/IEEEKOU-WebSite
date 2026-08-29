export default function SectionHeading({ eyebrow, title, subtitle, index }) {
  return (
    <div className="flex flex-col gap-4 border-b border-line pb-8">
      <div className="flex items-baseline justify-between">
        {eyebrow && <span className="kicker">{eyebrow}</span>}
        {index && <span className="font-display text-sm text-ink-dim">{index}</span>}
      </div>
      <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base leading-relaxed text-ink-dim">{subtitle}</p>
      )}
    </div>
  )
}

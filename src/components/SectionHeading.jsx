export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="flex flex-col gap-4 border-b border-line pb-8">
      {eyebrow && <span className="kicker">{eyebrow}</span>}
      <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base leading-relaxed text-ink-dim">{subtitle}</p>
      )}
    </div>
  )
}

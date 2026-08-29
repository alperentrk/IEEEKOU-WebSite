import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start gap-6 px-6 py-32">
      <span className="font-display text-7xl font-semibold text-accent">404</span>
      <h1 className="font-display text-2xl font-semibold text-ink">
        Aradığınız sayfa bulunamadı
      </h1>
      <p className="text-sm leading-relaxed text-ink-dim">
        Bu sayfa taşınmış veya hiç var olmamış olabilir. Ana sayfaya dönerek
        devam edebilirsiniz.
      </p>
      <Link
        to="/"
        className="border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  )
}

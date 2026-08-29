import { Link } from 'react-router-dom'
import BrandIcon from './BrandIcon'
import { navLinks } from '../data/navLinks'
import { site, socialLinks } from '../data/site.json'

export default function Footer() {
  return (
    <footer className="border-t border-mast-line bg-mast text-mast-text">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link to="/" className="font-display text-2xl font-semibold text-mast-text">
            {site.shortName}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mast-text-dim">
            {site.mission}
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-mast-text-dim">
            Hızlı Bağlantılar
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-mast-text-dim underline-offset-4 transition-colors hover:text-mast-text hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-mast-text-dim">
            İletişim
          </h3>
          <ul className="space-y-3 text-sm text-mast-text-dim">
            <li>{site.location}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-mast-text">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-mast-text-dim transition-colors hover:text-white"
              >
                <BrandIcon name={s.icon} size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-mast-line px-6 py-6 text-center text-xs text-mast-text-dim">
        © {new Date().getFullYear()} {site.fullName}. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}

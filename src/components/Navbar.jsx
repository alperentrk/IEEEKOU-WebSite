import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/navLinks'
import { site } from '../data/site.json'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            {site.shortName}
          </span>
          <span className="kicker mt-1">Kocaeli Üniversitesi</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="kicker text-ink-dim decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="mailto:ieee.kou.sb@gmail.com"
          className="kicker hidden border border-ink px-5 py-2.5 text-ink transition-colors hover:bg-ink hover:text-paper lg:inline-flex"
        >
          Bize Katıl
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink lg:hidden"
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-paper px-6 py-2 lg:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-sm font-medium text-ink-dim last:border-none hover:text-ink"
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="mailto:ieee.kou.sb@gmail.com"
            className="kicker my-4 border border-ink px-5 py-3 text-center text-ink"
          >
            Bize Katıl
          </a>
        </nav>
      )}
    </header>
  )
}

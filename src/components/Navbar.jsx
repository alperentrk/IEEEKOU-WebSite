import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { navLinks } from '../data/navLinks'
import { site } from '../data/site.json'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-mast-line bg-mast">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-tight text-mast-text">
            {site.shortName}
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-mast-text-dim">
            Kocaeli Üniversitesi
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-widest text-mast-text-dim decoration-2 underline-offset-4 transition-colors hover:text-mast-text hover:underline"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle className="border-mast-line text-mast-text hover:bg-mast-line" />
          <Link
            to="/bize-katil"
            className="bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-primary-dim"
          >
            Bize Katıl
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="border-mast-line text-mast-text" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-mast-line text-mast-text"
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-mast-line bg-mast px-6 py-2 lg:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="border-b border-mast-line py-4 text-sm font-medium text-mast-text-dim last:border-none hover:text-mast-text"
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/bize-katil"
            onClick={() => setOpen(false)}
            className="my-4 bg-primary px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white"
          >
            Bize Katıl
          </Link>
        </nav>
      )}
    </header>
  )
}

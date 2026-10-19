import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { workshopDays } from '../data/workshops'
import { useLanguage } from '../i18n/useLanguage'
import LanguageMenu from './LanguageMenu'
import NavDropdown from './NavDropdown'

const anchorHrefs = [
  { key: 'home', href: '#home' },
  { key: 'meetings', href: '#incontri' },
  { key: 'hardware', href: '#hardware' },
]

function SectionLink({ href, className, children }) {
  const isHome = useLocation().pathname === '/'

  if (isHome) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={`/${href}`} className={className}>
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [workshopOpen, setWorkshopOpen] = useState(false)
  const { ui } = useLanguage()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const onOpenDay = pathname === '/open-day'

  const workshopItems = workshopDays.map((day) => ({
    label: ui.days[day.id],
    href: day.studentPath,
  }))

  return (
    <header className="sticky top-0 z-50 border-b-2 border-accent/30 bg-dark-purple/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-3.5 lg:px-8">
        {isHome ? (
          <a
            href="#home"
            className="font-display text-sm tracking-wide text-white transition-colors hover:text-yellow lg:text-base"
          >
            OFFICINA DEL PC
          </a>
        ) : (
          <Link
            to="/"
            className="font-display text-sm tracking-wide text-white transition-colors hover:text-yellow lg:text-base"
          >
            OFFICINA DEL PC
          </Link>
        )}

        <nav
          className="order-3 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:order-none lg:w-auto lg:flex-1 lg:justify-center"
          aria-label={ui.nav.mainNav}
        >
          {anchorHrefs.map((link) => (
            <SectionLink
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/70 transition-colors hover:text-yellow"
            >
              {ui.nav[link.key]}
            </SectionLink>
          ))}

          <NavDropdown
            label={ui.nav.workshop}
            accent
            isOpen={workshopOpen}
            onToggle={() => setWorkshopOpen((open) => !open)}
            onClose={() => setWorkshopOpen(false)}
            items={workshopItems}
          />

          <Link
            to="/open-day"
            aria-current={onOpenDay ? 'page' : undefined}
            className={`text-sm font-semibold transition-colors hover:text-yellow ${
              onOpenDay ? 'text-yellow' : 'text-white/70'
            }`}
          >
            {ui.nav.openDay}
          </Link>
        </nav>

        <div className="ms-auto flex items-center gap-3 lg:ms-0">
          <LanguageMenu />
          <SectionLink
            href="#incontri"
            className="rounded-full bg-yellow px-5 py-2 text-sm font-extrabold text-dark-purple btn-gaming transition-transform hover:-translate-y-0.5"
          >
            {ui.nav.calendar}
          </SectionLink>
        </div>
      </div>
    </header>
  )
}

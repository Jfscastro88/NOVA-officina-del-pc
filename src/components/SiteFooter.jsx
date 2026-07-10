import { Link } from 'react-router-dom'

const linkClass =
  'transition-colors duration-200 hover:text-white/75 focus-visible:outline-none focus-visible:text-white/75'

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1020] px-5 py-4 text-center text-xs leading-relaxed text-white/45 sm:py-5 sm:text-[13px]">
      <p>© 2026 NOVA - Officina del PC</p>
      <nav
        className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
        aria-label="Collegamenti legali e social"
      >
        <Link to="/privacy" className={linkClass}>
          Privacy
        </Link>
        <span className="text-white/25" aria-hidden="true">
          •
        </span>
        <a
          href="https://linkedin.com/in/jfscastro88"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  )
}

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Incontri', href: '#incontri' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Glossario', href: '#glossario' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Galleria', href: '#galleria' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        OFFICINA DEL PC
      </a>

      <nav className="navbar-links" aria-label="Navigazione principale">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="navbar-link">
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#incontri" className="btn btn-yellow navbar-cta">
        Calendario
      </a>
    </header>
  )
}

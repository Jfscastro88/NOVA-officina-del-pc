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
    <header className="sticky top-0 z-50 border-b-2 border-accent/30 bg-dark-purple/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-3.5 lg:px-8">
        <a
          href="#home"
          className="font-display text-sm tracking-wide text-white transition-colors hover:text-yellow lg:text-base"
        >
          OFFICINA DEL PC
        </a>

        <nav
          className="order-3 flex w-full flex-wrap justify-center gap-x-5 gap-y-2 lg:order-none lg:w-auto lg:flex-1 lg:justify-center"
          aria-label="Navigazione principale"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/70 transition-colors hover:text-yellow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#incontri"
          className="ml-auto rounded-full bg-yellow px-5 py-2 text-sm font-extrabold text-dark-purple btn-gaming transition-transform hover:-translate-y-0.5 lg:ml-0"
        >
          Calendario
        </a>
      </div>
    </header>
  )
}

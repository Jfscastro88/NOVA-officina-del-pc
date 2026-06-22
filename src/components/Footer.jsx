import { Star, Squiggle } from './Doodles'

const badges = ['Pratico', 'Divertente', 'Istruttivo', 'Collaborativo']

export default function Footer() {
  return (
    <footer className="footer-cta">
      <Star className="footer-doodle footer-doodle-1" />
      <Squiggle className="footer-doodle footer-doodle-2" />

      <div className="footer-inner">
        <h2>Pronto a metterti all&apos;opera?</h2>

        <div className="footer-badges">
          {badges.map((badge) => (
            <span key={badge} className="footer-badge">
              {badge}
            </span>
          ))}
        </div>

        <p className="footer-tagline">
          Segui il laboratorio e porta la tua curiosità!
        </p>
      </div>

      <div className="footer-bottom">
        <span className="footer-logo">OFFICINA DEL PC</span>
        <nav className="footer-nav" aria-label="Collegamenti rapidi">
          <a href="#glossario">Glossario</a>
          <a href="#quiz">Quiz</a>
          <a href="#galleria">Galleria</a>
        </nav>
      </div>
    </footer>
  )
}

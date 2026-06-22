import heroImg from '../assets/hero.png'
import { Arrow, Spark, Squiggle, Star } from './Doodles'

const parts = [
  { label: 'CPU', emoji: '🧠', className: 'part-cpu' },
  { label: 'RAM', emoji: '📦', className: 'part-ram' },
  { label: 'SSD', emoji: '💾', className: 'part-ssd' },
  { label: 'GPU', emoji: '🎮', className: 'part-gpu' },
]

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <Star className="hero-doodle hero-doodle-1" />
      <Star className="hero-doodle hero-doodle-2" />
      <Arrow className="hero-doodle hero-doodle-3" />
      <Squiggle className="hero-doodle hero-doodle-4" />
      <Spark className="hero-doodle hero-doodle-5" />

      <div className="hero-inner">
        <div className="hero-content">
          <span className="badge badge-yellow">LABORATORIO 12–17 ANNI</span>

          <h1 className="hero-title">
            OFFICINA
            <br />
            DEL PC
          </h1>

          <p className="hero-subtitle">
            Smontare, esplorare e ricostruire il PC: laboratorio pratico su
            hardware e sistemi operativi.
          </p>

          <div className="hero-actions">
            <a href="#cosa-faremo" className="btn btn-yellow">
              Scopri il laboratorio
            </a>
            <a href="#incontri" className="btn btn-outline">
              Il programma
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-glow" />
          <div className="hero-pc">
            <img src={heroImg} alt="" className="hero-pc-img" />
            <div className="hero-pc-screen">
              <span>OFFICINA</span>
              <span>DEL PC</span>
            </div>
            <div className="hero-pc-base" />
          </div>

          {parts.map((part) => (
            <div key={part.label} className={`hero-part ${part.className}`}>
              <span className="hero-part-emoji">{part.emoji}</span>
              <span className="hero-part-label">{part.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

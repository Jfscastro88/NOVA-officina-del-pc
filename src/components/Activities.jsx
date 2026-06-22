import { Star, Squiggle } from './Doodles'

const activities = [
  {
    title: 'Esploriamo',
    text: 'Scopriamo tutti i componenti interni del PC',
    emoji: '🔍',
  },
  {
    title: 'Smontiamo',
    text: 'Osserviamo da vicino e capiamo come funziona',
    emoji: '🔧',
  },
  {
    title: 'Ricostruiamo',
    text: 'Impariamo a montare e collegare i componenti',
    emoji: '🛠️',
  },
  {
    title: 'Installiamo',
    text: 'Vediamo come funziona un sistema operativo',
    emoji: '💻',
  },
  {
    title: 'Capiamo',
    text: 'Concetti semplici con esempi pratici',
    emoji: '💡',
  },
]

export default function Activities() {
  return (
    <section id="cosa-faremo" className="section activities-section">
      <Star className="section-doodle activities-doodle-1" />
      <Squiggle className="section-doodle activities-doodle-2" />

      <div className="section-header">
        <span className="section-tag">Il laboratorio</span>
        <h2 className="section-title">Cosa faremo?</h2>
      </div>

      <div className="activities-grid">
        {activities.map((item, index) => (
          <article
            key={item.title}
            className="activity-card"
            style={{ '--i': index }}
          >
            <span className="activity-emoji">{item.emoji}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

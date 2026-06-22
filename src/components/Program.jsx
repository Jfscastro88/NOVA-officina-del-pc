import { Arrow } from './Doodles'

const sessions = [
  {
    date: '27 GIU',
    title: 'Dentro il PC',
    text: 'Componenti e funzioni',
  },
  {
    date: '4 LUG',
    title: 'Assemblaggio',
    text: 'Montiamo e manuteniamo',
  },
  {
    date: '11 LUG',
    title: 'Sistema Operativo',
    text: 'Installazione e esplorazione',
  },
  {
    date: '18 LUG',
    title: 'Tecnico per un giorno',
    text: 'Diagnosi, problemi e curiosità',
  },
]

export default function Program() {
  return (
    <section id="incontri" className="section program-section">
      <Arrow className="section-doodle program-doodle" />

      <div className="section-header">
        <span className="section-tag">Calendario</span>
        <h2 className="section-title">
          4 incontri <span className="title-dot">•</span> 8 ore di laboratorio
        </h2>
      </div>

      <div className="program-layout">
        <div className="program-grid">
          {sessions.map((session) => (
            <article key={session.date} className="session-card">
              <span className="session-date">{session.date}</span>
              <h3>{session.title}</h3>
              <p>{session.text}</p>
            </article>
          ))}
        </div>

        <aside className="post-it" aria-label="Orario laboratorio">
          <span className="post-it-label">Orario</span>
          <strong>10:00 – 12:00</strong>
          <p>Ogni sabato mattina, 4 settimane di avventura tech!</p>
        </aside>
      </div>
    </section>
  )
}

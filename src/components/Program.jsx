import { Link } from 'react-router-dom'
import { CalendarDays } from 'lucide-react'
import { CircleDoodle, Squiggle } from './Doodles'

const sessions = [
  {
    date: '27 GIU',
    title: 'Dentro il PC',
    text: 'Componenti e funzioni',
    accent: 'border-accent',
    link: '/workshop/2026-06-27',
  },
  {
    date: '4 LUG',
    title: 'Assemblaggio',
    text: 'Montiamo e manuteniamo',
    accent: 'border-yellow',
  },
  {
    date: '11 LUG',
    title: 'Sistema Operativo',
    text: 'Installazione e esplorazione',
    accent: 'border-fuchsia-400',
  },
  {
    date: '18 LUG',
    title: 'Tecnico per un giorno',
    text: 'Diagnosi, problemi e curiosità',
    accent: 'border-accent',
  },
]

export default function Program() {
  return (
    <section
      id="incontri"
      className="relative overflow-hidden bg-gradient-to-b from-dark-purple to-primary px-5 py-20 noise-bg lg:px-8"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent/20 blur-[80px]" />
      <Squiggle className="pointer-events-none absolute left-[4%] top-16 h-6 w-24 text-yellow/40" />
      <CircleDoodle className="pointer-events-none absolute bottom-20 right-[6%] h-14 w-14 text-accent/30" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center animate-fade-up">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-yellow">
            Calendario
          </span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-5xl lg:text-6xl">
            4 incontri{' '}
            <span className="text-yellow">•</span>{' '}
            8 ore di laboratorio
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto]">
          <div className="grid gap-5 sm:grid-cols-2">
            {sessions.map((session, i) => {
              const cardClass = `group card-depth rounded-3xl border-l-[6px] ${session.accent} bg-white/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/15 animate-fade-up`
              const cardContent = (
                <>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/30 px-3 py-1 text-xs font-extrabold text-yellow">
                    <CalendarDays size={14} />
                    {session.date}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-white">{session.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{session.text}</p>
                  {session.link && (
                    <span className="mt-3 inline-block text-[11px] font-extrabold uppercase tracking-wide text-yellow opacity-70 transition-all group-hover:opacity-100">
                      Apri presentazione →
                    </span>
                  )}
                </>
              )

              return session.link ? (
                <Link
                  key={session.date}
                  to={session.link}
                  className={`${cardClass} block cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {cardContent}
                </Link>
              ) : (
                <article
                  key={session.date}
                  className={cardClass}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {cardContent}
                </article>
              )
            })}
          </div>

          <aside
            className="card-depth mx-auto w-full max-w-xs rotate-2 rounded-sm bg-yellow p-6 text-dark-purple transition-transform hover:rotate-0 hover:scale-105 lg:mx-0"
            aria-label="Orario laboratorio"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest opacity-60">
              Orario
            </span>
            <strong className="mt-1 block font-display text-3xl">10:00 – 12:00</strong>
            <p className="mt-2 text-sm font-semibold leading-snug">
              Ogni sabato mattina — 4 settimane di avventura tech!
            </p>
            <div className="mt-4 h-1 w-full rounded bg-dark-purple/20" />
          </aside>
        </div>
      </div>
    </section>
  )
}

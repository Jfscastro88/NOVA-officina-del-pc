import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import PresentationMenu from './PresentationMenu'

export default function WorkshopComingSoon({ day, audience }) {
  const audienceLabel = audience === 'teacher' ? 'Area Docenti' : 'Presentazione Ragazzi'

  return (
    <div className="min-h-screen bg-[#0B1020] text-white noise-bg">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/90 backdrop-blur-xl">
        <div
          className={
            audience === 'teacher'
              ? 'mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-8'
              : 'workshop-student-shell flex items-center gap-4 py-4'
          }
        >
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/70 transition-colors hover:border-accent hover:text-[#FACC15]"
          >
            <Home size={16} />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <div className="flex-1 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FACC15]">
              {audienceLabel}
            </p>
            <h1 className="font-display text-sm tracking-wide text-white sm:text-base">
              {day.label}
            </h1>
          </div>

          <PresentationMenu
            audience={audience === 'teacher' ? 'teacher' : 'student'}
            currentDayId={day.id}
            studentPath={audience === 'teacher' ? day.studentPath : undefined}
          />
        </div>
      </header>

      <div className="mx-auto flex max-w-lg flex-col items-center px-5 py-20 text-center">
        <span className="rounded-full border border-accent/30 bg-accent/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          In preparazione
        </span>
        <h2 className="mt-6 font-display text-2xl text-white sm:text-3xl">
          Contenuto in arrivo
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          La {audienceLabel.toLowerCase()} per {day.label} sarà disponibile a breve.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-[#FACC15] px-6 py-3 text-sm font-extrabold text-[#0B1020] btn-gaming transition-transform hover:-translate-y-0.5"
        >
          Torna alla home
        </Link>
      </div>
    </div>
  )
}

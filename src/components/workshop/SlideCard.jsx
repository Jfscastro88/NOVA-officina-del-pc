import { Clock, Lightbulb, ListChecks } from 'lucide-react'
import QuizBox from './QuizBox'

export default function SlideCard({ slide, slideKey }) {
  return (
    <article
      key={slideKey}
      className="animate-fade-up rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8"
    >
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-3xl"
          role="img"
          aria-hidden="true"
        >
          {slide.emoji}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#FACC15]">
            <Clock size={15} />
            {slide.time}
          </div>
          <h2 className="mt-1 font-display text-2xl text-white sm:text-3xl">
            {slide.title}
          </h2>
        </div>
      </div>

      <p className="text-base leading-relaxed text-white/80">{slide.explanation}</p>

      <div className="mt-6">
        <div className="mb-3 flex items-center gap-2">
          <ListChecks size={18} className="text-accent" />
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-accent">
            {slide.components?.length ? "Componenti da riconoscere" : "Punti principali"}
          </h3>
        </div>
        {slide.components?.length ? (
          <ul className="space-y-3">
            {slide.components.map((component) => (
              <li
                key={component.name}
                className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white/90"
              >
                <p className="font-bold text-white">{component.name}</p>
                <p className="mt-2">
                  <span className="font-semibold text-accent">Funzione: </span>
                  {component.funzione}
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-accent">Posizione: </span>
                  {component.posizione}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-2">
            {slide.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 text-sm text-white/90"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FACC15]" />
                {point}
              </li>
            ))}
          </ul>
        )}
        {slide.components?.length && slide.points?.length ? (
          <ul className="mt-4 space-y-2">
            {slide.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 text-sm text-white/90"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FACC15]" />
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-6 rounded-2xl border border-[#FACC15]/20 bg-[#FACC15]/5 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Lightbulb size={18} className="text-[#FACC15]" />
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#FACC15]">
            Curiosità
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-white/75">{slide.curiosity}</p>
      </div>

      {slide.quiz && <QuizBox key={slideKey} quiz={slide.quiz} />}
    </article>
  )
}

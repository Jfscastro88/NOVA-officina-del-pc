import { useState } from 'react'
import { ArrowScribble, BrushStroke, Star } from './Doodles'
import WaveDivider from './WaveDivider'
import ActivityModal from './ActivityModal'
import { workshopActivities } from '../data/workshopActivities'

export default function Activities() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <WaveDivider className="text-[#f0eaff]" />

      <section
        id="cosa-faremo"
        className="relative overflow-hidden bg-[#f0eaff] px-5 py-20 lg:px-8"
      >
        <Star className="pointer-events-none absolute right-[8%] top-12 h-6 w-6 text-yellow animate-float" />
        <ArrowScribble className="pointer-events-none absolute bottom-16 left-[5%] h-8 w-16 text-accent/40" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center animate-fade-up">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
              Il laboratorio
            </span>
            <h2 className="mt-3 font-display text-4xl text-dark-purple md:text-5xl lg:text-6xl">
              Cosa{' '}
              <span className="highlight-brush text-primary">faremo?</span>
            </h2>
            <BrushStroke className="mx-auto mt-2 h-4 w-40 text-yellow" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {workshopActivities.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                className={`group card-depth animate-fade-up cursor-pointer rounded-3xl border-2 border-white bg-white p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-accent/40 hover:shadow-[0_20px_56px_rgba(124,58,237,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${item.rotate}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  role="img"
                  aria-hidden="true"
                >
                  {item.emoji}
                </div>
                <h3 className="font-display text-lg text-dark-purple">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/80">{item.short}</p>
                <span className="mt-3 inline-block text-[11px] font-extrabold uppercase tracking-wide text-accent opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">
                  Clicca per scoprire →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip className="text-[#f0eaff]" />

      {selected && (
        <ActivityModal activity={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}

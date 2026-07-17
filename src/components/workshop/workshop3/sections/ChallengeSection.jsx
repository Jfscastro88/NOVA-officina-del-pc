import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

/** Sfida pratica con checklist e barra di avanzamento (senza punteggio) */
export default function ChallengeSection({ section }) {
  const [completed, setCompleted] = useState(new Set())
  const total = section.steps?.length ?? 0
  const done = completed.size
  const progress = total > 0 ? Math.round((done / total) * 100) : 0

  const toggle = (id) => {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <SlideSectionFrame
      section={section}
      subtitle={
        section.hint ??
        'Segna ogni passaggio quando lo hai completato sul computer. Non c’è un punteggio: l’importante è provare.'
      }
    >
      <div className="mb-4 sm:mb-5">
        <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-white/60 sm:text-sm">
          <span>
            Completati {done} di {total}
          </span>
          <span className="text-[#FACC15]">{progress}%</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-white/10 sm:h-3">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent to-[#FACC15]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35 }}
          />
        </div>
      </div>

      <div className="max-h-[min(50vh,440px)] space-y-2 overflow-y-auto pr-1">
        {section.steps?.map((step, index) => {
          const isDone = completed.has(step.id)
          return (
            <motion.button
              key={step.id}
              type="button"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => toggle(step.id)}
              className={`flex w-full items-start gap-2.5 rounded-xl border p-2.5 text-left transition-all sm:gap-3 sm:p-3 ${
                isDone
                  ? 'border-green-400/40 bg-green-500/10'
                  : 'border-white/10 bg-white/5 hover:border-accent/40'
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-extrabold sm:h-9 sm:w-9 ${
                  isDone ? 'bg-green-500 text-white' : 'bg-accent/30 text-white'
                }`}
              >
                {isDone ? <CheckCircle2 size={16} /> : step.number}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white sm:text-base">{step.title}</p>
                {step.description && (
                  <p className="mt-0.5 text-[11px] text-white/65 sm:text-xs">{step.description}</p>
                )}
                {step.keys && (
                  <kbd className="mt-1.5 inline-block rounded-md border border-white/15 bg-white/10 px-2 py-0.5 font-mono text-[11px] font-bold text-[#FACC15] sm:text-xs">
                    {step.keys}
                  </kbd>
                )}
              </div>
            </motion.button>
          )
        })}
      </div>
    </SlideSectionFrame>
  )
}

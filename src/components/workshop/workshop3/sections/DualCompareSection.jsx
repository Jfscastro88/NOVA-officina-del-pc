import { useState } from 'react'
import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

/** Due colonne a confronto (es. hardware vs software) + domanda */
export default function DualCompareSection({ section }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <SlideSectionFrame section={section}>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {section.cards?.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className={`rounded-2xl border p-3 sm:rounded-3xl sm:p-5 ${
              card.accent === 'yellow'
                ? 'border-[#FACC15]/30 bg-[#FACC15]/10'
                : 'border-accent/30 bg-accent/10'
            }`}
          >
            <div className="mb-2 flex items-center gap-2 sm:mb-3">
              <span className="text-2xl sm:text-3xl" role="img" aria-hidden="true">
                {card.emoji}
              </span>
              <h3 className="font-display text-lg text-white sm:text-xl">{card.title}</h3>
            </div>
            {card.items?.length > 0 && (
              <ul className="mb-3 space-y-1.5">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-white/85 sm:text-sm"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FACC15]" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {card.examples?.length > 0 && (
              <div className="rounded-xl border border-white/10 bg-black/20 p-2.5 sm:p-3">
                <p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white/50 sm:text-xs">
                  Esempi
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {card.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-white/80 sm:text-xs"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {section.question && (
        <div className="mt-4 rounded-2xl border border-[#FACC15]/25 bg-[#FACC15]/5 p-3 sm:mt-5 sm:p-4">
          <div className="flex items-start gap-2">
            <HelpCircle size={18} className="mt-0.5 shrink-0 text-[#FACC15]" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-white sm:text-base">{section.question}</p>
              {section.answer && (
                <button
                  type="button"
                  onClick={() => setRevealed((v) => !v)}
                  className="mt-2 text-xs font-extrabold uppercase tracking-wider text-[#FACC15] hover:underline sm:text-sm"
                >
                  {revealed ? 'Nascondi risposta' : 'Mostra risposta'}
                </button>
              )}
              {revealed && section.answer && (
                <p className="mt-2 text-sm text-white/80 sm:text-base">{section.answer}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </SlideSectionFrame>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

/** Card compatibilità + domanda con risposta apribile */
export default function CompatCardsSection({ section }) {
  const [openId, setOpenId] = useState(null)
  const [answerOpen, setAnswerOpen] = useState(false)

  return (
    <SlideSectionFrame section={section}>
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
        {section.cards?.map((card, index) => {
          const isOpen = openId === card.id
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:rounded-2xl"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : card.id)}
                className="flex w-full items-start gap-2.5 p-3 text-left sm:gap-3 sm:p-4"
              >
                <span className="text-xl sm:text-2xl" role="img" aria-hidden="true">
                  {card.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-extrabold text-white sm:text-base">{card.title}</h3>
                  <p className="mt-1 text-[11px] leading-snug text-white/70 sm:text-xs">
                    {card.text}
                  </p>
                </div>
                <ChevronDown
                  size={16}
                  className={`mt-1 shrink-0 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {isOpen && (card.example || card.examples?.length) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10 bg-black/20 px-3 pb-3 pt-2 sm:px-4 sm:pb-4"
                  >
                    {card.example && (
                      <p className="text-xs text-[#FACC15]/90 sm:text-sm">{card.example}</p>
                    )}
                    {card.examples?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {card.examples.map((ex) => (
                          <span
                            key={ex}
                            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-white/80"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {section.question && (
        <div className="mt-4 rounded-2xl border border-[#FACC15]/25 bg-[#FACC15]/5 p-3 sm:mt-5 sm:p-4">
          <div className="flex items-start gap-2">
            <HelpCircle size={18} className="mt-0.5 shrink-0 text-[#FACC15]" />
            <div>
              <p className="text-sm font-bold text-white sm:text-base">{section.question}</p>
              <button
                type="button"
                onClick={() => setAnswerOpen((v) => !v)}
                className="mt-2 text-xs font-extrabold uppercase tracking-wider text-[#FACC15] hover:underline sm:text-sm"
              >
                {answerOpen ? 'Nascondi risposta' : 'Mostra risposta'}
              </button>
              {answerOpen && section.answer && (
                <p className="mt-2 text-sm text-white/80 sm:text-base">{section.answer}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </SlideSectionFrame>
  )
}

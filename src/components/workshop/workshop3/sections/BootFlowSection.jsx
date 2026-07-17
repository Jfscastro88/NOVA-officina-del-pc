import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, X } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

/** Flusso verticale con frecce (boot sequence) */
export default function BootFlowSection({ section }) {
  const [activeId, setActiveId] = useState(null)
  const active = section.steps?.find((s) => s.id === activeId)

  return (
    <>
      <SlideSectionFrame
        section={section}
        subtitle={section.hint ?? 'Clicca ogni passaggio del flusso.'}
      >
        <div className="mx-auto flex max-h-[min(55vh,500px)] max-w-md flex-col items-stretch overflow-y-auto pr-1">
          {section.steps?.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <motion.button
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                onClick={() => setActiveId(step.id)}
                className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all sm:rounded-2xl sm:px-4 sm:py-3 ${
                  activeId === step.id
                    ? 'border-[#FACC15]/50 bg-[#FACC15]/10'
                    : 'border-white/10 bg-white/5 hover:border-accent/40'
                }`}
              >
                <span className="text-xl sm:text-2xl" role="img" aria-hidden="true">
                  {step.emoji}
                </span>
                <span className="text-sm font-extrabold text-white sm:text-base">{step.title}</span>
              </motion.button>
              {index < section.steps.length - 1 && (
                <ArrowDown className="my-1 h-5 w-5 text-[#FACC15] sm:my-1.5 sm:h-6 sm:w-6" />
              )}
            </div>
          ))}
        </div>
      </SlideSectionFrame>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl border border-[#FACC15]/30 bg-[#0B1020]/95 p-5 shadow-2xl sm:rounded-3xl sm:p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-hidden="true">
                      {active.emoji}
                    </span>
                    <h3 className="font-display text-lg text-white sm:text-xl">{active.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    className="rounded-lg p-1 text-white/50 hover:bg-white/10 hover:text-white"
                    aria-label="Chiudi"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                  {active.explanation}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

/** Sequenza numerata con spiegazione apribile (assemblaggio) */
export default function NumberedAccordionSection({ section }) {
  const [openId, setOpenId] = useState(null)

  return (
    <SlideSectionFrame section={section}>
      <div className="max-h-[min(55vh,500px)] space-y-2 overflow-y-auto pr-1">
        {section.steps?.map((step, index) => {
          const isOpen = openId === step.id
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : step.id)}
                className="flex w-full items-center gap-2.5 p-2.5 text-left sm:gap-3 sm:p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FACC15] text-sm font-extrabold text-[#0B1020] sm:h-10 sm:w-10 sm:text-base">
                  {step.number}
                </span>
                <span className="min-w-0 flex-1 text-sm font-bold text-white sm:text-base">
                  {step.title}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {isOpen && step.detail && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10 bg-black/20 px-3 pb-3 pt-2 sm:px-4 sm:pb-4"
                  >
                    <p className="text-xs leading-relaxed text-white/80 sm:text-sm">{step.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </SlideSectionFrame>
  )
}

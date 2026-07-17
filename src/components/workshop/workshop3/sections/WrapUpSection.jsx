import { motion } from 'framer-motion'
import SlideSectionFrame from '../SlideSectionFrame'

/** Conclusione con domande finali (senza quiz/punteggio) */
export default function WrapUpSection({ section }) {
  return (
    <SlideSectionFrame
      section={section}
      subtitle={
        <>
          {section.lead && (
            <span className="block text-base font-semibold text-white sm:text-lg">
              {section.lead}
            </span>
          )}
          {section.tagline && (
            <span className="mt-3 block text-sm leading-relaxed text-white/70 sm:text-base">
              {section.tagline}
            </span>
          )}
        </>
      }
    >
      {section.questions?.length > 0 && (
        <div className="space-y-2">
          <p className="mb-1 text-xs font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-sm">
            Domande finali
          </p>
          {section.questions.map((q, index) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-accent/25 bg-accent/10 px-3 py-2.5 text-sm text-white/90 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-base"
            >
              {q}
            </motion.div>
          ))}
        </div>
      )}
    </SlideSectionFrame>
  )
}

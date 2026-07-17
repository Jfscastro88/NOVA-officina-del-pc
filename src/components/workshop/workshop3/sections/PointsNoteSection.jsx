import { motion } from 'framer-motion'
import { AlertTriangle, Star } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

/** Elenco punti semplici + nota importante */
export default function PointsNoteSection({ section }) {
  return (
    <SlideSectionFrame section={section}>
      {section.points?.length > 0 && (
        <ul className="mb-4 space-y-2 sm:mb-5 sm:space-y-3">
          {section.points.map((point, index) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.04 }}
              className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/90 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-base"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FACC15] sm:mt-2 sm:h-2 sm:w-2" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {section.note && (
        <div className="rounded-xl border-2 border-[#FACC15]/40 bg-[#FACC15]/10 p-3 sm:rounded-2xl sm:p-4">
          <div className="mb-1.5 flex items-center gap-2">
            {section.noteVariant === 'warning' ? (
              <AlertTriangle size={18} className="text-[#FACC15]" />
            ) : (
              <Star size={18} className="fill-[#FACC15] text-[#FACC15]" />
            )}
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-sm">
              {section.noteTitle ?? 'Importante'}
            </h3>
          </div>
          <p className="text-sm font-semibold leading-relaxed text-white sm:text-base">
            {section.note}
          </p>
        </div>
      )}
    </SlideSectionFrame>
  )
}

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

/** Card con avviso (errori da evitare) */
export default function WarningCardsSection({ section }) {
  return (
    <SlideSectionFrame section={section}>
      <div className="grid max-h-[min(55vh,480px)] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 sm:gap-3">
        {section.cards?.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className="rounded-xl border border-red-400/25 bg-red-500/5 p-3 sm:rounded-2xl sm:p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="shrink-0 text-red-400" />
              <span className="text-xl" role="img" aria-hidden="true">
                {card.emoji}
              </span>
            </div>
            <h3 className="text-sm font-extrabold text-white sm:text-base">{card.title}</h3>
            <p className="mt-1.5 text-[11px] leading-relaxed text-white/75 sm:text-xs sm:leading-relaxed md:text-sm">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideSectionFrame>
  )
}

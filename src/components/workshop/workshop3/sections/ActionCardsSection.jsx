import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

/** Griglia di azioni semplici (operazioni sui file) */
export default function ActionCardsSection({ section }) {
  return (
    <SlideSectionFrame section={section}>
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {section.cards?.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            className="rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4"
          >
            <span className="text-2xl" role="img" aria-hidden="true">
              {card.emoji}
            </span>
            <h3 className="mt-2 text-sm font-extrabold text-white sm:text-base">{card.title}</h3>
            <p className="mt-1 text-[11px] leading-relaxed text-white/70 sm:text-xs md:text-sm">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {section.note && (
        <div className="mt-4 rounded-xl border-2 border-[#FACC15]/40 bg-[#FACC15]/10 p-3 sm:mt-5 sm:rounded-2xl sm:p-4">
          <div className="mb-1.5 flex items-center gap-2">
            <Star size={16} className="fill-[#FACC15] text-[#FACC15]" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
              Consiglio
            </h3>
          </div>
          <p className="text-sm font-semibold text-white sm:text-base">{section.note}</p>
        </div>
      )}
    </SlideSectionFrame>
  )
}

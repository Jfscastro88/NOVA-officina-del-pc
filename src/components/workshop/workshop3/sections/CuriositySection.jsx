import { motion } from 'framer-motion'
import SlideSectionFrame from '../SlideSectionFrame'

export default function CuriositySection({ section }) {
  return (
    <SlideSectionFrame
      section={section}
      subtitle="Linux è ovunque, anche se non lo vedi."
    >
      <div className="grid gap-2 sm:grid-cols-2">
        {section.cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ y: -2 }}
            className="rounded-xl border border-white/10 bg-white/5 p-3 transition-shadow hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(124,58,237,0.15)] sm:p-4"
          >
            <span className="text-2xl" role="img" aria-hidden="true">
              {card.emoji}
            </span>
            <h3 className="mt-2 text-sm font-bold text-white sm:text-base">{card.title}</h3>
            <p className="mt-1 text-[11px] leading-relaxed text-white/70 sm:text-xs">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideSectionFrame>
  )
}

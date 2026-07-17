import { motion } from 'framer-motion'
import SlideSectionFrame from '../SlideSectionFrame'

/** Riepilogo a blocchi (più generico di RecapSection) */
export default function JourneyRecapSection({ section }) {
  return (
    <SlideSectionFrame section={section} subtitle={section.subtitle}>
      <div className="grid max-h-[min(55vh,480px)] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 sm:gap-3">
        {section.blocks?.map((block, index) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className="rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-2xl" role="img" aria-hidden="true">
                {block.emoji}
              </span>
              <h3 className="text-sm font-extrabold text-white sm:text-base">{block.title}</h3>
            </div>
            <p className="text-[11px] leading-relaxed text-white/75 sm:text-xs md:text-sm">
              {block.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideSectionFrame>
  )
}

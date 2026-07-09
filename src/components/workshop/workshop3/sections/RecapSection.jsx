import { motion } from 'framer-motion'
import SlideSectionFrame from '../SlideSectionFrame'

const BLOCK_STYLES = {
  principali: 'border-accent/30 bg-accent/10',
  'pre-assunto': 'border-white/20 bg-white/5',
  ultimo: 'border-[#FACC15]/30 bg-[#FACC15]/5',
  prossimo: 'border-green-400/30 bg-green-500/10',
}

export default function RecapSection({ section }) {
  return (
    <SlideSectionFrame section={section} subtitle={section.subtitle}>
      <div className="max-h-[min(55vh,480px)] space-y-2.5 overflow-y-auto pr-1 sm:space-y-3">
        {section.blocks.map((block, index) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl border p-3 sm:rounded-2xl sm:p-4 ${
              BLOCK_STYLES[block.id] ?? 'border-white/10 bg-white/5'
            }`}
          >
            <div className="mb-2 flex items-start gap-2.5 sm:mb-2.5 sm:gap-3">
              <span className="text-xl sm:text-2xl" role="img" aria-hidden="true">
                {block.emoji}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-extrabold text-white sm:text-base">{block.title}</h3>
                {block.workshop && (
                  <p className="mt-0.5 text-[11px] font-semibold text-white/55 sm:text-xs">
                    {block.workshop}
                  </p>
                )}
              </div>
            </div>
            <ul className="space-y-1 pl-1">
              {block.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-[11px] leading-relaxed text-white/80 sm:text-xs sm:leading-relaxed md:text-sm"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SlideSectionFrame>
  )
}

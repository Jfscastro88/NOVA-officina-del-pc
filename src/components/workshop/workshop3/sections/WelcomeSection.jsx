import { motion } from 'framer-motion'
import SlideSectionFrame from '../SlideSectionFrame'

/** Hero con punti chiave a chip */
export default function WelcomeSection({ section }) {
  return (
    <SlideSectionFrame
      section={section}
      subtitle={
        <>
          {section.tagline && (
            <span className="block text-base font-medium italic text-white/75 sm:text-lg">
              &ldquo;{section.tagline}&rdquo;
            </span>
          )}
          {section.intro && (
            <span className="mt-3 block text-sm text-white/70 sm:text-base">{section.intro}</span>
          )}
        </>
      }
    >
      {section.points?.length > 0 && (
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {section.points.map((point, index) => (
            <motion.span
              key={point}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1.5 text-xs font-bold text-[#FACC15] sm:px-4 sm:py-2 sm:text-sm"
            >
              {point}
            </motion.span>
          ))}
        </div>
      )}
    </SlideSectionFrame>
  )
}

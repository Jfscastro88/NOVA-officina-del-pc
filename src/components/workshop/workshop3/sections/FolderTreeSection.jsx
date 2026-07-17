import { motion } from 'framer-motion'
import SlideSectionFrame from '../SlideSectionFrame'

/** Albero cartelle + spiegazioni file/cartella */
export default function FolderTreeSection({ section }) {
  return (
    <SlideSectionFrame section={section}>
      {section.tree && (
        <div className="mb-4 overflow-x-auto rounded-2xl border border-accent/30 bg-accent/10 p-3 font-mono text-xs leading-relaxed text-white sm:mb-5 sm:p-5 sm:text-sm">
          <pre className="whitespace-pre">{section.tree}</pre>
        </div>
      )}

      <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
        {section.defs?.map((def, index) => (
          <motion.div
            key={def.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4"
          >
            <span className="text-2xl" role="img" aria-hidden="true">
              {def.emoji}
            </span>
            <h3 className="mt-2 text-sm font-extrabold text-white sm:text-base">{def.title}</h3>
            <p className="mt-1 text-[11px] leading-relaxed text-white/70 sm:text-xs md:text-sm">
              {def.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideSectionFrame>
  )
}

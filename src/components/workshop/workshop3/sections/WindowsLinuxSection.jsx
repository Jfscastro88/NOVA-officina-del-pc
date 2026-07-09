import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideSectionFrame from '../SlideSectionFrame'

export default function WindowsLinuxSection({ section }) {
  const [active, setActive] = useState(null)

  const [systemId, itemId] = active?.split(':') ?? []
  const system = section.systems.find((s) => s.id === systemId)
  const item = system?.items.find((i) => i.id === itemId)

  return (
    <SlideSectionFrame
      section={section}
      subtitle="Due sistemi diversi, entrambi ottimi. Clicca le voci per scoprire le differenze."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {section.systems.map((sys) => (
          <div key={sys.id} className={`rounded-2xl border p-3 sm:p-4 ${sys.color}`}>
            <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
              <span className="text-2xl" role="img" aria-hidden="true">
                {sys.logo}
              </span>
              <h3 className={`font-display text-base sm:text-lg ${sys.accent}`}>
                {sys.name}
              </h3>
            </div>
            <div className="grid gap-1.5">
              {sys.items.map((it) => {
                const key = `${sys.id}:${it.id}`
                const isActive = active === key
                return (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => setActive(isActive ? null : key)}
                    className={`rounded-lg border px-2.5 py-2 text-left text-xs font-semibold transition-all sm:px-3 sm:py-2.5 sm:text-sm ${
                      isActive
                        ? 'border-[#FACC15]/50 bg-[#FACC15]/15 text-white'
                        : 'border-white/10 bg-white/5 text-white/80 hover:border-accent/40'
                    }`}
                  >
                    {it.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {item && system && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="mt-3 rounded-xl border border-[#FACC15]/30 bg-[#FACC15]/5 p-3 sm:p-4"
          >
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-xs">
              {system.name} — {item.label}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/85 sm:text-sm">
              {item.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideSectionFrame>
  )
}

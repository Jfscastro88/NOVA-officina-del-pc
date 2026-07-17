import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

/** Scorciatoie da tastiera — card grandi, alcune evidenziate */
export default function ShortcutCardsSection({ section }) {
  return (
    <SlideSectionFrame section={section}>
      <div className="grid max-h-[min(55vh,520px)] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {section.shortcuts?.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            className={`rounded-xl border p-3 sm:rounded-2xl sm:p-4 ${
              item.important
                ? 'border-[#FACC15]/45 bg-[#FACC15]/10 shadow-[0_0_20px_rgba(250,204,21,0.08)]'
                : 'border-white/10 bg-white/5'
            }`}
          >
            <kbd
              className={`inline-block rounded-lg px-2.5 py-1 font-mono text-sm font-extrabold sm:text-base ${
                item.important
                  ? 'bg-[#FACC15] text-[#0B1020]'
                  : 'border border-white/15 bg-white/10 text-white'
              }`}
            >
              {item.keys}
            </kbd>
            <p className="mt-2 text-sm font-bold text-white sm:text-base">{item.action}</p>
            {item.example && (
              <p className="mt-1 text-[11px] text-white/60 sm:text-xs">{item.example}</p>
            )}
            {item.warning && (
              <div className="mt-2 flex items-start gap-1.5 rounded-lg border border-red-400/30 bg-red-500/10 px-2 py-1.5">
                <AlertTriangle size={14} className="mt-0.5 shrink-0 text-red-400" />
                <p className="text-[11px] leading-snug text-red-200 sm:text-xs">{item.warning}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SlideSectionFrame>
  )
}

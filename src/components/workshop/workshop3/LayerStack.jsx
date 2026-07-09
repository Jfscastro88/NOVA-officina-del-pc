import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function LayerStack({ layers, showDetail = true }) {
  const [active, setActive] = useState(null)

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      {layers.map((layer, index) => (
        <div key={layer.id} className="flex w-full max-w-md flex-col items-center">
          <motion.button
            type="button"
            onClick={() => setActive(active === layer.id ? null : layer.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full rounded-2xl border p-4 text-left transition-all sm:p-5 ${
              active === layer.id
                ? 'border-[#FACC15]/50 bg-[#FACC15]/10 shadow-[0_0_24px_rgba(250,204,21,0.15)]'
                : `border-white/10 bg-gradient-to-r ${layer.color ?? 'from-accent/20 to-accent/5'} hover:border-accent/40`
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl" role="img" aria-hidden="true">
                {layer.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base text-white sm:text-lg">{layer.label}</p>
                {layer.description && (
                  <p className="mt-0.5 text-xs text-white/60 sm:text-sm">{layer.description}</p>
                )}
              </div>
              {showDetail && layer.detail && (
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-white/40 transition-transform ${active === layer.id ? 'rotate-180' : ''}`}
                />
              )}
            </div>
          </motion.button>

          {index < layers.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="my-1 text-[#FACC15]/60"
            >
              <ChevronDown size={20} />
            </motion.div>
          )}

          <AnimatePresence>
            {active === layer.id && layer.detail && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-md overflow-hidden"
              >
                <div className="mt-2 rounded-xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-white/80">
                  {layer.detail}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

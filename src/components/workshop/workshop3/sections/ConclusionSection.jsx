import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

export default function ConclusionSection({ section }) {
  const [choice, setChoice] = useState(
    () => localStorage.getItem(section.storageKey) ?? null,
  )
  const [saved, setSaved] = useState(
    () => Boolean(localStorage.getItem(section.storageKey)),
  )

  const handleChoice = (optionId) => {
    localStorage.setItem(section.storageKey, optionId)
    setChoice(optionId)
    setSaved(true)
  }

  const selectedOption = section.options.find((o) => o.id === choice)

  return (
    <SlideSectionFrame
      section={section}
      subtitle={
        <>
          <p className="text-base font-semibold text-white sm:text-lg">{section.question}</p>
          <p className="mt-2 text-xs text-white/60 sm:text-sm">
            La tua scelta viene salvata solo sul tuo dispositivo.
          </p>
        </>
      }
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {section.options.map((option) => {
          const isSelected = choice === option.id
          return (
            <motion.button
              key={option.id}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleChoice(option.id)}
              className={`flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-extrabold transition-all sm:min-w-[120px] ${
                isSelected
                  ? 'border-[#FACC15] bg-[#FACC15] text-[#0B1020] shadow-[0_0_20px_rgba(250,204,21,0.25)]'
                  : 'border-white/20 bg-white/5 text-white hover:border-accent hover:bg-accent/20'
              }`}
            >
              <span className="text-xl" role="img" aria-hidden="true">
                {option.emoji}
              </span>
              {option.label}
            </motion.button>
          )
        })}
      </div>

      {saved && selectedOption && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center gap-2 text-xs text-green-300 sm:text-sm"
        >
          <CheckCircle2 size={16} />
          Hai scelto <strong className="mx-1">{selectedOption.label}</strong> — ottima riflessione!
        </motion.div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-white/65 sm:text-sm">
        Non esiste una risposta giusta. Windows è familiare, Linux è gratis e personalizzabile.
        Molti usano <span className="text-[#FACC15]">entrambi</span>!
      </p>
    </SlideSectionFrame>
  )
}

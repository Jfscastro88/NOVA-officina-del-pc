import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'
import SlideImage from '../../SlideImage'
import SlideImageLightbox from '../../SlideImageLightbox'
import { resolveSlideImages } from '../../slideImages'

/** Card cliccabili con dettaglio in modal (componenti, troubleshooting, …) */
export default function DetailCardsSection({ section }) {
  const [activeId, setActiveId] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const active = section.cards?.find((c) => c.id === activeId)
  const { primary, gallery, placeholder } = resolveSlideImages(active ?? {})

  return (
    <>
      <SlideSectionFrame
        section={section}
        subtitle={section.hint ?? 'Tocca una card per approfondire.'}
      >
        <div className="grid max-h-[min(55vh,480px)] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {section.cards?.map((card, index) => (
            <motion.button
              key={card.id}
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => setActiveId(card.id)}
              className={`rounded-xl border p-3 text-left transition-all sm:rounded-2xl sm:p-4 ${
                activeId === card.id
                  ? 'border-[#FACC15]/50 bg-[#FACC15]/10'
                  : 'border-white/10 bg-white/5 hover:border-accent/40 hover:bg-white/10'
              }`}
            >
              <span className="text-2xl sm:text-3xl" role="img" aria-hidden="true">
                {card.emoji}
              </span>
              <h3 className="mt-2 text-sm font-extrabold text-white sm:text-base">{card.title}</h3>
              {card.summary && (
                <p className="mt-1 text-[11px] leading-snug text-white/65 sm:text-xs">
                  {card.summary}
                </p>
              )}
            </motion.button>
          ))}
        </div>

        {section.rule && (
          <div className="mt-4 rounded-xl border-2 border-[#FACC15]/40 bg-[#FACC15]/10 p-3 sm:mt-5 sm:rounded-2xl sm:p-4">
            <p className="text-sm font-semibold text-white sm:text-base">{section.rule}</p>
          </div>
        )}
      </SlideSectionFrame>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
            onClick={() => {
              setActiveId(null)
              setLightboxOpen(false)
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl border border-[#FACC15]/30 bg-[#0B1020]/95 p-4 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-hidden="true">
                      {active.emoji}
                    </span>
                    <h3 className="font-display text-lg text-white sm:text-xl">{active.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveId(null)
                      setLightboxOpen(false)
                    }}
                    className="rounded-lg p-1 text-white/50 hover:bg-white/10 hover:text-white"
                    aria-label="Chiudi"
                  >
                    <X size={20} />
                  </button>
                </div>

                {primary && (
                  <div className="mb-4">
                    <SlideImage
                      src={primary}
                      alt={active.title}
                      emoji={active.emoji}
                      galleryCount={gallery.length}
                      placeholder={placeholder}
                      onOpen={primary ? () => setLightboxOpen(true) : undefined}
                    />
                  </div>
                )}

                <div className="space-y-3">
                  {active.function && (
                    <DetailRow label="Funzione" text={active.function} />
                  )}
                  {active.mount && <DetailRow label="Dove si monta" text={active.mount} />}
                  {active.without && (
                    <DetailRow label="Se manca o non funziona" text={active.without} />
                  )}
                  {active.checks?.length > 0 && (
                    <div>
                      <p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-xs">
                        Controllare
                      </p>
                      <ul className="space-y-1.5">
                        {active.checks.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-white/85"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FACC15]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {active.causes?.length > 0 && (
                    <div>
                      <p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-xs">
                        Possibili cause
                      </p>
                      <ul className="space-y-1.5">
                        {active.causes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-white/85"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {lightboxOpen && gallery.length > 0 && (
        <SlideImageLightbox
          images={gallery}
          alt={active?.title ?? section.title}
          emoji={active?.emoji ?? section.emoji}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}

function DetailRow({ label, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <p className="mb-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-xs">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-white/85 sm:text-base">{text}</p>
    </div>
  )
}

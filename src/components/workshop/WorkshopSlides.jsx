import { useState } from 'react'
import { Lightbulb, ListChecks, ZoomIn } from 'lucide-react'
import SlideImageLightbox from './SlideImageLightbox'

function SlideImage({ src, alt, emoji, images, onOpen }) {
  const [failed, setFailed] = useState(false)
  const hasGallery = images?.length > 1

  if (failed || !src) {
    return (
      <div
        className="flex h-full min-h-[220px] w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 to-primary/40 text-8xl sm:min-h-[300px]"
        role="img"
        aria-label={alt}
      >
        {emoji}
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 text-left shadow-2xl transition-all hover:border-accent/40 hover:shadow-[0_0_32px_rgba(124,58,237,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
      aria-label={`Ingrandisci immagine: ${alt}${hasGallery ? ` (${images.length} foto)` : ''}`}
    >
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="h-full min-h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:min-h-[300px]"
      />
      <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
        <ZoomIn size={14} />
        {hasGallery ? `${images.length} foto` : 'Zoom'}
      </span>
    </button>
  )
}

export default function WorkshopSlides({ slide, slideKey, showTime = false }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const images = slide.images?.length ? slide.images : slide.image ? [slide.image] : []

  return (
    <>
      <article
        key={slideKey}
        className="animate-fade-up overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(124,58,237,0.15)] backdrop-blur-md"
      >
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative p-5 sm:p-6 lg:p-8">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <SlideImage
              src={slide.image}
              alt={slide.title}
              emoji={slide.emoji}
              images={images}
              onOpen={() => setLightboxOpen(true)}
            />
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-2xl"
                role="img"
                aria-hidden="true"
              >
                {slide.emoji}
              </span>
              <div className="min-w-0 flex-1">
                {showTime && slide.time && (
                  <p className="text-sm font-semibold text-[#FACC15]">{slide.time}</p>
                )}
                <h2 className="font-display text-2xl text-white sm:text-3xl lg:text-4xl">
                  {slide.title}
                </h2>
              </div>
            </div>

            <p className="text-base leading-relaxed text-white/80 lg:text-lg">
              {slide.explanation}
            </p>

            <div className="mt-6 flex-1">
              <div className="mb-3 flex items-center gap-2">
                <ListChecks size={18} className="text-accent" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-accent">
                  Punti principali
                </h3>
              </div>
              <ul className="space-y-2">
                {slide.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 text-sm text-white/90 transition-colors hover:border-accent/30 hover:bg-white/10"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FACC15]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-[#FACC15]/20 bg-[#FACC15]/5 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb size={18} className="text-[#FACC15]" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#FACC15]">
                  Curiosità
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/75">{slide.curiosity}</p>
            </div>
          </div>
        </div>
      </article>

      {lightboxOpen && (
        <SlideImageLightbox
          images={images}
          alt={slide.title}
          emoji={slide.emoji}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}

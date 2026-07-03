import { useState } from 'react'
import { Lightbulb, Star, ZoomIn } from 'lucide-react'
import SlideImageLightbox from './SlideImageLightbox'
import CompatibilityTable from './CompatibilityTable'
import { resolveSlideImages } from './slideImages'

function SlideImage({ src, alt, emoji, galleryCount, onOpen }) {
  const [failed, setFailed] = useState(false)
  const hasGallery = galleryCount > 1

  if (failed || !src) {
    return (
      <div
        className="flex h-full min-h-[220px] w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 to-primary/40 text-7xl sm:min-h-[280px] lg:min-h-[380px] xl:min-h-[440px]"
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
      aria-label={`Ingrandisci immagine: ${alt}${hasGallery ? ` (${galleryCount} foto)` : ''}`}
    >
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="h-full min-h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:min-h-[280px] lg:min-h-[380px] xl:min-h-[440px]"
      />
      <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
        <ZoomIn size={14} />
        {hasGallery ? `${galleryCount} foto` : 'Zoom'}
      </span>
    </button>
  )
}

export default function WorkshopSlides({ slide, slideKey, showTime = false }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const { primary, gallery } = resolveSlideImages(slide)
  const isMinimal = Boolean(slide.important)

  return (
    <>
      <article
        key={slideKey}
        className="animate-fade-up overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(124,58,237,0.15)] backdrop-blur-md"
      >
        <div
          className={`grid min-w-0 gap-0 ${
            primary ? 'lg:grid-cols-2 lg:items-stretch xl:grid-cols-[1.15fr_1fr]' : ''
          }`}
        >
          {primary && (
            <div className="relative flex min-w-0 items-center p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="w-full">
                <SlideImage
                  src={primary}
                  alt={slide.title}
                  emoji={slide.emoji}
                  galleryCount={gallery.length}
                  onOpen={() => setLightboxOpen(true)}
                />
              </div>
            </div>
          )}

          <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="mb-6 flex flex-wrap items-start gap-4 lg:mb-8 lg:gap-5">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-3xl"
                role="img"
                aria-hidden="true"
              >
                {slide.emoji}
              </span>
              <div className="min-w-0 flex-1">
                {showTime && slide.time && (
                  <p className="text-sm font-semibold text-[#FACC15]">{slide.time}</p>
                )}
                <h2 className="text-balance break-words font-display text-3xl leading-tight text-white sm:text-4xl">
                  {slide.title}
                </h2>
              </div>
            </div>

            {!isMinimal && slide.explanation && (
              <p className="mb-6 text-base leading-relaxed text-white/80 lg:text-lg">
                {slide.explanation}
              </p>
            )}

            {slide.compatibilityTable?.length > 0 && (
              <div className="mb-6">
                <CompatibilityTable rows={slide.compatibilityTable} compact />
              </div>
            )}

            {slide.points?.length > 0 && !slide.compatibilityTable?.length && (
              <ul className={`space-y-3 lg:space-y-4 ${isMinimal ? 'flex-1' : 'mb-6 lg:mb-8'}`}>
                {slide.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 text-white/90 transition-colors hover:border-accent/30 hover:bg-white/10 ${
                      isMinimal ? 'px-5 py-4 text-base font-medium sm:text-lg' : 'px-4 py-3 text-sm'
                    }`}
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FACC15]" />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {slide.important && (
              <div className="mt-auto rounded-2xl border-2 border-[#FACC15]/40 bg-[#FACC15]/10 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Star size={20} className="fill-[#FACC15] text-[#FACC15]" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#FACC15]">
                    Importante
                  </h3>
                </div>
                <p className="text-base font-semibold leading-relaxed text-white sm:text-lg">
                  {slide.important}
                </p>
              </div>
            )}

            {slide.curiosity && (
              <div
                className={`rounded-2xl p-4 ${
                  isMinimal
                    ? 'mt-4 border border-accent/20 bg-accent/10'
                    : 'mt-6 border border-[#FACC15]/20 bg-[#FACC15]/5'
                } ${!slide.important && isMinimal ? 'mt-auto' : ''}`}
              >
                <div className="mb-2 flex items-center gap-2">
                  {isMinimal ? (
                    <span className="text-lg" role="img" aria-hidden="true">
                      {slide.emoji}
                    </span>
                  ) : (
                    <Lightbulb size={18} className="text-[#FACC15]" />
                  )}
                  <h3
                    className={`text-sm font-extrabold uppercase tracking-wider ${
                      isMinimal ? 'text-accent' : 'text-[#FACC15]'
                    }`}
                  >
                    Curiosità
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                  {slide.curiosity}
                </p>
              </div>
            )}
          </div>
        </div>
      </article>

      {lightboxOpen && gallery.length > 0 && (
        <SlideImageLightbox
          images={gallery}
          alt={slide.title}
          emoji={slide.emoji}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}

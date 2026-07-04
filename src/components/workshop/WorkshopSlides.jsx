import { useState } from 'react'
import { Lightbulb, Star, ZoomIn } from 'lucide-react'
import SlideImageLightbox from './SlideImageLightbox'
import CompatibilityTable from './CompatibilityTable'
import { resolveSlideImages } from './slideImages'

function SlideImage({ src, alt, emoji, galleryCount, onOpen }) {
  const [failed, setFailed] = useState(false)
  const hasGallery = galleryCount > 1
  const frameClass =
    'flex min-h-[140px] max-h-[min(45vh,240px)] w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 sm:min-h-[220px] sm:max-h-none sm:rounded-2xl lg:min-h-[380px] xl:min-h-[440px]'

  if (failed || !src) {
    return (
      <div
        className={`${frameClass} bg-gradient-to-br from-accent/20 to-primary/40 text-5xl sm:text-7xl`}
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
      className="group relative w-full cursor-zoom-in text-left shadow-2xl transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15] hover:shadow-[0_0_32px_rgba(124,58,237,0.3)]"
      aria-label={`Ingrandisci immagine: ${alt}${hasGallery ? ` (${galleryCount} foto)` : ''}`}
    >
      <div
        className={`${frameClass} bg-black/20 transition-colors group-hover:border-accent/40 group-focus-visible:border-accent/40`}
      >
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:group-hover:scale-105"
        />
      </div>
      <span className="absolute bottom-2 right-2 flex min-h-8 items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm sm:bottom-3 sm:right-3 sm:min-h-0 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs">
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
        className="animate-fade-up overflow-x-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(124,58,237,0.15)] backdrop-blur-md sm:rounded-3xl"
      >
        <div
          className={`grid min-w-0 gap-0 ${
            primary ? 'lg:grid-cols-2 lg:items-stretch xl:grid-cols-[1.15fr_1fr]' : ''
          }`}
        >
          {primary && (
            <div className="relative flex min-w-0 items-center p-3 sm:p-6 lg:p-10 xl:p-12">
              <div className="pointer-events-none absolute -left-10 -top-10 hidden h-40 w-40 rounded-full bg-accent/20 blur-3xl sm:block" />
              <div className="w-full min-w-0">
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

          <div className="flex min-w-0 flex-col p-3 sm:p-6 lg:p-10 xl:p-12">
            <div className="mb-3 flex flex-wrap items-start gap-2.5 sm:mb-5 sm:gap-4 lg:mb-8 lg:gap-5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-2xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl"
                role="img"
                aria-hidden="true"
              >
                {slide.emoji}
              </span>
              <div className="min-w-0 flex-1">
                {showTime && slide.time && (
                  <p className="text-xs font-semibold text-[#FACC15] sm:text-sm">{slide.time}</p>
                )}
                <h2 className="text-balance break-words font-display text-xl leading-tight text-white sm:text-3xl lg:text-4xl">
                  {slide.title}
                </h2>
              </div>
            </div>

            {!isMinimal && slide.explanation && (
              <p className="mb-3 text-sm leading-relaxed text-white/80 sm:mb-5 sm:text-base lg:mb-6 lg:text-lg">
                {slide.explanation}
              </p>
            )}

            {slide.compatibilityTable?.length > 0 && (
              <div className="mb-3 sm:mb-5 lg:mb-6">
                <CompatibilityTable rows={slide.compatibilityTable} compact />
              </div>
            )}

            {slide.points?.length > 0 && !slide.compatibilityTable?.length && (
              <ul
                className={`space-y-2 sm:space-y-3 lg:space-y-4 ${isMinimal ? 'flex-1' : 'mb-3 sm:mb-5 lg:mb-8'}`}
              >
                {slide.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 text-white/90 transition-colors hover:border-accent/30 hover:bg-white/10 sm:gap-3 sm:rounded-2xl ${
                      isMinimal
                        ? 'px-3 py-3 text-sm font-medium sm:px-5 sm:py-4 sm:text-base md:text-lg'
                        : 'px-3 py-2.5 text-xs sm:px-4 sm:py-3 sm:text-sm'
                    }`}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FACC15] sm:mt-2 sm:h-2 sm:w-2" />
                    <span className="min-w-0 break-words">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {slide.important && (
              <div className="mt-auto rounded-xl border-2 border-[#FACC15]/40 bg-[#FACC15]/10 p-3 sm:rounded-2xl sm:p-5">
                <div className="mb-1.5 flex items-center gap-2 sm:mb-2">
                  <Star size={18} className="fill-[#FACC15] text-[#FACC15] sm:h-5 sm:w-5" />
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-sm">
                    Importante
                  </h3>
                </div>
                <p className="text-sm font-semibold leading-relaxed text-white sm:text-base md:text-lg">
                  {slide.important}
                </p>
              </div>
            )}

            {slide.curiosity && (
              <div
                className={`rounded-xl p-3 sm:rounded-2xl sm:p-4 ${
                  isMinimal
                    ? 'mt-3 border border-accent/20 bg-accent/10 sm:mt-4'
                    : 'mt-4 border border-[#FACC15]/20 bg-[#FACC15]/5 sm:mt-6'
                } ${!slide.important && isMinimal ? 'mt-auto' : ''}`}
              >
                <div className="mb-1.5 flex items-center gap-2 sm:mb-2">
                  {isMinimal ? (
                    <span className="text-base sm:text-lg" role="img" aria-hidden="true">
                      {slide.emoji}
                    </span>
                  ) : (
                    <Lightbulb size={16} className="text-[#FACC15] sm:h-[18px] sm:w-[18px]" />
                  )}
                  <h3
                    className={`text-xs font-extrabold uppercase tracking-wider sm:text-sm ${
                      isMinimal ? 'text-accent' : 'text-[#FACC15]'
                    }`}
                  >
                    Curiosità
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-white/75 sm:text-sm md:text-base">
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

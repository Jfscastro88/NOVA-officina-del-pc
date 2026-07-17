import { useState } from 'react'
import { Lightbulb } from 'lucide-react'
import SlideImage from '../SlideImage'
import SlideImageLightbox from '../SlideImageLightbox'
import { resolveSlideImages } from '../slideImages'

export default function SlideSectionFrame({ section, children, subtitle }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const { primary, gallery, placeholder } = resolveSlideImages(section)
  const showMedia = Boolean(primary || placeholder)

  return (
    <>
      <article className="animate-fade-up overflow-x-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(124,58,237,0.15)] backdrop-blur-md sm:rounded-3xl">
        <div
          className={`grid min-w-0 gap-0 ${
            showMedia ? 'lg:grid-cols-2 lg:items-stretch xl:grid-cols-[1.15fr_1fr]' : ''
          }`}
        >
          {showMedia && (
            <div className="relative flex min-w-0 items-center p-3 sm:p-6 lg:p-10 xl:p-12">
              <div className="pointer-events-none absolute -left-10 -top-10 hidden h-40 w-40 rounded-full bg-accent/20 blur-3xl sm:block" />
              <div className="w-full min-w-0">
                <SlideImage
                  src={primary}
                  alt={section.title}
                  emoji={section.emoji}
                  galleryCount={gallery.length}
                  placeholder={placeholder}
                  onOpen={primary ? () => setLightboxOpen(true) : undefined}
                />
              </div>
            </div>
          )}

          <div className="flex min-w-0 flex-col p-3 sm:p-6 lg:p-10 xl:p-12">
            <div className="mb-3 flex flex-wrap items-start gap-2.5 sm:mb-5 sm:gap-4 lg:mb-6 lg:gap-5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-2xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl"
                role="img"
                aria-hidden="true"
              >
                {section.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-balance break-words font-display text-xl leading-tight text-white sm:text-3xl lg:text-4xl">
                  {section.title}
                </h2>
              </div>
            </div>

            {subtitle != null && (
              <div className="mb-3 text-sm leading-relaxed text-white/80 sm:mb-5 sm:text-base lg:mb-6 lg:text-lg">
                {subtitle}
              </div>
            )}

            {!subtitle && section.explanation && (
              <p className="mb-3 text-sm leading-relaxed text-white/80 sm:mb-5 sm:text-base lg:mb-6 lg:text-lg">
                {section.explanation}
              </p>
            )}

            <div className="min-w-0 flex-1">{children}</div>

            {section.curiosity && (
              <div className="mt-4 rounded-xl border border-[#FACC15]/20 bg-[#FACC15]/5 p-3 sm:mt-6 sm:rounded-2xl sm:p-4">
                <div className="mb-1.5 flex items-center gap-2 sm:mb-2">
                  <Lightbulb size={16} className="text-[#FACC15] sm:h-[18px] sm:w-[18px]" />
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-sm">
                    Curiosità
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-white/75 sm:text-sm md:text-base">
                  {section.curiosity}
                </p>
              </div>
            )}
          </div>
        </div>
      </article>

      {lightboxOpen && (gallery.length > 0 || primary) && (
        <SlideImageLightbox
          images={gallery.length > 0 ? gallery : primary ? [primary] : []}
          alt={section.title}
          emoji={section.emoji}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}

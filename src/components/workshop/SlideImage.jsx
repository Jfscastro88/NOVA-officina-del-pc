import { useEffect, useState } from 'react'
import { ZoomIn } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'

export default function SlideImage({ src, alt, emoji, galleryCount, onOpen, placeholder }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const hasGallery = galleryCount > 1
  const showPlaceholder = failed || !src

  useEffect(() => {
    setFailed(false)
    setLoaded(false)
  }, [src])

  if (showPlaceholder && placeholder) {
    return (
      <ImagePlaceholder
        id={placeholder.id}
        label={placeholder.label}
        aspectRatio={placeholder.aspectRatio ?? '16 / 9'}
        futureSrc={placeholder.futureSrc}
        emoji={emoji}
        onOpen={hasGallery || onOpen ? onOpen : undefined}
      />
    )
  }

  if (showPlaceholder) {
    return (
      <div
        className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/20 to-primary/40 text-5xl shadow-[0_8px_24px_rgba(124,58,237,0.15)] sm:text-7xl"
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
      className="group relative w-full cursor-pointer text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15] hover:shadow-[0_12px_36px_rgba(124,58,237,0.28)]"
      aria-label={`Ingrandisci immagine: ${alt}${hasGallery ? ` (${galleryCount} foto)` : ''}`}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-accent/25 bg-black/20 shadow-[0_8px_24px_rgba(124,58,237,0.15)] transition-colors duration-300 group-hover:border-accent/45 group-focus-visible:border-accent/45">
        {!loaded && (
          <div
            className="absolute inset-0 animate-pulse bg-gradient-to-br from-accent/25 via-white/5 to-primary/30"
            aria-hidden="true"
          />
        )}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setFailed(true)
            setLoaded(true)
          }}
          className={`h-full w-full object-contain transition-all duration-300 group-hover:scale-[1.02] ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <span className="absolute bottom-2 right-2 flex min-h-8 items-center gap-1 rounded-full border border-white/15 bg-black/65 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm transition-colors group-hover:border-[#FACC15]/40 group-hover:bg-black/75 sm:bottom-3 sm:right-3 sm:min-h-0 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs">
        <ZoomIn size={14} />
        {hasGallery ? `${galleryCount} foto` : 'Ingrandisci'}
      </span>
    </button>
  )
}

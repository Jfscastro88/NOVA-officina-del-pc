import { useState } from 'react'
import { ZoomIn } from 'lucide-react'

const frameClass =
  'flex min-h-[140px] max-h-[min(45vh,240px)] w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 sm:min-h-[220px] sm:max-h-none sm:rounded-2xl lg:min-h-[380px] xl:min-h-[440px]'

export default function SlideImage({ src, alt, emoji, galleryCount, onOpen }) {
  const [failed, setFailed] = useState(false)
  const hasGallery = galleryCount > 1

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

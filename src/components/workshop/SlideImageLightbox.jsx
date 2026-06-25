import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'

export default function SlideImageLightbox({ images, alt, emoji, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const [zoom, setZoom] = useState(1)
  const [failed, setFailed] = useState({})

  const list = images?.length ? images : []
  const current = list[index]
  const hasMultiple = list.length > 1

  const goPrev = () => {
    setIndex((i) => (i - 1 + list.length) % list.length)
    setZoom(1)
  }

  const goNext = () => {
    setIndex((i) => (i + 1) % list.length)
    setZoom(1)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasMultiple) {
        setIndex((i) => (i - 1 + list.length) % list.length)
        setZoom(1)
      }
      if (e.key === 'ArrowRight' && hasMultiple) {
        setIndex((i) => (i + 1) % list.length)
        setZoom(1)
      }
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [hasMultiple, list.length, onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Immagine: ${alt}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Chiudi"
      >
        <X size={20} />
      </button>

      <div className="absolute left-4 top-4 z-10 flex gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setZoom((z) => Math.min(z + 0.25, 2.5))
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Zoom avanti"
        >
          <ZoomIn size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setZoom((z) => Math.max(z - 0.25, 1))
          }}
          disabled={zoom <= 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
          aria-label="Zoom indietro"
        >
          <ZoomOut size={18} />
        </button>
      </div>

      {hasMultiple && (
        <p className="absolute top-5 left-1/2 z-10 -translate-x-1/2 text-sm font-semibold text-white/60">
          {index + 1} / {list.length}
        </p>
      )}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-accent/80 sm:left-6"
            aria-label="Immagine precedente"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-accent/80 sm:right-6"
            aria-label="Immagine successiva"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div
        className="flex max-h-[85vh] max-w-[90vw] items-center justify-center overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {failed[current] ? (
          <div className="flex h-64 w-64 items-center justify-center text-8xl">{emoji}</div>
        ) : (
          <img
            src={current}
            alt={alt}
            onError={() => setFailed((f) => ({ ...f, [current]: true }))}
            className="max-h-[85vh] max-w-full rounded-xl object-contain transition-transform duration-300"
            style={{ transform: `scale(${zoom})` }}
            draggable={false}
          />
        )}
      </div>
    </div>
  )
}

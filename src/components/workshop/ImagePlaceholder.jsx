import { ImageIcon } from 'lucide-react'

/**
 * Placeholder riutilizzabile per immagini non ancora disponibili.
 * Quando l'immagine reale sarà pronta, basta impostare `src` / `futureSrc`
 * e il componente SlideImage la mostrerà al posto di questo blocco.
 */
export default function ImagePlaceholder({
  id,
  label,
  aspectRatio = '16 / 9',
  futureSrc,
  emoji,
  className = '',
  onOpen,
}) {
  const content = (
    <div
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-accent/40 bg-gradient-to-br from-accent/15 via-[#0B1020]/80 to-primary/30 p-4 text-center sm:gap-4 sm:rounded-2xl sm:p-6 ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
      data-placeholder-id={id}
      data-future-src={futureSrc || undefined}
    >
      {emoji ? (
        <span className="text-4xl sm:text-5xl" aria-hidden="true">
          {emoji}
        </span>
      ) : (
        <ImageIcon className="h-10 w-10 text-accent/70 sm:h-12 sm:w-12" aria-hidden="true" />
      )}
      <p className="max-w-md text-xs font-semibold leading-snug text-white/80 sm:text-sm">
        {label}
      </p>
      {id && (
        <p className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-xs">
          {id}
        </p>
      )}
    </div>
  )

  if (onOpen) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="w-full text-left transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
        aria-label={`Apri galleria: ${label}`}
      >
        {content}
      </button>
    )
  }

  return content
}

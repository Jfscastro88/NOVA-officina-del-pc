import { useEffect } from 'react'
import { X, Lightbulb, Zap, Info, Target } from 'lucide-react'

const detailSections = [
  { key: 'what', label: "Cos'è", Icon: Info },
  { key: 'function', label: 'A cosa serve', Icon: Target },
  { key: 'importance', label: 'Perché è importante', Icon: Zap },
  { key: 'curiosity', label: 'Curiosità', Icon: Lightbulb },
]

export default function HardwareModal({ component, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  if (!component) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hardware-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-dark-purple/70 backdrop-blur-sm"
        aria-label="Chiudi"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border-2 border-accent/30 bg-gradient-to-b from-white to-[#f8f4ff] shadow-[0_24px_80px_rgba(26,8,61,0.45)] animate-fade-up sm:max-h-[90vh] sm:rounded-3xl">
        <div className="relative h-44 shrink-0 overflow-hidden bg-gradient-to-br from-primary to-dark-purple sm:h-52">
          <img
            src={component.image}
            alt={component.name}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/80 via-transparent to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/30 bg-dark-purple/60 text-white transition-colors hover:bg-yellow hover:text-dark-purple"
            aria-label="Chiudi"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <span className="inline-block rounded-full bg-yellow px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-dark-purple">
            Componente
          </span>
          <h2
            id="hardware-modal-title"
            className="mt-2 font-display text-2xl text-dark-purple sm:text-3xl"
          >
            {component.name}
          </h2>
          <p className="mt-1 text-base font-semibold text-accent">{component.short}</p>

          <div className="mt-5 space-y-3">
            {detailSections.map(({ key, label, Icon }) => (
              <div
                key={key}
                className="rounded-2xl border border-primary/10 bg-white p-4 shadow-sm"
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon size={15} strokeWidth={2.5} />
                  </span>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary">
                    {label}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-primary/80">{component[key]}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full rounded-full bg-yellow py-3 text-sm font-extrabold text-dark-purple btn-gaming transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  )
}

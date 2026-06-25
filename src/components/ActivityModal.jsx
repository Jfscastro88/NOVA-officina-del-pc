import { useEffect } from 'react'
import { X, Target, Zap, Gamepad2 } from 'lucide-react'

const detailSections = [
  { key: 'whatWeDo', label: 'Cosa faremo', Icon: Target },
  { key: 'why', label: 'Perché è utile', Icon: Zap },
  { key: 'activity', label: 'Attività pratica', Icon: Gamepad2 },
]

export default function ActivityModal({ activity, onClose }) {
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

  if (!activity) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="activity-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-dark-purple/70 backdrop-blur-sm"
        aria-label="Chiudi"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border-2 border-accent/30 bg-gradient-to-b from-white to-[#f8f4ff] shadow-[0_24px_80px_rgba(26,8,61,0.45)] animate-fade-up sm:max-h-[90vh] sm:rounded-3xl">
        <div
          className={`relative shrink-0 overflow-hidden bg-gradient-to-br ${activity.gradient} px-5 py-8 text-center sm:px-7 sm:py-10`}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.06%22/%3E%3C/svg%3E')] opacity-50" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/30 bg-dark-purple/40 text-white transition-colors hover:bg-yellow hover:text-dark-purple"
            aria-label="Chiudi"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
          <span className="relative text-5xl sm:text-6xl" role="img" aria-hidden="true">
            {activity.emoji}
          </span>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <h2
            id="activity-modal-title"
            className="font-display text-2xl text-dark-purple sm:text-3xl"
          >
            {activity.title}
          </h2>
          <p className="mt-1 text-base font-semibold text-accent">{activity.short}</p>
          <p className="mt-3 text-sm leading-relaxed text-primary/75">{activity.intro}</p>

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
                <p className="text-sm leading-relaxed text-primary/80">{activity[key]}</p>
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

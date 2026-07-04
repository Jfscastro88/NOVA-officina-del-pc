import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SlideNavigation({ current, total, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-between gap-2 sm:gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={current === 0}
        aria-label="Slide precedente"
        className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-extrabold text-white transition-all hover:border-accent hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-30 sm:gap-2 sm:px-5 sm:py-3"
      >
        <ChevronLeft size={20} />
        <span className="hidden sm:inline">Indietro</span>
      </button>

      <span
        className="min-w-[3.5rem] text-center text-xs font-semibold text-white/50 sm:text-sm"
        aria-live="polite"
      >
        {current + 1} / {total}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={current === total - 1}
        aria-label="Slide successiva"
        className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#FACC15] px-3 text-sm font-extrabold text-[#0B1020] btn-gaming transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30 sm:gap-2 sm:px-5 sm:py-3"
      >
        <span className="hidden sm:inline">Avanti</span>
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

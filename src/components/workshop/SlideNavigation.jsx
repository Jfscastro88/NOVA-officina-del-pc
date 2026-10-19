import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../i18n/useLanguage'

export default function SlideNavigation({ current, total, onPrev, onNext }) {
  const { ui } = useLanguage()

  return (
    <div className="flex items-center justify-between gap-2 sm:gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={current === 0}
        aria-label={ui.slides.prev}
        className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-extrabold text-white transition-all hover:border-accent hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-30 sm:gap-2 sm:px-5 sm:py-3"
      >
        <ChevronLeft size={20} className="rtl:rotate-180" />
        <span className="hidden sm:inline">{ui.slides.back}</span>
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
        aria-label={ui.slides.next}
        className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#FACC15] px-3 text-sm font-extrabold text-[#0B1020] btn-gaming transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30 sm:gap-2 sm:px-5 sm:py-3"
      >
        <span className="hidden sm:inline">{ui.slides.forward}</span>
        <ChevronRight size={20} className="rtl:rotate-180" />
      </button>
    </div>
  )
}

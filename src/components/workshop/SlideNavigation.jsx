import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SlideNavigation({ current, total, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={current === 0}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-extrabold text-white transition-all hover:border-accent hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft size={18} />
        Indietro
      </button>

      <span className="text-sm font-semibold text-white/50">
        {current + 1} / {total}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={current === total - 1}
        className="flex items-center gap-2 rounded-full bg-[#FACC15] px-5 py-3 text-sm font-extrabold text-[#0B1020] btn-gaming transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30"
      >
        Avanti
        <ChevronRight size={18} />
      </button>
    </div>
  )
}

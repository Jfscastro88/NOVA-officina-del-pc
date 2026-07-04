export default function SlideProgress({ current, total, time }) {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0

  return (
    <div className="w-full min-w-0">
      <div className="mb-1.5 flex items-center justify-between gap-2 text-xs font-semibold sm:mb-2 sm:gap-3 sm:text-sm">
        <span className="text-white/60">Progresso</span>
        <div className="flex items-center gap-2 sm:gap-3">
          {time && (
            <span className="hidden text-xs text-white/40 sm:inline">{time}</span>
          )}
          <span className="text-[#FACC15]">
            {current} / {total}
          </span>
        </div>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-white/10 sm:h-2.5"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Slide ${current} di ${total}`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-[#FACC15] transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

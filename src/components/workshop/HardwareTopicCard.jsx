export default function HardwareTopicCard({ slide, index, isActive, onClick, showTime = true, compact = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex shrink-0 items-center gap-2 overflow-hidden rounded-xl border text-left transition-all duration-200 sm:rounded-2xl ${
        compact
          ? 'min-h-11 max-w-[9.5rem] px-2.5 py-2 sm:max-w-44 sm:px-3'
          : 'min-h-11 w-full gap-3 px-3 py-2.5'
      } ${
        isActive
          ? 'border-[#FACC15]/50 bg-[#FACC15]/15 shadow-[0_0_20px_rgba(250,204,21,0.15)]'
          : 'border-white/10 bg-white/5 hover:border-accent/40 hover:bg-white/10'
      }`}
      aria-current={isActive ? 'true' : undefined}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-lg font-extrabold transition-colors sm:rounded-xl ${
          compact ? 'h-7 w-7 text-xs' : 'h-8 w-8 text-sm'
        } ${
          isActive
            ? 'bg-[#FACC15] text-[#0B1020]'
            : 'bg-accent/20 text-accent group-hover:bg-accent/30'
        }`}
      >
        {index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <p
          className={`font-bold text-white/90 ${
            compact
              ? 'line-clamp-2 text-[10px] leading-snug break-words sm:text-[11px]'
              : 'truncate text-xs'
          }`}
        >
          {slide.title}
        </p>
        {showTime && slide.time && (
          <p className="truncate text-[10px] text-white/40">{slide.time}</p>
        )}
      </div>
      <span className="shrink-0 text-sm sm:text-base" role="img" aria-hidden="true">
        {slide.emoji}
      </span>
    </button>
  )
}

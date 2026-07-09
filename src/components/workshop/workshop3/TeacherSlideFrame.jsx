import { Clock, Timer } from 'lucide-react'

export default function TeacherSlideFrame({ slide, children }) {
  return (
    <article className="animate-fade-up overflow-x-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(124,58,237,0.15)] backdrop-blur-md sm:rounded-3xl">
      <div className="flex min-w-0 flex-col p-3 sm:p-6 lg:p-8 xl:p-10">
        <div className="mb-3 flex flex-wrap items-center gap-2.5 sm:mb-4 sm:gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-2xl sm:h-12 sm:w-12 sm:rounded-2xl sm:text-3xl"
            role="img"
            aria-hidden="true"
          >
            {slide.emoji}
          </span>
          <div className="min-w-0 flex-1">
            {slide.time && (
              <div className="mb-1 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#FACC15] sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {slide.time}
                </span>
                {slide.duration && (
                  <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60 sm:text-xs">
                    <Timer size={12} />
                    {slide.duration}
                  </span>
                )}
              </div>
            )}
            <h2 className="text-balance break-words font-display text-xl leading-tight text-white sm:text-2xl lg:text-3xl">
              {slide.title}
            </h2>
          </div>
        </div>

        <div className="min-w-0">{children}</div>
      </div>
    </article>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, ChevronRight, MoreVertical, Presentation, SkipBack } from 'lucide-react'
import { workshopDays } from '../../data/workshops'
import { useLanguage } from '../../i18n/useLanguage'

export default function PresentationMenu({
  audience = 'student',
  currentDayId,
  onGoToFirst,
  studentPath,
}) {
  const { ui } = useLanguage()
  const [open, setOpen] = useState(false)
  const [daysOpen, setDaysOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
        setDaysOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        setDaysOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  const close = () => {
    setOpen(false)
    setDaysOpen(false)
  }

  const handleGoToFirst = () => {
    onGoToFirst?.()
    close()
  }

  const dayPathKey = audience === 'teacher' ? 'teacherPath' : 'studentPath'

  return (
    <div ref={menuRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => {
          setOpen((value) => !value)
          setDaysOpen(false)
        }}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={ui.slides.menu}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-accent hover:text-[#FACC15]"
      >
        <MoreVertical size={20} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute end-0 top-full z-50 mt-2 min-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020]/95 py-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          {onGoToFirst && (
            <button
              type="button"
              role="menuitem"
              onClick={handleGoToFirst}
              className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-start text-sm font-semibold text-white/80 transition-colors hover:bg-accent/20 hover:text-[#FACC15]"
            >
              <SkipBack size={16} className="shrink-0 rtl:rotate-180" />
              {ui.slides.first}
            </button>
          )}

          {audience === 'teacher' && studentPath && (
            <Link
              role="menuitem"
              to={studentPath}
              onClick={close}
              className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-start text-sm font-semibold text-white/80 transition-colors hover:bg-accent/20 hover:text-[#FACC15]"
            >
              <Presentation size={16} className="shrink-0" />
              {ui.slides.studentView}
            </Link>
          )}

          {(onGoToFirst || (audience === 'teacher' && studentPath)) && (
            <div className="my-1 border-t border-white/10" />
          )}

          <button
            type="button"
            role="menuitem"
            aria-expanded={daysOpen}
            onClick={() => setDaysOpen((value) => !value)}
            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-start text-sm font-semibold text-white/80 transition-colors hover:bg-accent/20 hover:text-[#FACC15]"
          >
            <CalendarDays size={16} className="shrink-0" />
            <span className="flex-1">{ui.slides.changeDay}</span>
            <ChevronRight
              size={14}
              className={`shrink-0 transition-transform ${daysOpen ? 'rotate-90' : ''}`}
            />
          </button>

          {daysOpen && (
            <ul className="border-t border-white/10 bg-white/3 py-1">
              {workshopDays.map((day) => {
                const isCurrent = day.id === currentDayId
                return (
                  <li key={day.id} role="none">
                    {isCurrent ? (
                      <span
                        role="menuitem"
                        aria-current="page"
                        className="block px-3.5 py-2 ps-10 text-sm font-semibold text-[#FACC15]"
                      >
                        {ui.days[day.id] ?? day.label}
                      </span>
                    ) : (
                      <Link
                        role="menuitem"
                        to={day[dayPathKey]}
                        onClick={close}
                        className="block px-3.5 py-2 ps-10 text-sm font-semibold text-white/70 transition-colors hover:bg-accent/20 hover:text-[#FACC15]"
                      >
                        {ui.days[day.id] ?? day.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

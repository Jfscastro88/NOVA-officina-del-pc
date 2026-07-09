import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import TeacherSlideFrame from './TeacherSlideFrame'
import TeacherSlideContent from './TeacherSlideContent'

function ChecklistItem({ label, checked, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-all sm:px-4 sm:py-3 ${
        checked
          ? 'border-green-400/40 bg-green-500/10 text-green-300'
          : 'border-white/10 bg-white/5 text-white/80 hover:border-accent/40'
      }`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
          checked ? 'border-green-400 bg-green-500 text-white' : 'border-white/20'
        }`}
      >
        {checked && <CheckCircle2 size={14} />}
      </span>
      {label}
    </button>
  )
}

function IntroSlide({ slide }) {
  const { intro } = slide
  return (
    <TeacherSlideFrame slide={slide}>
      <p className="mb-3 text-sm font-semibold text-[#FACC15]">
        Tempo previsto: {intro.duration}
      </p>
      <p className="mb-2 text-sm text-white/80">I ragazzi dovranno capire:</p>
      <ul className="space-y-1.5">
        {intro.objectives.map((obj) => (
          <li key={obj} className="flex items-start gap-2 text-sm text-white/85">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FACC15]" />
            {obj}
          </li>
        ))}
      </ul>
    </TeacherSlideFrame>
  )
}

function ChecklistSlide({ slide }) {
  const [checklist, setChecklist] = useState(() => {
    const stored = localStorage.getItem(slide.checklistKey)
    if (!stored) return {}
    try {
      return JSON.parse(stored)
    } catch {
      return {}
    }
  })

  const toggleCheck = (item) => {
    setChecklist((prev) => {
      const next = { ...prev, [item]: !prev[item] }
      localStorage.setItem(slide.checklistKey, JSON.stringify(next))
      return next
    })
  }

  return (
    <TeacherSlideFrame slide={slide}>
      <p className="mb-4 text-sm text-white/70">
        Spunta ogni voce prima di iniziare la lezione.
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {slide.checklist.map((item) => (
          <ChecklistItem
            key={item}
            label={item}
            checked={!!checklist[item]}
            onToggle={() => toggleCheck(item)}
          />
        ))}
      </div>
    </TeacherSlideFrame>
  )
}

function SectionSlide({ slide }) {
  return (
    <TeacherSlideFrame slide={slide}>
      <TeacherSlideContent section={slide} />
    </TeacherSlideFrame>
  )
}

export default function TeacherSlideRenderer({ slide }) {
  if (slide.type === 'intro') return <IntroSlide slide={slide} />
  if (slide.type === 'checklist') return <ChecklistSlide slide={slide} />
  return <SectionSlide slide={slide} />
}

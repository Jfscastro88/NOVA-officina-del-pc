import { useState, useEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Home, Presentation } from 'lucide-react'
import { getWorkshopDay, getStudentWorkshop } from '../data/workshops'
import WorkshopSlides from '../components/workshop/WorkshopSlides'
import SlideProgress from '../components/workshop/SlideProgress'
import SlideNavigation from '../components/workshop/SlideNavigation'
import HardwareTopicCard from '../components/workshop/HardwareTopicCard'
import WorkshopComingSoon from '../components/workshop/WorkshopComingSoon'

function StudentPresentation({ day, workshop }) {
  const { meta, slides } = workshop
  const [currentIndex, setCurrentIndex] = useState(0)
  const topicsRef = useRef(null)
  const total = slides.length
  const currentSlide = slides[currentIndex]

  const goTo = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, total - 1)))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goPrev = () => goTo(currentIndex - 1)
  const goNext = () => goTo(currentIndex + 1)

  useEffect(() => {
    const handleKey = (e) => {
      if (document.querySelector('[role="dialog"]')) return
      if (e.key === 'ArrowLeft') setCurrentIndex((i) => Math.max(0, i - 1))
      if (e.key === 'ArrowRight') setCurrentIndex((i) => Math.min(total - 1, i + 1))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [total])

  useEffect(() => {
    const el = topicsRef.current
    if (!el) return

    const onWheel = (e) => {
      if (el.scrollWidth <= el.clientWidth) return

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (delta === 0) return

      const atStart = el.scrollLeft <= 0 && delta < 0
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 && delta > 0
      if (atStart || atEnd) return

      e.preventDefault()
      el.scrollLeft += delta
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  useEffect(() => {
    const active = topicsRef.current?.children[currentIndex]
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [currentIndex])

  return (
    <div className="min-h-screen bg-[#0B1020] text-white noise-bg">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#FACC15]/5 blur-[100px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-5 py-4 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/70 transition-colors hover:border-accent hover:text-[#FACC15]"
          >
            <Home size={16} />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <div className="flex-1 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FACC15]">
              Presentazione Ragazzi
            </p>
            <h1 className="font-display text-sm tracking-wide text-white sm:text-base">
              {meta.title}
            </h1>
            <p className="text-xs font-semibold text-accent sm:text-sm">{meta.subtitle}</p>
          </div>

          <div className="w-[72px]" aria-hidden="true" />
        </div>
      </header>

      <div className="relative mx-auto max-w-4xl px-5 py-6 lg:px-8 lg:py-8">
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3">
          <Presentation size={18} className="shrink-0 text-[#FACC15]" />
          <p className="text-sm font-semibold text-white/80">
            {day.label} — presentazione visibile agli studenti
          </p>
        </div>

        <div className="mb-6">
          <SlideProgress current={currentIndex + 1} total={total} />
        </div>

        <main>
          <WorkshopSlides slide={currentSlide} slideKey={currentSlide.id} />

          <div className="mt-6">
            <SlideNavigation
              current={currentIndex}
              total={total}
              onPrev={goPrev}
              onNext={goNext}
            />
          </div>
        </main>

        <nav
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
          aria-label="Argomenti del workshop"
        >
          <h2 className="mb-3 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#FACC15]">
            Argomenti
          </h2>
          <div
            ref={topicsRef}
            className="flex w-full min-w-0 touch-pan-x gap-2 overflow-x-scroll overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25 [&::-webkit-scrollbar-track]:bg-transparent"
          >
            {slides.map((slide, index) => (
              <HardwareTopicCard
                key={slide.id}
                slide={slide}
                index={index}
                isActive={index === currentIndex}
                onClick={() => goTo(index)}
                showTime={false}
                compact
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default function WorkshopDay() {
  const { workshopId } = useParams()
  const day = getWorkshopDay(workshopId)
  const workshop = getStudentWorkshop(workshopId)

  if (!day) {
    return <Navigate to="/" replace />
  }

  if (!workshop) {
    return <WorkshopComingSoon day={day} audience="student" />
  }

  return <StudentPresentation day={day} workshop={workshop} />
}

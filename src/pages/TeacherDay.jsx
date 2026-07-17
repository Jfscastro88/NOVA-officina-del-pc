import { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Home, Menu, Presentation, X } from 'lucide-react'
import { getWorkshopDay, getTeacherWorkshop, getInteractiveWorkshop, isInteractiveWorkshop } from '../data/workshops'
import Workshop3Teacher from '../components/workshop/workshop3/Workshop3Teacher'
import SlideCard from '../components/workshop/SlideCard'
import WorkshopProgress from '../components/workshop/WorkshopProgress'
import HardwareTopicCard from '../components/workshop/HardwareTopicCard'
import PresentationMenu from '../components/workshop/PresentationMenu'
import WorkshopComingSoon from '../components/workshop/WorkshopComingSoon'

function TeacherPresentation({ day, workshop }) {
  const { meta, slides } = workshop
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const total = slides.length
  const currentSlide = slides[currentIndex]

  const goTo = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, total - 1)))
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goPrev = () => goTo(currentIndex - 1)
  const goNext = () => goTo(currentIndex + 1)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') setCurrentIndex((i) => Math.max(0, i - 1))
      if (e.key === 'ArrowRight') setCurrentIndex((i) => Math.min(total - 1, i + 1))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [total])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B1020] text-white noise-bg">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2.5 sm:gap-4 sm:px-5 sm:py-4 lg:px-8">
          <Link
            to="/"
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/70 transition-colors hover:border-accent hover:text-[#FACC15]"
          >
            <Home size={18} />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <div className="min-w-0 flex-1 text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#FACC15] sm:text-xs sm:tracking-[0.2em]">
              Area Docenti
            </p>
            <h1 className="truncate font-display text-xs tracking-wide text-white sm:text-base">
              {meta.title}
            </h1>
            <p className="truncate text-[11px] font-semibold text-accent sm:text-sm">{meta.subtitle}</p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <PresentationMenu
              audience="teacher"
              currentDayId={day.id}
              onGoToFirst={() => goTo(0)}
              studentPath={day.studentPath}
            />
            <button
              type="button"
              onClick={() => setSidebarOpen((open) => !open)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-accent lg:hidden"
              aria-label={sidebarOpen ? 'Chiudi menu argomenti' : 'Apri menu argomenti'}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:mb-5 sm:gap-3 lg:mb-6">
          <p className="text-xs font-semibold text-white/60 sm:text-sm">{day.label}</p>
          <Link
            to={day.studentPath}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-extrabold text-[#FACC15] transition-colors hover:border-accent hover:bg-accent/20 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <Presentation size={15} className="sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Presentazione ragazzi</span>
            <span className="sm:hidden">Ragazzi</span>
          </Link>
        </div>

        <div className="mb-3 sm:mb-5 lg:mb-6">
          <WorkshopProgress
            current={currentIndex + 1}
            total={total}
            time={currentSlide.time}
          />
        </div>

        <div className="flex gap-6 lg:gap-8">
          <aside
            className={`${
              sidebarOpen
                ? 'fixed inset-0 top-[73px] z-40 flex flex-col bg-[#0B1020]/95 p-5 backdrop-blur-xl lg:static lg:bg-transparent lg:p-0'
                : 'hidden lg:block'
            } lg:w-72 lg:shrink-0`}
          >
            {sidebarOpen && (
              <button
                type="button"
                className="fixed inset-0 -z-10 bg-black/50 lg:hidden"
                aria-label="Chiudi menu"
                onClick={() => setSidebarOpen(false)}
              />
            )}
            <nav
              className="relative z-10 flex max-h-[calc(100vh-120px)] flex-col gap-2 overflow-y-auto rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md lg:sticky lg:top-24"
              aria-label="Argomenti del workshop"
            >
              <h2 className="mb-2 px-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FACC15]">
                Argomenti
              </h2>
              {slides.map((slide, index) => (
                <HardwareTopicCard
                  key={slide.id}
                  slide={slide}
                  index={index}
                  isActive={index === currentIndex}
                  onClick={() => goTo(index)}
                />
              ))}
            </nav>
          </aside>

          <main className="min-w-0 flex-1">
            <SlideCard slide={currentSlide} slideKey={currentSlide.id} />

            <div className="mt-3 flex items-center justify-between gap-2 sm:mt-5 sm:gap-4 lg:mt-6">
              <button
                type="button"
                onClick={goPrev}
                disabled={currentIndex === 0}
                aria-label="Slide precedente"
                className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-extrabold text-white transition-all hover:border-accent hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-30 sm:gap-2 sm:px-5 sm:py-3"
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Indietro</span>
              </button>

              <span className="min-w-[3.5rem] text-center text-xs font-semibold text-white/50 sm:text-sm">
                Slide {currentIndex + 1} di {total}
              </span>

              <button
                type="button"
                onClick={goNext}
                disabled={currentIndex === total - 1}
                aria-label="Slide successiva"
                className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#FACC15] px-3 text-sm font-extrabold text-[#0B1020] btn-gaming transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30 sm:gap-2 sm:px-5 sm:py-3"
              >
                <span className="hidden sm:inline">Avanti</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default function TeacherDay() {
  const { workshopId } = useParams()
  const day = getWorkshopDay(workshopId)
  const workshop = getTeacherWorkshop(workshopId)

  if (!day) {
    return <Navigate to="/" replace />
  }

  if (isInteractiveWorkshop(workshopId)) {
    const interactive = getInteractiveWorkshop(workshopId)
    return <Workshop3Teacher day={day} workshop={interactive} />
  }

  if (!workshop) {
    return <WorkshopComingSoon day={day} audience="teacher" />
  }

  return <TeacherPresentation day={day} workshop={workshop} />
}

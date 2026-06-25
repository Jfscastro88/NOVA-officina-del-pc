import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Home, Menu, X } from 'lucide-react'
import { workshopMeta, workshopSlides } from '../data/workshopHardware'
import SlideCard from '../components/workshop/SlideCard'
import WorkshopProgress from '../components/workshop/WorkshopProgress'
import HardwareTopicCard from '../components/workshop/HardwareTopicCard'

export default function WorkshopHardware() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const total = workshopSlides.length
  const currentSlide = workshopSlides[currentIndex]

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
    <div className="min-h-screen bg-[#0B1020] text-white noise-bg">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/70 transition-colors hover:border-accent hover:text-[#FACC15]"
          >
            <Home size={16} />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <div className="flex-1 text-center">
            <h1 className="font-display text-sm tracking-wide text-white sm:text-base">
              {workshopMeta.title}
            </h1>
            <p className="text-xs font-semibold text-accent sm:text-sm">
              {workshopMeta.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-accent lg:hidden"
            aria-label={sidebarOpen ? 'Chiudi menu argomenti' : 'Apri menu argomenti'}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8 lg:py-8">
        <div className="mb-6">
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
              {workshopSlides.map((slide, index) => (
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

            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goPrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-extrabold text-white transition-all hover:border-accent hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft size={18} />
                Indietro
              </button>

              <span className="text-sm font-semibold text-white/50">
                Slide {currentIndex + 1} di {total}
              </span>

              <button
                type="button"
                onClick={goNext}
                disabled={currentIndex === total - 1}
                className="flex items-center gap-2 rounded-full bg-[#FACC15] px-5 py-3 text-sm font-extrabold text-[#0B1020] btn-gaming transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Avanti
                <ChevronRight size={18} />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { workshop27Meta, workshop27Slides } from '../data/workshop27GiugnoSlides'
import WorkshopSlides from '../components/workshop/WorkshopSlides'
import SlideProgress from '../components/workshop/SlideProgress'
import SlideNavigation from '../components/workshop/SlideNavigation'
import HardwareTopicCard from '../components/workshop/HardwareTopicCard'

export default function Workshop27Giugno() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = workshop27Slides.length
  const currentSlide = workshop27Slides[currentIndex]

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
            <h1 className="font-display text-sm tracking-wide text-white sm:text-base">
              {workshop27Meta.title}
            </h1>
            <p className="text-xs font-semibold text-accent sm:text-sm">
              {workshop27Meta.subtitle}
            </p>
          </div>

          <div className="w-[72px]" aria-hidden="true" />
        </div>
      </header>

      <div className="relative mx-auto max-w-4xl px-5 py-6 lg:px-8 lg:py-8">
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
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
          aria-label="Argomenti del workshop"
        >
          <h2 className="mb-3 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#FACC15]">
            Argomenti
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {workshop27Slides.map((slide, index) => (
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

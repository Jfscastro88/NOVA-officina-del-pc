import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal, flushSync } from 'react-dom'
import { CalendarDays, ChevronLeft, ChevronRight, Pause, Play, Presentation, X } from 'lucide-react'
import { openDayMeetings } from '../../data/openDay'

const SWIPE_THRESHOLD = 48
const SLIDE_MS = 5000
const CONTROLS_IDLE_MS = 3200

const PRESENTATION_CSS = `
@keyframes open-day-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes open-day-caption {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.open-day-progress {
  transform: scaleX(0);
  animation: open-day-progress ${SLIDE_MS}ms linear forwards;
}
.open-day-caption {
  animation: open-day-caption 0.6s ease both;
}
@media (prefers-reduced-motion: reduce) {
  .open-day-progress,
  .open-day-caption {
    animation: none;
  }
  .open-day-progress {
    transform: scaleX(0.2);
  }
}
`

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduced
}

function useCoarsePointer() {
  const [coarse, setCoarse] = useState(() => window.matchMedia('(pointer: coarse)').matches)

  useEffect(() => {
    const media = window.matchMedia('(pointer: coarse)')
    const onChange = () => setCoarse(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return coarse
}

function fullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null
}

function requestStageFullscreen(node) {
  const request = node.requestFullscreen || node.webkitRequestFullscreen
  if (!request) return Promise.reject(new Error('fullscreen-unavailable'))
  try {
    return Promise.resolve(request.call(node))
  } catch (error) {
    return Promise.reject(error)
  }
}

function exitStageFullscreen() {
  if (!fullscreenElement()) return Promise.resolve()
  const exit = document.exitFullscreen || document.webkitExitFullscreen
  if (!exit) return Promise.resolve()
  try {
    return Promise.resolve(exit.call(document))
  } catch {
    return Promise.resolve()
  }
}

export default function MeetingCarousel() {
  const meetings = openDayMeetings
  const count = meetings.length
  const [index, setIndex] = useState(0)
  const [announcement, setAnnouncement] = useState('')
  const [presentation, setPresentation] = useState(false)
  const [paused, setPaused] = useState(false)
  const [hoverHold, setHoverHold] = useState(false)
  const [focusHold, setFocusHold] = useState(false)
  const [inView, setInView] = useState(false)
  const [pageHidden, setPageHidden] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [controlsFocused, setControlsFocused] = useState(false)
  const indexRef = useRef(0)
  const presentationRef = useRef(false)
  const pausedRef = useRef(false)
  const hadFullscreen = useRef(false)
  const stageRef = useRef(null)
  const presentButtonRef = useRef(null)
  const pageRootRef = useRef(null)
  const hideTimer = useRef(0)
  const reducedMotion = usePrefersReducedMotion()
  const coarsePointer = useCoarsePointer()

  const goTo = useCallback((nextIndex, { announce = true } = {}) => {
    const normalized = (nextIndex + count) % count
    if (normalized === indexRef.current) return
    indexRef.current = normalized
    setIndex(normalized)
    if (!announce) return
    const item = meetings[normalized]
    setAnnouncement(`Incontro ${item.number} di 05, ${item.date}: ${item.title}`)
  }, [count, meetings])

  const step = useCallback((direction, options) => {
    goTo(indexRef.current + direction, options)
  }, [goTo])

  const stepRef = useRef(step)

  useEffect(() => {
    stepRef.current = step
    presentationRef.current = presentation
    pausedRef.current = paused
  }, [step, presentation, paused])

  const revealControls = () => {
    setControlsVisible(true)
    window.clearTimeout(hideTimer.current)
    if (coarsePointer) return
    hideTimer.current = window.setTimeout(() => setControlsVisible(false), CONTROLS_IDLE_MS)
  }

  const enterPresentation = () => {
    flushSync(() => {
      setPresentation(true)
      setPaused(false)
      setControlsVisible(true)
    })
    const node = stageRef.current
    if (!node) return
    requestStageFullscreen(node)
      .then(() => {
        hadFullscreen.current = true
      })
      .catch(() => {
        hadFullscreen.current = false
      })
  }

  const exitPresentation = () => {
    hadFullscreen.current = false
    setPresentation(false)
    setPaused(false)
    exitStageFullscreen()
    window.setTimeout(() => presentButtonRef.current?.focus(), 0)
  }

  useEffect(() => {
    const root = pageRootRef.current
    if (!root || typeof IntersectionObserver === 'undefined') return undefined
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.45 },
    )
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onVisibility = () => setPageHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    if (presentation || pageHidden || !inView || hoverHold || focusHold) return undefined
    const id = window.setTimeout(() => stepRef.current(1, { announce: false }), SLIDE_MS)
    return () => window.clearTimeout(id)
  }, [presentation, pageHidden, inView, hoverHold, focusHold, index])

  useEffect(() => {
    if (!presentation) return undefined
    const root = document.getElementById('root')
    const previousOverflow = document.body.style.overflow
    root?.setAttribute('inert', '')
    root?.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = 'hidden'
    stageRef.current?.focus({ preventScroll: true })
    if (!coarsePointer) {
      hideTimer.current = window.setTimeout(() => setControlsVisible(false), CONTROLS_IDLE_MS)
    }

    const onFullscreenChange = () => {
      if (fullscreenElement() === stageRef.current) {
        hadFullscreen.current = true
        return
      }
      if (hadFullscreen.current && presentationRef.current) {
        hadFullscreen.current = false
        setPresentation(false)
        setPaused(false)
        window.setTimeout(() => presentButtonRef.current?.focus(), 0)
      }
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    document.addEventListener('webkitfullscreenchange', onFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange)
      root?.removeAttribute('inert')
      root?.removeAttribute('aria-hidden')
      document.body.style.overflow = previousOverflow
      window.clearTimeout(hideTimer.current)
    }
  }, [presentation, coarsePointer])

  useEffect(() => {
    if (!presentation || !reducedMotion || paused || pageHidden) return undefined
    const id = window.setTimeout(() => stepRef.current(1), SLIDE_MS)
    return () => window.clearTimeout(id)
  }, [presentation, reducedMotion, paused, pageHidden, index])

  useEffect(() => {
    if (!presentation) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        exitPresentation()
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        revealControls()
        stepRef.current(-1)
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        revealControls()
        stepRef.current(1)
        return
      }
      if (event.key === 'Home') {
        event.preventDefault()
        goTo(0)
        return
      }
      if (event.key === 'End') {
        event.preventDefault()
        goTo(count - 1)
        return
      }
      if (event.key === ' ' || event.code === 'Space') {
        if (event.target instanceof Element && event.target.closest('button, a')) return
        event.preventDefault()
        setPaused((value) => !value)
        revealControls()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // Keyboard handler reads the latest refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presentation, count])

  const onSlideKeyDown = (event) => {
    if (presentation) return
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      step(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      step(1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      goTo(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      goTo(count - 1)
    }
  }

  const onPointerDown = (event) => {
    if (event.target instanceof Element && event.target.closest('button, a')) return
    if (event.pointerType === 'mouse' && event.button !== 0) return
    const origin = { x: event.clientX, y: event.clientY }

    const finish = (endEvent) => {
      window.removeEventListener('pointerup', finish)
      window.removeEventListener('pointercancel', cancel)
      const dx = endEvent.clientX - origin.x
      const dy = endEvent.clientY - origin.y
      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
      step(dx < 0 ? 1 : -1)
      if (presentationRef.current) revealControls()
    }

    const cancel = () => {
      window.removeEventListener('pointerup', finish)
      window.removeEventListener('pointercancel', cancel)
    }

    window.addEventListener('pointerup', finish)
    window.addEventListener('pointercancel', cancel)
  }

  const meeting = meetings[index]
  const controlsOn = coarsePointer || paused || controlsFocused || controlsVisible
  const controlClass = `transition-opacity duration-500 ${
    controlsOn
      ? 'opacity-100'
      : 'pointer-events-none opacity-0 [&_button]:pointer-events-none'
  } focus-within:pointer-events-auto focus-within:opacity-100 focus-within:[&_button]:pointer-events-auto`
  const iconButtonClass =
    'flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow'

  const presentationLayer =
    presentation &&
    createPortal(
      <div
        ref={stageRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Presentazione Open Day"
        tabIndex={-1}
        className="fixed inset-0 z-[90] h-dvh w-screen overflow-hidden bg-[#0b0418] text-white outline-none"
        onPointerMove={(event) => {
          if (event.pointerType === 'mouse') revealControls()
        }}
        onPointerDown={onPointerDown}
      >
        <p className="sr-only">
          Presentazione automatica. Ogni slide resta visibile per 5 secondi. Frecce per cambiare
          slide, spazio per mettere in pausa, esc per uscire.
        </p>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </p>

        <div className="absolute inset-0">
          {meetings.map((item, itemIndex) => {
            const active = itemIndex === index
            return (
              <img
                key={item.slug}
                src={item.image}
                alt={active ? item.alt : ''}
                width={1920}
                height={1080}
                draggable={false}
                decoding="async"
                loading={active || itemIndex === (index + 1) % count ? 'eager' : 'lazy'}
                fetchPriority={active ? 'high' : 'low'}
                aria-hidden={active ? undefined : true}
                className={`pointer-events-none absolute inset-0 h-full w-full object-cover select-none ${
                  reducedMotion ? '' : 'transition-opacity duration-700 ease-out'
                }`}
                style={{ opacity: active ? 1 : 0, objectPosition: item.objectPosition || 'center' }}
              />
            )
          })}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,4,24,0.94)_0%,rgba(11,4,24,0.78)_26%,rgba(11,4,24,0.18)_56%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0b0418]/55 to-transparent" />

        <div className={`absolute inset-x-0 top-[38%] z-10 ${controlClass}`}>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Incontro precedente"
            onFocus={() => setControlsFocused(true)}
            onBlur={() => setControlsFocused(false)}
            className={`${iconButtonClass} absolute left-[clamp(0.75rem,2.5vw,2.5rem)] -translate-y-1/2`}
          >
            <ChevronLeft size={26} strokeWidth={2.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Incontro successivo"
            onFocus={() => setControlsFocused(true)}
            onBlur={() => setControlsFocused(false)}
            className={`${iconButtonClass} absolute right-[clamp(0.75rem,2.5vw,2.5rem)] -translate-y-1/2`}
          >
            <ChevronRight size={26} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          onClick={exitPresentation}
          aria-label="Esci dalla presentazione"
          onFocus={() => setControlsFocused(true)}
          onBlur={() => setControlsFocused(false)}
          className={`${iconButtonClass} absolute top-[clamp(0.75rem,2vw,1.75rem)] right-[clamp(0.75rem,2.5vw,2.5rem)] z-10 ${controlClass}`}
        >
          <X size={22} strokeWidth={2.5} aria-hidden="true" />
        </button>

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-5 px-[clamp(1.15rem,4.5vw,6rem)] pt-28 pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-10">
          <div key={meeting.slug} className={reducedMotion ? 'max-w-5xl' : 'open-day-caption max-w-5xl'}>
            <p className="text-[clamp(0.95rem,1.2vw,1.6rem)] font-extrabold tracking-[0.18em] text-yellow">
              {meeting.date}
            </p>
            <h3 className="mt-2 max-w-[14ch] font-display text-[clamp(2.7rem,4.6vw,7rem)] leading-[0.95] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.45)]">
              {meeting.title}
            </h3>
            <p className="mt-4 max-w-3xl text-[clamp(1.15rem,1.8vw,2.6rem)] font-semibold leading-snug text-white/90">
              {meeting.subtitle}
            </p>
          </div>

          <div
            className={`mb-1 flex shrink-0 items-center gap-3 ${controlClass}`}
            onFocus={() => setControlsFocused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setControlsFocused(false)
            }}
          >
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? 'Riprendi la presentazione' : 'Metti in pausa la presentazione'}
              aria-pressed={paused}
              className={iconButtonClass}
            >
              {paused ? (
                <Play size={22} strokeWidth={2.5} aria-hidden="true" />
              ) : (
                <Pause size={22} strokeWidth={2.5} aria-hidden="true" />
              )}
            </button>
            <span className="min-w-14 text-center text-sm font-extrabold tracking-wide text-white/85" aria-hidden="true">
              {index + 1} / {count}
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 h-1 bg-white/20" aria-hidden="true">
          <div
            key={index}
            data-slide={index}
            className="open-day-progress h-full origin-left bg-yellow"
            style={{ animationPlayState: paused || pageHidden ? 'paused' : 'running' }}
            onAnimationEnd={(event) => {
              if (event.target !== event.currentTarget) return
              if (reducedMotion || pausedRef.current) return
              if (Number(event.currentTarget.dataset.slide) !== indexRef.current) return
              stepRef.current(1)
            }}
          />
        </div>
      </div>,
      document.body,
    )

  return (
    <>
      <style>{PRESENTATION_CSS}</style>
      <div
        ref={pageRootRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="I cinque incontri del workshop"
        aria-hidden={presentation ? true : undefined}
        inert={presentation ? true : undefined}
        onKeyDown={onSlideKeyDown}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setHoverHold(true)
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') setHoverHold(false)
        }}
        onFocus={() => setFocusHold(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocusHold(false)
        }}
      >
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {presentation ? '' : announcement}
        </p>

        <div className="mb-5 flex justify-center">
          <button
            ref={presentButtonRef}
            type="button"
            onClick={enterPresentation}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-extrabold text-dark-purple btn-gaming transition-transform hover:-translate-y-1 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Presentation size={18} strokeWidth={2.5} aria-hidden="true" />
            Presentazione
          </button>
        </div>

        <div className="card-depth relative overflow-hidden rounded-3xl border-2 border-white bg-white">
          <div className="overflow-hidden">
            <div
              id="open-day-track"
              className="flex w-full"
              style={{
                transform: `translate3d(-${index * 100}%, 0, 0)`,
                transition: reducedMotion
                  ? 'none'
                  : 'transform 480ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {meetings.map((item, itemIndex) => (
                <article
                  key={item.slug}
                  id={`incontro-${item.slug}`}
                  className="w-full shrink-0 grow-0 basis-full"
                  aria-roledescription="slide"
                  aria-label={`Incontro ${item.number} di 05: ${item.title}`}
                  aria-hidden={itemIndex === index ? undefined : true}
                  inert={itemIndex === index ? undefined : true}
                >
                  <div
                    className="relative aspect-video w-full cursor-grab bg-primary/10 active:cursor-grabbing"
                    style={{ touchAction: 'pan-y' }}
                    onPointerDown={onPointerDown}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={1600}
                      height={900}
                      draggable={false}
                      decoding="async"
                      loading={itemIndex === 0 ? 'eager' : 'lazy'}
                      fetchPriority={itemIndex === 0 ? 'high' : 'low'}
                      className="pointer-events-none h-full w-full object-cover select-none"
                      style={{ objectPosition: item.objectPosition || 'center' }}
                    />
                  </div>

                  <div className="flex min-h-[18.5rem] flex-col px-4 py-5 sm:min-h-[16rem] sm:px-8 sm:py-7 md:min-h-[14.5rem] lg:min-h-[13.5rem] lg:px-10 lg:py-8">
                    <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-extrabold tracking-wide text-primary">
                      <CalendarDays size={14} aria-hidden="true" />
                      {item.date}
                    </p>
                    <h3 className="mt-4 font-display text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.05] text-dark-purple">
                      <span className="mb-1 block text-[0.55em] tracking-wide text-accent">
                        {item.number}
                      </span>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base font-semibold leading-snug text-primary sm:text-lg">
                      {item.subtitle}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-primary/80 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 aspect-video">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Incontro precedente"
              aria-controls="open-day-track"
              className="pointer-events-auto absolute top-1/2 left-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-dark-purple shadow-[0_4px_0_rgba(26,8,61,0.28)] transition-transform hover:-translate-y-[calc(50%+2px)] hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow sm:left-4"
            >
              <ChevronLeft size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Incontro successivo"
              aria-controls="open-day-track"
              className="pointer-events-auto absolute top-1/2 right-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-dark-purple shadow-[0_4px_0_rgba(26,8,61,0.28)] transition-transform hover:-translate-y-[calc(50%+2px)] hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow sm:right-4"
            >
              <ChevronRight size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>

          <div
            className="flex items-center justify-center gap-1 px-3 pt-1 pb-3 sm:pb-4"
            role="group"
            aria-label="Seleziona incontro"
          >
            {meetings.map((item, itemIndex) => {
              const selected = itemIndex === index
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => goTo(itemIndex)}
                  aria-label={`Vai all'incontro ${item.number}: ${item.title}`}
                  aria-current={selected ? 'true' : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span
                    className={`block h-2.5 rounded-full ${
                      selected ? 'w-6 bg-accent' : 'w-2.5 bg-primary/35'
                    } ${reducedMotion ? '' : 'transition-all duration-300'}`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>
      {presentationLayer}
    </>
  )
}

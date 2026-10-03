import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTopButton from '../components/workshop/BackToTopButton'
import WaveDivider from '../components/WaveDivider'
import { ArrowScribble, BrushStroke, Spark, Squiggle, Star } from '../components/Doodles'
import MeetingCarousel from '../components/open-day/MeetingCarousel'
import {
  OPEN_DAY_DESCRIPTION,
  OPEN_DAY_TITLE,
  learningOutcomes,
} from '../data/openDay'

function useOpenDayMetadata() {
  useEffect(() => {
    const previousTitle = document.title
    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content') ?? ''

    document.title = OPEN_DAY_TITLE
    if (meta) meta.setAttribute('content', OPEN_DAY_DESCRIPTION)

    return () => {
      document.title = previousTitle
      if (meta) meta.setAttribute('content', previousDescription)
    }
  }, [])
}

export default function OpenDay() {
  useOpenDayMetadata()

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
      <main>
        <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-gradient-to-br from-dark-purple via-primary to-[#2d1268] noise-bg lg:min-h-[76vh]">
          <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-accent/25 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow/10 blur-[80px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-[90px]" />

          <Star className="pointer-events-none absolute left-[8%] top-[18%] h-7 w-7 text-yellow animate-float" />
          <Star className="pointer-events-none absolute right-[12%] top-[16%] h-5 w-5 text-yellow/80 animate-float-delayed" />
          <ArrowScribble className="pointer-events-none absolute bottom-[18%] left-[6%] hidden h-10 w-20 text-yellow/70 animate-wiggle sm:block" />
          <Squiggle className="pointer-events-none absolute right-[7%] top-[58%] hidden h-8 w-28 text-accent/60 sm:block" />
          <Spark className="pointer-events-none absolute right-[18%] bottom-[22%] h-8 w-8 text-yellow/50 animate-pulse-glow" />

          <div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center lg:px-10 lg:py-28">
            <span className="inline-block rounded-full border-2 border-yellow/30 bg-yellow px-4 py-1.5 text-xs font-extrabold tracking-widest text-dark-purple shadow-[0_3px_0_#e6bf00]">
              Open Day
            </span>

            <h1 className="mt-6 font-display text-[clamp(2.15rem,10vw,5.5rem)] leading-[0.95] tracking-tight poster-shadow">
              <span className="block text-white text-stroke">OFFICINA</span>
              <span className="block text-yellow">DEL PC</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-snug text-yellow/95 sm:text-xl md:text-2xl">
              Scopri cosa c&apos;è davvero dentro un computer e come prende vita.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Un percorso pratico per conoscere l&apos;hardware, assemblare un PC, scoprire come
              funziona un sistema operativo e capire cosa succede dietro le tecnologie che
              utilizziamo ogni giorno.
            </p>

            <div className="mt-8">
              <a
                href="#percorso"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-yellow px-7 py-3.5 text-sm font-extrabold text-dark-purple btn-gaming transition-transform hover:-translate-y-1 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Scopri il percorso
              </a>
            </div>

            <div className="mx-auto mt-6 h-2 w-48 rounded-full bg-gradient-to-r from-transparent via-yellow/60 to-transparent" />
          </div>
        </section>

        <WaveDivider className="text-[#f0eaff]" />

        <section
          id="percorso"
          aria-labelledby="percorso-title"
          className="relative scroll-mt-36 overflow-hidden bg-[#f0eaff] px-5 py-20 lg:px-8"
        >
          <Star className="pointer-events-none absolute right-[8%] top-12 h-6 w-6 text-yellow animate-float" />
          <ArrowScribble className="pointer-events-none absolute bottom-16 left-[5%] h-8 w-16 text-accent/40" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 text-center animate-fade-up motion-reduce:animate-none sm:mb-14">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                Il percorso
              </span>
              <h2
                id="percorso-title"
                className="mt-3 font-display text-[clamp(1.9rem,6vw,3.75rem)] leading-[1.05] text-dark-purple"
              >
                5 incontri.{' '}
                <span className="highlight-brush text-primary">Un PC da scoprire.</span>
              </h2>
              <BrushStroke className="mx-auto mt-2 h-4 w-40 text-yellow" />
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary/80 md:text-lg">
                Dai componenti hardware all&apos;intelligenza artificiale, un percorso pratico per
                capire come funziona davvero la tecnologia.
              </p>
            </div>

            <div className="mx-auto max-w-5xl animate-fade-up motion-reduce:animate-none">
              <MeetingCarousel />
            </div>
          </div>
        </section>

        <section
          id="cosa-imparerai"
          aria-labelledby="imparerai-title"
          className="relative overflow-hidden bg-[#f0eaff] px-5 pb-20 lg:px-8"
        >
          <Spark className="pointer-events-none absolute left-[7%] top-4 h-7 w-7 text-accent/50 animate-pulse-glow" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 text-center animate-fade-up motion-reduce:animate-none">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                In laboratorio
              </span>
              <h2
                id="imparerai-title"
                className="mt-3 font-display text-[clamp(1.9rem,6vw,3.75rem)] leading-[1.05] text-dark-purple"
              >
                Cosa <span className="highlight-brush text-primary">imparerai</span>
              </h2>
              <BrushStroke className="mx-auto mt-2 h-4 w-40 text-yellow" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {learningOutcomes.map((item, itemIndex) => (
                <article
                  key={item.title}
                  className={`card-depth animate-fade-up motion-reduce:animate-none rounded-3xl border-2 border-white bg-white p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${item.rotate}`}
                  style={{ animationDelay: `${itemIndex * 80}ms` }}
                >
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-2xl shadow-lg`}
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </div>
                  <h3 className="font-display text-lg leading-tight text-dark-purple sm:text-xl">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider flip className="text-[#f0eaff]" />

        <section
          aria-labelledby="chiusura-title"
          className="relative overflow-hidden bg-gradient-to-b from-dark-purple to-primary px-5 py-16 noise-bg lg:px-8 lg:py-20"
        >
          <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-accent/20 blur-[80px]" />
          <Squiggle className="pointer-events-none absolute right-[8%] top-10 h-6 w-24 text-yellow/40" />

          <div className="relative mx-auto max-w-3xl text-center animate-fade-up motion-reduce:animate-none">
            <h2
              id="chiusura-title"
              className="font-display text-[clamp(1.8rem,5vw,3.25rem)] leading-[1.1] text-white poster-shadow"
            >
              Dall&apos;hardware <span className="text-yellow">all&apos;intelligenza artificiale.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Un percorso per capire non solo come usare un computer, ma cosa succede davvero al
              suo interno.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-yellow px-7 py-3.5 text-sm font-extrabold text-dark-purple btn-gaming transition-transform hover:-translate-y-1 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Scopri l&apos;Officina del PC
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      </div>
      <BackToTopButton />
    </>
  )
}

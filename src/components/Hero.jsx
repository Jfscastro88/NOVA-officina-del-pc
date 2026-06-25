import GamingPcVisual from './GamingPcVisual'
import { ArrowScribble, Spark, Squiggle, Star } from './Doodles'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-gradient-to-br from-dark-purple via-primary to-[#2d1268] noise-bg"
    >
      {/* Organic blobs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow/10 blur-[80px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-[90px]" />

      {/* Doodles */}
      <Star className="pointer-events-none absolute left-[6%] top-[18%] h-7 w-7 text-yellow animate-float" />
      <Star className="pointer-events-none absolute right-[12%] top-[14%] h-5 w-5 text-yellow/80 animate-float-delayed" />
      <ArrowScribble className="pointer-events-none absolute bottom-[22%] left-[4%] h-10 w-20 text-yellow/70 animate-wiggle" />
      <Squiggle className="pointer-events-none absolute right-[6%] top-[55%] h-8 w-28 text-accent/60" />
      <Spark className="pointer-events-none absolute left-[18%] bottom-[30%] h-8 w-8 text-yellow/50 animate-pulse-glow" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:py-24">
        {/* Left */}
        <div className="animate-fade-up z-10 text-center lg:text-left">
          <span className="inline-block rounded-full border-2 border-yellow/30 bg-yellow px-4 py-1.5 text-xs font-extrabold tracking-widest text-dark-purple shadow-[0_3px_0_#e6bf00]">
            LABORATORIO 12–17 ANNI
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.8rem,10vw,5.5rem)] leading-[0.95] tracking-tight poster-shadow">
            <span className="block text-white text-stroke">OFFICINA</span>
            <span className="block text-yellow">DEL PC</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg lg:mx-0">
            Smontare, esplorare e ricostruire il PC:
            <br className="hidden sm:block" />
            laboratorio pratico su hardware e sistemi operativi.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#cosa-faremo"
              className="rounded-full bg-yellow px-7 py-3.5 text-sm font-extrabold text-dark-purple btn-gaming transition-transform hover:-translate-y-1 hover:scale-105"
            >
              Scopri il laboratorio
            </a>
            <a
              href="#incontri"
              className="rounded-full border-2 border-white/40 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-yellow hover:bg-white/10 hover:scale-105"
            >
              Il programma
            </a>
          </div>

          {/* Yellow highlight scribble under title area */}
          <div className="mx-auto mt-6 h-2 w-48 rounded-full bg-gradient-to-r from-transparent via-yellow/60 to-transparent lg:mx-0" />
        </div>

        {/* Right */}
        <div className="animate-fade-up relative z-10 [animation-delay:150ms]">
          <GamingPcVisual />
        </div>
      </div>
    </section>
  )
}

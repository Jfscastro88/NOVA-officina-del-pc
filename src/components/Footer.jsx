import { Star, Squiggle, BrushStroke } from './Doodles'

const badges = ['Pratico', 'Divertente', 'Istruttivo', 'Collaborativo']

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primary via-dark-purple to-[#0d0420] px-5 pb-8 pt-20 noise-bg lg:px-8">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-yellow/10 blur-[70px]" />

      <Star className="pointer-events-none absolute left-[10%] top-[20%] h-7 w-7 text-yellow animate-float" />
      <Squiggle className="pointer-events-none absolute bottom-[35%] right-[8%] h-6 w-24 text-yellow/50" />

      <div className="relative mx-auto max-w-3xl text-center animate-fade-up">
        <h2 className="font-display text-4xl text-white poster-shadow md:text-5xl lg:text-6xl">
          Pronto a metterti{' '}
          <span className="text-yellow">all&apos;opera?</span>
        </h2>

        <BrushStroke className="mx-auto mt-4 h-4 w-48 text-accent/60" />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border-2 border-white/25 bg-white/10 px-5 py-2 text-sm font-bold text-white transition-all hover:scale-105 hover:border-yellow hover:bg-yellow hover:text-dark-purple"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="mt-8 text-lg text-white/75 md:text-xl">
          Segui il laboratorio e porta la tua curiosità!
        </p>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <span className="font-display text-sm tracking-wide text-white">
          OFFICINA DEL PC
        </span>
        <nav className="flex gap-6" aria-label="Collegamenti rapidi">
          {['Glossario', 'Quiz', 'Galleria'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-semibold text-white/60 transition-colors hover:text-yellow"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

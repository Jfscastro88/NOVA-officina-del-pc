import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  HelpCircle,
  Lightbulb,
  ListChecks,
  MessageCircle,
  Package,
  Target,
  Timer,
  Wrench,
  XCircle,
} from 'lucide-react'
import QuizBox from './QuizBox'
import CompatibilityTable from './CompatibilityTable'
import QuickQuizReveal from './QuickQuizReveal'

function TeacherSection({ icon: Icon, title, color, children }) {
  return (
    <div className={`mt-4 rounded-xl border p-3 sm:mt-6 sm:rounded-2xl sm:p-4 ${color}`}>
      <div className="mb-2 flex items-center gap-2 sm:mb-3">
        <Icon size={16} className="sm:h-[18px] sm:w-[18px]" />
        <h3 className="text-xs font-extrabold uppercase tracking-wider sm:text-sm">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function BulletList({ items, bulletColor = 'bg-[#FACC15]' }) {
  return (
    <ul className="space-y-1.5 sm:space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs text-white/90 sm:gap-2.5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
        >
          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${bulletColor}`} />
          <span className="min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function SlideCard({ slide, slideKey }) {
  return (
    <article
      key={slideKey}
      className="animate-fade-up overflow-x-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:rounded-3xl sm:p-6 md:p-8"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2.5 sm:mb-6 sm:gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-2xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl"
          role="img"
          aria-hidden="true"
        >
          {slide.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#FACC15] sm:gap-3 sm:text-sm">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Clock size={14} className="sm:h-[15px] sm:w-[15px]" />
              {slide.time}
            </span>
            {slide.duration && (
              <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60 sm:gap-1.5 sm:px-2.5 sm:text-xs">
                <Timer size={12} className="sm:h-[13px] sm:w-[13px]" />
                {slide.duration}
              </span>
            )}
          </div>
          <h2 className="mt-0.5 break-words font-display text-xl text-white sm:mt-1 sm:text-2xl md:text-3xl">
            {slide.title}
          </h2>
        </div>
      </div>

      {slide.objective && (
        <TeacherSection
          icon={Target}
          title="Obiettivo"
          color="border-accent/30 bg-accent/10 text-accent"
        >
          <p className="text-sm leading-relaxed text-white/90">{slide.objective}</p>
        </TeacherSection>
      )}

      {slide.explanation && (
        <TeacherSection
          icon={ListChecks}
          title="Spiegazione"
          color="border-white/10 bg-white/5 text-white/70"
        >
          <p className="text-base leading-relaxed text-white/80">{slide.explanation}</p>
        </TeacherSection>
      )}

      {slide.compatibilityTable?.length > 0 && (
        <TeacherSection
          icon={ListChecks}
          title="Tabella compatibilità"
          color="border-accent/30 bg-accent/10 text-accent"
        >
          <CompatibilityTable rows={slide.compatibilityTable} />
        </TeacherSection>
      )}

      {slide.points?.length > 0 && (
        <TeacherSection
          icon={ListChecks}
          title="Punti principali"
          color="border-white/10 bg-white/5 text-accent"
        >
          <BulletList items={slide.points} />
        </TeacherSection>
      )}

      {slide.components?.length > 0 && (
        <TeacherSection
          icon={Wrench}
          title="Mini gioco — componenti"
          color="border-green-400/20 bg-green-500/5 text-green-400"
        >
          <ul className="space-y-3">
            {slide.components.map((component) => (
              <li
                key={component.name}
                className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white/90"
              >
                <p className="font-bold text-white">{component.name}</p>
                <p className="mt-2">
                  <span className="font-semibold text-accent">Funzione: </span>
                  {component.funzione}
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-accent">Posizione: </span>
                  {component.posizione}
                </p>
              </li>
            ))}
          </ul>
        </TeacherSection>
      )}

      {slide.errorCompare?.length > 0 && (
        <TeacherSection
          icon={AlertTriangle}
          title="Errore vs Corretto"
          color="border-red-400/20 bg-red-500/5 text-red-400"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {slide.errorCompare.map((item) => (
              <div
                key={item.error}
                className="rounded-xl border border-white/5 bg-white/5 p-3 text-sm"
              >
                <div className="flex items-start gap-2 text-red-300">
                  <XCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{item.error}</span>
                </div>
                <div className="mt-2 flex items-start gap-2 text-green-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <span>{item.correct}</span>
                </div>
              </div>
            ))}
          </div>
        </TeacherSection>
      )}

      {slide.examples?.length > 0 && (
        <TeacherSection
          icon={Wrench}
          title="Esempi pratici"
          color="border-green-400/20 bg-green-500/5 text-green-400"
        >
          <BulletList items={slide.examples} bulletColor="bg-green-400" />
        </TeacherSection>
      )}

      {slide.questions?.length > 0 && (
        <TeacherSection
          icon={MessageCircle}
          title="Domande da fare ai ragazzi"
          color="border-[#FACC15]/20 bg-[#FACC15]/5 text-[#FACC15]"
        >
          <BulletList items={slide.questions} />
        </TeacherSection>
      )}

      {slide.commonErrors?.length > 0 && (
        <TeacherSection
          icon={AlertTriangle}
          title="Errori comuni"
          color="border-red-400/20 bg-red-500/5 text-red-400"
        >
          <BulletList items={slide.commonErrors} bulletColor="bg-red-400" />
        </TeacherSection>
      )}

      {slide.curiosity && (
        <TeacherSection
          icon={Lightbulb}
          title="Curiosità"
          color="border-[#FACC15]/20 bg-[#FACC15]/5 text-[#FACC15]"
        >
          <p className="text-sm leading-relaxed text-white/75">{slide.curiosity}</p>
        </TeacherSection>
      )}

      {slide.material?.length > 0 && (
        <TeacherSection
          icon={Package}
          title="Materiale da mostrare"
          color="border-white/10 bg-white/5 text-white/60"
        >
          <ul className="grid gap-2 sm:grid-cols-2">
            {slide.material.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-sm text-white/80"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/20 text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </TeacherSection>
      )}

      {slide.quickQuestions?.length > 0 && (
        <TeacherSection
          icon={HelpCircle}
          title="Quiz veloce — risposte in arrivo"
          color="border-[#FACC15]/20 bg-[#FACC15]/5 text-[#FACC15]"
        >
          <QuickQuizReveal questions={slide.quickQuestions} delaySeconds={5} />
        </TeacherSection>
      )}

      {slide.quiz && (
        <div className="mt-6">
          <div className="mb-2 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#FACC15]">
            <HelpCircle size={18} />
            Quiz interattivo
          </div>
          <QuizBox key={slideKey} quiz={slide.quiz} />
        </div>
      )}
    </article>
  )
}

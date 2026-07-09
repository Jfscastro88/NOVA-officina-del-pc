import { useState } from 'react'
import {
  AlertTriangle,
  Clock,
  Lightbulb,
  MessageCircle,
  Target,
  Wrench,
  ListChecks,
} from 'lucide-react'

function InfoBox({ icon: Icon, title, color, children }) {
  return (
    <div className={`rounded-xl border p-3 sm:rounded-2xl sm:p-4 ${color}`}>
      <div className="mb-2 flex items-center gap-2">
        <Icon size={16} className="sm:h-[18px] sm:w-[18px]" />
        <h4 className="text-xs font-extrabold uppercase tracking-wider sm:text-sm">{title}</h4>
      </div>
      {children}
    </div>
  )
}

function BulletList({ items, bulletColor = 'bg-[#FACC15]' }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs text-white/90 sm:text-sm"
        >
          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${bulletColor}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function TeacherNotes({ notesKey }) {
  const [notes, setNotes] = useState(() => localStorage.getItem(notesKey) ?? '')

  const save = (value) => {
    setNotes(value)
    localStorage.setItem(notesKey, value)
  }

  return (
    <InfoBox icon={ListChecks} title="Note personali" color="border-white/10 bg-white/5 text-white/70">
      <textarea
        value={notes}
        onChange={(e) => save(e.target.value)}
        placeholder="Scrivi qui le tue note per questa sezione..."
        rows={3}
        className="w-full resize-y rounded-xl border border-white/10 bg-[#0B1020]/50 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
      />
    </InfoBox>
  )
}

export default function TeacherSlideContent({ section }) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {section.objective && (
        <InfoBox icon={Target} title="Obiettivo" color="border-accent/30 bg-accent/10 text-accent">
          <p className="text-sm text-white/90">{section.objective}</p>
        </InfoBox>
      )}

      {section.howToExplain && (
        <InfoBox icon={MessageCircle} title="Come spiegarlo" color="border-white/10 bg-white/5 text-white/70">
          <p className="text-sm leading-relaxed text-white/85">{section.howToExplain}</p>
        </InfoBox>
      )}

      {section.bootSteps?.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
            Passaggi del boot
          </h4>
          {section.bootSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4"
            >
              <p className="font-bold text-white">{step.title}</p>
              <p className="mt-2 text-sm text-white/80">
                <span className="font-semibold text-accent">Semplice: </span>
                {step.simple}
              </p>
              <p className="mt-1 text-xs text-white/60">
                <span className="font-semibold">Tecnico: </span>
                {step.technical}
              </p>
              <p className="mt-2 text-xs text-[#FACC15]/80">
                <Lightbulb size={12} className="mr-1 inline" />
                {step.curiosity}
              </p>
              <p className="mt-2 text-xs italic text-white/50">❓ {step.question}</p>
            </div>
          ))}
        </div>
      )}

      {section.examples?.length > 0 && (
        <InfoBox icon={Wrench} title="Esempi" color="border-green-400/20 bg-green-500/5 text-green-400">
          <BulletList items={section.examples} bulletColor="bg-green-400" />
        </InfoBox>
      )}

      {section.installPoints?.length > 0 && (
        <div className="space-y-2">
          {section.installPoints.map((pt) => (
            <div
              key={pt.point}
              className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-white">{pt.point}</span>
                <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
                  <Clock size={11} />
                  {pt.time}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/80">{pt.say}</p>
              {pt.questions?.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {pt.questions.map((q) => (
                    <li key={q} className="text-xs text-[#FACC15]/80">
                      ❓ {q}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {section.activities?.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-accent/10">
                <th className="px-3 py-2 font-extrabold text-[#FACC15]">Missione</th>
                <th className="px-3 py-2 font-extrabold text-[#FACC15]">Tempo</th>
                <th className="px-3 py-2 font-extrabold text-[#FACC15]">Obiettivo</th>
                <th className="px-3 py-2 font-extrabold text-[#FACC15]">Materiale</th>
                <th className="px-3 py-2 font-extrabold text-[#FACC15]">Difficoltà</th>
              </tr>
            </thead>
            <tbody>
              {section.activities.map((act) => (
                <tr key={act.mission} className="border-b border-white/5">
                  <td className="px-3 py-2 font-semibold text-white">{act.mission}</td>
                  <td className="px-3 py-2 text-white/70">{act.time}</td>
                  <td className="px-3 py-2 text-white/70">{act.goal}</td>
                  <td className="px-3 py-2 text-white/70">{act.material}</td>
                  <td className="px-3 py-2">{act.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.quizAnswers?.length > 0 && (
        <div className="space-y-3">
          {section.quizAnswers.map((qa) => (
            <div
              key={qa.question}
              className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4"
            >
              <p className="font-semibold text-white">{qa.question}</p>
              <p className="mt-2 text-sm text-green-300">✓ {qa.correct}</p>
              <p className="mt-1 text-xs text-white/70">{qa.explanation}</p>
              {qa.wrong?.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {qa.wrong.map((w) => (
                    <li key={w} className="text-xs text-red-300/80">
                      ✗ {w}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {section.questions?.length > 0 && (
        <InfoBox icon={MessageCircle} title="Domande da fare" color="border-[#FACC15]/20 bg-[#FACC15]/5 text-[#FACC15]">
          <BulletList items={section.questions} />
        </InfoBox>
      )}

      {section.commonErrors?.length > 0 && (
        <InfoBox icon={AlertTriangle} title="Errori comuni" color="border-red-400/20 bg-red-500/5 text-red-400">
          <BulletList items={section.commonErrors} bulletColor="bg-red-400" />
        </InfoBox>
      )}

      {section.curiosity && (
        <InfoBox icon={Lightbulb} title="Curiosità" color="border-[#FACC15]/20 bg-[#FACC15]/5 text-[#FACC15]">
          <p className="text-sm text-white/75">{section.curiosity}</p>
        </InfoBox>
      )}

      {section.demo && (
        <InfoBox icon={Wrench} title="Dimostrazione pratica" color="border-green-400/20 bg-green-500/5 text-green-400">
          <p className="text-sm text-white/85">{section.demo}</p>
        </InfoBox>
      )}

      {section.notesKey && <TeacherNotes notesKey={section.notesKey} />}
    </div>
  )
}

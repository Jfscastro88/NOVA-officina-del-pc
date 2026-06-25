import { useState } from 'react'
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react'

export default function QuizBox({ quiz }) {
  const [selected, setSelected] = useState(null)

  if (!quiz) return null

  const isCorrect = selected === quiz.correct

  return (
    <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-5 backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-2">
        <HelpCircle size={18} className="text-[#FACC15]" />
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#FACC15]">
          Mini quiz
        </h3>
      </div>
      <p className="mb-4 text-base font-semibold text-white">{quiz.question}</p>

      <div className="flex flex-wrap gap-2">
        {quiz.answers.map((answer) => {
          const isSelected = selected === answer
          const isAnswerCorrect = answer === quiz.correct

          let btnClass =
            'rounded-xl border px-4 py-2.5 text-sm font-bold transition-all duration-200 '

          if (selected === null) {
            btnClass +=
              'border-white/20 bg-white/5 text-white hover:border-accent hover:bg-accent/20'
          } else if (isAnswerCorrect) {
            btnClass += 'border-green-400/60 bg-green-500/20 text-green-300'
          } else if (isSelected) {
            btnClass += 'border-red-400/60 bg-red-500/20 text-red-300'
          } else {
            btnClass += 'border-white/10 bg-white/5 text-white/40'
          }

          return (
            <button
              key={answer}
              type="button"
              disabled={selected !== null}
              onClick={() => setSelected(answer)}
              className={btnClass}
            >
              {answer}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div
          className={`mt-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold animate-fade-up ${
            isCorrect
              ? 'bg-green-500/15 text-green-300'
              : 'bg-red-500/15 text-red-300'
          }`}
        >
          {isCorrect ? (
            <>
              <CheckCircle2 size={18} />
              Esatto! La risposta è {quiz.correct}.
            </>
          ) : (
            <>
              <XCircle size={18} />
              Non proprio! La risposta corretta è {quiz.correct}.
            </>
          )}
        </div>
      )}
    </div>
  )
}

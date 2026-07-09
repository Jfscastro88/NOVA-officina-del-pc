import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, Trophy } from 'lucide-react'
import SlideSectionFrame from '../SlideSectionFrame'

export default function FinalQuizSection({ section }) {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selected, setSelected] = useState(null)

  const questions = section.questions
  const question = questions[currentQ]
  const answered = answers[question.id] !== undefined
  const score = Object.values(answers).filter((a) => a.correct).length
  const finished = Object.keys(answers).length === questions.length

  const handleAnswer = (answer) => {
    if (answered) return
    const correct = answer === question.correct
    setSelected(answer)
    setAnswers((prev) => ({
      ...prev,
      [question.id]: { answer, correct },
    }))
  }

  const goNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1)
      setSelected(null)
    }
  }

  return (
    <SlideSectionFrame section={section} subtitle="Metti alla prova quello che hai imparato!">
      <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-[#FACC15]"
          animate={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="mb-3 flex items-center justify-between text-xs sm:text-sm">
        <span className="text-white/60">
          Domanda {currentQ + 1} di {questions.length}
        </span>
        <span className="flex items-center gap-1 font-bold text-[#FACC15]">
          <Trophy size={14} />
          {score} / {questions.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
        >
          <p className="text-sm font-semibold text-white sm:text-base">{question.question}</p>

          <div className="mt-3 flex flex-col gap-1.5">
            {question.answers.map((answer) => {
              const isSelected = selected === answer
              const isCorrect = answer === question.correct
              let cls =
                'rounded-lg border px-3 py-2 text-left text-xs font-bold transition-all sm:text-sm '

              if (!answered) {
                cls += 'border-white/20 bg-white/5 text-white hover:border-accent hover:bg-accent/20'
              } else if (isCorrect) {
                cls += 'border-green-400/60 bg-green-500/20 text-green-300'
              } else if (isSelected) {
                cls += 'border-red-400/60 bg-red-500/20 text-red-300'
              } else {
                cls += 'border-white/10 bg-white/5 text-white/40'
              }

              return (
                <button
                  key={answer}
                  type="button"
                  disabled={answered}
                  onClick={() => handleAnswer(answer)}
                  className={cls}
                >
                  {answer}
                </button>
              )
            })}
          </div>

          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-3 flex items-start gap-2 rounded-lg p-3 text-xs sm:text-sm ${
                answers[question.id].correct
                  ? 'bg-green-500/15 text-green-300'
                  : 'bg-red-500/15 text-red-300'
              }`}
            >
              {answers[question.id].correct ? (
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              ) : (
                <XCircle size={16} className="mt-0.5 shrink-0" />
              )}
              <span>{question.feedback}</span>
            </motion.div>
          )}

          {answered && currentQ < questions.length - 1 && (
            <button
              type="button"
              onClick={goNext}
              className="btn-gaming mt-3 rounded-full bg-[#FACC15] px-4 py-2 text-xs font-extrabold text-[#0B1020] transition-transform hover:-translate-y-0.5 sm:text-sm"
            >
              Prossima domanda
            </button>
          )}
        </motion.div>
      </AnimatePresence>

      {finished && (
        <div className="mt-4 rounded-xl border border-[#FACC15]/30 bg-[#FACC15]/10 p-4 text-center">
          <Trophy size={32} className="mx-auto text-[#FACC15]" />
          <p className="mt-2 font-display text-base text-white sm:text-lg">
            {score === questions.length
              ? 'Perfetto! Sei un esperto di SO!'
              : score >= 3
                ? 'Ottimo lavoro!'
                : 'Continua a esplorare!'}
          </p>
          <p className="mt-1 text-xs text-white/70">
            {score} corrette su {questions.length}
          </p>
        </div>
      )}
    </SlideSectionFrame>
  )
}

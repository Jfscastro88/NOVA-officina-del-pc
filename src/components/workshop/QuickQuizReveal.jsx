import { useEffect, useState } from 'react'
import { Eye, HelpCircle } from 'lucide-react'

export default function QuickQuizReveal({ questions, delaySeconds = 5 }) {
  const [revealed, setRevealed] = useState({})

  useEffect(() => {
    setRevealed({})
  }, [questions])

  useEffect(() => {
    const timers = questions.map((_, index) =>
      setTimeout(() => {
        setRevealed((prev) => ({ ...prev, [index]: true }))
      }, delaySeconds * 1000 * (index + 1))
    )
    return () => timers.forEach(clearTimeout)
  }, [questions, delaySeconds])

  return (
    <div className="space-y-3">
      {questions.map((item, index) => (
        <div
          key={item.question}
          className="rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-sm font-extrabold text-[#FACC15]">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-white">{item.question}</p>
              <div
                className={`mt-3 flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-500 ${
                  revealed[index]
                    ? 'animate-fade-up bg-green-500/15 text-green-300'
                    : 'bg-white/5 text-white/30'
                }`}
              >
                {revealed[index] ? (
                  <>
                    <Eye size={16} />
                    {item.answer}
                  </>
                ) : (
                  <>
                    <HelpCircle size={16} className="animate-pulse" />
                    Risposta tra pochi secondi…
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, X } from "lucide-react";
import SlideSectionFrame from "../SlideSectionFrame";

export default function BootSection({ section }) {
  const [activeStep, setActiveStep] = useState(null);
  const step = section.steps.find((s) => s.id === activeStep);

  return (
    <>
      <SlideSectionFrame
        section={section}
        subtitle="Clicca ogni passaggio per scoprire cosa succede dentro il tuo PC."
      >
        <div className="relative max-h-[min(50vh,420px)] overflow-y-auto pr-1">
          <div className="space-y-2 sm:space-y-2.5">
            {section.steps.map((s, index) => (
              <motion.button
                key={s.id}
                type="button"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                onClick={() => setActiveStep(s.id)}
                className={`relative flex w-full items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all sm:gap-3 sm:p-3 ${
                  activeStep === s.id
                    ? "border-[#FACC15]/50 bg-[#FACC15]/10"
                    : "border-white/10 bg-white/5 hover:border-accent/40 hover:bg-white/10"
                }`}
              >
                <span
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold sm:h-9 sm:w-9 ${
                    activeStep === s.id ? "bg-[#FACC15] text-[#0B1020]" : "bg-accent/30 text-white"
                  }`}
                >
                  {s.number}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-white sm:text-base">{s.title}</p>
                </div>
                <span className="text-lg" role="img" aria-hidden="true">
                  {s.icon}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </SlideSectionFrame>

      <AnimatePresence>
        {step && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setActiveStep(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl border border-[#FACC15]/30 bg-[#0B1020]/95 p-5 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-hidden="true">
                      {step.icon}
                    </span>
                    <h3 className="font-display text-lg text-white sm:text-xl">
                      {step.number}. {step.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStep(null)}
                    className="rounded-lg p-1 text-white/50 hover:bg-white/10 hover:text-white"
                    aria-label="Chiudi"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                  {step.explanation}
                </p>
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-[#FACC15]/20 bg-[#FACC15]/5 p-3">
                  <Lightbulb size={16} className="mt-0.5 shrink-0 text-[#FACC15]" />
                  <p className="text-xs text-white/75 sm:text-sm">{step.curiosity}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

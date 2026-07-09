import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SlideSectionFrame from "../SlideSectionFrame";

export default function InstallationSection({ section }) {
  const [completed, setCompleted] = useState(new Set());

  const toggle = (id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <SlideSectionFrame
      section={section}
      subtitle="Clicca ogni passaggio per segnarlo come completato nella tua mente."
    >
      <div className="space-y-2">
        {section.steps.map((step, index) => {
          const done = completed.has(step.id);
          return (
            <motion.button
              key={step.id}
              type="button"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => toggle(step.id)}
              className={`relative flex w-full items-start gap-2.5 rounded-xl border p-2.5 text-left transition-all sm:gap-3 sm:p-3 ${
                done
                  ? "border-green-400/40 bg-green-500/10"
                  : "border-white/10 bg-white/5 hover:border-accent/40"
              }`}
            >
              <span
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-extrabold sm:h-9 sm:w-9 ${
                  done ? "bg-green-500 text-white" : "bg-accent/30 text-white"
                }`}
              >
                {done ? <CheckCircle2 size={16} /> : step.number}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white">{step.title}</p>
                <p className="mt-0.5 text-[11px] text-white/65 sm:text-xs">{step.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </SlideSectionFrame>
  );
}

import { motion } from 'framer-motion'
import SlideSectionFrame from '../SlideSectionFrame'

export default function ComparisonSection({ section }) {
  return (
    <SlideSectionFrame
      section={section}
      subtitle="Nessuno è perfetto in tutto. Ecco un confronto onesto."
    >
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-accent/10">
              <th className="px-3 py-2.5 font-extrabold text-[#FACC15] sm:px-4 sm:py-3">Argomento</th>
              <th className="px-3 py-2.5 font-extrabold text-blue-300 sm:px-4 sm:py-3">🪟 Windows</th>
              <th className="px-3 py-2.5 font-extrabold text-green-300 sm:px-4 sm:py-3">🐧 Linux</th>
            </tr>
          </thead>
          <tbody>
            {section.comparison.map((row, index) => (
              <motion.tr
                key={row.topic}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                className="border-b border-white/5 transition-colors hover:bg-white/5"
              >
                <td className="px-3 py-2.5 font-semibold text-white sm:px-4 sm:py-3">{row.topic}</td>
                <td className="px-3 py-2.5 sm:px-4 sm:py-3">
                  <span className="font-bold text-white">{row.windows}</span>
                  <p className="mt-0.5 text-[10px] text-white/50 sm:text-xs">{row.windowsNote}</p>
                </td>
                <td className="px-3 py-2.5 sm:px-4 sm:py-3">
                  <span className="font-bold text-white">{row.linux}</span>
                  <p className="mt-0.5 text-[10px] text-white/50 sm:text-xs">{row.linuxNote}</p>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideSectionFrame>
  )
}

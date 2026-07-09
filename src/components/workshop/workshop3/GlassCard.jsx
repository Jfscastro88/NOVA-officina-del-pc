import { motion } from 'framer-motion'
import { fadeUp } from './motion'

export default function GlassCard({ children, className = '', onClick, as = 'div', delay = 0 }) {
  const Component = motion[as] ?? motion.div

  return (
    <Component
      {...fadeUp}
      transition={{ duration: 0.4, delay }}
      onClick={onClick}
      className={`rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:rounded-3xl sm:p-6 ${onClick ? 'cursor-pointer transition-colors hover:border-accent/40 hover:bg-white/10' : ''} ${className}`}
    >
      {children}
    </Component>
  )
}

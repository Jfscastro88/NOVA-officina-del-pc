import { Cpu, HardDrive, MemoryStick, Wrench, Gpu } from 'lucide-react'

const floatingParts = [
  {
    label: 'CPU',
    Icon: Cpu,
    className: 'top-[2%] -left-[4%] animate-float [--rot:-6deg]',
    color: 'from-accent to-primary',
  },
  {
    label: 'RAM',
    Icon: MemoryStick,
    className: 'top-[8%] -right-[2%] animate-float-delayed [--rot:4deg]',
    color: 'from-yellow to-amber-400',
  },
  {
    label: 'SSD',
    Icon: HardDrive,
    className: 'bottom-[28%] -left-[8%] animate-float [--rot:5deg]',
    color: 'from-violet-400 to-accent',
  },
  {
    label: 'GPU',
    Icon: Gpu,
    className: 'bottom-[12%] -right-[4%] animate-float-delayed [--rot:-4deg]',
    color: 'from-fuchsia-500 to-accent',
  },
  {
    label: 'Tool',
    Icon: Wrench,
    className: 'top-[42%] -right-[10%] animate-wiggle [--rot:12deg]',
    color: 'from-yellow to-yellow-dark',
  },
]

export default function GamingPcVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      {/* Glow backdrop */}
      <div className="absolute inset-[8%] rounded-full bg-accent/40 blur-[60px] animate-pulse-glow" />
      <div className="absolute inset-[15%] rounded-full bg-primary/60 blur-[40px]" />

      {/* Open gaming PC case */}
      <div className="absolute inset-[10%] flex items-center justify-center">
        <div className="relative h-full w-full max-w-[340px]">
          {/* Case shell */}
          <div className="absolute inset-0 rounded-3xl border-4 border-accent/60 bg-gradient-to-br from-[#2a1055] via-dark-purple to-[#0d0420] shadow-[inset_0_0_60px_rgba(124,58,237,0.25),0_0_80px_rgba(124,58,237,0.3)]">
            {/* Glass side panel */}
            <div className="absolute inset-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
              {/* RGB strip top */}
              <div className="absolute left-4 right-4 top-3 h-1.5 rounded-full bg-gradient-to-r from-accent via-fuchsia-400 to-yellow animate-rgb opacity-90" />

              {/* Motherboard area */}
              <div className="absolute bottom-8 left-6 right-6 top-10 rounded-xl border border-accent/20 bg-[#1a083d]/80 p-4">
                {/* CPU cooler */}
                <div className="absolute left-1/2 top-6 h-16 w-16 -translate-x-1/2 rounded-full border-2 border-accent/50 bg-gradient-to-b from-accent/30 to-primary shadow-[0_0_20px_rgba(124,58,237,0.6)]">
                  <div className="absolute inset-2 rounded-full border border-white/20" />
                  <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-yellow/60" style={{ animationDuration: '3s' }} />
                </div>

                {/* RAM sticks */}
                <div className="absolute left-8 top-[42%] flex gap-1.5">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="h-14 w-3 rounded-sm bg-gradient-to-b from-accent to-primary shadow-[0_0_12px_rgba(124,58,237,0.5)]"
                    />
                  ))}
                </div>

                {/* GPU */}
                <div className="absolute bottom-4 left-4 right-4 h-12 rounded-lg border border-fuchsia-400/40 bg-gradient-to-r from-fuchsia-900/80 via-primary to-accent/60 shadow-[0_0_24px_rgba(168,85,247,0.4)]">
                  <div className="absolute bottom-1 left-3 right-3 flex justify-between">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-6 w-1 rounded-full bg-accent/80" />
                    ))}
                  </div>
                  <div className="absolute right-3 top-1/2 h-2 w-8 -translate-y-1/2 rounded bg-yellow/70" />
                </div>

                {/* RGB fans */}
                <div className="absolute bottom-2 left-2 flex gap-2">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-accent/40 bg-gradient-to-br from-accent/20 to-transparent"
                    >
                      <div
                        className="absolute inset-1 rounded-full border border-accent/30 animate-spin"
                        style={{ animationDuration: `${2 + i}s` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Cable doodle */}
              <svg className="absolute bottom-16 right-6 h-12 w-16 text-accent/40" viewBox="0 0 64 48" fill="none">
                <path d="M4 40c16-20 32 0 48-12 8-6 12-4 12-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* RGB edge glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/50 via-transparent to-yellow/30 opacity-60 blur-sm" />
          </div>

          {/* Monitor hint */}
          <div className="absolute -top-6 left-1/2 h-3 w-24 -translate-x-1/2 rounded-t-lg bg-accent/80" />
        </div>
      </div>

      {/* Floating component cards */}
      {floatingParts.map(({ label, Icon, className, color }) => (
        <div
          key={label}
          className={`absolute z-10 flex flex-col items-center gap-1 rounded-2xl border-2 border-white/20 bg-white px-3 py-2.5 card-depth transition-transform hover:scale-110 ${className}`}
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}
          >
            <Icon size={20} strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-dark-purple">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

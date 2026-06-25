const floatingParts = [
  {
    label: 'CPU',
    image: '/components/processor1.jpg',
    className: 'top-[4%] -left-[2%] animate-float [--rot:-4deg]',
    ring: 'ring-accent/60',
  },
  {
    label: 'RAM',
    image: '/components/ramddr5.jpg',
    className: 'top-[2%] -right-[2%] animate-float-delayed [--rot:3deg]',
    ring: 'ring-yellow/70',
  },
  {
    label: 'SSD',
    image: '/components/ssd-nvme.jpg',
    className: 'bottom-[22%] -left-[6%] animate-float [--rot:5deg]',
    ring: 'ring-violet-400/60',
  },
  {
    label: 'GPU',
    image: '/components/gpu1.jpg',
    className: 'bottom-[10%] -right-[4%] animate-float-delayed [--rot:-3deg]',
    ring: 'ring-fuchsia-400/60',
  },
  {
    label: 'Tools',
    image: '/components/tools.jpg',
    className: 'top-[38%] -right-[8%] animate-wiggle [--rot:8deg]',
    ring: 'ring-yellow/60',
  },
]

export default function GamingPcVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[760px] 2xl:max-w-[860px]"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-accent/30 blur-[50px] animate-pulse-glow" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-yellow/10 blur-2xl" />

      {/* Main photo frame */}
      <div className="relative overflow-hidden rounded-3xl border-[3px] border-white/15 shadow-[0_24px_80px_rgba(26,8,61,0.55),0_0_0_1px_rgba(124,58,237,0.25)]">
        {/* Tempered glass edge highlight */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-3xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]" />

        <img
          src="/images/hero/caseopen.jpg"
          alt=""
          className="aspect-[4/3] w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />

        {/* Theme tint — blends photo with site palette */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-dark-purple/50 via-transparent to-accent/20 mix-blend-multiply" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-dark-purple/70 via-transparent to-transparent" />

        {/* Glass reflection */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-60" />

        {/* RGB accent strip */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-accent via-fuchsia-400 to-yellow opacity-80" />

        {/* Subtle scan line */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)',
          }}
        />

        {/* Desk mat label */}
        <div className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full border border-white/20 bg-dark-purple/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white/80 backdrop-blur-sm">
          Setup reale
        </div>
      </div>

      {/* RGB edge glow */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-yellow/25 opacity-70 blur-md" />

      {/* Floating component cards with real photos */}
      {floatingParts.map(({ label, image, className, ring }) => (
        <div
          key={label}
          className={`absolute z-30 flex items-center gap-2 rounded-2xl border-2 border-white/25 bg-white/95 p-1.5 pr-3 card-depth backdrop-blur-sm transition-transform hover:scale-105 ${className}`}
        >
          <div
            className={`h-11 w-11 shrink-0 overflow-hidden rounded-xl ring-2 ${ring}`}
          >
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-dark-purple">
            {label}
          </span>
        </div>
      ))}

      {/* Monitor light bar hint */}
      <div className="pointer-events-none absolute -top-3 left-1/2 z-20 h-2 w-28 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
    </div>
  )
}

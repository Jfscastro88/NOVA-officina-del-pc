const floatingParts = [
  {
    label: "PROCESSORE",
    image: "/components/processor2.jpg",
    className:
      "flex left-2 top-[8%] sm:-left-[14%] sm:top-[5%] animate-float [--rot:-4deg]",
    ring: "ring-accent/60",
  },
  {
    label: "MEMORIA RAM",
    image: "/components/ram.jpg",
    className:
      "flex right-2 top-[8%] sm:-right-[14%] sm:top-[3%] animate-float-delayed [--rot:3deg]",
    ring: "ring-yellow/70",
  },
  {
    label: "SCHEDA MADRE",
    image: "/components/motherboard.jpg",
    className: "hidden sm:flex top-[28%] -left-[18%] animate-float-delayed [--rot:-6deg]",
    ring: "ring-emerald-400/60",
  },
  {
    label: "DISSIPATORI",
    image: "/components/wathercooler.jpg",
    className: "hidden sm:flex top-[26%] -right-[18%] animate-wiggle [--rot:7deg]",
    ring: "ring-cyan-400/60",
  },
  {
    label: "HARD DISK / SSD",
    image: "/components/ssd-nvme.jpg",
    className: "hidden sm:flex top-[51%] -left-[14%] animate-float [--rot:5deg]",
    ring: "ring-violet-400/60",
  },
  {
    label: "ALIMENTATORI",
    image: "/components/powersupply1.jpg",
    className: "hidden sm:flex top-[49%] -right-[14%] animate-float [--rot:4deg]",
    ring: "ring-orange-400/60",
  },
  {
    label: "STRUMENTI",
    image: "/components/tools.jpg",
    className: "hidden sm:flex top-[74%] -left-[16%] animate-wiggle [--rot:8deg]",
    ring: "ring-yellow/60",
  },
  {
    label: "SCHEDE VIDEO",
    image: "/components/gpu.jpg",
    className:
      "flex bottom-12 right-2 top-auto left-auto sm:bottom-auto sm:left-auto sm:-right-[12%] sm:top-[72%] animate-float-delayed [--rot:-3deg]",
    ring: "ring-fuchsia-400/60",
  },
];

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
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
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
          className={`absolute z-30 max-w-[calc(100%-1rem)] items-center gap-2.5 rounded-2xl border-2 border-white/25 bg-white/95 p-2 pr-3.5 card-depth backdrop-blur-sm transition-transform hover:scale-105 max-sm:gap-1.5 max-sm:p-1.5 max-sm:pr-2.5 sm:max-w-none ${className}`}
        >
          <div
            className={`h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-2 max-sm:h-10 max-sm:w-10 ${ring}`}
          >
            <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-dark-purple max-sm:text-[8px] max-sm:leading-tight max-sm:tracking-wide">
            {label}
          </span>
        </div>
      ))}

      {/* Monitor light bar hint */}
      <div className="pointer-events-none absolute -top-3 left-1/2 z-20 h-2 w-28 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
    </div>
  );
}

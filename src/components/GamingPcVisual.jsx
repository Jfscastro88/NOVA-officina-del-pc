import { useLanguage } from "../i18n/useLanguage";

const floatingParts = [
  {
    id: "processor",
    image: "/components/processor2.jpg",
    className:
      "flex start-2 top-[8%] sm:-start-[14%] sm:top-[5%] animate-float [--rot:-4deg]",
    ring: "ring-accent/60",
  },
  {
    id: "ram",
    image: "/components/ram.jpg",
    className:
      "flex end-2 top-[8%] sm:-end-[14%] sm:top-[3%] animate-float-delayed [--rot:3deg]",
    ring: "ring-yellow/70",
  },
  {
    id: "motherboard",
    image: "/components/motherboard.jpg",
    className: "hidden sm:flex top-[28%] -start-[18%] animate-float-delayed [--rot:-6deg]",
    ring: "ring-emerald-400/60",
  },
  {
    id: "coolers",
    image: "/components/wathercooler.jpg",
    className: "hidden sm:flex top-[26%] -end-[18%] animate-wiggle [--rot:7deg]",
    ring: "ring-cyan-400/60",
  },
  {
    id: "storage",
    image: "/components/ssd-nvme.jpg",
    className: "hidden sm:flex top-[51%] -start-[14%] animate-float [--rot:5deg]",
    ring: "ring-violet-400/60",
  },
  {
    id: "psu",
    image: "/components/powersupply1.jpg",
    className: "hidden sm:flex top-[49%] -end-[14%] animate-float [--rot:4deg]",
    ring: "ring-orange-400/60",
  },
  {
    id: "tools",
    image: "/components/tools.jpg",
    className: "hidden sm:flex top-[74%] -start-[16%] animate-wiggle [--rot:8deg]",
    ring: "ring-yellow/60",
  },
  {
    id: "gpu",
    image: "/components/gpu.jpg",
    className:
      "flex bottom-12 end-2 top-auto start-auto sm:bottom-auto sm:start-auto sm:-end-[12%] sm:top-[72%] animate-float-delayed [--rot:-3deg]",
    ring: "ring-fuchsia-400/60",
  },
];

export default function GamingPcVisual() {
  const { ui } = useLanguage();
  const labels = ui.hero.parts;

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
        <div className="pointer-events-none absolute bottom-4 start-4 z-10 rounded-full border border-white/20 bg-dark-purple/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white/80 backdrop-blur-sm">
          {ui.hero.setup}
        </div>
      </div>

      {/* RGB edge glow */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-yellow/25 opacity-70 blur-md" />

      {/* Floating component cards with real photos */}
      {floatingParts.map(({ id, image, className, ring }) => (
        <div
          key={id}
          className={`absolute z-30 max-w-[calc(100%-1rem)] items-center gap-2.5 rounded-2xl border-2 border-white/25 bg-white/95 p-2 pe-3.5 card-depth backdrop-blur-sm transition-transform hover:scale-105 max-sm:gap-1.5 max-sm:p-1.5 max-sm:pe-2.5 sm:max-w-none ${className}`}
        >
          <div
            className={`h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-2 max-sm:h-10 max-sm:w-10 ${ring}`}
          >
            <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-dark-purple max-sm:text-[8px] max-sm:leading-tight max-sm:tracking-wide">
            {labels[id]}
          </span>
        </div>
      ))}

      {/* Monitor light bar hint */}
      <div className="pointer-events-none absolute -top-3 left-1/2 z-20 h-2 w-28 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
    </div>
  );
}

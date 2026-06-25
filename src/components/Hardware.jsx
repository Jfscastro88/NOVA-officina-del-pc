import { useState } from 'react'
import { Spark, Star } from './Doodles'
import WaveDivider from './WaveDivider'
import HardwareModal from './HardwareModal'
import { hardwareComponents } from '../data/hardwareComponents'

export default function Hardware() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <WaveDivider className="text-white" />

      <section
        id="hardware"
        className="relative overflow-hidden bg-white px-5 py-20 lg:px-8"
      >
        <Spark className="pointer-events-none absolute right-[10%] top-14 h-8 w-8 text-accent animate-pulse-glow" />
        <Star className="pointer-events-none absolute left-[6%] bottom-20 h-5 w-5 text-yellow animate-float" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center animate-fade-up">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
              Componenti
            </span>
            <h2 className="mt-3 font-display text-3xl text-dark-purple md:text-5xl">
              Alcuni componenti che{' '}
              <span className="highlight-brush text-primary">scopriremo</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-primary/70">
              Clicca su una card per scoprire di più
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hardwareComponents.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                className="group card-depth animate-fade-up cursor-pointer rounded-3xl border-2 border-primary/10 bg-gradient-to-br from-white to-[#f8f4ff] p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-accent/40 hover:shadow-[0_20px_56px_rgba(124,58,237,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-2 right-2 rounded-full bg-yellow px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-dark-purple opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                    Scopri →
                  </span>
                </div>
                <h3 className="font-display text-xl text-dark-purple">{item.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-primary/75">{item.short}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip className="text-white" />

      {selected && (
        <HardwareModal component={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}

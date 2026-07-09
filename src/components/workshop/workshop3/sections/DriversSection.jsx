import LayerStack from '../LayerStack'
import SlideSectionFrame from '../SlideSectionFrame'

export default function DriversSection({ section }) {
  return (
    <SlideSectionFrame section={section}>
      <p className="mb-3 text-center text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-xs">
        Il percorso dei dati
      </p>
      <LayerStack
        layers={section.layers.map((l) => ({
          ...l,
          color: 'from-accent/20 to-accent/5',
          detail: l.description,
        }))}
      />
    </SlideSectionFrame>
  )
}

import { useLanguage } from '../../../../i18n/useLanguage'
import LayerStack from '../LayerStack'
import SlideSectionFrame from '../SlideSectionFrame'

export default function OsLayersSection({ section }) {
  const { ui } = useLanguage()

  return (
    <SlideSectionFrame section={section}>
      <p className="mb-3 text-center text-[10px] font-extrabold uppercase tracking-wider text-[#FACC15] sm:text-xs">
        {ui.slides.clickLayer}
      </p>
      <LayerStack layers={section.layers} />
    </SlideSectionFrame>
  )
}

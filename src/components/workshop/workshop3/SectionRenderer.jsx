import HeroSection from './sections/HeroSection'
import OsLayersSection from './sections/OsLayersSection'
import BootSection from './sections/BootSection'
import WindowsLinuxSection from './sections/WindowsLinuxSection'
import ComparisonSection from './sections/ComparisonSection'
import DriversSection from './sections/DriversSection'
import InstallationSection from './sections/InstallationSection'
import CuriositySection from './sections/CuriositySection'
import FinalQuizSection from './sections/FinalQuizSection'
import ConclusionSection from './sections/ConclusionSection'
import RecapSection from './sections/RecapSection'

const RENDERERS = {
  hero: HeroSection,
  'cos-e-os': OsLayersSection,
  boot: BootSection,
  'windows-linux': WindowsLinuxSection,
  confronto: ComparisonSection,
  driver: DriversSection,
  installazione: InstallationSection,
  curiosita: CuriositySection,
  quiz: FinalQuizSection,
  conclusione: ConclusionSection,
  riepilogo: RecapSection,
}

export default function SectionRenderer({ section }) {
  const Component = RENDERERS[section.id]
  if (!Component) return null

  return <Component section={section} />
}

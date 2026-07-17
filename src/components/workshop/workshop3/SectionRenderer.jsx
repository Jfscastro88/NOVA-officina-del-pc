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
import WelcomeSection from './sections/WelcomeSection'
import DualCompareSection from './sections/DualCompareSection'
import DetailCardsSection from './sections/DetailCardsSection'
import CompatCardsSection from './sections/CompatCardsSection'
import NumberedAccordionSection from './sections/NumberedAccordionSection'
import WarningCardsSection from './sections/WarningCardsSection'
import BootFlowSection from './sections/BootFlowSection'
import PointsNoteSection from './sections/PointsNoteSection'
import FolderTreeSection from './sections/FolderTreeSection'
import ActionCardsSection from './sections/ActionCardsSection'
import ShortcutCardsSection from './sections/ShortcutCardsSection'
import ChallengeSection from './sections/ChallengeSection'
import JourneyRecapSection from './sections/JourneyRecapSection'
import WrapUpSection from './sections/WrapUpSection'

const RENDERERS = {
  // Workshop 3 (by id)
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

  // Tipi generici (Workshop 4+)
  welcome: WelcomeSection,
  'dual-compare': DualCompareSection,
  'detail-cards': DetailCardsSection,
  'compat-cards': CompatCardsSection,
  'numbered-accordion': NumberedAccordionSection,
  'warning-cards': WarningCardsSection,
  'boot-flow': BootFlowSection,
  'points-note': PointsNoteSection,
  'folder-tree': FolderTreeSection,
  'action-cards': ActionCardsSection,
  'shortcut-cards': ShortcutCardsSection,
  challenge: ChallengeSection,
  'journey-recap': JourneyRecapSection,
  'wrap-up': WrapUpSection,
}

export default function SectionRenderer({ section }) {
  const Component = RENDERERS[section.type] ?? RENDERERS[section.id]
  if (!Component) return null

  return <Component section={section} />
}

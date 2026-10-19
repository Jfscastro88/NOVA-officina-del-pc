import { useLanguage, usePageMeta } from './i18n/useLanguage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Program from './components/Program'
import Hardware from './components/Hardware'
import Footer from './components/Footer'
import BackToTopButton from './components/workshop/BackToTopButton'

function App() {
  const { ui } = useLanguage()
  usePageMeta(ui.meta.title, ui.meta.description)

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Activities />
        <Program />
        <Hardware />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App

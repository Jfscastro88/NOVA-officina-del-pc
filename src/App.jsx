import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Program from './components/Program'
import Hardware from './components/Hardware'
import Footer from './components/Footer'
import PlaceholderSection from './components/PlaceholderSection'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Activities />
        <Program />
        <Hardware />

        <div className="bg-gradient-to-b from-dark-purple to-primary">
          <PlaceholderSection
            id="glossario"
            tag="Prossimamente"
            title="Glossario"
            text="Termini tech spiegati in modo semplice e divertente."
          />
          <PlaceholderSection
            id="quiz"
            tag="Prossimamente"
            title="Quiz"
            text="Metti alla prova quello che hai imparato nel laboratorio."
          />
          <PlaceholderSection
            id="galleria"
            tag="Prossimamente"
            title="Galleria"
            text="Foto e momenti delle sessioni del workshop."
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

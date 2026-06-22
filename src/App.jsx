import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Program from './components/Program'
import Hardware from './components/Hardware'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="landing">
      <Navbar />
      <main>
        <Hero />
        <Activities />
        <Program />
        <Hardware />

        <section id="glossario" className="section placeholder-section">
          <div className="placeholder-card">
            <span className="section-tag">Prossimamente</span>
            <h2 className="section-title">Glossario</h2>
            <p>Termini tech spiegati in modo semplice e divertente.</p>
          </div>
        </section>

        <section id="quiz" className="section placeholder-section">
          <div className="placeholder-card">
            <span className="section-tag">Prossimamente</span>
            <h2 className="section-title">Quiz</h2>
            <p>Metti alla prova quello che hai imparato nel laboratorio.</p>
          </div>
        </section>

        <section id="galleria" className="section placeholder-section">
          <div className="placeholder-card">
            <span className="section-tag">Prossimamente</span>
            <h2 className="section-title">Galleria</h2>
            <p>Foto e momenti delle sessioni del workshop.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

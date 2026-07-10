import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Privacy() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="relative min-h-[60vh] bg-dark-purple px-5 py-16 noise-bg lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-yellow/5 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl animate-fade-up">
          <h1 className="font-display text-3xl text-white poster-shadow md:text-4xl">Privacy</h1>

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/75 md:text-base">
            <p>
              Questo sito ha esclusivamente finalità informative e didattiche.
            </p>
            <p>
              Non vengono raccolti dati personali degli utenti, non sono presenti moduli di
              registrazione, moduli di contatto o sistemi di profilazione.
            </p>
            <p>
              Eventuali dati tecnici necessari al funzionamento del sito sono gestiti
              automaticamente dai servizi di hosting utilizzati.
            </p>
            <p>
              Per qualsiasi informazione è possibile contattare l&apos;autore tramite il{' '}
              <a
                href="https://linkedin.com/in/jfscastro88"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/90 underline decoration-white/25 underline-offset-2 transition-colors hover:text-yellow hover:decoration-yellow/50"
              >
                profilo LinkedIn
              </a>
              .
            </p>
          </div>

          <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45 sm:text-[13px]">
            Ultimo aggiornamento:
            <br />
            Luglio 2026
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center text-sm font-semibold text-white/60 transition-colors hover:text-yellow"
          >
            ← Torna alla home
          </Link>
        </div>
      </main>
    </div>
  )
}

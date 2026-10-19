import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useLanguage, usePageMeta } from '../i18n/useLanguage'

export default function Privacy() {
  const { ui } = useLanguage()
  usePageMeta(ui.privacy.title, ui.meta.description)

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="relative min-h-[60vh] bg-dark-purple px-5 py-16 noise-bg lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-yellow/5 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl animate-fade-up">
          <h1 className="font-display text-3xl text-white poster-shadow md:text-4xl">{ui.privacy.title}</h1>

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/75 md:text-base">
            {ui.privacy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              {ui.privacy.contactBefore}{' '}
              <a
                href="https://linkedin.com/in/jfscastro88"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/90 underline decoration-white/25 underline-offset-2 transition-colors hover:text-yellow hover:decoration-yellow/50"
              >
                {ui.privacy.linkedin}
              </a>
              .
            </p>
          </div>

          <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45 sm:text-[13px]">
            {ui.privacy.updated}
            <br />
            {ui.privacy.date}
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center text-sm font-semibold text-white/60 transition-colors hover:text-yellow"
          >
            {ui.privacy.back}
          </Link>
        </div>
      </main>
    </div>
  )
}

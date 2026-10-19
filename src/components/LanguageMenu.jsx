import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Languages } from 'lucide-react'
import { languages } from '../i18n/languages'
import { useLanguage } from '../i18n/useLanguage'

export default function LanguageMenu() {
  const { lang, setLang, ui } = useLanguage()
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const current = languages.find((item) => item.id === lang) ?? languages[0]

  useEffect(() => {
    if (!open) return

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ui.nav.language}
        className="flex items-center gap-1.5 rounded-full border-2 border-white/25 bg-white/5 px-3 py-2 text-sm font-bold text-white transition-colors hover:border-yellow hover:text-yellow"
      >
        <Languages size={16} aria-hidden="true" />
        <span>{current.short}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={ui.nav.language}
          className="absolute end-0 top-full z-50 mt-2 min-w-[190px] overflow-hidden rounded-2xl border-2 border-accent/30 bg-dark-purple/95 py-1 shadow-[0_8px_32px_rgba(124,58,237,0.3)] backdrop-blur-xl animate-fade-up"
        >
          {languages.map((item) => {
            const selected = item.id === lang
            return (
              <li key={item.id} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  lang={item.id}
                  dir={item.id === 'ar' ? 'rtl' : 'ltr'}
                  onClick={() => {
                    setLang(item.id)
                    setOpen(false)
                  }}
                  className={`block w-full px-4 py-2.5 text-start text-sm font-semibold transition-colors hover:bg-accent/20 hover:text-yellow ${
                    selected ? 'text-yellow' : 'text-white/80'
                  }`}
                >
                  <span className="block">{item.label}</span>
                  {item.hint && (
                    <span className="mt-0.5 block text-[11px] font-medium text-white/45">
                      {item.hint}
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

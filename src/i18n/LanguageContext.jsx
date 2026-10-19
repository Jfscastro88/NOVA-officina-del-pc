import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './context'
import { LANGUAGE_STORAGE_KEY } from './languages'
import { ui } from './ui'
import { activityText, hardwareText, meetingText } from './content'
import { workshopActivities } from '../data/workshopActivities'
import { hardwareComponents } from '../data/hardwareComponents'
import { learningOutcomes, openDayMeetings } from '../data/openDay'

function readStoredLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (saved === 'it' || saved === 'en' || saved === 'ar') return saved
  } catch {
    /* ignore private-mode storage errors */
  }
  return 'it'
}

function withText(items, lang, dictionary, key) {
  if (lang === 'it') return items
  const texts = dictionary[lang]
  if (!texts) return items
  return items.map((item) => ({ ...item, ...texts[item[key]] }))
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    } catch {
      /* ignore private-mode storage errors */
    }
  }, [lang])

  const value = useMemo(() => {
    const copy = ui[lang] ?? ui.it
    return {
      lang,
      setLang,
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      ui: copy,
      activities: withText(workshopActivities, lang, activityText, 'id'),
      hardware: withText(hardwareComponents, lang, hardwareText, 'id'),
      meetings: withText(openDayMeetings, lang, meetingText, 'slug'),
      outcomes: learningOutcomes.map((item, index) => ({
        ...item,
        title: copy.openDay.outcomes[index] ?? item.title,
      })),
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Lang, type TranslationShape } from './translations'

interface LanguageContextValue {
  lang: Lang
  t: TranslationShape
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'rsid-portfolio-lang'

/**
 * Indonesian is the default -- it's the primary brand/audience language,
 * not a browser-locale guess (navigator.language is unreliable and would
 * often show most visitors English anyway, defeating the point of having
 * an ID-first brand). A stored preference always wins once the visitor has
 * actually switched once.
 */
function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'id'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'id' || stored === 'en') return stored
  } catch {
    // localStorage can throw in private-browsing/sandboxed contexts -- fall
    // through to the default below instead of crashing.
  }
  return 'id'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Best-effort persistence only -- a denied localStorage write must
      // never break language switching itself.
    }
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: translations[lang],
      toggleLang: () => setLang((prev) => (prev === 'id' ? 'en' : 'id')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

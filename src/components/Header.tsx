import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { CloseIcon, MenuIcon } from './icons'

const SECTIONS = ['about', 'web', 'ai', 'stack', 'projects', 'contact'] as const

export function Header() {
  const { t, lang, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)

  // Close the mobile menu on viewport resize past the mobile breakpoint, so
  // it can't be left open-but-hidden after a rotate/resize.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-wide text-ink-100"
        >
          RUMAH<span className="text-cyan-400">SOFTWARE</span>.ID
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-ink-300 transition-colors hover:text-cyan-400"
            >
              {t.nav[id]}
            </a>
          ))}
          <LangButton lang={lang} label={t.langSwitch} onToggle={toggleLang} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LangButton lang={lang} label={t.langSwitch} onToggle={toggleLang} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-ink-100 hover:bg-white/5"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-white/5 px-5 pb-5 md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-3">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-ink-300 hover:bg-white/5 hover:text-cyan-400"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

function LangButton({ lang, label, onToggle }: { lang: string; label: string; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch language, current: ${lang === 'id' ? 'Bahasa Indonesia' : 'English'}`}
      className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs font-medium text-ink-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-400"
    >
      {label}
    </button>
  )
}

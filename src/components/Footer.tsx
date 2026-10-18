import { useLanguage } from '../i18n/LanguageContext'

// Module-scope, not inside the component: computed once when the module
// loads rather than as an impure call during every render.
const year = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/5 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-ink-500 sm:flex-row">
        <p>
          &copy; {year} Rumah Software ID. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

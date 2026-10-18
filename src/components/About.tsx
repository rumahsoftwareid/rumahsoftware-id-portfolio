import { useLanguage } from '../i18n/LanguageContext'
import { Section } from './Section'

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink-300 sm:text-lg">
        {t.about.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}

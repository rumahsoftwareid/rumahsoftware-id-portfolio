import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import { Section } from './Section'
import { ProjectHighlightList } from './ProjectHighlightList'

export function AISystems() {
  const { t } = useLanguage()
  const items = projects.filter((p) => p.category === 'ai')

  return (
    <Section id="ai" title={t.ai.title} eyebrow="02" className="bg-navy-900/40">
      <p className="max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">{t.ai.body}</p>
      <ProjectHighlightList items={items} />
    </Section>
  )
}

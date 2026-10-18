import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import { Section } from './Section'
import { ProjectHighlightList } from './ProjectHighlightList'

export function WebDevelopment() {
  const { t } = useLanguage()
  const items = projects.filter((p) => p.category === 'web')

  return (
    <Section id="web" title={t.web.title} eyebrow="01">
      <p className="max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">{t.web.body}</p>
      <ProjectHighlightList items={items} />
    </Section>
  )
}

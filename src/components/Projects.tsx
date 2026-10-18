import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import { Section } from './Section'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projects" title={t.projects.title} eyebrow="04" className="bg-navy-900/40">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

import { useLanguage } from '../i18n/LanguageContext'
import type { Project } from '../data/projects'
import { StatusBadge } from './StatusBadge'
import { ExternalLinkIcon } from './icons'

export function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLanguage()

  return (
    <article
      id={`project-${project.id}`}
      className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-cyan-400/30 sm:p-7"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink-100">{project.name}</h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-1 text-sm font-medium text-cyan-400">{project.tagline[lang]}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-300">{project.description[lang]}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-white/10 px-2 py-1 font-mono text-[11px] text-ink-500"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
        >
          {t.projects.viewLive}
          <ExternalLinkIcon width={16} height={16} />
          <span className="sr-only"> ({project.name}, opens in a new tab)</span>
        </a>
      )}
    </article>
  )
}

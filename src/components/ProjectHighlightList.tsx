import { useLanguage } from '../i18n/LanguageContext'
import type { Project } from '../data/projects'
import { StatusBadge } from './StatusBadge'

/** Compact list used inside the narrative Web Development / AI Systems
 * sections -- full detail (stack, description, links) lives once in the
 * Projects grid below, this just previews which real projects back the claim
 * and jumps there. */
export function ProjectHighlightList({ items }: { items: Project[] }) {
  const { lang } = useLanguage()

  return (
    <ul className="mt-6 flex flex-col divide-y divide-white/5 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
      {items.map((project) => (
        <li key={project.id}>
          <a
            href={`#project-${project.id}`}
            className="flex flex-col items-start gap-2 px-5 py-4 transition-colors hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          >
            <span>
              <span className="block text-sm font-semibold text-ink-100">{project.name}</span>
              <span className="block text-sm text-ink-500">{project.tagline[lang]}</span>
            </span>
            <StatusBadge status={project.status} />
          </a>
        </li>
      ))}
    </ul>
  )
}

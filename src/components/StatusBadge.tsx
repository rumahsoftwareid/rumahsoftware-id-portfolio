import { useLanguage } from '../i18n/LanguageContext'
import type { ProjectStatus } from '../data/projects'
import { cn } from '../lib/cn'

const DOT_CLASS: Record<ProjectStatus, string> = {
  live: 'bg-emerald-400',
  'in-development': 'bg-amber-400',
  'private-tool': 'bg-ink-500',
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useLanguage()

  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] font-medium text-ink-300">
      <span className={cn('h-1.5 w-1.5 rounded-full', DOT_CLASS[status])} aria-hidden="true" />
      {t.projects.status[status]}
    </span>
  )
}

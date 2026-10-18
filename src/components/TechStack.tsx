import { useLanguage } from '../i18n/LanguageContext'
import { techStack } from '../data/stack'
import { Section } from './Section'

export function TechStack() {
  const { t } = useLanguage()

  return (
    <Section id="stack" title={t.stack.title} eyebrow="03">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group) => (
          <div key={group.group} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="font-mono text-xs font-semibold tracking-wide text-cyan-400">
              {group.group}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-white/10 bg-navy-900/60 px-2.5 py-1 text-sm text-ink-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

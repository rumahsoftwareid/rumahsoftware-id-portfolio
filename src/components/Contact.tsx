import { useLanguage } from '../i18n/LanguageContext'
import { contact } from '../data/contact'
import { Section } from './Section'
import { GithubIcon } from './icons'

export function Contact() {
  const { t } = useLanguage()

  return (
    <Section id="contact" title={t.contact.title} eyebrow="05">
      <div className="max-w-xl">
        <p className="text-base leading-relaxed text-ink-300 sm:text-lg">{t.contact.body}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-cyan-400"
          >
            <GithubIcon width={18} height={18} />
            {t.contact.github}
          </a>

          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-ink-100 transition-colors hover:border-cyan-400/60 hover:text-cyan-400"
            >
              {contact.email}
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}

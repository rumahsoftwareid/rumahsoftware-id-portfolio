import { useLanguage } from '../i18n/LanguageContext'
import { ArrowDownIcon } from './icons'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32"
    >
      {/* Subtle ambient glow -- decorative only, hidden from assistive tech,
          and the motion is a one-shot CSS animation respecting
          prefers-reduced-motion (handled globally in index.css). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs font-semibold tracking-[0.3em] text-cyan-400">
          {t.hero.eyebrow}
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink-100 sm:text-5xl md:text-6xl">
          <span className="text-gradient">{t.hero.title}</span>{' '}
          <span className="text-ink-300">&amp; {t.hero.subtitle}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="w-full rounded-full bg-cyan-500 px-6 py-3 text-center text-sm font-semibold text-navy-950 transition-colors hover:bg-cyan-400 sm:w-auto"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-ink-100 transition-colors hover:border-cyan-400/60 hover:text-cyan-400 sm:w-auto"
          >
            {t.hero.ctaContact}
          </a>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="mt-16 inline-flex text-ink-500 transition-colors hover:text-cyan-400 motion-safe:animate-bounce"
        >
          <ArrowDownIcon />
        </a>
      </div>
    </section>
  )
}

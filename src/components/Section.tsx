import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

interface SectionProps {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
  className?: string
}

/** Shared section chrome (id anchor, heading, max-width, vertical rhythm) so
 * every section lines up the same way instead of re-deriving spacing. */
export function Section({ id, title, eyebrow, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20 px-5 py-20 sm:px-8', className)}>
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-cyan-400">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 text-2xl font-bold text-ink-100 sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

/** Only tools/frameworks actually used across the projects listed in
 * data/projects.ts -- grouped the way the real work breaks down, not a
 * generic "everything a web dev might know" list. */
export const techStack: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['Laravel', 'PHP', 'PostgreSQL', 'MySQL', 'Redis'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'Tailwind CSS'] },
  { group: 'Mobile', items: ['Flutter', 'Android (Java/Kotlin)'] },
  { group: 'AI & Tooling', items: ['Claude Code', 'Claude API', 'Python', 'PyQt6'] },
  { group: 'Infrastructure', items: ['Linux VPS', 'Apache', 'Nginx', 'Cloudflare', "Let's Encrypt", 'Git'] },
]

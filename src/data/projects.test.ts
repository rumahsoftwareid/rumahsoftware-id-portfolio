import { describe, expect, it } from 'vitest'
import { projects } from './projects'

describe('projects data', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('has unique ids', () => {
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it.each(projects)('"$id" has complete bilingual content and a non-empty stack', (project) => {
    expect(project.name.trim()).not.toBe('')
    expect(project.tagline.id.trim()).not.toBe('')
    expect(project.tagline.en.trim()).not.toBe('')
    expect(project.description.id.trim()).not.toBe('')
    expect(project.description.en.trim()).not.toBe('')
    expect(project.stack.length).toBeGreaterThan(0)
  })

  it.each(projects)('"$id" only links to https URLs, when a link is present', (project) => {
    if (project.liveUrl) expect(project.liveUrl).toMatch(/^https:\/\//)
    if (project.repoUrl) expect(project.repoUrl).toMatch(/^https:\/\//)
  })

  it('never links a repo that is private -- only "live"/public-facing status may carry a liveUrl', () => {
    // repoUrl is reserved for a PUBLIC repo; nothing here uses it yet, but
    // this guards against someone adding one for a private project later.
    for (const project of projects) {
      if (project.status === 'private-tool') {
        expect(project.repoUrl).toBeUndefined()
      }
    }
  })
})

import { afterEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from './ProjectCard'
import { LanguageProvider } from '../i18n/LanguageContext'
import type { Project } from '../data/projects'

const liveProject: Project = {
  id: 'demo-live',
  name: 'Demo Live',
  category: 'web',
  status: 'live',
  tagline: { id: 'Tagline ID', en: 'Tagline EN' },
  description: { id: 'Deskripsi ID', en: 'Description EN' },
  stack: ['Laravel', 'React'],
  liveUrl: 'https://example.com',
}

const toolProject: Project = {
  ...liveProject,
  id: 'demo-tool',
  name: 'Demo Tool',
  status: 'private-tool',
  liveUrl: undefined,
}

function renderCard(project: Project) {
  return render(
    <LanguageProvider>
      <ProjectCard project={project} />
    </LanguageProvider>,
  )
}

describe('ProjectCard', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  it('shows a "Visit Site" link that opens the live URL safely in a new tab, when one exists', () => {
    renderCard(liveProject)

    const link = screen.getByRole('link', { name: /Buka Situs/ })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
    expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
  })

  it('renders no live link for a project without one, instead of a broken href', () => {
    renderCard(toolProject)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders the full stack list', () => {
    renderCard(liveProject)
    expect(screen.getByText('Laravel')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('has a stable id anchor for cross-linking from the highlight lists', () => {
    const { container } = renderCard(liveProject)
    expect(container.querySelector('#project-demo-live')).toBeInTheDocument()
  })
})

import { afterEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import { projects } from './data/projects'

function renderApp() {
  return render(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
  )
}

describe('App', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  it('renders the page landmarks: skip link, header, main, footer', () => {
    renderApp()
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders every section heading exactly once', () => {
    renderApp()
    for (const name of ['Tentang', 'Web Development', 'AI Systems', 'Tech Stack', 'Proyek', 'Kontak']) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }
  })

  it('renders a card for every project in data/projects.ts', () => {
    renderApp()
    for (const project of projects) {
      expect(screen.getByRole('heading', { level: 3, name: project.name })).toBeInTheDocument()
    }
  })
})

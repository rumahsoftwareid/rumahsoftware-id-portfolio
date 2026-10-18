import { afterEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { LanguageProvider } from '../i18n/LanguageContext'

function renderHeader() {
  return render(
    <LanguageProvider>
      <Header />
    </LanguageProvider>,
  )
}

describe('Header', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  it('renders every nav section as a link to its anchor', () => {
    renderHeader()
    for (const [id, label] of [
      ['about', 'Tentang'],
      ['web', 'Web Development'],
      ['ai', 'AI Systems'],
      ['stack', 'Tech Stack'],
      ['projects', 'Proyek'],
      ['contact', 'Kontak'],
    ]) {
      const link = screen.getAllByRole('link', { name: label })[0]
      expect(link).toHaveAttribute('href', `#${id}`)
    }
  })

  it('opens and closes the mobile menu, and closing it does not change the language', async () => {
    const user = userEvent.setup()
    renderHeader()

    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()

    const openButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(openButton)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles the displayed language via the lang button', async () => {
    const user = userEvent.setup()
    renderHeader()

    const langButtons = screen.getAllByRole('button', { name: /Switch language/ })
    expect(langButtons[0]).toHaveTextContent('EN')

    await user.click(langButtons[0])

    // After switching to English, the nav label + button text flip too.
    expect(screen.getAllByRole('link', { name: 'About' })[0]).toHaveAttribute('href', '#about')
    expect(screen.getAllByRole('button', { name: /Switch language/ })[0]).toHaveTextContent('ID')
  })
})

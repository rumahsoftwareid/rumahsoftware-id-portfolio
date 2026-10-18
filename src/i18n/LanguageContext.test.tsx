import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider, useLanguage } from './LanguageContext'

function Probe() {
  const { lang, t, toggleLang } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="title">{t.hero.title}</span>
      <button onClick={toggleLang}>toggle</button>
    </div>
  )
}

function renderProbe() {
  return render(
    <LanguageProvider>
      <Probe />
    </LanguageProvider>,
  )
}

describe('LanguageProvider', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  afterEach(() => {
    window.localStorage.clear()
  })

  it('defaults to Indonesian when nothing is stored', () => {
    renderProbe()
    expect(screen.getByTestId('lang')).toHaveTextContent('id')
  })

  it('toggles between id and en, updating translated text and <html lang>', async () => {
    const user = userEvent.setup()
    renderProbe()

    expect(screen.getByTestId('lang')).toHaveTextContent('id')
    expect(document.documentElement.lang).toBe('id')

    await user.click(screen.getByRole('button', { name: 'toggle' }))

    expect(screen.getByTestId('lang')).toHaveTextContent('en')
    expect(document.documentElement.lang).toBe('en')
    expect(screen.getByTestId('title')).toHaveTextContent('Web Developer & AI Systems Builder')
  })

  it('persists the chosen language to localStorage and reuses it on remount', async () => {
    const user = userEvent.setup()
    const { unmount } = renderProbe()

    await user.click(screen.getByRole('button', { name: 'toggle' }))
    expect(window.localStorage.getItem('rsid-portfolio-lang')).toBe('en')

    unmount()
    renderProbe()
    expect(screen.getByTestId('lang')).toHaveTextContent('en')
  })

  it('throws a clear error when used outside the provider', () => {
    // Expected console.error from React's own error boundary logging --
    // suppressed for this one assertion so the test output stays readable.
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => render(<Probe />)).toThrow('useLanguage must be used within a LanguageProvider')
    spy.mockRestore()
  })
})

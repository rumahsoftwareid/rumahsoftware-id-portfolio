import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// This project does not enable Vitest's `globals` mode (every test file
// imports describe/it/expect explicitly), so RTL's auto-cleanup never
// self-registers -- without this, a component mounted in one test would
// still be attached to `document.body` when the next test runs.
afterEach(() => {
  cleanup()
})

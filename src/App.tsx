import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WebDevelopment } from './components/WebDevelopment'
import { AISystems } from './components/AISystems'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      {/* First focusable element on the page: lets a keyboard/screen-reader
          user jump past the nav instead of tabbing through it every load. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <WebDevelopment />
        <AISystems />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

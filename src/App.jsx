import { useState, useEffect, useRef, useCallback } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sectionsRef = useRef({})

  const handleLoaded = useCallback(() => setLoading(false), [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const offsets = NAV_LINKS.map((id) => {
        const el = sectionsRef.current[id]
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top) }
      })
      const active = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActiveSection(active.id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    sectionsRef.current[id]?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {loading && <Loader onFinish={handleLoaded} />}
      <div className={`min-h-screen bg-base-100 text-base-content transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <Hero ref={(el) => (sectionsRef.current['Home'] = el)} scrollTo={scrollTo} />
      <About ref={(el) => (sectionsRef.current['About'] = el)} />
      <Skills ref={(el) => (sectionsRef.current['Skills'] = el)} />
      <Projects ref={(el) => (sectionsRef.current['Projects'] = el)} />
      <Contact ref={(el) => (sectionsRef.current['Contact'] = el)} />
      <Footer />
    </div>
    </>
  )
}

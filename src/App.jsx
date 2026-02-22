import { useState, useEffect, useRef } from 'react'
import './App.css'

const NAV_LINKS = ['Home', 'About', 'Work', 'Contact']

const PROJECTS = [
  {
    title: 'Aurora Dashboard',
    desc: 'Real-time analytics platform with live data visualization and team collaboration tools.',
    tags: ['React', 'D3.js', 'Node'],
    color: '#6c5ce7',
  },
  {
    title: 'Pocket Finance',
    desc: 'Mobile-first personal finance tracker with AI-powered spending insights.',
    tags: ['React Native', 'Python', 'ML'],
    color: '#00b894',
  },
  {
    title: 'CloudSync',
    desc: 'Seamless file synchronization service with end-to-end encryption.',
    tags: ['Go', 'AWS', 'Docker'],
    color: '#e17055',
  },
  {
    title: 'PixelForge',
    desc: 'Browser-based collaborative design tool for rapid prototyping.',
    tags: ['Canvas API', 'WebSocket', 'Vue'],
    color: '#0984e3',
  },
]

const SKILLS = [
  { name: 'Frontend', icon: '◆', items: ['React', 'Vue', 'TypeScript', 'Tailwind'] },
  { name: 'Backend', icon: '▲', items: ['Node.js', 'Python', 'Go', 'PostgreSQL'] },
  { name: 'Design', icon: '●', items: ['Figma', 'Motion', 'UI/UX', 'Prototyping'] },
  { name: 'DevOps', icon: '■', items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
]

function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionsRef = useRef({})

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
      const offsets = NAV_LINKS.map((id) => {
        const el = sectionsRef.current[id]
        if (!el) return { id, top: 0 }
        return { id, top: el.getBoundingClientRect().top }
      })
      const active = offsets.reduce((closest, curr) =>
        Math.abs(curr.top) < Math.abs(closest.top) ? curr : closest
      )
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
    <div className="app">
      {/* ─── Navbar ─── */}
      <nav className={`navbar ${scrollY > 60 ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a className="nav-logo" onClick={() => scrollTo('Home')}>
            <span className="logo-dot" />deep.
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
          </button>
          <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  className={activeSection === link ? 'active' : ''}
                  onClick={() => scrollTo(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="hero" ref={(el) => (sectionsRef.current['Home'] = el)}>
        <div className="hero-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Deep <span className="highlight"></span>
          </h1>
          <p className="hero-tagline">
            I craft digital experiences that live at the intersection of
            <br />
            <span className="typed">design, code & creativity.</span>
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo('Work')}>
              View My Work
            </button>
            <button className="btn-outline" onClick={() => scrollTo('Contact')}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="scroll-hint" onClick={() => scrollTo('About')}>
          <span />
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="about" ref={(el) => (sectionsRef.current['About'] = el)}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a full-stack developer & designer with a passion for building
                products that are both beautiful and functional. With expertise
                spanning frontend frameworks, backend systems, and cloud
                infrastructure, I bring ideas to life end-to-end.
              </p>
              <p>
                When I'm not coding, you'll find me exploring generative art,
                contributing to open source, or diving into the latest tech
                rabbit hole.
              </p>
            </div>
            <div className="skills-grid">
              {SKILLS.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <h3>{skill.name}</h3>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Work ─── */}
      <section className="work" ref={(el) => (sectionsRef.current['Work'] = el)}>
        <div className="container">
          <h2 className="section-title">Selected Work</h2>
          <div className="projects-grid">
            {PROJECTS.map((project, i) => (
              <div className="project-card" key={i} style={{ '--accent': project.color }}>
                <div className="project-number">0{i + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section className="contact" ref={(el) => (sectionsRef.current['Contact'] = el)}>
        <div className="container">
          <h2 className="section-title light">Let's Connect</h2>
          <p className="contact-sub">
            Have an idea or project in mind? I'd love to hear about it.
          </p>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:hello@deepghosh.dev">
              <span className="contact-icon">✉</span>
              <span>hello@deepghosh.dev</span>
            </a>
            <a className="contact-card" href="https://github.com" target="_blank" rel="noreferrer">
              <span className="contact-icon">⟐</span>
              <span>GitHub</span>
            </a>
            <a className="contact-card" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <span className="contact-icon">◈</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer>
        <p>© 2026 Deep Ghosh — Crafted with React</p>
      </footer>
    </div>
  )
}

export default App

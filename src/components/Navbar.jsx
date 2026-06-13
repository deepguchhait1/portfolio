import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import resumePdf from '../assets/Deep Guchhait_resume.pdf'
import { NAV_LINKS } from '../assets/mydata'

export default function Navbar({ activeSection, scrolled, menuOpen, setMenuOpen, scrollTo }) {
  const padLen = String(NAV_LINKS.length).length
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-base-100/80 backdrop-blur-2xl border-b border-base-content/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" onClick={() => scrollTo('Home')} className="flex items-center gap-2 cursor-pointer group">
          <HiCode className="text-primary" size={24} />
          <span className="font-mono text-sm font-bold tracking-widest uppercase">
            Deep<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link}
              to={`/#${link.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link) }}
              className={`relative text-xs font-mono uppercase tracking-widest cursor-pointer transition-colors duration-300 ${
                activeSection === link
                  ? 'text-primary'
                  : 'text-base-content/40 hover:text-base-content/70'
              }`}
            >
              <span className="text-primary/50 mr-1">{String(i + 1).padStart(padLen, '0')}.</span>
              {link}
              {activeSection === link && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA button (desktop) */}
        <a
          href={resumePdf}
          download="Deep_Guchhait_Resume.pdf"
          className="hidden md:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider border border-primary/30 text-primary px-5 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
        >
          Resume ↗
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-base-content/60 hover:text-base-content transition-colors"
        >
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-base-100/95 backdrop-blur-2xl border-t border-base-content/5 px-6 py-6 space-y-1">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link}
              to={`/#${link.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link) }}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-mono cursor-pointer transition-all duration-300 ${
                activeSection === link
                  ? 'text-primary bg-primary/5'
                  : 'text-base-content/40 hover:text-base-content/60 hover:bg-base-content/5'
              }`}
            >
              <span className="text-primary/40 text-xs">{String(i + 1).padStart(padLen, '0')}</span>
              {link}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-base-content/5">
            <a
              href={resumePdf}
              download="Deep_Guchhait_Resume.pdf"
              className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider border border-primary/30 text-primary px-5 py-3 rounded-lg hover:bg-primary/10 transition-all"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { HiHeart } from 'react-icons/hi'

const LINKS = [
  { icon: <FaGithub size={16} />, href: 'https://github.com/deepguchhait1' },
  { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/deepguchhait' },
  { icon: <FaXTwitter size={16} />, href: 'https://x.com/DGuchhait64942' },
]

export default function Footer() {
  return (
    <footer className="border-t border-base-content/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-base-content/30 font-mono">
          &copy; {new Date().getFullYear()} Deep Guchhait
        </p>

        <p className="text-xs text-base-content/20 flex items-center gap-1">
          Built with <HiHeart className="text-red-500/60" size={14} /> & lots of coffee
        </p>

        <div className="flex items-center gap-3">
          {LINKS.map((l, i) => (
            <Link
              key={i}
              to={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-base-content/20 hover:text-base-content/50 transition-colors"
            >
              {l.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

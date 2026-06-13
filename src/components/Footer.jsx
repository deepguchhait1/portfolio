import { Link } from 'react-router-dom'
import { HiHeart } from 'react-icons/hi'
import { LINKS } from '../assets/mydata'

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
          {LINKS.map((l, i) => {
            const Icon = l.icon
            return (
            <Link
              key={i}
              to={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-base-content/20 hover:text-base-content/50 transition-colors"
            >
              <Icon size={16} />
            </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

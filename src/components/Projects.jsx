import { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiArrowRight, HiChevronDown, HiChevronUp } from 'react-icons/hi'

const PROJECTS = [
  {
  title: 'Tripzo',
  subtitle: 'Full-Stack Travel Booking Platform',
  desc: 'A comprehensive travel booking solution featuring secure user authentication, property listings, and an integrated payment gateway. Includes a dedicated admin dashboard for managing bookings, users, and destinations.',
  tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Tailwind CSS'],
  link: 'https://tripzo-frontend.vercel.app/',
  github: 'https://github.com/deepguchhait1/TripzoFrontend.git',
},
  {
  title: 'BatChit',
  subtitle: 'Multilingual Language Learning & Networking',
  desc: 'A real-time communication platform designed for language learners, featuring multi-language support and peer-to-peer video conferencing to facilitate immersive practice.',
  tags: ['Socket.io', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
  link: 'https://frontend-chat-app-sigma.vercel.app/',
  github: 'https://github.com/deepguchhait1/Batchit.git',
},
 {
  title: 'Secure Voting System API',
  subtitle: 'Robust Backend for Digital Democracy',
  desc: 'A high-integrity RESTful API designed to manage secure voting processes. It features role-based access control (RBAC), preventing duplicate voting and ensuring data consistency across candidates and voters.',
  tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'REST API'],
  link: null, // Since it's API only, we leave this or link to documentation
  github: 'https://github.com/deepguchhait1/Voting-System----API.git',
},
  {
  title: 'RPS: The Classic Challenge',
  subtitle: 'Interactive Rock Paper Scissors Game',
  desc: 'A sleek, fully responsive web-based game featuring real-time score tracking, smooth CSS animations, and a randomized computer logic engine.',
  tags: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'DOM Manipulation', 'UI/UX'],
  link: 'https://deepguchhait1.github.io/Game/',
  github: 'https://github.com/deepguchhait1/Game.git',
},
  {
  title: 'Morden Resturent',
  subtitle: 'Premium Culinary Digital Experience',
  desc: 'A visually stunning, fully responsive landing page for a modern restaurant. Features high-quality image integration, smooth scrolling, and an elegant menu layout designed to convert visitors into diners.',
  tags: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design', 'UI/UX'],
  link: 'https://deepguchhait1.github.io/Morden-Resturent/',
  github: 'https://github.com/deepguchhait1/Morden-Resturent.git',
},
  {
  title: 'Amazon UI Clone',
  subtitle: 'High-Fidelity E-commerce Interface',
  desc: 'A pixel-perfect recreation of the Amazon homepage, focusing on complex navigation systems, multi-layered layouts, and a responsive product grid using pure HTML and CSS.',
  tags: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Iconography', 'Responsive Design'],
  link: 'https://deepguchhait1.github.io/amazon/',
  github: 'https://github.com/deepguchhait1/amazon.git',
},
]

const INITIAL_COUNT = 4

const Projects = forwardRef((_, ref) => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT)
  return (
    <section ref={ref} className="py-28 lg:py-36 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
          <div className="flex-1 h-px bg-base-content/10 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className="group bg-base-200/30 border border-base-content/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300"
            >
              {/* Card top bar */}
              <div className="flex items-center gap-2 px-6 pt-5 pb-0">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-auto font-mono text-xs text-base-content/20">
                  project-{String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-6 pt-5">
                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-primary/50">{project.subtitle}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-base-content/40 leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-base-content/5 text-base-content/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-base-content/5">
                  <Link
                    to={project.github}
                    className="flex items-center gap-2 text-sm text-base-content/40 hover:text-base-content/70 transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </Link>
                  <Link
                    to={project.link}
                    className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors group/link"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Live Demo</span>
                    <HiArrowRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More / Show Less */}
        {PROJECTS.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-sm font-mono text-primary/70 hover:text-primary border border-primary/20 hover:border-primary/40 px-6 py-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
            >
              {showAll ? 'Show Less' : `See More`}
              {showAll ? <HiChevronUp size={16} /> : <HiChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
})

Projects.displayName = 'Projects'
export default Projects

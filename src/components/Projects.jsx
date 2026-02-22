import { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiArrowRight, HiChevronDown, HiChevronUp } from 'react-icons/hi'

const PROJECTS = [
  {
    title: 'ShopKart',
    subtitle: 'E-Commerce Platform',
    desc: 'Full-stack e-commerce app with user auth, product catalog, cart, Stripe payments, and admin dashboard.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'JWT'],
    link: '#',
    github: '#',
  },
  {
    title: 'DevConnect',
    subtitle: 'Social Network',
    desc: 'A social platform for developers to share posts, create profiles, follow others, and engage in real-time chat.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
    link: '#',
    github: '#',
  },
  {
    title: 'TaskFlow',
    subtitle: 'Project Manager',
    desc: 'Kanban-style task management app with drag-and-drop, team collaboration, and role-based access control.',
    tags: ['Next.js', 'MongoDB', 'Express', 'Tailwind', 'DnD Kit'],
    link: '#',
    github: '#',
  },
  {
    title: 'BlogVerse',
    subtitle: 'CMS & Blog',
    desc: 'A headless CMS with rich text editor, image uploads, categories, SEO optimization, and public-facing blog.',
    tags: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Markdown'],
    link: '#',
    github: '#',
  },
  {
    title: 'ChatWave',
    subtitle: 'Real-time Chat App',
    desc: 'Real-time messaging app with group chats, media sharing, typing indicators, and read receipts.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    title: 'CodeSnap',
    subtitle: 'Code Snippet Manager',
    desc: 'A tool to save, organize, and share code snippets with syntax highlighting and tagging system.',
    tags: ['Next.js', 'MongoDB', 'Prism.js', 'Express', 'JWT'],
    link: '#',
    github: '#',
  },
  {
    title: 'FitTrack',
    subtitle: 'Fitness Tracker',
    desc: 'Workout logging app with progress charts, goal setting, exercise library, and personalized routines.',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
    link: '#',
    github: '#',
  },
  {
    title: 'QuizMaster',
    subtitle: 'Quiz Platform',
    desc: 'Interactive quiz platform with timed assessments, leaderboards, and an admin panel for quiz creation.',
    tags: ['React', 'Express', 'MongoDB', 'Redux', 'Tailwind'],
    link: '#',
    github: '#',
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

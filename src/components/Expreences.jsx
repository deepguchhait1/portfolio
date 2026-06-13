import { forwardRef } from 'react'
import { FaBriefcase, FaCalendarAlt, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import { EXPERIENCES } from '../assets/mydata'

const Expreences = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="py-28 lg:py-36 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
          <div className="flex-1 h-px bg-base-content/10 max-w-xs" />
        </div>

        {/* Experience cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={index} 
              className="group border border-base-content/10 rounded-2xl p-8 hover:border-primary/30 hover:bg-base-200/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FaBriefcase className="text-primary/70 group-hover:text-primary transition-colors" size={20} />
                    <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-3">
                    <a
                      href="https://www.linkedin.com/company/krishlabs/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 hover:text-primary/80 transition-colors"
                    >
                      {exp.company}
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-base-content/60">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <span className="hidden sm:inline text-base-content/20">•</span>
                    <span>{exp.duration} internship</span>
                  </div>
                </div>
              </div>

              <p className="text-base-content/70 mb-6 leading-relaxed">{exp.description}</p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-base-content/40 uppercase tracking-widest mb-4">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-sm text-base-content/60">
                        <FaArrowRight className="text-primary/50 mt-1 shrink-0" size={12} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-bold text-base-content/40 uppercase tracking-widest mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, i) => {
                    const TechIcon = tech.icon
                    return (
                    <div 
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
                    >
                      <span className={tech.color}><TechIcon className="w-5 h-5" /></span>
                      <span className="text-sm font-medium text-base-content/80">{tech.name}</span>
                    </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Expreences.displayName = 'Expreences'
export default Expreences

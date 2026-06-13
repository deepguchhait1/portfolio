import { forwardRef } from 'react'
import { SKILLS } from '../assets/mydata'

const Skills = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="py-28 lg:py-36 relative bg-base-200/20">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tech Stack</h2>
          <div className="flex-1 h-px bg-base-content/10 max-w-xs" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SKILLS.map((skill) => {
            const Icon = skill.icon
            return (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-base-200/40 border border-base-content/8 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default group"
            >
              <span className="text-base-content/70 group-hover:text-primary transition-colors duration-300">
                <Icon size={40} />
              </span>
              <span className="text-sm font-semibold text-base-content/60 group-hover:text-base-content/90 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

Skills.displayName = 'Skills'
export default Skills

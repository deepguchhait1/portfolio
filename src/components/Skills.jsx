import { forwardRef } from 'react'
import {
  FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython,
  FaHtml5, FaCss3Alt, FaBootstrap,
} from 'react-icons/fa'
import {
  SiMongodb, SiExpress, SiJavascript, SiTailwindcss,
  SiPostman, SiC,
} from 'react-icons/si'
import { HiDatabase } from 'react-icons/hi'

const SKILLS = [
  { name: 'C Language', icon: <SiC size={40} /> },
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'React.js', icon: <FaReact size={40} /> },
  { name: 'HTML', icon: <FaHtml5 size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={40} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'Express.js', icon: <SiExpress size={40} /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} /> },
  { name: 'SQL', icon: <HiDatabase size={40} /> },
  { name: 'Git', icon: <FaGitAlt size={40} /> },
  { name: 'Postman', icon: <SiPostman size={40} /> },
]

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
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-base-200/40 border border-base-content/8 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default group"
            >
              <span className="text-base-content/70 group-hover:text-primary transition-colors duration-300">
                {skill.icon}
              </span>
              <span className="text-sm font-semibold text-base-content/60 group-hover:text-base-content/90 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Skills.displayName = 'Skills'
export default Skills

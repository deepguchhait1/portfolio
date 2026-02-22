import { forwardRef } from 'react'
import { FaGraduationCap, FaLaptopCode, FaRocket, FaHeart } from 'react-icons/fa'
import { HiLightningBolt, HiCode, HiGlobe, HiSparkles } from 'react-icons/hi'

const HIGHLIGHTS = [
  { icon: <HiLightningBolt size={22} />, title: 'Fast Learner', desc: 'Quick to pick up new frameworks and tools' },
  { icon: <HiCode size={22} />, title: 'Clean Code', desc: 'Writing maintainable, well-documented code' },
  { icon: <HiGlobe size={22} />, title: 'Full Stack', desc: 'End-to-end from UI to database to deployment' },
  { icon: <HiSparkles size={22} />, title: 'Detail Oriented', desc: 'Pixel-perfect UI with great UX patterns' },
]

const JOURNEY = [
  { icon: <FaGraduationCap />, year: '2023', text: 'Started learning web development' },
  { icon: <FaLaptopCode />, year: '2024', text: 'Built first full-stack MERN project' },
  { icon: <FaRocket />, year: '2025', text: 'Freelancing & open source contributions' },
  { icon: <FaHeart />, year: 'Now', text: 'Building products & seeking new opportunities' },
]

const About = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="py-28 lg:py-36 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          <div className="flex-1 h-px bg-base-content/10 max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left — Bio (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-5 text-base-content/60 text-[1.05rem] leading-relaxed">
              <p>
                I'm a passionate <span className="text-base-content font-semibold">MERN Stack Developer</span> who
                turns ideas into polished, full-stack web applications. My journey started with curiosity about how 
                websites work and evolved into a deep love for building software.
              </p>
              <p>
                I specialize in crafting responsive React interfaces, designing RESTful APIs with Express & Node.js, 
                and modeling data with MongoDB. I care deeply about <span className="text-primary">performance</span>, 
                <span className="text-primary"> accessibility</span>, and <span className="text-primary">developer experience</span>.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="flex gap-4 p-4 rounded-xl bg-base-200/30 border border-base-content/5 hover:border-primary/20 transition-all duration-300 group">
                  <div className="text-primary/70 group-hover:text-primary transition-colors mt-0.5">{h.icon}</div>
                  <div>
                    <h4 className="text-sm font-bold mb-0.5">{h.title}</h4>
                    <p className="text-xs text-base-content/40">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Journey timeline (2 cols) */}
          <div className="lg:col-span-2">
            <div className="bg-base-200/30 border border-base-content/5 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-base-content/40 uppercase tracking-widest mb-6">My Journey</h3>
              <div className="space-y-0">
                {JOURNEY.map((item, i) => (
                  <div key={i} className="flex gap-4 relative">
                    {/* Timeline line */}
                    {i < JOURNEY.length - 1 && (
                      <div className="absolute left-4.25 top-10 w-px h-[calc(100%-8px)] bg-base-content/10" />
                    )}
                    {/* Dot */}
                    <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-sm shrink-0 z-10">
                      {item.icon}
                    </div>
                    <div className="pb-8">
                      <span className="text-xs font-mono text-primary/70">{item.year}</span>
                      <p className="text-sm text-base-content/60 mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

About.displayName = 'About'
export default About

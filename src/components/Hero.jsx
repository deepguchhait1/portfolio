import { forwardRef } from 'react'
import { FaReact, FaNodeJs, FaArrowDown, FaDownload } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'
import { HiChevronDown } from 'react-icons/hi'
import resumePdf from '../assets/Deep Guchhait_resume.pdf'

const MERN_STACK = [
  { icon: <SiMongodb size={28} />, name: 'MongoDB', color: '#47A248' },
  { icon: <SiExpress size={28} />, name: 'Express.js', color: '#888' },
  { icon: <FaReact size={28} />, name: 'React.js', color: '#61DAFB' },
  { icon: <FaNodeJs size={28} />, name: 'Node.js', color: '#339933' },
]

const Hero = forwardRef(({ scrollTo }, ref) => {
  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/8 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for work</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                I build things
                <br />
                for the <span className="text-primary">web.</span>
              </h1>
              <p className="text-lg text-base-content/50 leading-relaxed max-w-md">
                Hi, I'm <span className="text-base-content font-semibold">Deep Guchhait</span> — a MERN stack developer 
                crafting performant, scalable full-stack applications from Mumbai, India.
              </p>
            </div>

            {/* MERN chips */}
            <div className="flex flex-wrap gap-3">
              {MERN_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-base-200/50 border border-base-content/5 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                  <span className="text-sm font-medium text-base-content/70">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => scrollTo('Projects')} className="btn btn-primary rounded-xl gap-2 px-7 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                View Projects <FaArrowDown size={13} />
              </button>
              <a href={resumePdf} download="Deep_Guchhait_Resume.pdf" className="btn btn-ghost rounded-xl gap-2 px-7 border border-base-content/10 hover:border-primary/30">
                <FaDownload size={13} /> Download CV
              </a>
            </div>
          </div>

          {/* Right — Terminal card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
            <div className="relative bg-base-200/60 backdrop-blur-xl border border-base-content/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-base-content/5 bg-base-300/30">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-error/70" />
                  <span className="w-3 h-3 rounded-full bg-warning/70" />
                  <span className="w-3 h-3 rounded-full bg-success/70" />
                </div>
                <span className="text-xs text-base-content/30 font-mono ml-3">deep@portfolio ~ %</span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm leading-loose">
                <p className="text-base-content/30">
                  <span className="text-success">$</span> cat about.json
                </p>
                <p className="mt-3 text-base-content/60">{'{'}</p>
                <p className="pl-6 text-base-content/40">
                  "name": <span className="text-primary">"Deep Guchhait"</span>,
                </p>
                <p className="pl-6 text-base-content/40">
                  "role": <span className="text-secondary">"MERN Stack Developer"</span>,
                </p>
                <p className="pl-6 text-base-content/40">
                  "stack": <span className="text-accent">["MongoDB", "Express", "React", "Node"]</span>,
                </p>
                <p className="pl-6 text-base-content/40">
                  "passion": <span className="text-warning">"Building great software"</span>,
                </p>
                <p className="pl-6 text-base-content/40">
                  "hireable": <span className="text-success">true</span>
                </p>
                <p className="text-base-content/60">{'}'}</p>
                <p className="mt-3 text-base-content/30">
                  <span className="text-success">$</span> <span className="animate-blink text-base-content/60">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <button onClick={() => scrollTo('About')} className="flex flex-col items-center gap-2 text-base-content/30 hover:text-primary transition-colors cursor-pointer group">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <HiChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'
export default Hero

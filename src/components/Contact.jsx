import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { HiMail, HiArrowRight } from 'react-icons/hi'

const SOCIALS = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/deepguchhait1', label: 'GitHub' },
  { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/deepguchhait', label: 'LinkedIn' },
  { icon: <FaXTwitter size={20} />, href: 'https://x.com/DGuchhait64942', label: 'X' },
]

const Contact = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="py-28 lg:py-36 relative bg-base-200/20">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h2>
          <div className="flex-1 h-px bg-base-content/10 max-w-xs" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Terminal-style card */}
          <div className="bg-base-200/30 border border-base-content/5 rounded-2xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-base-content/5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-auto font-mono text-xs text-base-content/20">contact.sh</span>
            </div>

            <div className="p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Let's Build Something <span className="text-primary">Together</span>
              </h3>
              <p className="text-base-content/40 max-w-md mx-auto mb-8 leading-relaxed">
                I'm currently available for freelance work and open to full-time opportunities. 
                If you have a project in mind, let's talk.
              </p>

              {/* Email CTA */}
              <Link
                to="mailto:deepguchhait01@gmail.com"
                className="group inline-flex items-center gap-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 text-primary px-8 py-4 rounded-xl transition-all duration-300"
              >
                <HiMail size={20} />
                <span className="font-semibold">deepguchhait01@gmail.com</span>
                <HiArrowRight
                  size={16}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                />
              </Link>

              {/* Socials */}
              <div className="flex justify-center gap-3 mt-10">
                {SOCIALS.map((social) => (
                  <Link
                    key={social.label}
                    to={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-base-content/5 border border-base-content/5 hover:border-primary/20 flex items-center justify-center text-base-content/30 hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'
export default Contact

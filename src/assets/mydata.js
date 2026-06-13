import {
  HiLightningBolt,
  HiCode as HiCodeIcon,
  HiGlobe,
  HiSparkles,
  HiMail,
  HiArrowRight as HiArrowRightIcon,
  HiChevronDown,
  HiDatabase,
} from 'react-icons/hi'
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaHeart,
  FaBriefcase,
  FaCalendarAlt,
  FaArrowRight,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaArrowDown,
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaJava,
  FaPython,
} from 'react-icons/fa'
import { FaGithub as FaGithub6, FaLinkedin as FaLinkedin6, FaXTwitter as FaXTwitter6 } from 'react-icons/fa6'
import {
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiSupabase,
  SiSocketdotio,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiPostman,
  SiC,
} from 'react-icons/si'

export const NAV_LINKS = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact']

export const HIGHLIGHTS = [
  { icon: HiLightningBolt, title: 'Fast Learner', desc: 'Quick to pick up new frameworks and tools' },
  { icon: HiCodeIcon, title: 'Clean Code', desc: 'Writing maintainable, well-documented code' },
  { icon: HiGlobe, title: 'Full Stack', desc: 'End-to-end from UI to database to deployment' },
  { icon: HiSparkles, title: 'Detail Oriented', desc: 'Pixel-perfect UI with great UX patterns' },
]

export const JOURNEY = [
  { icon: FaGraduationCap, year: '2023', text: 'Started learning web development' },
  { icon: FaLaptopCode, year: '2024', text: 'Built first full-stack MERN applications' },
  { icon: FaRocket, year: 'Mar 2026 - Jun 2026', text: 'Junior Full Stack Developer internship at Krishlab building MERN apps with admin panel, Supabase, Agora, and Resend' },
  { icon: FaHeart, year: 'Now', text: 'Continuing to grow in full-stack development and build polished user experiences' },
]

export const EXPERIENCES = [
  {
    role: 'Junior Full Stack Developer',
    company: 'Krishlab',
    period: 'Mar 2026 - Jun 2026',
    duration: '3 months',
    description: 'Built real-time applications with full-stack MERN stack, contributing to production projects with admin panels using Supabase and Socket.IO.',
    highlights: [
      'Built admin panel for project management and monitoring',
      'Implemented real-time communication using Socket.IO',
      'Integrated Supabase for database, authentication, and live updates',
      'Implemented video call functionality using Agora API',
      'Implemented email notifications using Resend'
    ],
    technologies: [
      { name: 'Express', icon: SiExpress, color: 'text-gray-600' },
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-500' },
      { name: 'Socket.IO', icon: SiSocketdotio, color: 'text-sky-500' },
    ]
  }
]

export const SOCIALS = [
  { icon: FaGithub6, href: 'https://github.com/deepguchhait1', label: 'GitHub' },
  { icon: FaLinkedin6, href: 'https://www.linkedin.com/in/deepguchhait', label: 'LinkedIn' },
  { icon: FaXTwitter6, href: 'https://x.com/DGuchhait64942', label: 'X' },
]

export const LINKS = [
  { icon: FaGithub6, href: 'https://github.com/deepguchhait1' },
  { icon: FaLinkedin6, href: 'https://www.linkedin.com/in/deepguchhait' },
  { icon: FaXTwitter6, href: 'https://x.com/DGuchhait64942' },
]

export const MERN_STACK = [
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiExpress, name: 'Express.js', color: '#888' },
  { icon: FaReact, name: 'React.js', color: '#61DAFB' },
  { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
]

export const PROJECTS = [
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
  link: null,
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
  title: 'Sono',
  subtitle: 'Japanese Culinary Excellence',
  desc: 'A sophisticated multi-page frontend experience for a premium Japanese restaurant. Built with Tailwind CSS for modern utility-first styling and AOS for elegant scroll animations that enhance the user journey.',
  tags: ['Tailwind CSS', 'AOS (Animate On Scroll)', 'JavaScript', 'HTML5', 'Responsive Design'],
  link: 'https://deepguchhait1.github.io/restaurant/',
  github: 'https://github.com/deepguchhait1/restaurant.git',
},
  {
  title: 'JS Calculator',
  subtitle: 'Logic-Based Arithmetic Engine',
  desc: 'A functional web calculator built with vanilla JavaScript. Focuses on precise state management, handling operator precedence, and preventing input errors (like double decimals) through robust conditional logic.',
  tags: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'DOM Manipulation', 'Event Handling'],
  link: 'https://deepguchhait1.github.io/calculator/',
  github: 'https://github.com/deepguchhait1/calculator.git',
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

export const INITIAL_COUNT = 4

export const SKILLS = [
  { name: 'C Language', icon: SiC },
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: FaPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React.js', icon: FaReact },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'SQL', icon: HiDatabase },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Postman', icon: SiPostman },
]

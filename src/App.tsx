import { motion } from 'framer-motion'
import { HlsVideoBackground } from './components/HlsVideoBackground'
import { ProjectsSection } from './components/ProjectsSection'
import { ScrollMarquee } from './components/ScrollMarquee'
import { ScrollRevealText } from './components/ScrollRevealText'

const NAV_LINKS = ['Work', 'Services', 'About', 'Blog', 'Contact']

const PROJECTS = [
  {
    title: 'Nova Finance',
    category: 'Brand & Web Design',
    image:
      'https://motionsites.ai/assets/hero-grow-ai-preview-BlQ8tAQ-.gif',
  },
  {
    title: 'Pulse Health',
    category: 'Custom Web Development',
    image:
      'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    title: 'Drift Studios',
    category: 'Website Optimization',
    image:
      'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  },
  {
    title: 'Arc Commerce',
    category: 'Brand & Development',
    image:
      'https://motionsites.ai/assets/hero-neuralyn-preview-Br4FRDQA.gif',
  },
]

const FOOTER_SERVICES = [
  'Brand Design',
  'Custom Web Design',
  'Custom Development',
  'Optimization',
]

const FOOTER_COMPANY = ['About', 'Work', 'Blog', 'Careers']

const FOOTER_CONNECT = ['Twitter', 'LinkedIn', 'Instagram', 'Dribbble']

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260326_073936_8dd07fdb-4f6b-4220-a3f0-9dedfaab0c88.mp4'

const SHOWCASE_VIDEO_URL =
  'https://media.cleanshot.cloud/media/21620/nKosRonaEKSufJVJ4VtouFhOPkqgJ3dPoQ8ZP52S.mp4'

const HLS_STREAM_URL =
  'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8'

const ABOUT_TEXT =
  'We blend thoughtful craft with bold creativity to design digital experiences that captivate, convert, and scale — building ambitious brands that truly thrive and lead on the modern web.'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex w-full flex-row items-center justify-between px-8 py-6">
      <span className="font-body text-xl font-semibold tracking-tight text-foreground">
        sitefina
      </span>

      <div className="hidden items-center md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-body rounded-sm px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
          >
            {link}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="liquid-glass-strong rounded-full px-6 py-2.5 font-body text-sm font-medium text-foreground"
      >
        Get Started
      </button>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full -translate-y-[100px] object-cover object-bottom md:translate-y-0"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-8 pb-16 text-center md:pb-24">
        <div className="flex w-full max-w-4xl flex-col items-center">
          <div className="liquid-glass mb-8 inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-4">
            <span className="rounded-full bg-foreground px-3 py-1 font-body text-xs font-medium text-background">
              New
            </span>
            <span className="font-body text-sm text-muted-foreground">
              7,000+ brands trust our custom designs
            </span>
          </div>

          <h1 className="mb-4 font-body text-3xl font-semibold tracking-[-1px] sm:text-5xl md:text-6xl md:tracking-[-2px] lg:text-7xl">
            Craft{' '}
            <span className="font-accent">Stunning</span>{' '}
            Designs with Us.
          </h1>

          <p className="mb-10 max-w-xl font-body text-sm text-muted-foreground md:text-lg">
            Custom-designed websites built for beauty, speed, and lasting
            performance.
          </p>

          <form
            className="liquid-glass flex w-full max-w-2xl items-center rounded-full p-1.5 md:p-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-1 items-center gap-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 shrink-0 text-muted-foreground"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full bg-transparent py-2.5 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="iridescent-button shrink-0 rounded-full px-8 py-3 font-body text-sm font-medium text-background"
            >
              Get a Demo
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-background px-8 py-32">
      <ScrollRevealText
        text={ABOUT_TEXT}
        className="mx-auto max-w-4xl text-center font-body text-3xl font-medium leading-relaxed tracking-[-1px] md:text-4xl lg:text-5xl"
      />
    </section>
  )
}

function SelectedWork() {
  return (
    <section id="work" className="bg-background px-8 py-32 pb-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-body text-4xl font-medium tracking-[-2px] md:text-5xl">
          Selected <span className="font-accent">Work</span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center font-body text-lg text-muted-foreground">
          A custom curation of projects where stunning design meets thoughtful
          craft.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="liquid-glass mb-4 aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-body text-xl font-medium text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoShowcase() {
  return (
    <section className="relative z-0 -mt-[325px] h-[650px] overflow-hidden">
      <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent" />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={SHOWCASE_VIDEO_URL} type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

function CTA() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <section className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden">
      <HlsVideoBackground
        src={HLS_STREAM_URL}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-0 z-[5] bg-black/30" />

      <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
        <motion.h2
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0 }}
          className="mb-6 font-body text-4xl font-medium tracking-[-2px] md:text-5xl lg:text-6xl"
        >
          Ready to <span className="font-accent">Elevate</span> Your Brand?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 font-body text-lg text-muted-foreground"
        >
          Let&apos;s design something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            type="button"
            className="rounded-full bg-foreground px-10 py-4 font-body text-sm font-medium text-background"
          >
            START A PROJECT
          </button>
          <button
            type="button"
            className="liquid-glass-strong rounded-full px-10 py-4 font-body text-sm font-medium text-foreground"
          >
            BOOK A CALL
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <span className="font-body text-lg font-semibold text-foreground">
              sitefina
            </span>
            <p className="mt-3 font-body text-sm text-muted-foreground">
              Custom web design studio crafting digital experiences that
              convert.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-body text-sm font-medium text-foreground">
              Services
            </h4>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-body text-sm font-medium text-foreground">
              Company
            </h4>
            <ul className="space-y-2">
              {FOOTER_COMPANY.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-body text-sm font-medium text-foreground">
              Connect
            </h4>
            <ul className="space-y-2">
              {FOOTER_CONNECT.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-body text-sm text-muted-foreground">
            &copy; 2026 sitefina. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <ScrollMarquee />
      <ProjectsSection />
      <VideoShowcase />
      <CTA />
      <Footer />
    </div>
  )
}

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { FadeIn } from './FadeIn'

const STICKY_BASE = 32
const PEEK_OFFSET = 50

interface ProjectData {
  number: string
  category: string
  name: string
  col1: [string, string]
  col2: string
  href: string
}

const PROJECT_CARDS: ProjectData[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    href: '#',
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    href: '#',
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    href: '#',
  },
]

function LiveProjectButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-body shrink-0 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-wide text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:bg-[#D7E2EA]/20 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Live Project
    </a>
  )
}

function StickyProjectCard({
  project,
  index,
  totalCards,
  progress,
}: {
  project: ProjectData
  index: number
  totalCards: number
  progress: MotionValue<number>
}) {
  const rangeStart = index / totalCards
  const rangeEnd = 1
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale])

  return (
    <div
      className="flex h-[85vh] items-start justify-center"
      style={{
        position: 'sticky',
        top: STICKY_BASE + index * PEEK_OFFSET,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale, backgroundColor: '#0C0C0C' }}
        className="relative flex w-full max-w-[1760px] origin-top flex-col gap-6 rounded-[40px] border-2 border-[#D7E2EA] p-4 font-body sm:gap-8 sm:rounded-[50px] sm:p-6 md:gap-10 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
            <span className="font-body text-5xl font-semibold uppercase leading-none tracking-tight text-[#D7E2EA] sm:text-6xl md:text-7xl">
              {project.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="font-body text-sm font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-base">
                {project.category}
              </span>
              <span className="font-body text-xl font-medium tracking-[-0.5px] text-[#D7E2EA] sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-5">
          <div className="flex w-full flex-col gap-4 md:w-[40%] md:gap-5">
            <img
              src={project.col1[0]}
              alt=""
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt=""
              className="w-full rounded-[30px] object-cover sm:rounded-[40px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <img
            src={project.col2}
            alt=""
            className="w-full self-stretch rounded-[30px] object-cover sm:rounded-[40px] md:w-[60%] md:rounded-[60px]"
          />
        </div>
      </motion.div>
    </div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      ref={sectionRef}
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 font-body sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn
        delay={0}
        y={40}
        className="flex flex-col items-center py-20 sm:py-24 md:py-32"
      >
        <h2 className="w-full text-center font-body text-4xl font-medium tracking-[-2px] text-foreground md:text-5xl lg:text-6xl">
          Project
        </h2>
      </FadeIn>

      <div className="pb-32">
        {PROJECT_CARDS.map((project, index) => (
          <StickyProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECT_CARDS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}

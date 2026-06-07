import type { ReactNode } from 'react'
import { useDevModal } from '../context/DevModalContext'

function LiquidButton({ children }: { children: ReactNode }) {
  const { openDevModal } = useDevModal()

  return (
    <button
      type="button"
      onClick={openDevModal}
      className="liquid-glass cursor-pointer rounded-xl px-5 py-2.5 font-body text-sm text-white/90 transition-transform hover:scale-[1.02]"
    >
      {children}
    </button>
  )
}

function CardVideo({ src }: { src: string }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

const CARD_01_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104605_2700410c-4303-4d44-a368-e1b8c84eca8c.mp4'

const CARD_02_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4'

const CARD_03_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104758_e7d78f06-3700-4862-8c9b-595ed447e81a.mp4'

const CARD_04_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_105007_f90de0f3-0f93-44d4-9b71-7446f78c4bd2.mp4'

export function FeaturesSection() {
  return (
    <section className="w-full bg-black px-6 py-16 font-body text-white md:px-12 lg:px-20">
      <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="text-2xl font-normal tracking-tight md:text-4xl lg:text-[2.75rem]">
          <p>Placeholder copy for a potential services section here.</p>
          <p className="mt-2 text-white/40">
            Sample messaging for layout review. Not final yet.
          </p>
        </div>
        <div className="shrink-0 md:pt-3">
          <LiquidButton>Explore Services Placeholder</LiquidButton>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
        <article className="feature-card relative flex min-h-[28rem] flex-col p-7 md:row-span-2">
          <CardVideo src={CARD_01_VIDEO} />
          <div className="relative flex justify-between text-sm text-white/60">
            <span>01/</span>
            <span>Found in Curiosity</span>
          </div>
          <div className="relative flex-1" />
          <div className="relative">
            <h2 className="text-xl font-medium text-white md:text-2xl">
              Great Questions Unearth
              <br />
              Hidden Gems
            </h2>
            <div className="mt-4 h-px w-full bg-white/20" />
            <p className="mt-4 text-xs text-white/70">
              The best answers come from asking the right questions.
              <br />
              Start your search with purpose today.
            </p>
          </div>
        </article>

        <article className="feature-card-dark relative flex flex-col p-7 md:col-span-2">
          <CardVideo src={CARD_02_VIDEO} />
          <div className="relative flex justify-between">
            <h2 className="text-xl font-medium text-white md:text-2xl">
              Where Knowledge Begins
            </h2>
            <span className="text-sm text-white/60">02/</span>
          </div>
          <div className="relative min-h-48 flex-1" />
        </article>

        <article className="feature-card relative flex flex-col p-7">
          <CardVideo src={CARD_03_VIDEO} />
          <div className="relative flex justify-between text-sm text-white/60">
            <span>In Real Time</span>
            <span>03/</span>
          </div>
          <p className="relative mt-10 text-xs text-white/80">
            From complex topics to quick facts, trust what
            <br />
            you learn from every search you perform.
          </p>
          <div className="relative flex-1" />
          <div className="relative mt-6">
            <LiquidButton>Start Using Nexora</LiquidButton>
          </div>
        </article>

        <article className="feature-card relative flex flex-col p-7">
          <CardVideo src={CARD_04_VIDEO} />
          <div className="relative flex justify-between text-sm text-white/60">
            <span>Just Ask</span>
            <span>04/</span>
          </div>
          <div className="relative flex-1" />
          <p className="relative text-center text-xs text-white/80">
            Users Trust Our Search Models.
          </p>
        </article>
      </div>
    </section>
  )
}

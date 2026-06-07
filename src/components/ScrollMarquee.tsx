import { useEffect, useRef } from 'react'

const ROW_1_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
]

const ROW_2_IMAGES = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

function triple(images: string[]) {
  return [...images, ...images, ...images]
}

function MarqueeImage({ src }: { src: string }) {
  return (
    <div className="h-[270px] w-[420px] shrink-0 overflow-hidden rounded-2xl">
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export function ScrollMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const row1 = row1Ref.current
    const row2 = row2Ref.current
    if (!section || !row1 || !row2) return

    const handleScroll = () => {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY
      const scrolled = window.scrollY - sectionTop + window.innerHeight
      const offset = scrolled * 0.3

      row1.style.transform = `translateX(${offset - 200}px)`
      row2.style.transform = `translateX(${-(offset - 200)}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden pt-24 pb-10 sm:pt-32 md:pt-40"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex w-full flex-col gap-3">
        <div className="w-full overflow-hidden">
          <div
            ref={row1Ref}
            className="flex gap-3"
            style={{
              willChange: 'transform',
              transform: 'translateX(-200px)',
            }}
          >
            {triple(ROW_1_IMAGES).map((src, i) => (
              <MarqueeImage key={`row1-${i}`} src={src} />
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={row2Ref}
            className="flex gap-3"
            style={{
              willChange: 'transform',
              transform: 'translateX(200px)',
            }}
          >
            {triple(ROW_2_IMAGES).map((src, i) => (
              <MarqueeImage key={`row2-${i}`} src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

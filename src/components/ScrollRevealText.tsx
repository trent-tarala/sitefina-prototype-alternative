import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'

interface ScrollRevealTextProps {
  text: string
  className?: string
}

function Word({
  word,
  progress,
  index,
  total,
}: {
  word: string
  progress: MotionValue<number>
  index: number
  total: number
}) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.15, 1])

  return (
    <motion.span style={{ opacity }} className="inline font-body">
      {word}
      {index < total - 1 ? ' ' : ''}
    </motion.span>
  )
}

export function ScrollRevealText({ text, className }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.3'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={scrollYProgress}
          index={i}
          total={words.length}
        />
      ))}
    </p>
  )
}

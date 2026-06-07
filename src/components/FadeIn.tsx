import { motion } from 'framer-motion'
import type { CSSProperties, ElementType, ReactNode } from 'react'

interface FadeInProps {
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  style?: CSSProperties
  as?: ElementType
  children?: ReactNode
}

const ease = [0.25, 0.1, 0.25, 1] as const

export function FadeIn({
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  as: Tag = 'div',
  children,
}: FadeInProps) {
  const Component = motion.create(Tag)

  return (
    <Component
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '50px', amount: 0 }}
      variants={{
        hidden: { opacity: 0, x, y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease },
        },
      }}
    >
      {children}
    </Component>
  )
}

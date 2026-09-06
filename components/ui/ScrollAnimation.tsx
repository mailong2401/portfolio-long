'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  threshold?: number
  once?: boolean
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start('visible')
      setHasAnimated(true)
    } else if (!once && isInView) {
      controls.start('visible')
    } else if (!once && !isInView) {
      controls.start('hidden')
    }
  }, [isInView, controls, once, hasAnimated])

  const getDirection = () => {
    switch (direction) {
      case 'up':
        return { y: 50, x: 0 }
      case 'down':
        return { y: -50, x: 0 }
      case 'left':
        return { x: 50, y: 0 }
      case 'right':
        return { x: -50, y: 0 }
      case 'none':
        return { x: 0, y: 0 }
      default:
        return { y: 50, x: 0 }
    }
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getDirection(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}

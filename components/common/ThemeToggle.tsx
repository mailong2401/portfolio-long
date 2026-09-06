'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import { Moon, Sun } from 'lucide-react'
import IconButton from '@/components/ui/IconButton'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const isDark = theme === 'dark'
    const nextTheme = isDark ? 'light' : 'dark'
    const button = buttonRef.current

    const supportsViewTransition =
      typeof document !== 'undefined' && 'startViewTransition' in document

    if (!button || !supportsViewTransition) {
      setTheme(nextTheme)
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setTheme(nextTheme)
      return
    }

    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = (document as any).startViewTransition(() => {
      flushSync(() => {
        document.documentElement.classList.add('theme-transitioning')
        setTheme(nextTheme)
      })
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 2000,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })

    transition.finished.finally(() => {
      document.documentElement.classList.remove('theme-transitioning')
    })
  }

  if (!mounted) {
    return <button className="w-9 h-9 rounded-full animate-pulse bg-primary/20" />
  }

  const isDark = theme === 'dark'

  return (
    <IconButton
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      variant="ghost"
      size="sm"
      className="text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all"
      icon={
        isDark ? (
          <Moon size={18} className="text-foreground" />
        ) : (
          <Sun size={18} className="text-foreground" />
        )
      }
    />
  )
}

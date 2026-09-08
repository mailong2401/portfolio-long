'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
} from 'lucide-react'
import IconButton from '@/components/ui/IconButton'
import NavItem from '@/components/common/NavItem'
import ThemeToggle from '@/components/common/ThemeToggle'
import MobileDropdown from '@/components/ui/MobileDropdown'
import MusicPlayer from '@/components/ui/MusicPlayer'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Theo dõi scroll để cập nhật active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            setActiveSection(`#${id}`)

            // Cập nhật URL hash
            const url = new URL(window.location.href)
            url.hash = `#${id}`
            window.history.pushState({}, '', url.toString())
          }
        })
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.1
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    {
      href: '#about',
      label: 'About'
    },
    {
      href: '#skills',
      label: 'Skills'
    },
    {
      href: '#experience',
      label: 'Work Experiences'
    },
    {
      href: '#opensource',
      label: 'Open Source'
    },
    {
      href: '#achievements',
      label: 'Achievements'
    },
    {
      href: '#blogs',
      label: 'Blogs'
    },
    {
      href: '#contact',
      label: 'Contact me'
    },
  ];

  if (!mounted) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-8xl">
      <nav className="relative bg-background border-2 border-border rounded-2xl px-4 py-3 shadow-border-md hover:shadow-border-lg transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <span className="text-xl font-bold text-primary hidden sm:block">
              Long Dev
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-1 flex-1 justify-center" ref={dropdownRef}>
            {navLinks.map((link) => {
              const isActive = link.href === '/'
                ? !activeSection && window.location.pathname === '/'
                : activeSection === link.href

              return (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isOpen={openDropdown === link.href}
                  onOpen={() => setOpenDropdown(link.href)}
                  onClose={() => setOpenDropdown(null)}
                  isActive={isActive}
                />
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* Music Player - nằm bên trái ThemeToggle */}
            <MusicPlayer />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <IconButton
              icon={isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="xl:hidden text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all"
            />
          </div>
        </div>

        {/* Mobile Menu - Sửa lại mobile menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 mt-2 bg-background/98 backdrop-blur-md border-2 border-border rounded-2xl p-4 shadow-border-md max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = link.href === '/'
                  ? !activeSection && window.location.pathname === '/'
                  : activeSection === link.href

                return (
                  <MobileDropdown
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    isActive={isActive}
                    onClose={() => setIsMobileMenuOpen(false)}
                  />
                )
              })}

              {/* Divider */}
              <div className="border-t border-border/50 my-2"></div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

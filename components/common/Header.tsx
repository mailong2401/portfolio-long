// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import IconButton from '@/components/ui/IconButton'
import NavItem from '@/components/common/NavItem'
import ThemeToggle from '@/components/common/ThemeToggle'
import MobileDropdown from '@/components/ui/MobileDropdown'
import MusicPlayer from '@/components/ui/MusicPlayer'
import LanguageSelector from '@/components/common/LanguageSelector'
import { useLanguage } from '@/app/contexts/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement
        // Don't close if clicking on the menu button
        if (!target.closest('button') || !target.closest('[aria-label="Toggle menu"]')) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#opensource', label: t('nav.opensource') },
    { href: '#achievements', label: t('nav.achievements') },
    { href: '#blogs', label: t('nav.blogs') },
    { href: '#contact', label: t('nav.contact') },
  ]

  if (!mounted) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-8xl">
      <nav className="relative bg-background border-2 border-border rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-border-md hover:shadow-border-lg transition-all duration-300">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <span className="text-base sm:text-xl font-bold text-primary hidden sm:block">
              Long Dev
            </span>
            <span className="text-lg sm:text-xl font-bold text-primary block sm:hidden">
              LD
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
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            <MusicPlayer />
            <LanguageSelector />
            <ThemeToggle />
            <IconButton
              icon={isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="xl:hidden text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Toggle menu"
            />
          </div>
        </div>

        {/* Mobile Menu - Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <div
              ref={mobileMenuRef}
              className="xl:hidden fixed top-[72px] sm:top-[76px] left-4 right-4 bg-background/98 backdrop-blur-md border-2 border-border rounded-2xl p-4 shadow-xl z-50 max-h-[calc(100vh-100px)] overflow-y-auto animate-slide-down"
            >
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
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  )
}

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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
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
      href: '/',
      label: 'About'
    },
    {
      href: '#skill',
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
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav className="relative bg-background/95 backdrop-blur-md border-2 border-border rounded-2xl px-4 py-3 shadow-border-md hover:shadow-border-lg transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo - Sử dụng hình ảnh */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <span className="text-xl font-bold text-primary hidden sm:block">
              Long Dev
            </span>
          </Link>

          {/* Desktop Menu - Sử dụng NavItem component */}
          <div className="hidden xl:flex items-center gap-1 flex-1 justify-center" ref={dropdownRef}>
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                dropdown={link.dropdown}
                isOpen={openDropdown === link.href}
                onOpen={() => setOpenDropdown(link.href)}
                onClose={() => setOpenDropdown(null)}
              />
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <IconButton
              icon={isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="lg:hidden text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all"
            />
          </div>
        </div>

        {/* Mobile Menu - Sử dụng MobileDropdown component */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-background/98 backdrop-blur-md border-2 border-border rounded-2xl p-4 shadow-border-md max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {/* Main nav links with dropdown on mobile */}
              {navLinks.map((link) => (
                <MobileDropdown
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  dropdown={link.dropdown}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              ))}

              <div className="border-t border-border/50 my-2"></div>
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

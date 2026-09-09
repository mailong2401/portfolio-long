'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import DropdownMenu from '@/components/ui/DropdownMenu'

interface DropdownItem {
  href: string
  label: string
}

interface NavItemProps {
  href: string
  label: string
  dropdown?: DropdownItem[]
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  isActive: boolean
}

export default function NavItem({
  href,
  label,
  dropdown,
  isOpen,
  onOpen,
  onClose,
  isActive,
}: NavItemProps) {
  const [isHovering, setIsHovering] = useState(false)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const hasDropdown = dropdown && dropdown.length > 0

  const clearTimeouts = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current)
      openTimeoutRef.current = null
    }
  }

  const handleMouseEnter = () => {
    clearTimeouts()
    setIsHovering(true)
    if (hasDropdown) {
      openTimeoutRef.current = setTimeout(() => {
        onOpen()
      }, 100)
    }
  }

  const handleMouseLeave = () => {
    clearTimeouts()
    setIsHovering(false)
    if (hasDropdown) {
      closeTimeoutRef.current = setTimeout(() => {
        onClose()
      }, 100)
    }
  }

  useEffect(() => {
    return () => clearTimeouts()
  }, [])

  const isLinkActive = isActive || isHovering

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()

      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)

      if (element) {
        const headerHeight = 100 // Chiều cao header của bạn (có thể lấy dynamic)
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        window.history.pushState({}, '', href)
      }

      if (hasDropdown) {
        onClose()
      }
    }
  }

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        onClick={handleClick} // 👈 Thêm onClick handler
        className={`px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 text-sm border-2 ${isLinkActive
          ? 'bg-primary/20 text-primary border-border shadow-primary-sm'
          : 'border-transparent text-foreground hover:bg-primary/10 hover:border-border hover:text-primary hover:shadow-primary-sm'
          }`}
      >
        <span className="whitespace-nowrap">{label}</span>
        {hasDropdown && (
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </Link>

      {hasDropdown && (
        <div
          onMouseEnter={() => {
            clearTimeouts()
            setIsHovering(true)
            onOpen()
          }}
          onMouseLeave={() => {
            clearTimeouts()
            setIsHovering(false)
            closeTimeoutRef.current = setTimeout(() => {
              onClose()
            }, 300)
          }}
        >
          <DropdownMenu
            items={dropdown}
            isOpen={isOpen}
            onClose={onClose}
          />
        </div>
      )}
    </div>
  )
}

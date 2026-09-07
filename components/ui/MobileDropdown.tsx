'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

interface DropdownItem {
  href: string
  label: string
}

interface MobileDropdownProps {
  href: string
  label: string
  dropdown?: DropdownItem[]
  isActive?: boolean // Thêm isActive vào props
  onClose: () => void
}

export default function MobileDropdown({
  href,
  label,
  dropdown,
  isActive = false,
  onClose,
}: MobileDropdownProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const hasDropdown = dropdown && dropdown.length > 0

  // Nếu không có isActive từ props, tự tính
  const active = isActive || (pathname === href)

  return (
    <div>
      <div
        className={`px-4 py-2.5 rounded-xl transition-all duration-300 flex border-border items-center gap-3 border-2 cursor-pointer ${active
            ? 'bg-primary/20 text-primary shadow-primary-sm'
            : 'border-transparent text-foreground/70 hover:bg-primary/10 hover:text-primary'
          }`}
        onClick={() => {
          if (hasDropdown) {
            setIsOpen(!isOpen)
          } else {
            window.location.href = href
            onClose()
          }
        }}
      >
        <span className="flex-1">{label}</span>
        {hasDropdown && (
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </div>

      {/* Mobile Dropdown */}
      {hasDropdown && isOpen && (
        <div className="ml-6 mt-1 space-y-1 border-l-2 border-border pl-4">
          {dropdown.map((item) => {
            const isItemActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  onClose()
                  setIsOpen(false)
                }}
                className={`px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-3 ${isItemActive
                    ? 'bg-primary/20 text-primary'
                    : 'text-foreground/60 hover:bg-primary/10 hover:text-primary'
                  }`}
              >
                <span className="text-sm">{item.label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

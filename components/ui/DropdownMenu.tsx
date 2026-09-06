'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

interface DropdownItem {
  href: string
  label: string
}

interface DropdownMenuProps {
  items: DropdownItem[]
  isOpen: boolean
  onClose: () => void
  className?: string
}

export default function DropdownMenu({ 
  items, 
  isOpen, 
  onClose,
  className = '' 
}: DropdownMenuProps) {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path

  if (!isOpen) return null

  return (
    <div className={`absolute top-full left-0 mt-1 min-w-[220px] bg-background/98 backdrop-blur-md border-2 border-border rounded-xl shadow-border-lg py-1.5 
      animate-in fade-in slide-in-from-top-2 duration-200 
      transition-all ease-out
      ${className}`}>
      {items.map((item) => {
        const isItemActive = isActive(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2.5 flex items-center gap-3 text-sm transition-all duration-200 
              ${isItemActive
                ? 'bg-primary/20 text-primary'
                : 'text-foreground/70 hover:bg-primary/10 hover:text-primary'
              }`}
            onClick={onClose}
          >
            <span className="whitespace-nowrap">{item.label}</span>
            {isItemActive && (
              <ChevronRight size={14} className="ml-auto text-primary" />
            )}
          </Link>
        )
      })}
    </div>
  )
}

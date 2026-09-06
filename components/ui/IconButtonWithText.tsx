'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface IconButtonWithTextProps {
  icon: ReactNode
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  rounded?: 'none' | 'md' | 'full'
  bgColor?: string
  hoverBgColor?: string
  activeBgColor?: string
  iconPosition?: 'left' | 'right'
}

export default function IconButtonWithText({
  icon,
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  rounded = 'full',
  bgColor = 'bg-[#FFA6F6]',
  hoverBgColor = 'hover:bg-[#fa8cef]',
  activeBgColor = 'active:bg-[#f774ea]',
  iconPosition = 'left',
}: IconButtonWithTextProps) {
  const roundedClasses = {
    none: 'rounded-none',
    md: 'rounded-md',
    full: 'rounded-full',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'border-black border-2',
        roundedClasses[rounded],
        'px-4 py-2',
        bgColor,
        hoverBgColor,
        activeBgColor,
        'transition-all duration-200',
        'flex items-center justify-center',
        'gap-2',
        'font-medium',
        'hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]',
        disabled && 'opacity-50 cursor-not-allowed hover:shadow-none',
        className
      )}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </button>
  )
}

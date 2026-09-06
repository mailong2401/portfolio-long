'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FullRoundedButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  bgColor?: string
  hoverBgColor?: string
  activeBgColor?: string
}

export default function FullRoundedButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  bgColor = 'bg-[#A6FAFF]',
  hoverBgColor = 'hover:bg-[#79F7FF]',
  activeBgColor = 'active:bg-[#00E1EF]',
}: FullRoundedButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'h-12 border-black border-2 p-2.5',
        bgColor,
        hoverBgColor,
        activeBgColor,
        'hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]',
        'rounded-full',
        'transition-all duration-200',
        'font-medium',
        'flex items-center justify-center',
        'px-6',
        disabled && 'opacity-50 cursor-not-allowed hover:shadow-none',
        className
      )}
    >
      {children}
    </button>
  )
}

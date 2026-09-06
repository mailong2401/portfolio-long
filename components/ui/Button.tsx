'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'playful' | 'rainbow'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  animated?: boolean
}

export default function Button({
  children,
  variant = 'playful',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left',
  animated = true,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-9',
    md: 'px-6 py-3 text-base h-11',
    lg: 'px-8 py-4 text-lg h-13',
    icon: 'w-11 h-11',
  }

  const variantClasses = {
    primary: [
      'bg-primary text-background',
      'border-2 border-foreground',
      'shadow-border-md',
      ' hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-md',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    ].join(' '),

    secondary: [
      'bg-secondary text-foreground',
      'border-2 border-foreground',
      'shadow-border-md',
      'hover:bg-[#4a5060] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-md',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    ].join(' '),

    outline: [
      'bg-transparent text-foreground',
      'border-2 border-border',
      'shadow-border-sm',
      ' hover:text-foreground hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-sm',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    ].join(' '),

    ghost: [
      'bg-transparent text-foreground',
      'border-2 border-transparent',
      'hover:bg-secondary hover:border-foreground hover:text-primary hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-sm',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    ].join(' '),
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 relative cursor-pointer',
        sizeClasses[size],
        variantClasses[variant],
        animated && 'hover:scale-105 active:scale-95',
        disabled && 'opacity-50 cursor-not-allowed hover:translate-x-0 hover:translate-y-0 hover:shadow-none active:translate-x-0 active:translate-y-0 hover:scale-100 active:scale-100',
        className
      )}
    >
      {icon && iconPosition === 'left' && icon}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}

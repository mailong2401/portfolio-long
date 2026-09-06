'use client'

import { ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface IconButtonProps {
  icon: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'playful' | 'rainbow'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  animated?: boolean
  'aria-label'?: string
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      onClick,
      type = 'button',
      disabled = false,
      className = '',
      variant = 'playful',
      size = 'md',
      animated = true,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    const sizeClasses = {
      xs: 'w-6 h-6 text-[10px]',
      sm: 'w-9 h-9 text-sm',
      md: 'w-11 h-11 text-base',
      lg: 'w-14 h-14 text-xl',
    }

    const shadowSizes = {
      xs: {
        default: 'shadow-[1px_1px_0px_#5a8a3a]',
        hover: 'hover:shadow-[2px_2px_0px_#5a8a3a]',
        active: 'active:shadow-[0px_0px_0px_#5a8a3a]',
        offset: 'hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]',
      },
      sm: {
        default: 'shadow-[2px_2px_0px_#5a8a3a]',
        hover: 'hover:shadow-[3px_3px_0px_#5a8a3a]',
        active: 'active:shadow-[1px_1px_0px_#5a8a3a]',
        offset: 'hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px]',
      },
      md: {
        default: 'shadow-[4px_4px_0px_#5a8a3a]',
        hover: 'hover:shadow-[6px_6px_0px_#5a8a3a]',
        active: 'active:shadow-[2px_2px_0px_#5a8a3a]',
        offset: 'hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-[3px] active:translate-y-[3px]',
      },
      lg: {
        default: 'shadow-[6px_6px_0px_#5a8a3a]',
        hover: 'hover:shadow-[8px_8px_0px_#5a8a3a]',
        active: 'active:shadow-[4px_4px_0px_#5a8a3a]',
        offset: 'hover:-translate-x-[4px] hover:-translate-y-[4px] active:translate-x-[4px] active:translate-y-[4px]',
      },
    }

    const rainbowShadowSizes = {
      xs: {
        default: 'shadow-[1px_1px_0px_rgba(0,0,0,0.2)]',
        hover: 'hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)]',
        active: 'active:shadow-[0px_0px_0px_rgba(0,0,0,0.2)]',
        offset: 'hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]',
      },
      sm: {
        default: 'shadow-[2px_2px_0px_rgba(0,0,0,0.2)]',
        hover: 'hover:shadow-[3px_3px_0px_rgba(0,0,0,0.2)]',
        active: 'active:shadow-[1px_1px_0px_rgba(0,0,0,0.2)]',
        offset: 'hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px]',
      },
      md: {
        default: 'shadow-[4px_4px_0px_rgba(0,0,0,0.2)]',
        hover: 'hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)]',
        active: 'active:shadow-[2px_2px_0px_rgba(0,0,0,0.2)]',
        offset: 'hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-[3px] active:translate-y-[3px]',
      },
      lg: {
        default: 'shadow-[6px_6px_0px_rgba(0,0,0,0.2)]',
        hover: 'hover:shadow-[8px_8px_0px_rgba(0,0,0,0.2)]',
        active: 'active:shadow-[4px_4px_0px_rgba(0,0,0,0.2)]',
        offset: 'hover:-translate-x-[4px] hover:-translate-y-[4px] active:translate-x-[4px] active:translate-y-[4px]',
      },
    }

    const getShadowClasses = (variant: string, size: string) => {
      if (variant === 'playful') {
        const shadow = shadowSizes[size as keyof typeof shadowSizes]
        return `${shadow.default} ${shadow.hover} ${shadow.active} ${shadow.offset}`
      }
      if (variant === 'rainbow') {
        const shadow = rainbowShadowSizes[size as keyof typeof rainbowShadowSizes]
        return `${shadow.default} ${shadow.hover} ${shadow.active} ${shadow.offset}`
      }
      return 'shadow-border-md hover:shadow-border-lg active:shadow-border-sm'
    }

    const variantClasses = {
      playful: [
        'bg-gradient-to-r from-[#98c379] to-[#7ab358]',
        'text-white',
        'border-2 border-[#5a8a3a]',
        'rounded-2xl',
        getShadowClasses('playful', size),
      ].join(' '),

      rainbow: [
        'bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-green-400 to-yellow-400',
        'bg-[length:200%_100%]',
        'text-white',
        'border-2 border-white',
        'rounded-2xl',
        'animate-gradient',
        getShadowClasses('rainbow', size),
      ].join(' '),

      primary: [
        'bg-primary text-background',
        'border-2 border-foreground',
        'shadow-border-md',
        'hover:bg-[#7ab358] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-md',
        'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      ].join(' '),

      secondary: [
        'bg-secondary text-foreground',
        'border-2 border-foreground',
        'shadow-border-md',
        'hover:bg-[#4a5060] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-md',
        'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      ].join(' '),

      outline: [
        'bg-transparent text-primary',
        'border-2 border-primary',
        'shadow-border-sm',
        'hover:bg-primary hover:text-background hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-sm',
        'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      ].join(' '),

      ghost: [
        'bg-transparent text-foreground',
        'border-2 border-transparent',
        'hover:bg-secondary hover:border-foreground hover:text-primary hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-sm',
        'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      ].join(' '),
    }

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={cn(
          'rounded-full font-medium transition-all duration-200 flex items-center justify-center relative',
          sizeClasses[size],
          variantClasses[variant],
          animated && 'hover:scale-110 active:scale-90',
          disabled &&
          'opacity-50 cursor-not-allowed hover:translate-x-0 hover:translate-y-0 hover:shadow-none active:translate-x-0 active:translate-y-0 hover:scale-100 active:scale-100',
          className
        )}
      >
        <span className="relative z-10 flex items-center justify-center">{icon}</span>

        {variant === 'playful' && !disabled && (
          <>
            <span
              className={`absolute -top-1 -right-1 rounded-full animate-pulse-slow ${size === 'xs' ? 'w-1.5 h-1.5' : size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-3.5 h-3.5'
                } bg-yellow-400`}
            ></span>
            <span
              className={`absolute -bottom-1 -left-1 rounded-full animate-pulse-slow delay-150 ${size === 'xs' ? 'w-1 h-1' : size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-2 h-2' : 'w-2.5 h-2.5'
                } bg-pink-400`}
            ></span>
            <span
              className={`absolute top-1/2 -right-2 rounded-full animate-pulse-slow delay-300 ${size === 'xs' ? 'w-1 h-1' : size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-1.5 h-1.5' : 'w-2 h-2'
                } bg-blue-400`}
            ></span>
          </>
        )}

        {variant === 'rainbow' && !disabled && (
          <>
            <span
              className={`absolute -top-2 -right-2 text-yellow-400 animate-spin-slow ${size === 'xs' ? 'text-[8px]' : size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-xs' : 'text-sm'
                }`}
            >
              ✦
            </span>
            <span
              className={`absolute -bottom-2 -left-2 text-pink-400 animate-bounce-slow ${size === 'xs' ? 'text-[8px]' : size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-xs' : 'text-sm'
                }`}
            >
              ✦
            </span>
          </>
        )}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'

export default IconButton

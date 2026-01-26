'use client'

import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverted'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--btn-text)] focus:ring-[var(--accent)]',
    secondary: 'border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--btn-text)]',
    ghost: 'text-[var(--accent)] hover:bg-[var(--accent)]/10',
    // Inverted: for use on accent-colored backgrounds
    inverted: 'border-2 border-[var(--btn-text)] text-[var(--btn-text)] hover:bg-[var(--btn-text)] hover:text-[var(--accent)] focus:ring-[var(--btn-text)]',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

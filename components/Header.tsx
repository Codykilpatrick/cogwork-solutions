'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Cog } from 'lucide-react'
import Button from './Button'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]
  
  return (
    <header className="sticky top-0 z-50 bg-theme-primary/95 backdrop-blur-sm border-b border-theme">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Cog 
                className="w-8 h-8 transition-transform duration-500 group-hover:rotate-90" 
                strokeWidth={1.5}
                style={{ color: 'var(--icon-color)' }}
              />
            </div>
            <span className="font-heading font-bold text-xl text-theme-primary">
              Cogwork
              <span style={{ color: 'var(--icon-color)' }}>.</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-theme-muted hover:text-theme-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <ThemeSwitcher />
            <Button href="/contact" size="sm">
              Get In Touch
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-theme-muted hover:text-theme-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-theme">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-theme-muted hover:text-theme-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="py-2">
                <ThemeSwitcher />
              </div>
              <Button href="/contact" className="mt-2">
                Get In Touch
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

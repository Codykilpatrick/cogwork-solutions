'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

type Theme = 'dark' | 'warm'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('cogwork-theme') as Theme | null
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'warm')) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('cogwork-theme', newTheme)
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 rounded-lg bg-theme-card border border-theme opacity-0">
        <div className="px-3 py-1.5 rounded-md">
          <Moon className="w-4 h-4" />
        </div>
        <div className="px-3 py-1.5 rounded-md">
          <Sun className="w-4 h-4" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-theme-card border border-theme">
      <button
        onClick={() => handleThemeChange('dark')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          theme === 'dark'
            ? 'text-[#1A1D23]'
            : 'text-theme-muted hover:text-theme-primary'
        }`}
        style={theme === 'dark' ? { backgroundColor: '#00D9C0' } : {}}
        aria-label="Dark industrial theme"
      >
        <Moon className="w-4 h-4" />
        <span className="hidden sm:inline">Dark</span>
      </button>
      <button
        onClick={() => handleThemeChange('warm')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          theme === 'warm'
            ? 'text-white'
            : 'text-theme-muted hover:text-theme-primary'
        }`}
        style={theme === 'warm' ? { backgroundColor: '#C4704B' } : {}}
        aria-label="Warm forest theme"
      >
        <Sun className="w-4 h-4" />
        <span className="hidden sm:inline">Warm</span>
      </button>
    </div>
  )
}

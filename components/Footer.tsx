import Link from 'next/link'
import { Cog, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-theme-secondary border-t border-theme">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Cog 
                className="w-7 h-7 transition-transform duration-500 group-hover:rotate-90" 
                strokeWidth={1.5}
                style={{ color: 'var(--icon-color)' }}
              />
              <span className="font-heading font-bold text-xl text-theme-primary">
                Cogwork
                <span style={{ color: 'var(--icon-color)' }}>.</span>
              </span>
            </Link>
            <p className="text-sm text-theme-muted max-w-xs">
              Practical software for small business.
              <br />
              Built to fit. Built to last.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-theme-primary">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-theme-muted hover:text-theme-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-theme-muted hover:text-theme-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-theme-muted hover:text-theme-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-theme-primary">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:contact@cogwork-solutions.com" 
                className="flex items-center gap-2 text-theme-muted hover:text-theme-primary transition-colors"
              >
                <Mail className="w-4 h-4" style={{ color: 'var(--icon-color)' }} />
                contact@cogwork-solutions.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-theme">
          <p className="text-sm text-theme-muted text-center opacity-60">
            &copy; {currentYear} Cogwork Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

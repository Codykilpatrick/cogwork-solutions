import { Metadata } from 'next'
import Button from '@/components/Button'
import { Anchor, Code, Cog, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Cogwork Solutions',
  description: "I'm Cody—Navy veteran turned software engineer. I build custom software solutions for small businesses.",
}

export default function AboutPage() {
  return (
    <div className="bg-theme-primary">
      {/* Hero Section */}
      <section 
        className="relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Cogwork Solutions
          </h1>
          <p className="text-xl text-theme-muted">
            The story behind the software.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section 
        className="section-padding relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
      >
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <div className="mb-12">
              <p className="text-2xl md:text-3xl font-heading font-semibold leading-snug mb-8">
                I&apos;m Cody—Navy veteran turned software engineer.
              </p>
            </div>
            
            {/* Journey Icons */}
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--icon-color) 15%, transparent)' }}
                >
                  <Anchor className="w-8 h-8" strokeWidth={1.5} style={{ color: 'var(--icon-color)' }} />
                </div>
                <span className="text-sm text-theme-muted">Navy</span>
              </div>
              <ArrowRight className="w-6 h-6 text-theme-muted opacity-50" />
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--icon-color) 15%, transparent)' }}
                >
                  <Code className="w-8 h-8" strokeWidth={1.5} style={{ color: 'var(--icon-color)' }} />
                </div>
                <span className="text-sm text-theme-muted">Engineer</span>
              </div>
              <ArrowRight className="w-6 h-6 text-theme-muted opacity-50" />
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--icon-color) 15%, transparent)' }}
                >
                  <Cog className="w-8 h-8" strokeWidth={1.5} style={{ color: 'var(--icon-color)' }} />
                </div>
                <span className="text-sm text-theme-muted">Cogwork</span>
              </div>
            </div>

            {/* Story */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-theme-muted leading-relaxed mb-6">
                After leaving Naval service, I spent years building software systems 
                for demanding, high-stakes environments. The kind of work where things have 
                to be reliable, efficient, and actually solve the problem at hand.
              </p>
              
              <p className="text-lg md:text-xl text-theme-muted leading-relaxed mb-6">
                Now I&apos;m bringing that same approach to small businesses.
              </p>

              <p className="text-lg md:text-xl text-theme-muted leading-relaxed mb-6">
                I started Cogwork Solutions because I kept seeing the same thing: small business 
                owners stuck with clunky processes, drowning in spreadsheets, or paying way too 
                much for software that doesn&apos;t quite fit. Custom solutions always seemed out of 
                reach—too expensive, too complicated, too risky.
              </p>
              
              <p className="text-xl md:text-2xl font-heading font-semibold mb-6" style={{ color: 'var(--accent)' }}>
                That&apos;s not how it has to be.
              </p>
              
              <p className="text-lg md:text-xl text-theme-muted leading-relaxed mb-6">
                I work with local businesses one-on-one. I learn how you operate, figure out 
                where software can actually help, and build something that fits your workflow—not 
                the other way around. No bloat. No jargon. Just tools that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        className="section-padding relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}
      >
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
              What I Believe
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Software should fit the business, not the other way around.',
                  description: "You shouldn't have to change how you work just because some developer decided that's how their tool works.",
                },
                {
                  title: 'Simplicity beats complexity.',
                  description: "The best tool is one that does exactly what you need and nothing more. No feature bloat, no learning curve from hell.",
                },
                {
                  title: 'Communication matters.',
                  description: "If I can't explain what I'm building in plain English, I probably don't understand it well enough myself.",
                },
                {
                  title: 'Relationships over transactions.',
                  description: "I'm not here to close a deal and disappear. I want to be the person you call when something needs fixing or improving.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-theme-card rounded-lg p-6 border border-theme">
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-theme-muted">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section-padding text-center"
        style={{ backgroundColor: 'var(--accent)' }}
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ color: 'var(--btn-text)' }}>
            If that sounds like what you need, let&apos;s talk.
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: 'var(--btn-text)', opacity: 0.9 }}>
            No sales pitch, no pressure. Just a conversation to see if I can help.
          </p>
          <Button href="/contact" size="lg" variant="inverted">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  )
}

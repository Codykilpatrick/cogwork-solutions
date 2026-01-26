import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Cogwork Solutions',
  description: "Let's figure this out together. Tell me about your business and what's on your mind.",
}

export default function ContactPage() {
  return (
    <div className="bg-theme-primary">
      {/* Hero Section */}
      <section 
        className="relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let&apos;s Figure This Out Together
          </h1>
          <p className="text-xl text-theme-muted max-w-2xl">
            Tell me a little about your business and what&apos;s on your mind. I&apos;ll get back 
            to you within a day or two to set up a conversation—no obligations, just a 
            chat to see if I can help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="section-padding relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-heading font-semibold mb-4">
                  What to Expect
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--icon-color)' }} />
                    <div>
                      <p className="font-medium">Quick Response</p>
                      <p className="text-sm text-theme-muted">
                        I&apos;ll reply within 1-2 business days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--icon-color)' }} />
                    <div>
                      <p className="font-medium">No Strings Attached</p>
                      <p className="text-sm text-theme-muted">
                        Just a conversation to understand your needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-theme-card rounded-lg p-6 border border-theme">
                <h3 className="font-heading font-semibold mb-3">
                  Not sure what to say?
                </h3>
                <p className="text-sm text-theme-muted mb-4">
                  Here are some things that might be worth mentioning:
                </p>
                <ul className="text-sm text-theme-muted space-y-2">
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--icon-color)' }}>•</span>
                    What&apos;s the most tedious part of your day?
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--icon-color)' }}>•</span>
                    What information do you wish was easier to find?
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--icon-color)' }}>•</span>
                    What process makes you think &quot;there has to be a better way&quot;?
                  </li>
                </ul>
              </div>

              <div className="text-sm text-theme-muted">
                <p className="mb-2">Prefer email directly?</p>
                <a 
                  href="mailto:codykilpatrick1996@gmail.com" 
                  className="hover:underline"
                  style={{ color: 'var(--icon-color)' }}
                >
                  codykilpatrick1996@gmail.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

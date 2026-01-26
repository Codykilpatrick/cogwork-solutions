'use client'

import { useState, FormEvent } from 'react'
import Button from './Button'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzarkba'

interface FormData {
  name: string
  business: string
  email: string
  phone: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          business: '',
          email: '',
          phone: '',
          message: '',
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-theme-card rounded-xl p-8 md:p-12 border border-theme text-center">
        <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--icon-color)' }} />
        <h3 className="text-2xl font-heading font-semibold mb-2">Message Sent!</h3>
        <p className="text-theme-muted">
          Thanks for reaching out. I&apos;ll get back to you within a day or two.
        </p>
        <Button
          onClick={() => setStatus('idle')}
          variant="secondary"
          className="mt-6"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-theme-card rounded-xl p-8 md:p-12 border border-theme">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span style={{ color: 'var(--accent)' }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-theme bg-theme-secondary text-theme-primary focus:border-[var(--icon-color)] focus:ring-2 focus:ring-[var(--icon-color)]/20 outline-none transition-all placeholder:text-theme-muted"
            placeholder="Your name"
          />
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="business" className="block text-sm font-medium mb-2">
            Business Name <span style={{ color: 'var(--accent)' }}>*</span>
          </label>
          <input
            type="text"
            id="business"
            name="business"
            required
            value={formData.business}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-theme bg-theme-secondary text-theme-primary focus:border-[var(--icon-color)] focus:ring-2 focus:ring-[var(--icon-color)]/20 outline-none transition-all placeholder:text-theme-muted"
            placeholder="Your business name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span style={{ color: 'var(--accent)' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-theme bg-theme-secondary text-theme-primary focus:border-[var(--icon-color)] focus:ring-2 focus:ring-[var(--icon-color)]/20 outline-none transition-all placeholder:text-theme-muted"
            placeholder="you@yourbusiness.com"
          />
        </div>

        {/* Phone (Optional) */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone <span className="text-theme-muted">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-theme bg-theme-secondary text-theme-primary focus:border-[var(--icon-color)] focus:ring-2 focus:ring-[var(--icon-color)]/20 outline-none transition-all placeholder:text-theme-muted"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            What&apos;s the biggest headache in your business right now? <span style={{ color: 'var(--accent)' }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-theme bg-theme-secondary text-theme-primary focus:border-[var(--icon-color)] focus:ring-2 focus:ring-[var(--icon-color)]/20 outline-none transition-all resize-none placeholder:text-theme-muted"
            placeholder="Tell me about the process that's driving you crazy, the reports you build by hand, or the thing you wish you could automate..."
          />
        </div>

        {/* Error Message */}
        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-lg border border-red-400/20">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            'Sending...'
          ) : (
            <>
              Send It Over
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

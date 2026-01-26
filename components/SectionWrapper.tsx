interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'card'
  narrow?: boolean
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  variant = 'primary',
  narrow = false,
}: SectionWrapperProps) {
  const variants = {
    primary: 'bg-theme-primary',
    secondary: 'bg-theme-secondary',
    card: 'bg-theme-card',
  }
  
  const containerWidth = narrow ? 'container-narrow' : 'container-wide'
  
  return (
    <section
      id={id}
      className={`section-padding ${variants[variant]} ${className}`}
    >
      <div className={containerWidth}>
        {children}
      </div>
    </section>
  )
}

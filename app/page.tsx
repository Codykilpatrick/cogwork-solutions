import SectionWrapper from '@/components/SectionWrapper'
import Button from '@/components/Button'
import { 
  LayoutDashboard, 
  Package, 
  Calendar, 
  FileText, 
  Users, 
  Wrench,
  MessageSquare,
  Hammer,
  CheckCircle,
  MapPin,
  MessageCircle,
  HeartHandshake,
  Shield,
  ExternalLink
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="bg-theme-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle cog background */}
        <div className="absolute inset-0 opacity-50">
          <div className="cog-pattern w-full h-full" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Custom Software That Actually Fits Your Business
            </h1>
            <p className="text-xl md:text-2xl text-theme-muted mb-8 leading-relaxed">
              I build simple, practical tools that solve real problems—dashboards, 
              tracking systems, automation—without the enterprise price tag.
            </p>
            <Button href="/contact" size="lg">
              Let&apos;s Talk About Your Project
            </Button>
          </div>
        </div>
        
        {/* Gradient fade to next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary))' }}
        />
      </section>

      {/* Problem / Solution Section */}
      <section 
        className="section-padding relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
      >
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              You&apos;ve Got a Process That&apos;s Held Together With Spreadsheets and Sticky Notes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-theme-muted">
                Every small business has that one thing—the inventory you&apos;re tracking in Excel, 
                the scheduling nightmare, the reports you&apos;re building by hand every week. You know 
                there&apos;s a better way, but custom software always seemed like something only big 
                companies could afford.
              </p>
              <p className="text-xl md:text-2xl font-heading font-semibold mb-6" style={{ color: 'var(--accent)' }}>
                It&apos;s not anymore.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-theme-muted">
                I sit down with you, learn how your business actually works, and build exactly 
                what you need. No bloated features you&apos;ll never use. No six-month timelines. 
                Just a tool that does the job and makes your life easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        className="section-padding relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)' }}
      >
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="text-center md:text-left">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                style={{ backgroundColor: 'color-mix(in srgb, var(--icon-color) 15%, transparent)' }}
              >
                <MessageSquare className="w-8 h-8" style={{ color: 'var(--icon-color)' }} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                Step 1: We Talk
              </h3>
              <p className="text-theme-muted leading-relaxed">
                You tell me what&apos;s slowing you down. I ask a lot of questions. 
                We figure out what would actually help—not what sounds cool, but what moves the needle.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center md:text-left">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                style={{ backgroundColor: 'color-mix(in srgb, var(--icon-color) 15%, transparent)' }}
              >
                <Hammer className="w-8 h-8" style={{ color: 'var(--icon-color)' }} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                Step 2: I Build It
              </h3>
              <p className="text-theme-muted leading-relaxed">
                I create a custom solution tailored to your workflow. You&apos;ll see progress 
                along the way and have input throughout—this is your tool, not mine.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center md:text-left">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                style={{ backgroundColor: 'color-mix(in srgb, var(--icon-color) 15%, transparent)' }}
              >
                <CheckCircle className="w-8 h-8" style={{ color: 'var(--icon-color)' }} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                Step 3: You Use It
              </h3>
              <p className="text-theme-muted leading-relaxed">
                Once it&apos;s ready, I&apos;ll make sure you&apos;re comfortable with it. And I stick around—hosting, 
                maintenance, and support are included so you&apos;re never left hanging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Can Build Section */}
      <section 
        className="section-padding relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}
      >
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What I Can Build
            </h2>
            <p className="text-lg text-theme-muted max-w-2xl mx-auto">
              Every business is different, so every project is different. 
              But here are some examples of what&apos;s possible:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: LayoutDashboard,
                title: 'Dashboards',
                description: 'See your key numbers in one place instead of digging through spreadsheets',
              },
              {
                icon: Package,
                title: 'Inventory & Asset Tracking',
                description: 'Know what you have, where it is, and when you need more',
              },
              {
                icon: Calendar,
                title: 'Scheduling Tools',
                description: 'Coordinate jobs, shifts, or appointments without the back-and-forth',
              },
              {
                icon: FileText,
                title: 'Reporting Automation',
                description: 'Stop building the same reports by hand every week',
              },
              {
                icon: Users,
                title: 'Customer & Job Tracking',
                description: 'Keep tabs on projects, clients, and follow-ups',
              },
              {
                icon: Wrench,
                title: 'Internal Tools',
                description: "That one thing your business needs that doesn't exist off the shelf",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-theme-card rounded-xl p-6 border border-theme hover:border-[var(--icon-color)] transition-colors"
              >
                <service.icon className="w-10 h-10 mb-4" strokeWidth={1.5} style={{ color: 'var(--icon-color)' }} />
                <h3 className="text-lg font-heading font-semibold mb-2">{service.title}</h3>
                <p className="text-theme-muted">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-theme-muted mb-6">
              Not sure if your idea is feasible? Reach out anyway. 
              Worst case, I&apos;ll tell you honestly if it&apos;s not a good fit.
            </p>
            <Button href="/contact" variant="secondary">
              Let&apos;s Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        className="section-padding relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-secondary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)' }}
      >
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Projects in the Wild
            </h2>
            <p className="text-lg text-theme-muted max-w-2xl mx-auto">
              Here&apos;s some of what I&apos;ve built for local businesses:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Summerduck Dragway Dashboard */}
            <div className="bg-theme-card rounded-xl p-6 border border-theme hover:border-[var(--icon-color)] transition-colors">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Summerduck Dragway Dashboard
              </h3>
              <p className="text-theme-muted mb-4 leading-relaxed">
                A racing analytics dashboard for a local dragway. Race results, driver stats, and performance data 
                were scattered across spreadsheets and paper records—now it&apos;s all in one place.
              </p>
              <a 
                href="https://summerduck-dashboard.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--accent)' }}
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Blue Ox Enterprises Scheduler */}
            <div className="bg-theme-card rounded-xl p-6 border border-theme hover:border-[var(--icon-color)] transition-colors">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Blue Ox Enterprises Scheduler
              </h3>
              <p className="text-theme-muted mb-4 leading-relaxed">
                A scheduling dashboard for a large landscape services business. Coordinating jobs meant constant texts and 
                phone calls—this tool puts everyone on the same page with a clear view of what&apos;s scheduled.
              </p>
              <a 
                href="https://blueox.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--accent)' }}
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Cardinal & Rye Inventory Tracker */}
            <div className="bg-theme-card rounded-xl p-6 border border-theme hover:border-[var(--icon-color)] transition-colors">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Cardinal & Rye Inventory Tracker
              </h3>
              <p className="text-theme-muted mb-4 leading-relaxed">
                An inventory tool for a craft cocktail bar. Tracking bottles and supplies was a mess of paper lists—now 
                they see what&apos;s in stock, what&apos;s running low, and generate order lists with one click.
              </p>
              <a 
                href="https://cardinal-and-rye.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--accent)' }}
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section 
        className="section-padding relative"
        style={{ background: 'linear-gradient(to bottom, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
      >
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Why Work With Me
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "I'm local.",
                description: "I'm not a faceless agency overseas. I'm here in Culpeper, Virginia, and I prefer to meet face-to-face. I want to understand your business, not just your requirements document.",
              },
              {
                icon: MessageCircle,
                title: 'I speak human.',
                description: "No jargon, no upselling, no making things complicated so you feel like you need me. I'll explain what I'm building and why in plain English.",
              },
              {
                icon: HeartHandshake,
                title: 'I stick around.',
                description: "This isn't a \"build it and disappear\" situation. Ongoing hosting and support means you've got someone to call when you need changes or something breaks.",
              },
              {
                icon: Shield,
                title: "I've done this before.",
                description: "I spent years as a software engineer building complex systems. Your dashboard isn't going to fall over—it's going to work.",
              },
            ].map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--icon-color) 15%, transparent)' }}
                  >
                    <reason.icon className="w-6 h-6" strokeWidth={1.5} style={{ color: 'var(--icon-color)' }} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{reason.title}</h3>
                  <p className="text-theme-muted leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
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
            Got a Problem That Needs Solving?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: 'var(--btn-text)', opacity: 0.9 }}>
            Tell me a little about your business and what&apos;s bugging you. 
            No commitment, no pressure—just a conversation to see if I can help.
          </p>
          <Button href="/contact" size="lg" variant="inverted">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  )
}

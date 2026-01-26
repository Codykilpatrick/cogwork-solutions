import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cogwork Solutions | Custom Software for Small Business',
  description: 'I build simple, practical tools that solve real problems—dashboards, tracking systems, automation—without the enterprise price tag.',
  keywords: 'custom software, small business software, dashboards, automation, tracking systems',
  openGraph: {
    title: 'Cogwork Solutions | Custom Software for Small Business',
    description: 'I build simple, practical tools that solve real problems—dashboards, tracking systems, automation—without the enterprise price tag.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('cogwork-theme');
                  if (theme === 'dark' || theme === 'warm') {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

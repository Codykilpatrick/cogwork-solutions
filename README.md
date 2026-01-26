# Cogwork Solutions Website

A custom software business website built with Next.js and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Forms:** Formspree integration
- **Deployment:** Static export (works with Netlify, Vercel, GitHub Pages, etc.)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create static export
npm run build

# The static site will be in the `out` directory
```

## Configuration

### Contact Form (Formspree)

The contact form uses Formspree for email submissions. To set it up:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the form endpoint URL
3. Update `components/ContactForm.tsx`:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```

### Customization Before Launch

1. **Update location:** In `app/page.tsx`, the "Why Work With Me" section mentions "your area". Update this to your actual service area.

2. **Update email:** In `components/Footer.tsx` and `app/contact/page.tsx`, update `hello@cogworksolutions.com` to your actual email.

3. **Formspree:** Replace `YOUR_FORM_ID` in `components/ContactForm.tsx` with your actual Formspree form ID.

## Project Structure

```
cogwork-solutions/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── about/
│   │   └── page.tsx         # About page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Button.tsx           # Reusable button component
│   ├── SectionWrapper.tsx   # Section layout wrapper
│   └── ContactForm.tsx      # Contact form with Formspree
├── tailwind.config.js       # Custom colors and fonts
└── next.config.js           # Static export configuration
```

## Color Palette

| Color    | Hex       | Usage                          |
|----------|-----------|--------------------------------|
| Bronze   | `#B87333` | Primary brand color, CTAs      |
| Charcoal | `#2D2D2D` | Text, dark backgrounds         |
| Cream    | `#F5F5F0` | Light backgrounds              |
| Steel    | `#5D7A8C` | Accent highlights (optional)   |

## Deployment

The site is configured for static export. Deploy the `out` directory to:

- **Netlify:** Drag and drop the `out` folder, or connect your Git repo
- **Vercel:** Connect your Git repo (works out of the box)
- **GitHub Pages:** Push the `out` contents to a `gh-pages` branch

## Future Additions

- Testimonials section (once projects are completed)
- Portfolio/case studies page
- Blog for SEO (optional)

## License

Private - All rights reserved.

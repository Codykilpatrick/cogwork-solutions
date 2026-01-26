/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Option A: Dark/Industrial
        slate: {
          DEFAULT: '#1A1D23',
          50: '#3A4049',
          100: '#2A2F38',
        },
        teal: {
          DEFAULT: '#00D9C0',
          50: '#E0FBF7',
          100: '#B3F5EC',
          200: '#66EBD9',
          300: '#1AE0C7',
          400: '#00D9C0',
          500: '#00B39E',
          600: '#008C7C',
          700: '#00665A',
          800: '#004039',
          900: '#001A17',
        },
        
        // Option B: Warm/Forest
        cream: {
          DEFAULT: '#FAF8F5',
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F0EDE8',
          300: '#E0DBD3',
        },
        forest: {
          DEFAULT: '#2D5A47',
          50: '#E8F0EC',
          100: '#D1E1D9',
          200: '#A3C3B3',
          300: '#75A58D',
          400: '#478767',
          500: '#2D5A47',
          600: '#244839',
          700: '#1B362B',
          800: '#12241D',
          900: '#09120E',
        },
        rust: {
          DEFAULT: '#C4704B',
          50: '#FAEFEA',
          100: '#F5DFD5',
          200: '#EBBFAB',
          300: '#E19F81',
          400: '#D78057',
          500: '#C4704B',
          600: '#9D593C',
          700: '#76432D',
          800: '#4F2C1E',
          900: '#28160F',
        },
        
        // Shared
        charcoal: {
          DEFAULT: '#2D2D2D',
          muted: '#6B6560',
        },
        offwhite: '#E8E8E8',
        muted: {
          cool: '#9CA3AF',
          warm: '#6B6560',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Barlow', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

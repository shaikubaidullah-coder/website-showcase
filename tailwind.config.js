/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF8F5',
          subtle: '#F3EFEA',
          bezel: '#F5F2EB',
        },
        ink: {
          primary: '#1B1B19',
          secondary: '#66645E',
          muted: '#8F8C84',
          faint: '#B5B2A8',
        },
        accent: {
          DEFAULT: '#2A5A44',
          hover: '#1E4332',
          subtle: '#EBF2ED',
          border: '#BCD4C4',
        },
        status: {
          live: '#10B981',
        }
      },
      fontFamily: {
        display: ['"Newsreader"', '"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Geist"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(27, 27, 25, 0.04), 0 1px 2px rgba(27, 27, 25, 0.02)',
        'card': '0 4px 12px rgba(27, 27, 25, 0.03), 0 1px 3px rgba(27, 27, 25, 0.02)',
        'card-hover': '0 16px 32px -8px rgba(27, 27, 25, 0.08), 0 4px 8px -2px rgba(27, 27, 25, 0.04)',
        'modal': '0 24px 48px -12px rgba(27, 27, 25, 0.2), 0 8px 16px -4px rgba(27, 27, 25, 0.1)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}

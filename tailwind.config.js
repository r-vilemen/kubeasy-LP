/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0B0E14',
        surface: {
          subtle: '#101520',
          elevated: '#161D2C',
          overlay: '#1D263B',
        },
        border: {
          subtle: '#1E2638',
          medium: '#2A364F',
          focus: '#38BDF8',
        },
        brand: {
          indigo: '#4F46E5',
          cyan: '#0284C7',
          sky: '#38BDF8',
          blue: '#2563EB',
        },
        status: {
          ok: '#059669',
          warn: '#D97706',
          error: '#DC2626',
          gov: '#7C3AED',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'panel': '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
        'console': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

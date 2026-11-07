/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#090D16',
        surface: {
          subtle: '#0E1424',
          elevated: '#151E34',
          overlay: '#1C2642',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.16)',
          focus: 'rgba(99, 102, 241, 0.5)',
        },
        brand: {
          indigo: '#6366F1',
          cyan: '#38BDF8',
          blue: '#3B82F6',
        },
        status: {
          ok: '#10B981',
          warn: '#F59E0B',
          error: '#EF4444',
          gov: '#8B5CF6',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.25)',
        'glow-cyan': '0 0 35px -5px rgba(56, 189, 248, 0.25)',
        'glow-error': '0 0 35px -5px rgba(239, 68, 68, 0.25)',
        'console': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

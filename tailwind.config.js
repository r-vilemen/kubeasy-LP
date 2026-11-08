/** @type {import('tailwindcss').Config} */
// Cores = tokens semânticos do front do produto (src/styles/tokens.css). Tema claro (laudo) é o padrão.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--kb-bg)",
        surface: "var(--kb-surface)",
        fg: "var(--kb-fg)",
        muted: "var(--kb-fg-muted)",
        line: "var(--kb-border)",
        brand: "var(--kb-brand)",
        "brand-fg": "var(--kb-brand-fg)",
        "brand-soft": "var(--kb-brand-soft)",
        ok: "var(--kb-ok)",
        "ok-soft": "var(--kb-ok-soft)",
        warn: "var(--kb-warn)",
        "warn-soft": "var(--kb-warn-soft)",
        critical: "var(--kb-critical)",
        "critical-soft": "var(--kb-critical-soft)",
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        sans: ["Instrument Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: { tile: "12px" },
      transitionTimingFunction: { trilha: "cubic-bezier(0.2, 0, 0, 1)" },
    },
  },
  plugins: [],
};

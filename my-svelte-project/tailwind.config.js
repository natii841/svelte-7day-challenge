/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        "bg-dark": "hsl(var(--bg-dark))",
        "bg-light": "hsl(var(--bg-light))",
        text: "hsl(var(--text))",
        "text-muted": "hsl(var(--text-muted))",
        highlight: "hsl(var(--highlight))",
        border: "hsl(var(--border))",
        "border-muted": "hsl(var(--border-muted))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        danger: "hsl(var(--danger))",
        warning: "hsl(var(--warning))",
        success: "hsl(var(--success))",
        info: "hsl(var(--info))",
      },
    },
  },
  plugins: [],
};
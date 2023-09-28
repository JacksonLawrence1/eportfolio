import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          1: "rgb(var(--color-accent-1) / <alpha-value>)",
          2: "rgb(var(--color-accent-2) / <alpha-value>)",
        },
        bkg1: "rgb(var(--color-bkg1) / <alpha-value>)",
        bkg2: "rgb(var(--color-bkg2) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-seconday) / <alpha-value>)",
      }
    }
  },
  plugins: [],
}
export default config

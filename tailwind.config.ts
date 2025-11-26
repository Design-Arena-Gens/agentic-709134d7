import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aurelia-gold': '#D4AF37',
        'aurelia-champagne': '#F7E7CE',
        'aurelia-noir': '#0A0A0A',
        'aurelia-pearl': '#FEFEFE',
        'aurelia-rose': '#E8C4C4',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

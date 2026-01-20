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
        retro: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          border: '#33ff33',
          green: '#33ff33',
          amber: '#ffb000',
          cyan: '#00ffff',
          pink: '#ff00ff',
          text: '#e0e0e0',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        retro: '0 0 10px rgba(51, 255, 51, 0.5)',
        retroAmber: '0 0 10px rgba(255, 176, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config

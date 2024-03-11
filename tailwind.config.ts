import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#333333'
      },
      backgroundColor: {
        background: '#f2f2f2',
        primary: '#526cff',
        hoverPrimary: '#2b4bff'
      },
      borderColor: {
        primary: '#cfcfcf',
        hoverPrimary: '#2b4bff'
      }
    }
  },
  plugins: [require('@midudev/tailwind-animations')]
}
export default config

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
        hoverPrimary: '#4762fc'
      },
      borderColor: {
        primary: '#cfcfcf',
        hoverPrimary: '#4762fc'
      }
    }
  },
  plugins: [require('@midudev/tailwind-animations')]
}
export default config

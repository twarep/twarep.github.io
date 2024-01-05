import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'lg': '1024px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      },
      colors: {
        'purple-light': '#8D78FF',
        'purple': '#6B5DE0', // nice blue: #3e63b0
        'purple-dark': '#5246BF',
        'white': '#FFFFFF',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}
export default config

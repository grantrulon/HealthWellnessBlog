import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            h3: {
              // fontFamily: ['Roboto', 'sans-serif'],
              fontSize: '1.17em',
            },
            p: {
              // fontFamily: ['Montserrat', 'sans-serif'],
            },
          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config

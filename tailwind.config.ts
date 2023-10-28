import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sec: '#6C45E1',
        black1: '#1E1E1E'
      },
      fontFamily: {
        darker: ["'Darker Grotesque', sans-serif"],
        inter: ["'Inter' , sans-serif"],
        mont: ["'Montserrat' , sans-serif"]
      }
    },
    maxWidth: {
      '6xl': '1124px'
    }
  },
  plugins: [],
}
export default config

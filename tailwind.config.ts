import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
     colors: {
      deepPurple: '#8257e6'
     }
    },
  },
  plugins: [],
}
export default config

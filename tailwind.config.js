const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './docs/.vitepress/**/*.{vue,js,ts,jsx,tsx}',

    // When consuming apps use the library's Tailwind config, we'll include the library in the purge
    './node_modules/@ais-public/ais-components/src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  // darkMode: false,
  theme: {
    extend: {
      colors: {
        ui: {
          gold: '#FFCD00',            // UIDS primary
          aqua: '#00A9E0',            // UIDS print variants
          seafoam: '#00AF66',
          orange: '#FF8200',
        },
        'ui-gray': {
          50: '#F3F3F3',              // UIDS $light
          100: '#CACACA',             // UIDS $grey-light
          DEFAULT: '#737373',         // UIDS $grey
          cool: '#63666A',            // UIDS $brand-cool-gray
          900: '#151515',             // UIDS $secondary
        },
        default: {
          DEFAULT: '#63666A',
          separator: '#CACACA',
        },
        info: {                       // UIDS variants
          DEFAULT: '#00558C',
          light: '#F2FAFF',
        },
        success: {
          DEFAULT: '#00664F',
          light: '#EBFFFA',
        },
        warning: {
          DEFAULT: '#FFCD00',
          light: '#FFFAE5',
        },
        danger: {
          DEFAULT: '#BD472A',
          light: '#FBEEEB',
        },
        primary: {
          DEFAULT: '#FFCD00',
        },
        secondary: {
          DEFAULT: '#151515',
        },
      },
      flexGrow: {
        '2': 2
      },
      scale: {
        '98': '.98',
        '99': '.99',
        '101': '1.01',
        '102': '1.02'
      },
    },
  },
  plugins: [],
}

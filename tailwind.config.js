/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      '4xs': '280px',
      // => @media (min-width: 280px) { ... }
      '3.5xs': '320px',
      // => @media (min-width: 320px) { ... }
      '3xs': '375px',
      // => @media (min-width: 375px) { ... }
      '2xs': '414px',
      // => @media (min-width: 414px) { ... }
      xs: '520px',
      // => @media (min-width: 414px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      sm2: '724px',
      // => @media (min-width: 724px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      md2: '896px',
      // => @media (min-width: 896px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      lg2: '1158px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '1.5xl': '1348px',
      // => @media (min-width: 1348px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1820px'
      // => @media (min-width: 1820px) { ... }
    },
    extend: {
    },
  },
  plugins: [],
}


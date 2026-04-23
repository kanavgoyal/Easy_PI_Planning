module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#330066',
          dark: '#1a0033',
        },
        turquoise: {
          DEFAULT: '#00d4c8',
          light: '#e0faf9',
        },
        meteor: {
          DEFAULT: '#7c3aed',
          light: '#f3eeff',
        },
        flamingo: {
          DEFAULT: '#ff6b6b',
          light: '#f0e8ff',
        },
        'deep-violet': '#1a0040',
        'dark-grey': '#2d2d3a',
        'mid-grey': '#6b7280',
        'light-grey': '#f3f4f6',
        'background-grey': '#f8f7ff',
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

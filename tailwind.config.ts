import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
        libre: ['Libre', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          DEFAULT: '#153564', // Berkeley Blue
          light: '#2FA4D6', // Cerulean Light
          dark: '#0F2A47', // Berkeley Blue Dark
        },
        accent: {
          DEFAULT: '#D64933', // Chili Red
          light: '#FF6F50', // Red Light
          dark: '#B23328', // Dark Red
        },
        neutral: {
          light: '#F7F8F4', // Baby Powder
          DEFAULT: '#E0E0E0', // Light Gray
          dark: '#9E9E9E', // Dark Gray
        },
        complementary: {
          amber: '#FFC107', // Amber
          green: '#4CAF50', // Green
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
    require('preline/plugin'),
  ],
  daisyui: {
    themes: ['light', 'dark'], // Aktifkan tema light dan dark
  },
} satisfies Config;

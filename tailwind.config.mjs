import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: { color: theme('colors.accent.600'), '&:hover': { color: theme('colors.accent.700') } },
            h2: { color: theme('colors.primary.900') },
            h3: { color: theme('colors.primary.800') },
          },
        },
        invert: {
          css: {
            a: { color: theme('colors.accent.400'), '&:hover': { color: theme('colors.accent.300') } },
            h2: { color: theme('colors.primary.100') },
            h3: { color: theme('colors.primary.200') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

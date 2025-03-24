import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
       'primary-soft': '#E0F2F1', // Soft green
       'secondary-calm': '#E3F2FD', // Calming blue
       'neutral-light': '#FAFAFA', // Light neutral
       'neutral-medium': '#F5F5F5', // Medium neutral
       'neutral-dark': '#E0E0E0',  // Dark neutral
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      layout: {
        disableTransitionOnChange: true
      }
    })
  ],
};

export default config;

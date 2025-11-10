/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          page: '#F5EFE6',
          text: '#3B2210',
          bg: '#fff',
          surface: '#fff',
          muted: '#8D6748',
          border: '#E5D3B3',
          accent: '#BFA181',
          accent2: '#8D6748',
          navBg: '#fff',
          navLink: '#8D6748',
          navLinkActiveBg: '#F5EFE6',
          navLinkActiveFg: '#8D6748',
          inputBg: '#F5EFE6',
          chipBg: '#F5EFE6',
          chipFg: '#8D6748',
        },
        // Dark theme colors
        dark: {
          page: '#2D2217',
          text: '#F5EFE6',
          bg: '#3B2C1A',
          surface: '#3B2C1A',
          muted: '#BFA181',
          border: '#8D6748',
          accent: '#BFA181',
          accent2: '#F5EFE6',
          navBg: '#2D2217',
          navLink: '#F5EFE6',
          navLinkActiveBg: '#8D6748',
          navLinkActiveFg: '#fff',
          inputBg: '#3B2C1A',
          chipBg: '#8D6748',
          chipFg: '#fff',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        light: '0 8px 24px rgba(141, 103, 72, 0.08)',
        dark: '0 12px 30px rgba(141, 103, 72, 0.18)',
      },
      borderRadius: {
        custom: '16px',
      },
      animation: {
        slideDown: 'slideDown 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        slideDown: {
          from: {
            transform: 'translateY(-40px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [],
}

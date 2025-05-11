/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-subtle': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 255, 255, 0.3)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-dark': '#1d4ed8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),  
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ]
}

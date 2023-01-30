/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./public/**/*.html",
    "./app/**/*.{ts,tsx}",
  ],
  plugins: ["./node_modules/flowbite-react/plugin.js"],

}

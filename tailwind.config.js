/** @type {import('tailwindcss').Config} */
export default {
  content: [],content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'cinzel': ['Cinzel', 'serif'],
    },
    extend: {
      backgroundImage: {
        'chef-service': "url('./src/assets/home/chef-service.jpg')",
        'featured': "url('./src/assets/home/featured.jpg')",
      }
    },
  },
  plugins: [],
}


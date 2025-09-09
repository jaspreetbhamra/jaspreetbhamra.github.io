export default {
  darkMode: 'class', // <- this line is critical
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

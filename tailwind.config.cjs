module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.html'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false, // Disable the default container class
  },
}

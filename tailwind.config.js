module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Calibri']
      },
      colors: {
        gray: {
          100: '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          800: '#252836',
          900: '#1F1D2B',
        },
        primary: '#D13838',
        'dark-primary': '#AD2727',
        'white-o5': 'rgba(255, 255, 255, 0.1)'
      },
      boxShadow: {
        // primary: '0px 8ppx 24px rgba(209, 56, 56, 0.32)'
        primary: '0px 0px 16px rgba(209, 56, 56, .32)',
        'inverse-top' : '4px 4px 0 #252836',
        'inverse-bottom' : '4px -4px 0 #252836',
      }
    },
  },
  plugins: [
      require('@themesberg/flowbite/plugin')
  ]
}

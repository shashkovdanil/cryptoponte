/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'black-fade':
          'linear-gradient(0, #000 -6.92%, rgba(0, 0, 0, 0) 73.43%)',
        'blue-gradient': 'linear-gradient(45deg,#006 -4.2%,#06c 77.45%)',
        'green-gradient':
          'linear-gradient(62.2deg, #005e4c -20.2%, #99cc00 108.25%)',
        'orange-gradient':
          'linear-gradient(75.26deg, #ff471c -69.91%, #fffb29 198.14%)',
      },
      colors: {
        brand: 'oklch(72.39% 0.18565642419878006 48.24539146989283)',
        'bright-orange': 'oklch(66.28% 0.22592705258414092 33.735245804902874)',
        'deep-teal': 'oklch(42.98% 0.08198346830456493 173.71755838923374)',
        'gray-section': 'oklch(21.78% 0 0)',
        'lemon-yellow': 'oklch(96.04% 0.2 108.43)',
        'lime-green': 'oklch(78.03% 0.1977595095503204 125.6667253530711)',
        'midnight-blue': 'oklch(23.07% 0.1598265153694778 264.05202063805507)',
        'sky-blue': 'oklch(52.2% 0.177 255.83)',
      },
    },
  },
}

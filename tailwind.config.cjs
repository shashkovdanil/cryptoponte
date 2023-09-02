/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'bright-orange': 'oklch(66.28% 0.22592705258414092 33.735245804902874)',
        'deep-teal': 'oklch(42.98% 0.08198346830456493 173.71755838923374)',
        'lemon-yellow': 'oklch(96.04% 0.2 108.43)',
        'lime-green': 'oklch(78.03% 0.1977595095503204 125.6667253530711)',
        'midnight-blue': 'oklch(23.07% 0.1598265153694778 264.05202063805507)',
        'sky-blue': 'oklch(52.2% 0.177 255.83)',
      },
    },
  },
}

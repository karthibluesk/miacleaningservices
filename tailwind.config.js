/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}', './data/**/*.{ts,json}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFF8EF',
        cream: '#FFFDF8',
        teal: '#7BCDC8',
        sky: '#BFE5F6',
        mint: '#DDF6EC',
        sage: '#89A99B',
        pink: '#EC5E95',
        blush: '#FFEAF3',
        rose: '#F8A9C8',
        charcoal: '#273238',
        soft: '#F4F7F5'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(236, 94, 149, 0.20)'
      }
    }
  },
  plugins: []
};

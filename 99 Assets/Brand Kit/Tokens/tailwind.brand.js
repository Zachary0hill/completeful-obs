/** Completeful brand tokens for Tailwind.
 *  Merge into theme.extend of your tailwind.config.js. */
module.exports = {
  colors: {
    completeful: {
      pink: '#ED128C',
      pinkDeep: '#C4106A',
      orange: '#FF6B35',
      navy: '#34424E',
      blush: '#E2C2C4',
      white: '#FFFFFF',
      lavender: '#F3F0FF',
      peach: '#FFF4F0',
      mint: '#F0FFF7',
      coral: '#FFE8E8',
    },
    pink: {
      50: '#FDF2F8', 100: '#FCE7F3', 200: '#FBCFE8', 300: '#F9A8D4', 400: '#F472B6',
      500: '#ED128C', 600: '#DB2777', 700: '#BE185D', 800: '#9D174D', 900: '#831843',
    },
    neutral: {
      50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB', 400: '#9CA3AF',
      500: '#6B7280', 600: '#4B5563', 700: '#374151', 800: '#1F2937', 900: '#111827',
    },
  },
  fontFamily: {
    heading: ['Owners', 'Archivo', 'sans-serif'],
    body: ['Inter', 'Work Sans', 'system-ui', 'sans-serif'],
  },
  backgroundImage: {
    'gradient-pink-orange': 'linear-gradient(135deg, #FF2B92 0%, #FF8433 100%)',
    'gradient-pink-orange-hover': 'linear-gradient(135deg, #E00072 0%, #D63501 100%)',
  },
  borderRadius: { xl: '1rem', '2xl': '1.5rem', '3xl': '2rem' },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      screens: {
        sm: '640px', // Small screens (e.g., smartphones)
        md: '768px', // Medium screens (e.g., tablets)
        lg: '1024px', // Large screens (e.g., laptops)
        xl: '1280px' // Extra-large screens (e.g., desktops)
      },
      spacing: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px'
      },
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px'
      },
      colors: {
        primary: '#007BFF',
        secondary: '#6C757D',
        success: '#28A745',
        error: '#DC3545'
      }
    }
  },
  plugins: []
}

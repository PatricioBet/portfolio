/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilitar modo oscuro basado en clase
  theme: {
    extend: {
      colors: {
        // Light mode
        'background': '#f8f9fa',
        'foreground': '#212529',
        'primary': '#007bff',
        'card': '#ffffff',
        'card-foreground': '#343a40',
        // Dark mode
        'dark-background': '#121212',
        'dark-foreground': '#e0e0e0',
        'dark-primary': '#3b82f6',
        'dark-card': '#1e1e1e',
        'dark-card-foreground': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
      },
      animation: {
        'fade-in': 'fade-in 1s ease forwards',
  'fade-in-delay-1': 'fade-in 1s ease forwards 0.2s',
  'fade-in-delay-2': 'fade-in 1s ease forwards 0.4s',
  'fade-in-delay-3': 'fade-in 1s ease forwards 0.6s',
  'fade-in-delay-4': 'fade-in 1s ease forwards 0.8s',
        'meteor': 'meteor 4s linear infinite', // 🟢 this line is missing in your config
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      'flower-float': 'flower-float 10s linear infinite', 
      'glow': "glow 1.6s ease-in-out infinite",
      },
      keyframes: {
         'fade-in': {
    '0%': {
      opacity: '0',
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
        'meteor': {
          '0%': {
            transform: 'rotate(215deg) translateX(0)',
            opacity: '1',
          },
          '70%': {
            opacity: '1',
          },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        'pulse-subtle': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        'flower-float': {
      '0%': { transform: 'translateY(0)', opacity: '1' },
      '100%': { transform: 'translateY(100vh)', opacity: '0' },
    },
    'glow': {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(99,102,241,0.7)" },      // start/finish
          "50%":      { boxShadow: "0 0 12px 4px rgba(99,102,241,0.9)" },   // mid‑pulse
        },
        
      },
   
    },
  },
  plugins: [],
};

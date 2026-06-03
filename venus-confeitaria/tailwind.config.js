/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Criando o pulinho sutil
      keyframes: {
        pulinhoSutil: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }, // Subida discreta de só 4px (o padrão do bounce é 10px!)
        }
      },
      animation: {
        // 'pulinho-lento': 'pulinhoSutil 2s infinite', // Um pulo calmo a cada 2 segundos
        // 'pulinho-vivo': 'pulinhoSutil 0.6s ease-in-out infinite', // Um pulo mais animado a cada 0.6 segundos
        'pulinho-alegre': 'pulinhoSutil 0.4s ease-in-out infinite', // Um pulo mais rápido e alegre a cada 0.4 segundos
      }
    },
  },
  plugins: [],
}
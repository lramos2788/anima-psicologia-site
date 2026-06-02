import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        // Paleta Institucional Premium ANIMA
        marfim: '#F2E9DF',     // Fundo principal (respiro)
        bege: '#E5D3BD',       // Fundo secundário (cards e blocos)
        madeira: '#6B4E3D',    // Identidade primária (botões e logo)
        grafite: '#3A2A22',    // Textos (autoridade sem agressividade)
        dourado: '#C29A6B',    // Detalhes premium (linhas, hovers)
        
        // Mapeamento padrão do shadcn/ui para as novas cores
        background: '#F2E9DF', 
        foreground: '#3A2A22', 
        primary: {
          DEFAULT: '#6B4E3D',
          foreground: '#F2E9DF',
        },
        secondary: {
          DEFAULT: '#E5D3BD',
          foreground: '#3A2A22',
        },
        accent: {
          DEFAULT: '#C29A6B',
          foreground: '#3A2A22',
        },
        muted: {
          DEFAULT: '#E5D3BD',
          foreground: '#6B4E3D',
        },
        border: '#E5D3BD',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;